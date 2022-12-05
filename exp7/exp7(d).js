const express = require('express')
const mongoose = require('mongoose')
const url = "mongodb://0.0.0.0:27017/Hell";
mongoose.connect(url, {
	useNewUrlParser: true
}, {
	useUnifiedTopology: true
}).then(() => console.log("Database Connected.... ")).catch(err => console.log(err));
var bookSchema = mongoose.Schema({
	name: String,
	isbn: {
		type: String,
		index: true
	},
	author: String,
	pages: Number
});
var Book = mongoose.model("Book", bookSchema);
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
	console.log("Connected to DB");
});