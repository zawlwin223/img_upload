let db     = require ("../dbs/post_schema.js")
let helper = require ("../utlis/fMsg.js")
let post = async (req,res,next)=>{
    let create_post = new db.post(req.body)
    await create_post.save().then((result)=>{
    helper.fMsg(res,"Post Created",result)
   })
    
}
let get = async (req,res,next)=>{
   await db.post.find().populate("user").exec((err,result)=>{
        helper.fMsg(res,"Get All Posts",result); 
    })
    
}
module.exports={post,get}
