export const checkAuth = (req: any, res: any, next: any) => {
	if (req.isAuthenticated()) {
		return next()
	}
	req.flash('error_msg', 'Please log in to view that resource')
	res.redirect('/users/login')
}

//@ts-ignore
export const forwardAuthenticated = (req, res, next) => {
	if (!req.isAuthenticated()) {
		return next()
	}
	res.redirect('/dashboard')
}
