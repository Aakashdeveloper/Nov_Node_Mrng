//var express = require('express');
import express from 'express'
//var request = require('request');
import request from 'request'
let app = express();
let port = process.env.PORT|| 7899;

let apiurl = "http://api.openweathermap.org/data/2.5/forecast/daily?q=Delhi&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29";

//Static file path
app.use(express.static(__dirname+'/public'));
//html
app.set('views','./src/views');
//view engine
app.set('view engine','ejs');

app.get('/weather',(req,res) =>{
    request(apiurl,(err,response)=>{
        if(err) throw err;
        let output = JSON.parse(response.body)
        //res.send(output)
        res.render('index',{title:'Weather App',result:output})
    })
})

app.listen(port,(err)=>{
    if(err) throw err;
    console.log(`Server is running on port ${port}`)
})