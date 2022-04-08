const express = require('express')
const app = express()
const port = 4000

const myHttpLoggerMiddleware = require('./middleware/httpLogger')
const kanyeMiddleware = require('./middleware/kanyeMiddleware')

// If you want to use the middleware for every route :
app.use(myHttpLoggerMiddleware)

// the following route will only be affected by the global middleware ;
app.get('/', (req, res)=>{
	res.send('Hello !')
})

// The following will be affected by the global middleware, but not only,
// we have added another middleware, just for this route :
app.get('/kanye', kanyeMiddleware, (req, res) => {
	res.send(`There is now a Kanye west quote attached to the request : "${req.kanye}"`)
})

// launch the app
app.listen(port, ()=>{
	console.log('Server up and runnig on port : ' + port)
})
