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
//const css = fs.readFileSync("./Template/css.css", "utf8");

//give page
app.get("/", (req, res) => {
	res.end("Hello World!");
});

//start server
app.listen(port, () => {
	console.log(`Server is running on port ${port}...`);
});
