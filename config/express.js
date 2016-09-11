var express = require('express');
module.exports = function(){
	var app = express();
	require('../app/routes/index.route')(app);
	return app;
};