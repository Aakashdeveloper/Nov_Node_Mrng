var express = require('express');
var axios = require('axios');
var redis = require('redis');
var app = express();
var port = 5600;

const client = redis.createClient({
    host:'localhost',
    port:6379
});

app.get('/data',(req,res) =>{
    var userInput = (req.query.country).trim()
    const url = `https://en.wikipedia.org/w/api.php?action=parse&format=json&section=0&page=${userInput}`

    //search in redis
    return client.get(`wiki:${userInput}`,(err,result)=>{
        if(result){
            const output = JSON.parse(result);
            res.send(output)
        }else{
            //make api call as it is not n redis
            return axios.get(url)
            .then((response) =>{
                const output = response.data;
                //first save in redis for next time
                client.setex(`wiki:${userInput}`,3600,JSON.stringify({source:'Redis',output}));
                //send api response
                res.send({source:'APi',output})
            })
        }
    })
})


app.listen(port,(err) => {
    console.log(`Server is running on port ${port}`)
})