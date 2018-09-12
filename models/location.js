var mongoose = require('mongoose');


var Location = mongoose.model('Location',{
text:{
  type: String,
  required: true,
  minlength: 1,
  trim: true
},

location123:{
  type: String,
  
  minlength: 1,
  trim: true
}

});

module.exports = {Location};
