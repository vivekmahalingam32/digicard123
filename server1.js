const _ = require('lodash');

var express = require('express');
var bodyParser = require('body-parser');

var {ObjectID} = require('mongodb');



var {mongoose} = require('./db/mongoose');
var {Userdetail} = require('./models/userdetail');
//var {Todo} = require('./models/todo');
var {User} = require('./models/user');
var {Users} = require('./models/users');

const port = process.env.PORT || 5000;


var app = express();

app.use(bodyParser.json());




app.get('/todos123/:id',(req,res)=>{

  var id = req.params.id;


Userdetail.findOne({usercard:id}).then((userdetail)=>{
  res.send({userdetail});
console.log("hii");
})


  },(e)=>{
    res.status(400).send(e);
  });



app.listen(port,()=>{
  console.log(`started at port ${port}`);

});
