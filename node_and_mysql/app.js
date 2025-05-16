import "dotenv/config";
import { faker } from "@faker-js/faker";
import mysql from "mysql2";

const connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	database: "join_us",
	password: process.env.MYSQL_PASS,
});

console.log(`Connected to MySQL database: ${connection.config.database}`);

// // Testing the connection
// const query = "SELECT CURTIME() as time, CURDATE() as date, NOW() as now";

// connection.query(query, (error, results, fields) => {
// 	if (error) {
// 		console.error(`Error executing query: ${error.message}`);
// 		return;
// 	}

// 	const { time, date, now } = results[0];

// 	console.log(`Current date is: ${time}`);
// 	console.log(`Current date is: ${date}`);
// 	console.log(`Current date is: ${now}`);
// 	// console.dir(results);`
// });

// // To get data from tables in the database
// const query = "SELECT * FROM users";
// connection.query(query, (error, results, fields) => {
// 	if (error) {
// 		console.error(`Error executing query: ${error.message}`);
// 		return;
// 	}
// 	console.log(results);
// });

// // To count the number of users in the database:
// const q = "SELECT COUNT(*) AS total FROM users ";
// connection.query(q, function (error, results, fields) {
// 	if (error) throw error;
// 	console.log(results[0].total);
// });

// // To insert data into the database - 1
// const q = 'INSERT INTO users (email) VALUES ("rusty_the_dog@gmail.com")';

// connection.query(q, function (error, results, fields) {
// 	if (error) throw error;
// 	console.log(results);
// } );

// // To insert data into the database - 2
// const person = {
// 	email: faker.internet.email(),
// 	created_at: faker.date.past(),
// };

// const end_result = connection.query("INSERT INTO users SET ?", person, function (err, result) {
// 	if (err) throw err;
// 	console.log(result);
// });

// // insert 500 random users into the database
// const data = [];
// for (let i = 0; i < 500; i++) {
// 	data.push([faker.internet.email(), faker.date.past()]);
// }

// const q = "INSERT INTO users (email, created_at) VALUES ?";

// connection.query(q, [data], function (err, result) {
// 	console.log(err);
// 	console.log(result);
// });

// Close the connection with the database
connection.end(err => {
	if (err) {
		console.error("Error closing connection:", err);
		return;
	}
	console.log("MySQL connection closed.");
});
