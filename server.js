var express=require('express');
var mongo=require('mongodb').MongoClient;
var app=express();
var url=process.env.MONGOLAB_URI||'mongodb://localhost:27017/url-shortner1';
var routes=require('./app/routes/index.js');
mongo.connect(url,function(err,db){
	app.get('/favicon.ico',function(req,res){
		res.end();
	})
	routes(app,db);
	app.listen(process.env.PORT||5000,function(){
		console.log('connected to port 5000');
	})

})