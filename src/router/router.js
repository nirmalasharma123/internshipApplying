const express=require("express");
const router=express.Router();
const collegeController=require("../controller/collageController");
const interController=require("../controller/internController")
router.post("/functionup/colleges", collegeController.creatCollage);
router.post("/functionup/interns",interController.createIntern)

module.exports=router