import { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'
import { serialize } from 'cookie'


const Logout = nc<NextApiRequest, NextApiResponse>()
	.get(async(req, res) => {
		res.setHeader('set-cookie', serialize('token', '', {
			maxAge: -1,
			path: '/'
		}))
		res.redirect(301, '/')
	})
export default Logout