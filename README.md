# Express_crash_course

Learning Express by taking Brad Traversy courses.

What is Express?
 - Web framework for Node.js
 - A back-end framework 

Why use Express?
 - Makes handling requests very simple
 - Fast, light, most popular Node framework

Syntax:
 const express = require(‘express’)

//Initialize
 - const app = express()

// create end points
 - app.get(‘/‘, function(req, res){
    res.send(‘hello world’);
 });

app.listen(5000);

Basic Route Handling
- Can fetch data from DB
- Load pages
- return JSON data
- have access to request and response

Request object
 - HTTP request properties like URL parameters, query strings, data sent in body

Response object
 - HTTP response 
 - Can render data using JSX
-  can re-direct
 - can parse easily


EXPRESS MIDDLEWARE
- have access to request and response objects
- Stack of functions
- Express has its own middleware
- have to call the next middleware function in a stack

TERMINAL COMMANDS
- To run a separate file => node filename
- To check PID running on PORTs => lsof -n -i4TCP:5000
- To kill PID => kill -9 PID#

 - npm init => to create package.json file
 - npm install -D nodemon => install nodemon as a dev dependency
 - Change the script file correspondingly
 - npm run dev

 MOMENT 
  - Third-party package 
  - deals with date
 
 
 // ROUTER
 - routes all same path


// Middleware function
 - const logger = (req, res, next) => {
  console.log("hello");
  next();
};

//initialize middleware
 - app.use(logger);

