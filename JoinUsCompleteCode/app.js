import "dotenv/config";

const express = require("express");
// const mysql = require('mysql2');
// const bodyParser = require("body-parser");
const app = express();

// app.set("view engine", "ejs");
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(__dirname + "/public"));

const connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: process,
	database: "join_us",
});

app.get("/", function (req, res) {
	res.send("home");
});

app.get("/joke", function (req, res) {
	const joke = "What do you call a dog that does magic tricks? A labracadabrador.";
	res.send(joke);
});

app.get("/random_num", function (req, res) {
	const num = Math.floor(Math.random() * 10 + 1);
	res.send("Your lucky number is " + num);
});

// app.get("/", function (req, res) {
// 	// Find count of users in DB
// 	const q = "SELECT COUNT(*) AS count FROM users";
// 	connection.query(q, function (err, results) {
// 		if (err) throw err;
// 		const count = results[0].count;
// 		res.render("home", { count: count });
// 	});
// });

// app.post("/register", function (req, res) {
// 	const person = {
// 		email: req.body.email,
// 	};
// 	connection.query("INSERT INTO users SET ?", person, function (err, result) {
// 		if (err) throw err;
// 		res.redirect("/");
// 	});
// });

app.listen(8080, function () {
	console.log("Server running on 8080!");
	console.log("Visit http://localhost:8080 to see the app!");
});

