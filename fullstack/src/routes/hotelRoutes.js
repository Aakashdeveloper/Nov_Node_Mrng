var express = require('express');
var hotelRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

function router(menu){

  hotelRouter.route('/')
    .get(function(req,res){
      mongodb.connect(url,function(err,connection){
        if(err){
          res.status(501).send('Error while connecting')
        }else{
          const dbo = connection.db('octnode');
          dbo.collection('hotels').find({}).toArray(function(err,data){
            if(err){
              res.status(501).send('Error while Fetching')
            }else{
              //res.send(data)
              res.render('hotel',{title:'Hotel Page',hoteldata:data,menu})
            }
          })
        }
      })
     
    })

  hotelRouter.route('/details/:id')
    .get(function(req,res){
      //var id = req.params.id;
      var {id} = req.params
      mongodb.connect(url,function(err,connection){
        if(err){
          res.status(501).send('Error while connecting')
        }else{
          const dbo = connection.db('octnode');
          dbo.collection('hotels').findOne({_id:id},function(err,data){
            if(err){
              res.status(501).send('Error while Fetching')
            }else{
              //res.send(data)
              res.render('hotelDetails',{title:'Hotel Page',hoteldata:data,menu})
            }
          })
        }
      })
    })

    return hotelRouter
}

module.exports = router;