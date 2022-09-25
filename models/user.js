const mongoose = require('mongoose')
const {ObjectId}=mongoose.Schema.Types
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    pic:{
        type:String,
        default:"https://res.cloudinary.com/prit/image/upload/v1663854934/nopro_l8zacm.png"
    },
    followers:[{type:ObjectId,ref:"User"}],
    following:[{type:ObjectId,ref:"User"}]

})

const user=mongoose.model("User", userSchema)
module.exports=user;