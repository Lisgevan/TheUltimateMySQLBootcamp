import "dotenv/config";
import mysql from "mysql2";
import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";
// const express = require("express");
// const mysql = require("mysql2");
// const bodyParser = require("body-parser");
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(__dirname + "/public"));

const connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: process.env.MYSQL_PASS,
	database: "join_us",
});

app.get("/", function (req, res) {
	// Find count of users in DB
	const q = "SELECT COUNT(*) AS count FROM users";
	connection.query(q, function (err, results) {
		if (err) throw err;
		const count = results[0].count;
		// Respond with that count
		// res.send(`We have ${count} users in our database!`);
		res.render("home", { count: count });
	});
});

app.post("/register", function (req, res) {
	const person = {
		email: req.body.email,
	};
	connection.query("INSERT INTO users SET ?", person, function (err, result) {
		if (err) throw err;
		res.redirect("/");
	});
});

app.listen(8080, function () {
	console.log("Server running on 8080!");
	console.log("Visit http://localhost:8080 to see the app!");
});

