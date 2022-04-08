# Very simple middleware example in ExpressJS

The app uses a global middleware, an http logger :

```js
app.use(myHttpLoggerMiddleware)
```

That affects by definition every route.


I haved also added another one that only affects one route, it puts a Kanye West quote on the request into the `req.kanye` key:

```js
app.get('/kanye', kanyeMiddleware, (req, res) => {
	res.send(`There is now a Kanye west quote attached to the request : "${req.kanye}"`)
})
```
