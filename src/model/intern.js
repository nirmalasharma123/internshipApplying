const mongoose= require("mongoose");

const internSchema=new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true
    },
    email:{
        type:String,
        lowercase:true,
        trim:true,
        required:true,
        unique:true
    },
    mobile:{
        type:String,
        required:true,
        unique:true
    },
    collageId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"collage",
        required:true
    },
    isDeleted:{
        type:Boolean,
        default:false
    },
},{timestamps:true})

module.exports=mongoose.model("intern",internSchema)