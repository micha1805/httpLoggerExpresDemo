const moment = require('moment')

const logger = (req, res, next) =>{
	const date = moment().format('YYYY-MM-DD HH:mm:ss')
	const method = req.method
	const url = req.url

	console.log(`[${date}] | method=${method} url="${url}"`)
	next()
}


module.exports = logger
