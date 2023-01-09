const express=require("express");
const router=express.Router();
const controller=require("../controller/collageController");

router.post(" /functionup/colleges", controller.creatCollage);

module.exports=router;