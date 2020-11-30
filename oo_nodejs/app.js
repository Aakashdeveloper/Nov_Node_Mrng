import express from 'express';
const app = express();
const port = 8900;
import database from './database';

app.get('/mydata',(req,res) => {
    let output = database.getData('userdata')
    res.send(output)
});

app.post('/addData',(req,res) => {
    var mydata={}
    let output = database.postData('userdata',mydata);
    res.send(output)
})

app.listen(port,(err) => {
    console.log(`Server is ruuning on port ${port}`)
})
