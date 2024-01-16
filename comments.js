// Create web server

// Load modules
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// Connect to database
mongoose.connect('mongodb://localhost/comments');

// Create web server
var app = express();

// Set up body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set up static files
app.use(express.static('public'));

// Set up routes
app.use('/api', require('./routes/api'));

// Start web server
app.listen(3000, function() {
    console.log('Web server started on port 3000');
});