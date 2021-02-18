import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
	displayName: {
		type: String,
		required: true,
		default: 'New User',
	},
	name: {
		type: String,
		required: true,
		unique: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	avatar: {
		type: String,
		default:
			'http://ronaldmottram.co.nz/wp-content/uploads/2019/01/default-user-icon-8.jpg',
	},
	about: {
		type: String,
		default:
			'👋 Hello, welcome to your shiny new Debutur page. To get started, hit the edit page button. You can customise me with over 10 colour schemes, and add up to 10 links!',
	},
	theme: {
		type: String,
		default: 'white',
	},
	date: {
		type: Date,
		default: Date.now,
	},
	mainLinkURL: {
		type: String,
		default: 'https://example.com/',
	},
	mainLinkTitle: {
		type: String,
		default: 'Shiny Custom Link',
	},
	secondLinkURL: {
		type: String,
		default: 'https://example.com/',
	},
	secondLinkTitle: {
		type: String,
		default: 'Shiny Custom Link #2',
	},
	thirdLinkURL: {
		type: String,
		default: 'https://example.com/',
	},
	thirdLinkTitle: {
		type: String,
		default: 'Shiny Custom Link #3',
	},
	fourthLinkURL: {
		type: String,
		default: 'https://example.com/',
	},
	fourthLinkTitle: {
		type: String,
		default: 'Shiny Custom Link #4',
	},
	fifthLinkURL: {
		type: String,
		default: 'https://example.com/',
	},
	fifthLinkTitle: {
		type: String,
		default: 'Shiny Custom Link #5',
	},
})

export const User = mongoose.model('User', UserSchema)

export interface NewUser extends mongoose.Document {
	password: {
		type: string
	}
}
