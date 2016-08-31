var http = require ('http');
var express = require ('express');
var app = express();
app.listen (8081, function (){
	console.log ('listening http port');
});

app.get("/",function (req, res) {
	console.log ('Test');
	res.end('Hello World');
});
