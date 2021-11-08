import express from 'express'
const userRouter = express.Router()

import passport from 'passport'
import prisma from '../database.js'

userRouter.get('/', (req: any, res) => {
  res.redirect('http://localhost:3000/' + req.user.username)
})

userRouter.get('/:username', async (req: any, res) => {
  const user = await prisma.user.findUnique({
    where: {
      username: req.params.username,
    },
  })

  if (!user) return res.status(404)
  res.send(user)
})

userRouter.get(
  '/github',
  passport.authenticate('github', {
    scope: ['user:email'],
  })
)

userRouter.get(
  '/github/callback',
  passport.authenticate('github', {
    successRedirect: `/api/user/auth/`,
    failureRedirect: '/auth/github/failure',
  })
)

userRouter.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
)

userRouter.get(
  '/google/callback',
  passport.authenticate('google', {
    successRedirect: '/api/',
    failureRedirect: '/auth/google/failure',
  })
)

userRouter.get('/twitter', passport.authenticate('twitter'))

userRouter.get(
  '/twitter/callback',
  passport.authenticate('twitter', {
    successRedirect: '/api/',
    failureRedirect: '/auth/twitter/failure',
  })
)

export default userRouter
