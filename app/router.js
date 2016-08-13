// app/router.js

 var quotes = require('../api/quote');
 var users = require('../api/user');
 var tokens = require('../api/token');
 module.exports = function(router) {
  
  router.route('/quotes').post(function(req, res) {
   console.log(req.body);
   quotes.addQuote(req,res); 
	}).get(function(req,res) { 
  	quotes.getAllQuotes(req,res) 
  });

  router.route('/users').post(function(req, res) {
  	console.log(req.body);
  	users.addUser(req, res);
  }).get(function(req,res) {
  	users.getAllUsers(req,res);
  });

  router.route('/token').post(function(req, res) {
    tokens.attemptAuthenticate(req, res);
  }).get(function(req,res) {
    users.getAllUsers(req,res);
  });

  router.route('*').get(function(req, res) {
      res.sendfile('./public/index.html'); // load our public/index.html file
  });
};
