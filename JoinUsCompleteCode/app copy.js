import "dotenv/config";

const express = require("express");
const app = express();

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

app.listen(8080, function () {
	console.log("Server running on 8080!");
	console.log("Visit http://localhost:8080 to see the app!");
});

