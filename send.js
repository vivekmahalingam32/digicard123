
var express = require('express');
var bodyParser = require('body-parser');
var app = express();



var request = require('request'); //bash: npm install request
// URL for request POST /message
var url = 'https://foo.chat-api.com/message?token=83763g87x';
var data = {
    phone: '09833867280', // Receivers phone
    body: 'Hello, vivek!', // Сообщение
};
// Send a request
request({
    url: url,
    method: "POST",
    json: data
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


  app.listen(6000,()=>{
    console.log(`started at port 6000`);

  });
