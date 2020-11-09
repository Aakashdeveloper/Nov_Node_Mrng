var express = require('express');
var app = express();
var port = 8700;
var hotelRouter = require('./src/routes/hotelRoutes');
var cityRouter = require('./src/routes/cityRoutes');

//Static file path
app.use(express.static(__dirname+'/public'));
//html
app.set('views','./src/views');
//view engine
app.set('view engine','ejs');

app.get('/',function(req,res){
    //res.send("Welcome to Node Js")
    res.render('index',{title:'Home Page'})
});

app.use('/city',cityRouter);
app.use('/hotel',hotelRouter);

app.listen(port,function(err){
    if(err) throw err;
    console.log('Server is running on port 8700')
});