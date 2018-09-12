var mongoose = require('mongoose');


var Users = mongoose.model('Users',{
username:{
  type: String,
  required: true,
  minlength: 1,
  trim: true
},
password:{

type: String,
required: true,
minlength: 1,
trim: true
}
});
module.exports = {Users};
