const express = require ("express")
const router  = express.Router()
const controller_post = require ("../controller/post_controller.js")
router.post("/",controller_post.post)
router.get("/",controller_post.get)
module.exports=router;