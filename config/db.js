'use strict';

const mysql = require('mysql');

var con = mysql.createConnection({
	host: process.env.HOST_SQL,
	port: process.env.PORT_SQL,
	user: process.env.USER_SQL,
	password: process.env.PASSWORD_SQL,
	database: process.env.DBNAME_SQL
});

con.connect(function(err) {
	if (err) throw err;
	console.log("Connected to MySQL!");
});

module.exports = con;