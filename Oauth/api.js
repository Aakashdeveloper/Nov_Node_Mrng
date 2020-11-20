const express = require('express');
const app = express()
const superagent = require('superagent');
const request = require('request');
const port = 8700;
const cors = require('cors');
const { response } = require('express');

app.use(cors())

//Static file path
app.use(express.static(__dirname+'/public'));
//html
app.set('views','./src/views');
//view engine
app.set('view engine','ejs');

app.get('/',(req,res) => {
    res.render('index')
});

app.get('/profile',(req,res) => {
    const code = req.query.code;
    if(!code){
        res.send({
            success:false,
            message:'Error on code'
        })
    }
    superagent
        .post('https://github.com/login/oauth/access_token')
        .send({
            client_id:'95f859cdc8dbaeba978c',
            client_secret:'4e0f207fffd3cc14f4b956fc29bbc7c60feda4e9',
            code:code
        })
        .set('Accept','application/json')
        .end((err,result) => {
            if(err) throw err;
            var acctoken = result.body.access_token;
            const option ={
                url:'https://api.github.com/user',
                method:'GET',
                headers:{
                    'Accept':'application/json',
                    'Authorization':'token '+acctoken,
                    'User-Agent':'mycode'
                }
            }
            var output;
            request(option,(err,response,body) => {
                output=body;
                return res.send(output)
            })
        })
    
})

app.listen(port,() => {
    console.log(`Server is runnig on port ${port}`)
})