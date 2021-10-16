var express = require('express');

var app = express();

var server = require('http').Server(app);

var port = process.env.PORT || 4000;

// to support JSON-encoded bodies
app.use(express.json())

// to support URL-encoded bodies
app.use(express.urlencoded({ extended: true }))

// Require item routes
const routes = require('./src/route/item.route')

// using as middleware
app.use('/item', routes)

// root path
app.get("/", (req, res, next) => {
	res.json("What's up?");
});

server.listen(port, () => {
    console.log('Listening on port: ' + port);
});