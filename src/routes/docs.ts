import express from 'express'
export const docsRouter = express.Router()

docsRouter.get('/terms', (req, res) => {
	res.render('terms.ejs')
})
