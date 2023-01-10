const internModel=require("../model/intern");
const collegeModel=require("../model/college");
const Validator=require("../validator/validator");


const createIntern =async function(req,res) {
  try{
    let data=req.body;
    const {name,email,mobile,collegeName} =req.body;

    if(Object.keys(data).length==0) return res.status(404).send({status:false,msg:"please provide details"});
//==========================================validator for name ============================================
    if(!name) return res.status(400).send({status:false,msg: " name is mandatory"});
    if(!Validator.isValidateFullame(name)) res.status(400).send({status:false,msg: " enter a valid name"});

//==========================================validator for email ============================================
    
    if(!email)  return res.status(400).send({status:false,msg: " email is mandatory"});
    if(!Validator.isValidateEmail(email)) return res.status(400).send({status:false,msg:"please provide valid a email"});

    let duplicateEmail=await internModel.find({email:email});
    if(duplicateEmail.length!=0) return res.status(400).send({status:false,msg:" email already exsist "})
    
    //==========================================validator for mobile============================================
    
    if(!mobile)  return res.status(400).send({status:false,msg: " mobile is mandatory"});

    if((mobile.length != 10 || typeof(mobile) != "string")||!Validator.isValidPhone(mobile)){
      return res.status(400).send({status:false, msg: "Please provide valid mobile no "});
    };
    
    let duplicatedMobile=await internModel.find({mobile:mobile});

    if(duplicatedMobile.length!=0) res.status(400).send({status:false,msg: " mobile already exsisted"});

//==========================================validator for collage name ============================================

    if(!collegeName)  return res.status(400).send({status:false,msg:"name is mandatory"});

    if(!Validator.isvalidName(collegeName))  return res.status(400).send({status:false,msg:"Enter valid college name"});
    

    let findCollageId=await collegeModel.findOne({name:collegeName});

    if(!findCollageId) return req.status(400).send("collage name didn't exsist")
    data.collegeId=findCollageId._id;
     
     let createIntern= await internModel.create(data);

     return  res.status(201).send({status:true,data:createIntern});

    } catch(error){
      res.status(500).send({satus:false,msg:error.message})
    }

};
 
 //========================================== get api ============================================   

const collegeDetails = async function (req, res) {

    try {
  
      let data = req.query  

      if (!Object.keys(data).length) return res.status(400).send({ status: false, msg: "Please Enter quary "});
      
      if(data.collegeName=="") return res.status(404).send({ status: false, msg: "Please Enter College Name"})
  //==========================================data no present check ============================================
      let check = await collegeModel.findOne({name: data.collegeName, isDeleted: false })
      
      if (!check) return res.status(404).send({ status: false, msg: "college name not found"});
      let name = check.name;
      let fullName = check.fullName;
      let logoLink = check.logoLink;
      let collegeId = check._id ;
      
  
      let getInternData = await internModel.find({ collegeId: collegeId, isDeleted: false }).select({ name: 1, email: 1, mobile: 1 })

      if (getInternData.length==0) return res.status(404).send({ status: false,});
  
      
      
      let collegeDetail = {name: name, fullName: fullName,logoLink: logoLink,internData: getInternData}
      res.status(200).send({ status: true,  data: collegeDetail});
  
    }
  
    catch (err) {
  
      res.status(500).send({ status: false, error: err.message});
    }

}
module.exports={createIntern,collegeDetails};