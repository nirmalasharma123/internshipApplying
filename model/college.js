const mongoose= require("mongoose");
const collegeSchema=new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        lowercase:true,
        required:true,
        unique:true
    },
    fullName:{
        type:String,
        lowercase:true,
        trim:true,
        required:true,
    },
    logoLink:{
        type:String,
        required:true
    },
    isDeleted:{
        type:Boolean,
        default:false
    },
},{timestamps:true})

module.exports=mongoose.model("college",collegeSchema)
