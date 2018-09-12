var mongoose = require('mongoose');


var Todo = mongoose.model('Todo',{
text:{
  type: String,
  required: true,
  minlength: 1,
  trim: true
},
completed:{
  type:Boolean,
  default: false
},
completedAt:{
  type:Number,
  default: null
},
fetched:{
  type:Number
},

userCard:{
  type: String,
  required: true,
  minlength: 1,
  trim: true
},
havingCard:{
  type: Array,
  required: true,
  minlength: 1,
  trim: true
}

});

module.exports = {Todo};
