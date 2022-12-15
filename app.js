require('dotenv').config()
const express    = require ("express")
const app        = express()
const file_upload = require ("express-fileupload")
const path = require('path')

app.use('/upload', express.static(path.join(__dirname, 'utlis')))
app.use(express.json());
app.use(file_upload());

//connection with mongo
const mongoose = require ("mongoose");
mongoose.connect(`mongodb://localhost:27017/${process.env.DBS}`);

//Route 
const user_route = require ("./route/user_route.js");
const post_route = require ("./route/post_route.js");
const {single_file_upload,multiple_file_upload,del_file}= require ("./utlis/file_upload.js")

app.use("/user",user_route);
app.use("/post",post_route);

// uploading image file and delete image file
app.post("/gallery",single_file_upload,(req,res)=>{
   res.status(200).json({image:req.body.img_name})
})
app.post("/mutligall",multiple_file_upload,(req,res)=>{
    res.status(200).json({images:req.body.images_name})
})
app.delete("/delegall",(req,res)=>{
    del_file(req.body.file_name)
  res.status(200).json({msg:"File deleted"})
})

//server connection
app.listen(process.env.PORT,()=>{
    console.log(`Server is running at ${process.env.PORT}`);
})