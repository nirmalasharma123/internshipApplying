const mongoose= require("mongoose");

const internSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
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
        ref:"collage"
    },
    isDeleted:{
        type:Boolean,
        default:false
    },
},{timestamps:true})

module.exports=mongoose.model("intern",internSchema)