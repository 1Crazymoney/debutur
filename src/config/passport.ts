import PassportLocal from 'passport-local'
import bcrypt from 'bcryptjs'

const LocalStrategy = PassportLocal.Strategy

import { User } from '../models/User.js'

interface usr {
	id: string
	name: string
	email: string
	password: string
	avatar: string
	about: string
	links: string
	date: Date
}

export default function configPassport(passport: any) {
	passport.use(
		new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
			User.findOne({
				email: email,
			}).then((user: usr) => {
				if (!user) {
					return done(null, false, { message: 'That email is not registered' })
				}
				bcrypt.compare(password, user.password, (err, isMatch) => {
					if (err) throw err
					if (isMatch) {
						return done(null, user)
					} else {
						return done(null, false, { message: 'Password incorrect' })
					}
				})
			})
		})
	)

	passport.serializeUser(function (user: usr, done: any) {
		done(null, user.id)
	})

	passport.deserializeUser(function (id: string, done: any) {
		User.findById(id, function (err: string, user: usr) {
			done(err, user)
		})
	})
}
