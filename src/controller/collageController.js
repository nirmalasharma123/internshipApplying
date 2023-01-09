const collageModel=require("../model/college");
let validateName = /^([a-z  A-Z ]){2,10}$/;
let validateFullname=  /^([a-z  A-Z ]){2,50}$/;

//onst validatorUrl= require("mongoose-type-url")


const creatCollage=async function(req,res){
    try{
        //let data=req.body
        const {name,fullName,logoLink}=req.body;
        if(Object.keys(req.body).length==0) return res.status(404).send({status:false,msg:"please provide details"})

        if(!name)  return res.status(400).send({status:false,msg:"name is mandatory"});
        if(!validateName.test(name)) res.status(400).send({msg:"Enter valid Name"})
        
        if(!fullName)  return res.status(400).send({status:false,msg:"fullName is mandatory"});
        if(!validateFullname.test(fullName)) res.status(400).send({msg:"Enter validf fullname"})

        if(!logoLink)  return res.status(400).send({status:false,msg:"logoLink is mandatory"});
        //if(!validatorUrl.isUrl(logoLink)) return res.status(400).send({status:false,msg:"logoLink is invalid"})


    
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