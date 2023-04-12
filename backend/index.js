//https://stackoverflow.com/questions/5823722/how-to-serve-an-image-using-nodejs

var express = require('express');
var app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(dir, options));

app.get("/", function(req, res){
    res.send("express is working")
}
)

// 404 page
app.use(function ( req, res, next) {
    res.send('This page does not exist!')
});

app.listen(8000, function () {
    console.log('Listening on http://localhost:8000/');
});