var express = require('express');
var app = express();
var port = 8700;

var menu = [
    {link:'/', name:'Home'},
    {link:'/hotels', name:'Hotels'},
    {link:'/city', name:'City'}
]

var hotelRouter = require('./src/routes/hotelRoutes')(menu)
var cityRouter = require('./src/routes/cityRoutes')(menu)

//Static file path
app.use(express.static(__dirname+'/public'));
//html
app.set('views','./src/views');
//view engine
app.set('view engine','ejs');

app.get('/',function(req,res){
    //res.send("Welcome to Node Js")
    res.render('index',{title:'Home Page',menu})
});

app.use('/city',cityRouter);
app.use('/hotels',hotelRouter);

app.listen(port,function(err){
    if(err) throw err;
    console.log('Server is running on port 8700')
});