// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


// Sets up Express
var app = express();
var PORT = process.env.port || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./app/routing/htmlRoutes')(app);
require('./app/routing/apiRoutes')(app);

app.listen(PORT);