const express = require('express')
const app = express()
const port = 4000

const myHttpLoggerMiddleware = require('./middleware/httpLogger')

app.use(myHttpLoggerMiddleware)

app.get('/', (req, res)=>{
	res.send('Hello !')
})

app.listen(port, ()=>{
	console.log('Server up and runnig on port : ' + port)
})
