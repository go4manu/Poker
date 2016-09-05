var http = require ('http');
var express = require ('express');
var meeting=require("./modules/meeting.js");

var app = express();
app.listen (8081, function (){
	console.log ('listening http port');
});

app.use(express.static(__dirname + '/public'));

app.get("/",function (req, res) {
	res.redirect("./index.html");
});

app.get("/joinMeeting",meeting.startSession);
