//import
const http = require("http");
const url = require("url");
const fs = require("fs");
const dotenv = require("dotenv");
const express = require("express");
const cookieParser = require("cookie-parser");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const formidable = require("formidable");
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(express.static("uploads"));

//config
dotenv.config({ path: "./config.env" });

const port = process.env.PORT;
const pwd = process.env.PASSWORD;

//read file
const login_temp = fs.readFileSync("../Fontend/HTML/Login.html", "utf8");
const user_temp = fs.readFileSync("../Fontend/HTML/User.html", "utf8");
const upload_temp = fs.readFileSync("../Fontend/HTML/Upload.html", "utf8");
const get_file_temp = fs.readFileSync("../Fontend/HTML/Get_File.html", "utf8");

const css = fs.readFileSync("../Fontend/CSS/css.css", "utf8");

const jss = [
	fs.readFileSync("../Fontend/JS/Login.js", "utf8"),
	fs.readFileSync("../Fontend/JS/User.js", "utf8"),
	fs.readFileSync("../Fontend/JS/Upload.js", "utf8"),
	fs.readFileSync("../Fontend/JS/Get_File.js", "utf8"),
];

//give page
app.get("/", (req, res) => {
	res.end(login_temp);
});

app.get("/user", (req, res) => {
	res.end(user_temp);
});
//request
app.post("/logindata", (req, res) => {
	const data = req.body;

	if (data.pwd.toString() === pwd.toString()) {
		res.cookie("au4a83", data.pwd.toString(), { maxAge: 86400000 });
		res.status(200);
		res.redirect("/user");
	} else {
		res.status(403);
		res.end();
	}
});

//give css
app.get("/css", (req, res) => {
	res.end(css);
});

//give js
app.get("/js/:id", (req, res) => {
	const id = req.params.id;
	res.end(jss[id]);
});

//start server
app.listen(port, () => {
	console.log(`Server is running on port ${port}...`);
});
