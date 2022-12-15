let fMsg = async (res,msg = "Success",result =[])=>{
    res.json({
        con:true,
        msg,
        result,
    })
}
module.exports={fMsg}