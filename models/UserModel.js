const mongoose = require("mongoose")


const userSchema = mongoose.Schema({
name:{type:String,required:true},
email:{type:String,required:true},
password:{type:String,required:true},
role:{type:String,required:true},
image:{type:String,required:true},
contact:{type:String,required:true},
totalq:{type:Number},
points:{type:Number},
},{
    versionKey:false
})


const UserModel = mongoose.model("/user",userSchema)

module.exports={
    UserModel
}