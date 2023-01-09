const internModel=require("../model/intern");
const collegeModel=require("../model/college");
let validate = /^([a-z  A-Z ]){2,10}$/;
const emailValidator=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const validMobileNo=/^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/;


const createIntern =async function(req,res) {
    let data=req.body
    const {name,email,mobile,collageId} =req.body;

    if(Object.keys(data).length==0) return res.status(404).send({status:false,msg:"please provide details"});
    if(!name)  return res.status(400).send({status:false,msg:"name is mandatory"});
    if(!validate.test(name))  return res.status(400).send({status:false,msg:"Enter valid Name"});
  
    if(!email)  return res.status(400).send({status:false,msg: " email is mandatory"});
    if(!emailValidator.test(email)) return res.status(400).send({status:false,msg:"please provide valid a email"});
    let duplicateEmail=await internModel.find({email:email});
    if(duplicateEmail.length!=0) return res.send({status:false,msg:" email already exsist "})
    


    if(!mobile)  return res.status(400).send({status:false,msg: " mobile is mandatory"});
    let duplicatedMobile=await internModel.find({mobile:mobile});
    if(duplicatedMobile.length!=0) res.status(400).send({status:false,msg: " mobile already exsisted"});
    if(!validMobileNo)   return res.status(400).send({status:false,msg: " mobile no is incorrect"});


    if(!collageId) return res.status(404).send({satus:false,msg:"collageId is mendatory"});
    let validCollegeId= await collegeModel.find ({_id:collageId});
    if(validCollegeId.length==0) return res.status(404).send({satus:false,msg:"user not found"})
    


 
     let createIntern= await internModel.create(data);

     res.send(createIntern)

};

const 



module.exports={createIntern};