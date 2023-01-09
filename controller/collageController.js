const collageModel=require("../model/college");


const creatCollage=async function(req,res){
    try{
        //let data=req.body
        const {name,fullName,logoLink}=req.body
        if(!name) res.status(400).send({status:false,msg:"name is mandatory"});
        if(!fullName) res.status(400).send({status:false,msg:"fullName is mandatory"});
        if(!logoLink) res.status(400).send({status:false,msg:"logoLink is mandatory"});
        let newName=name.trim();
        let fullname=fullName.trim();
        let logo=logoLink.trime();
        newName=name;
        fullname=fullName;
        logo=logoLink;

       let collageName= await collageModel.find({name:name});
       if(collageName)  return res.status(401).send({satus:false,msg:" collage name already exsist"})
       let newCollage=await collageModel.create(req.body);
       return res.status(201).send({satus:true,data:newCollage});

    }catch(error){
        res.status(500).send({status:false,msg:error.message})
    }
}

module.exports={creatCollage}