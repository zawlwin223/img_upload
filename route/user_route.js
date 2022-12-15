let router    = require ("express").Router()
let user_controller= require ("../controller/user_controller.js")
router.post("/",user_controller.post)
router.get("/",user_controller.get)
router.get("/:id",user_controller.specific_get)
router.patch("/:id",user_controller.patch)
router.delete("/:id",user_controller.del)

module.exports=router