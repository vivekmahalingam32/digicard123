const _ = require('lodash');

var express = require('express');
var bodyParser = require('body-parser');

var {ObjectID} = require('mongodb');



var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');

var {User} = require('./models/user');
var {Users} = require('./models/users');
var {Userdetail} = require('./models/userdetail');
var {Location} = require('./models/location');



const port = process.env.PORT || 3000;


var app = express();

app.use(bodyParser.json());


app.get('/display', function(req, res) {
  fs.readFile('/suntzu.jpg', function(err, data) {
    if (err) throw err; // Fail if the file can't be read.
    else {
      res.writeHead(200, {'Content-Type': 'image/jpeg'});
      res.end(data); // Send the file data to the browser.
    }
  });
});


app.post('/todos1234',(req,res)=>{

  var location = new Location({
    text : req.body.text,
    location123:req.body.location123
  })

  location.save().then((doc)=>{
    res.send(doc);
  },(e)=>{
    res.send(e);
  })
console.log(req.body);
});



    app.get('/todos1234/:userid&:location',(req,res)=>{

  var location = req.params.location;
  var userid  = req.params.userid;

  Location.findOneAndUpdate({text:userid},{$set:{location123:location}},{new:true}).then((location)=>{
    console.log("hii");
    if(!location){
      return res.status(404).send();
    }

    res.send({location});

  }).catch((e)=>{
    return res.status(404).send();
  })
  });

  app.get('/todos12345/:location',(req,res)=>{


    var location = req.params.location;

    Location.find({location123:location},{text:1}).then((location)=>{
      res.send({location});

    });

  });

  app.get('/users',(req,res)=>{

    var todos1;
    Users.find().then((users)=>{
      res.send({
        users
      })
    });
  });


app.get('/todos',(req,res)=>{

  var todos1;
  Todo.find().then((todos)=>{
    res.send({
      todos
    })
console.log(todos[0].havingCard);

  },(e)=>{
    res.status(400).send(e);
  });





});
















app.listen(port,()=>{
  console.log(`started at port ${port}`);

});
