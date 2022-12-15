const fs = require ("fs");
//single img upload
let single_file_upload = async (req,res,next)=>{
    let image = req.files.image;
   image.mv(`./utlis/${image.name}`);
   req.body["img_name"]=image.name;
   next();
}
//multiple images upload
let multiple_file_upload = async (req,res,next)=>{
    let images = req.files.images;
    let images_name=[];
    images.forEach((val)=>{
       images_name.push(val.name);
       val.mv(`./utlis/${val.name}`);
    });
    req.body["images_name"]=images_name;
    next();
  
}
//imgae delete
let del_file = async (file_name)=>{
    fs.unlinkSync(`./utlis/${file_name}`);
}
module.exports={single_file_upload,multiple_file_upload,del_file};