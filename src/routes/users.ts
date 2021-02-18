import express from 'express'
export const usersRouter = express.Router()

import bcrypt from 'bcryptjs'

import passport from 'passport'

import { User } from './../models/User.js'

import { forwardAuthenticated } from './../config/auth.js'

usersRouter.get('/login', forwardAuthenticated, (req, res) => {
	res.render('login')
})

usersRouter.get('/register', forwardAuthenticated, (req, res) => {
	res.render('register')
})

interface usr {
	name: string
	email: string
	password: string
	avatar: string
	about: string
	links: string
	date: Date
}

interface error {
	msg: string
}

usersRouter.post('/register', (req, res) => {
	const { avatar, displayName, name, email, password, password2 } = req.body
	let errors: error[] = []

	if (!name || !email || !password || !password2) {
		errors.push({ msg: 'Please enter all fields!' })
	}

	if (password != password2) {
		errors.push({ msg: 'Passwords do not match!' })
	}

	if (/\s/.test(name)) {
		errors.push({ msg: 'Your username must not include spaces!' })
	}

	if (!name === name.toLowerCase()) {
		errors.push({ msg: 'Your name must be all lower case!' })
	}

	if (password.length < 6) {
		errors.push({ msg: 'Password must be at least 6 characters!' })
	}

	if (errors.length > 0) {
		res.render('register', {
			errors,
			avatar,
			displayName,
			name,
			email,
			password,
			password2,
		})
	} else {
		User.findOne({ name: name }).then((user: usr) => {
			if (user) {
				errors.push({ msg: 'Name already exists!' })
				res.render('register', {
					errors,
					avatar,
					displayName,
					name,
					email,
					password,
					password2,
				})
			} else {
				User.findOne({ email: email }).then((user: usr) => {
					if (user) {
						errors.push({
							msg: 'Email is already registered on another account!',
						})
						res.render('register', {
							errors,
							avatar,
							displayName,
							name,
							email,
							password,
							password2,
						})
					} else {
						const newUser: any = new User({
							avatar,
							displayName,
							name,
							email,
							password,
						})

						bcrypt.genSalt(10, (err, salt) => {
							bcrypt.hash(newUser.password, salt, (err, hash) => {
								if (err) throw err
								newUser.password = hash
								newUser.save().then((user: usr) => {
									res.redirect('/users/login')
								})
							})
						})
					}
				})
			}
		})
	}
})

usersRouter.get('/dashboard', (req: any, res) => {
	if (req.user) {
		res.redirect(`/${req.user.name}`)
	} else res.redirect('/')
})

usersRouter.post('/login', (req, res, next) => {
	passport.authenticate('local', {
		successRedirect: '/users/dashboard',
		failureRedirect: '/users/login',
		failureFlash: true,
	})(req, res, next)
})

usersRouter.get('/logout', (req, res) => {
	req.logout()
	req.flash('success_msg', 'You are logged out!')
	res.redirect('/users/login')
})
