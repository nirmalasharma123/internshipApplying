const collageModel=require("../model/college");
const validate = require("../validator/validator");
let validator=require("validator")//// mongoose validator



const creatCollage=async function(req,res){
    try{
        
        const {name,fullName,logoLink}=req.body;
        if(Object.keys(req.body).length==0) return res.status(404).send({status:false,msg:"please provide details"})
//==========================================validator for name ============================================
        
        if(!name)  return res.status(400).send({status:false,msg:"name is mandatory"});
        if(!validate.isvalidName(name))  return res.status(400).send({msg:"Enter valid Name"})
    

 //==========================================validator for full name ============================================
    
        if(!fullName)  return res.status(400).send({status:false,msg:"fullName is mandatory"});

 //==========================================validator for logo ============================================

        if(!logoLink)  return res.status(400).send({status:false,msg:"logoLink is mandatory"});
        if(!validate.isvalidLink(logoLink) || !validator.isURL(logoLink))  return res.status(400).send({msg:"Enter valid url"})
     
//==========================================validator for finding name  ============================================

       let collageName= await collageModel.find({name:name});
       if(collageName.length!=0)  return res.status(401).send({satus:false,msg:" collage name already exsist"});

       let duplicatedFullname=await collageModel.find({fullName:fullName});
       if(duplicatedFullname.length!=0)  return res.status(401).send({satus:false,msg:" collage  full name already exsist"});


       let newCollage=await collageModel.create(req.body); 
       
       return res.status(201).send({satus:true,data:newCollage});

    }catch(error){
        res.status(500).send({status:false,msg:error.message})
    }
}

module.exports={creatCollage}

