var express = require('express');
var app = express();


//middleware
var helloworld = function(req,res,next){
	res.send('hello server');
}

//use middleware
app.use('/',helloworld);

//config server port
app.listen(3000);
console.log('Server running at http://localhost:3000');
