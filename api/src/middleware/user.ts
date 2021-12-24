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
  console.log(req.isAuthenticated)
})

userRouter.put('/:username/edit', async (req: any, res) => {
  if (!req.isAuthenticated()) return

  const updatedUser = await prisma.user.update({
    where: {
      username: req.params.username,
    },
    data: {
      avatar: req.body.avatar,
      name: req.body.name,
      about: req.body.bio,
      theme: req.body.theme,
    },
  })

  if (!updatedUser) return res.status(404)
  res.send(req.body)
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
    failureRedirect: '/failure/',
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
    failureRedirect: '/failure/',
  })
)

userRouter.get('/twitter', passport.authenticate('twitter'))

userRouter.get(
  '/twitter/callback',
  passport.authenticate('twitter', {
    successRedirect: '/api/',
    failureRedirect: '/failure/',
  })
)

export default userRouter
