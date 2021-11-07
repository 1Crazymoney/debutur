import express from 'express'
const app = express()

import path from 'path'

import * as dotenv from 'dotenv'
dotenv.config()

import passport from 'passport'

import rateLimit from 'express-rate-limit'
import session from 'express-session'
import morgan from 'morgan'
import xss from 'xss-clean'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import helmet from 'helmet'

app.use(
  '/api/',
  rateLimit({
    windowMs: 25 * 60 * 1000,
    max: 500,
  })
)

app.use(helmet())
app.use(
  cors({
    credentials: true,
  })
)
app.use(morgan('dev'))
app.use(xss())
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ limit: '10kb' }))
app.use(session({ secret: 'secret' }))

import './middleware/auth.js'
app.use(passport.initialize())
app.use(passport.session())

app.get(
  '/api/user/auth/github',
  passport.authenticate('github', {
    scope: ['user:email'],
  })
)

app.get(
  '/api/user/auth/github/callback',
  passport.authenticate('github', {
    successRedirect: '/api/test',
    failureRedirect: '/auth/github/failure',
  })
)

app.get(
  '/api/user/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
)

app.get(
  '/api/user/auth/google/callback',
  passport.authenticate('google', {
    successRedirect: '/api/',
    failureRedirect: '/auth/google/failure',
  })
)

app.get('/api/user/auth/twitter', passport.authenticate('twitter'))

app.get(
  '/api/user/auth/twitter/callback',
  passport.authenticate('twitter', {
    successRedirect: '/api/',
    failureRedirect: '/auth/twitter/failure',
  })
)

const PORT = process.env.PORT || 3001
const server = app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}/`)
)
