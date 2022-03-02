import NextAuth, { DefaultProfile } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
// import GoogleProvider from "next-auth/providers/google"
import TwitterProvider from 'next-auth/providers/twitter'

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
    async signIn({ user, account, profile, email, credentials }) {
      const DebuturUser = await prisma.profile.findUnique({
        where: {
          email: profile.email!,
        },
      })

      if (!DebuturUser) {
        try {
          if (profile.screen_name !== undefined) {
            if (
              typeof profile.screen_name === 'string' &&
              typeof profile.login === 'string' &&
              typeof profile.avatar_url === 'string' &&
              typeof profile.description === 'string' &&
              typeof profile.bio === 'string'
            ) {
              await prisma.profile.create({
                data: {
                  login:
                    profile.login === undefined
                      ? profile.screen_name.toLowerCase()
                      : profile.login.toLowerCase(),
                  avatar_url:
                    profile.avatar_url === undefined
                      ? user.image!
                      : profile.avatar_url,
                  name: profile.name,
                  email: profile.email!,
                  bio:
                    profile.bio === undefined
                      ? profile.description
                      : profile.bio,
                },
              })
            }
          }

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
    async jwt({ token, user, account, profile, isNewUser }) {
      const DebuturUser = await prisma.profile.findUnique({
        where: {
          email: token.email!,
        },
      })

      token.sub = DebuturUser!.login

      return token
    },
  },
  events: {},
  debug: false,
})
