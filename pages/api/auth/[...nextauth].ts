import NextAuth, { DefaultProfile } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
// import GoogleProvider from "next-auth/providers/google"
import TwitterProvider from 'next-auth/providers/twitter'

import prisma from '@lib/prisma'

interface DebuturProfile extends DefaultProfile {
  login: string
}

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
    signIn: '/user/login',
    // signOut: '/auth/signout', // Displays form with sign out button
    // error: '/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // Used for check email page
    // newUser: null // If set, new users will be directed here on first sign in
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }: any) {
      console.log(user)
      console.log(profile)
      console.log(account)

      const DebuturUser = await prisma.profile.findUnique({
        where: {
          email: profile.email!,
        },
      })

      if (!DebuturUser) {
        try {
          await prisma.profile.create({
            data: {
              login:
                profile.login === undefined
                  ? profile.screen_name.toLowerCase()
                  : profile.login.toLowerCase(),
              avatar_url:
                profile.avatar_url === undefined
                  ? user.image
                  : profile.avatar_url,
              name: profile.name,
              email: profile.email!,
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
    // async jwt({ token, user, account, profile, isNewUser }) { return token }
  },
  events: {},
  debug: false,
})
