const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
    
{
    title:{
        type:String,
        requireed:true,
        unique:true
    },
    desc:{
        type:String,
        requireed:true,
    },
    photo:{
        type:String,
        requireed:false,
    },
    username:{
        type:String,
        requireed:true,
    },
    categories:{
        type:Array,
        requireed:false,
    }
},
{timestamps:true}

);

module.exports=mongoose.model("Post",PostSchema);