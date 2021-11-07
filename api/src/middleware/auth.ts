import passport, { Profile } from 'passport'

import prisma from '../database.js'
import { User } from '@prisma/client'

import {
  Strategy as GoogleStrategy,
  VerifyCallback,
} from 'passport-google-oauth20'
import generateUsername from '../utils/generateUsername.js'

import { Strategy as GitHubStrategy } from 'passport-github2'
import { Strategy as TwitterStrategy } from 'passport-twitter'

interface Google extends Profile {
  id: string
  displayName: string
  _json: {
    picture: string
    email: string
  }
}

interface GitHub {
  id: number
  username: string
  _json: {
    name: string
    email: string
    bio: string
    avatar_url: string
  }
}

interface Twitter {
  id: number
  username: string
  _json: {
    name: string
    email: string
    description: string
    profile_image_url_https: string
  }
}

export const GoogleAuthCallback = async (
  accessToken: string,
  refreshToken: string,
  profile: any,
  done: VerifyCallback
) => {
  try {
    console.log(profile.id)

    const user = await prisma.user.findUnique({
      where: {
        id: profile.id,
      },
    })

    if (user) return done(null, user)

    const newUser = await prisma.user.create({
      data: {
        id: profile.id,
        username: generateUsername(profile._json.email),
        email: profile._json.email,
        name: profile.displayName,
        about: 'Hi! Welcome to your new Debutur profile.',
        theme: 'light',
        avatar: profile._json.picture,
      },
    })

    return done(null, newUser)
  } catch (err) {
    console.log(err)
  }
}

export const GitHubAuthCallback = async (
  accessToken: string,
  refreshToken: string,
  profile: GitHub,
  done: VerifyCallback
) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: profile.id.toString(),
      },
    })

    if (user) return done(null, user)

    const newUser = await prisma.user.create({
      data: {
        id: profile.id.toString(),
        username: profile.username!,
        email: profile._json.email,
        name: profile._json.name,
        about: profile._json.bio,
        theme: 'light',
        avatar: profile._json.avatar_url,
      },
    })

    return done(null, newUser)
  } catch (err) {
    console.log(err)
    return done(new Error('Failed!'), false)
  }
}

export const TwitterAuthCallback = async (
  accessToken: string,
  refreshToken: string,
  profile: Twitter,
  done: VerifyCallback
) => {
  try {
    console.log(profile)

    const user = await prisma.user.findUnique({
      where: {
        id: profile.id.toString(),
      },
    })

    if (user) return done(null, user)

    const newUser = await prisma.user.create({
      data: {
        id: profile.id.toString(),
        username: profile.username,
        email: profile._json.email,
        name: profile._json.name,
        about: profile._json.description,
        theme: 'light',
        avatar: profile._json.profile_image_url_https,
      },
    })

    return done(null, newUser)
  } catch (err) {
    console.log(err)
    return done(new Error('Failed!'), false)
  }
}

passport.use(
  'google',
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: '/api/user/auth/google/callback',
    },
    // @ts-ignore
    GoogleAuthCallback
  )
)

passport.use(
  'github',
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: '/api/user/auth/github/callback',
    },
    GitHubAuthCallback
  )
)

passport.use(
  'twitter',
  // @ts-ignore
  new TwitterStrategy(
    {
      consumerKey: process.env.TWITTER_CONSUMER_KEY,
      consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
      includeEmail: true,
      callbackURL: '/api/user/auth/twitter/callback',
    },
    TwitterAuthCallback
  )
)

passport.serializeUser((user, done) => done(null, user))
passport.deserializeUser((user: User, done) => done(null, user))
