const helper = require ("../utlis/fMsg.js")
const db     = require ("../dbs/user_schema.js")
//add user
let post = async (req,res,next)=>{
 let users = new db.user(req.body)
 await users.save().then((result)=>{
    helper.fMsg(res,"Add user",result)
 })
}
//find all user
let get = async (req,res,next)=>{
   
    let result =await db.user.find()
    helper.fMsg(res,"Get All User",result)

}
//find specific user 
let specific_get = async(req,res,next)=>{
    let id     = req.params.id
    let result = await db.user.findById(id)
    helper.fMsg(res,"Get All User",result)
}
//update_user 
let patch = async(req,res,next)=>{ 
    let id     = req.params.id
    let user   = await db.user.findById(id)
    if(user){
        await db.user.findByIdAndUpdate(user._id, req.body)
        let ret_user =await db.user.findById(user._id)
        helper.fMsg(res,"Updated",ret_user)
    }else{
        console.log("User not found")
    }
   
   
}
//delete_user 
let del    = async (req,res,next)=>{
    await db.user.deleteOne({_id:req.params.id})
    helper.fMsg(res,"Deleted")
}
module.exports={post,get,specific_get,patch,del}