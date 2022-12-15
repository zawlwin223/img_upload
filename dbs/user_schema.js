
const mongoose = require ("mongoose")
const { Schema } = mongoose;
const user_schema = new Schema({
   "name":{type:String,required:true,unique:true},
   "email":{type:String,required:true,unique:true},
   "password":{type:String,required:true},
   "ph_numb":{type:String,required:true,unique:true},
  });
  const user= mongoose.model('new-user', user_schema);


  module.exports={user}
