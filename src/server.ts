import * as dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import expressLayouts from 'express-ejs-layouts'
import session from 'express-session'
import flash from 'connect-flash'

import { router } from './routes/index.js'
import { usersRouter } from './routes/users.js'
import { docsRouter } from './routes/docs.js'

import mongoose from 'mongoose'

import passport from 'passport'

const app = express()

import configPassport from './config/passport.js'
configPassport(passport)

if (process.env.MONGO_CONNECTION !== undefined) {
	mongoose
		.connect(process.env.MONGO_CONNECTION, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
		})
		.then(() => console.log('🔌 Connected to database'))
}

app.use(expressLayouts)
app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true }))

app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ limit: '50mb' }))

app.use(express.static('views/styles'))

if (process.env.SECRET !== undefined) {
	app.use(
		session({
			secret: process.env.SECRET,
			resave: true,
			saveUninitialized: true,
		})
	)
}

app.use(passport.initialize())
app.use(passport.session())

app.use(flash())

app.use((req, res, next) => {
	res.locals.success_msg = req.flash('success_msg')
	res.locals.error_msg = req.flash('error_msg')
	res.locals.error = req.flash('error')
	next()
})

app.use('/', router)
app.use('/users', usersRouter)
app.use('/docs', docsRouter)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`🎧 Listening on http://localhost:${PORT}/`))
