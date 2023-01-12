const express=require("express");
const router=express.Router();
const collegeController=require("../controller/collageController");
const interController=require("../controller/internController")


router.post("/functionup/colleges", collegeController.creatCollage);
router.post("/functionup/interns",interController.createIntern);
router.get("/functionup/collegeDetails",interController.collegeDetails);

router.all('/*', function (req, res) {
    res.send({ status: false, message: "invalid HTTP request" })
});

module.exports=router
