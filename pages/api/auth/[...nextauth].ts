import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import TwitterProvider from '@lib/twitter'

import prisma from '@lib/prisma'

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      // @ts-ignore
      scope: 'read:user',
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_ID,
      clientSecret: process.env.TWITTER_SECRET,
      version: '2.0',
    }),
  ],
  secret: process.env.SECRET,
  session: {
    strategy: 'jwt',
  },
  jwt: {
    secret: process.env.SECRET,
  },
  pages: {
    signIn: '/',
    // signOut: '/auth/signout', // Displays form with sign out button
    // error: '/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // Used for check email page
    // newUser: null // If set, new users will be directed here on first sign in
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }: any) {
      const login =
        profile.login === undefined
          ? profile.data.username.toLowerCase()
          : profile.login.toLowerCase()

      const DebuturUser = await prisma.profile.findUnique({
        where: {
          login: login,
        },
      })

      if (!DebuturUser) {
        try {
          await prisma.profile.create({
            data: {
              login: login,
              avatar_url:
                profile.avatar_url === undefined
                  ? user.image!
                  : profile.avatar_url,
              name: profile.name,
              bio:
                profile.bio === undefined ? profile.description : profile.bio,
            },
          })

          return true
        } catch (error) {
          console.log(error)
          return false
        }
      }

      return true
    },
    // async redirect({ url, baseUrl }) { return baseUrl },
    // async session({ session, token, user }) { return session },
  },
  events: {},
  debug: false,
})
