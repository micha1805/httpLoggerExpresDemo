fetch = require('node-fetch');

const kanyeMiddleware = async (req, res, next) =>{

	const response = await fetch('https://api.kanye.rest/');
	const data = await response.json();
	// add the kanye key to the request object, and put the quote inside it:
	req.kanye = data.quote
	next()
}

module.exports = kanyeMiddleware
