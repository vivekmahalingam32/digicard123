const _ = require('lodash');

var express = require('express');
var bodyParser = require('body-parser');
var fs = require("fs");
var app = express();


app.get('/display', function(req, res) {
  fs.readFile('suntzu.jpg', function(err, data) {
    if (err) throw err; // Fail if the file can't be read.
    else {
      res.writeHead(200, {'Content-Type': 'image/jpeg'});
      res.end(data); // Send the file data to the browser.
    }
  });
});



app.listen(3000 ,()=>{
  console.log(`started at port 3000`);

});
