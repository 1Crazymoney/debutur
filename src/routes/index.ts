import express from 'express'
export const router = express.Router()

import { forwardAuthenticated } from '../config/auth.js'
import { User } from './../models/User.js'

router.get('/', forwardAuthenticated, (req, res) => {
	res.render('home')
})

router.get('/:name', async (req, res) => {
	const user = await User.findOne({ name: req.params.name })
	if (user === null) res.redirect('/')
	else {
		res.render('debut', {
			user: user,
			pathname: user.name,
			curUser: req.user,
		})
	}
})

router.get('/edit/:name', async (req: any, res) => {
	const user = await User.findOne({ name: req.params.name })
	if (user == null) res.redirect('/')

	if (req.user.name) {
		if (user.name === req.user.name) {
			res.render('edit.ejs', {
				user: user,
				pathname: user.name,
			})
		} else res.redirect(`/${req.user.name}`)
	} else res.redirect('/')
})

interface error {
	msg: string
}

router.post('/:name', async (req, res) => {
	const {
		avatar,
		displayName,
		about,
		mainLinkTitle,
		mainLinkURL,
		secondLinkTitle, 
		secondLinkURL,
		thirdLinkTitle,
		thirdLinkURL,
		fourthLinkTitle,
		fourthLinkURL,
		fifthLinkTitle,
		fifthLinkURL,
		theme,
	} = req.body

	let errors: error[] = []

	const user = await User.findOne({ name: req.params.name })

	if (!avatar || !displayName || !about || !theme) {
		errors.push({ msg: 'Please enter all fields!' })
	}

	user.avatar = avatar
	user.displayName = displayName
	user.about = about

	user.theme = theme

	user.mainLinkTitle = mainLinkTitle
	user.mainLinkURL = mainLinkURL
	user.secondLinkTitle = secondLinkTitle
	user.secondLinkURL =secondLinkURL
	user.thirdLinkTitle = thirdLinkTitle
	user.thirdLinkURL = thirdLinkURL
	user.fourthLinkURL = fourthLinkURL
	user.fourthLinkTitle=fourthLinkTitle
	user.fifthLinkURL = fifthLinkURL
	user.fifthLinkTitle = fifthLinkTitle

	await user.save()
	res.redirect(`/${user.name}`)
})
