var mongoose = require('mongoose');


var Userdetail = mongoose.model('Userdetail',{
userCard:{
  type: String,
  required: true,
  minlength: 1,
  trim: true
},

phone:{
  type:String,
  required: true,
  minlength: 1,
  trim: true
},
email:{
  type:String,
  required: true,
  minlength: 1,
  trim: true
}
});

module.exports = {Userdetail};
