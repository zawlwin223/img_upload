const mongoose = require ("mongoose")
const {Schema} = mongoose;
let post_schema = new Schema({
    user:{type:Schema.Types.ObjectId,required:true,ref:"new-user"},
    title:{type:String,required:true},
    desc:{type:String,required:true},
    create:{type:Date,default:Date.now}
})
const post= mongoose.model('post', post_schema);
module.exports={post}
