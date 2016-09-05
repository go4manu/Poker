var http = require('http'),
    fs = require("fs");
var dm = require('../model/dataModel.js');
var express = require('express'),
    app = express();
var bodyParser = require('body-parser');
var cache = require('memory-cache');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


exports.startSession = function(req,res){
    var userName=req.query.userName;
    var sessionId=req.query.sessionId;
    var cacheData=cache.get(sessionId);
    console.log(cacheData);
    if(cacheData && cacheData!=null){
        console.log("add user to existing object");
        cacheData.names.push(userName);
    }else{
        console.log("add new user into cache");
        cacheData=new dm.sessionObj(sessionId,[userName]);
    }
    cache.put(sessionId,cacheData);

    res.end(JSON.stringify(cacheData));
};
/**
 * Created by sshail on 02/09/2016.
 */
