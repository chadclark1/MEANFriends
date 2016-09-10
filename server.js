// // require express and path
// var express = require("express");
// var path = require("path");
// // create the express app
// var app = express();
// // require bodyParser since we need to handle post data for adding a user
// var bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded());
// // static content 
// app.use(express.static(path.join(__dirname, "./client/static")));
// // setting up ejs and our views folder
// app.set('views', path.join(__dirname, './client/views'));
// app.set('view engine', 'ejs');
// // require the mongoose configuration file which does the rest for us
// require('./server/config/mongoose.js');
// //require routes and store the function in a variable
// var routes_setter = require('./server/config/routes.js');
// // invoke the function stored in routes_setter and pass it the "app" variable
// routes_setter(app);
// // tell the express app to listen on port 8000
// app.listen(8000, function() {
//   console.log("listening on port 8000");
// })


// Dependencies
// var express = require('express'),
//     bodyParser = require('body-parser'),
//     mongoose = require('mongoose'),
//     path = require('path'),
//     port = 8000;

// // Create express app
// var app = express();

// // Use bodyParser to parse form data sent via HTTP POST
// app.use(bodyParser.urlencoded({ extended: true }));

// // Tell server where views are and what templating engine I'm using
// app.use(express.static(path.join(__dirname, "./client/static")));
// app.set('views', path.join(__dirname, './client/partials'));
// app.set('view engine', 'ejs');

// // require the mongoose configuration file which does the rest for us
// require('./server/config/mongoose.js');

// //require routes and store the function in a variable
// // var routes_setter = require('./server/config/routes.js');
// // invoke the function stored in routes_setter and pass it the "app" variable
// // routes_setter(app);

// require("./server/config/routes.js")(app);


// // Listen to port 
// app.listen(port, function(){
//   console.log("Running on ", port);
// })




var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static(path.join(__dirname, './client')));
app.use(express.static(path.join(__dirname, './bower_components')));
app.use(bodyParser.json());

// app.use(bodyParser.urlencoded({extended: true}));

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);
app.listen(8000, function(){
	console.log('listening port 8000.....');
})