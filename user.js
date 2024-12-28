const mongoose=require("mongoose");

const userschemakurla=new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:Number,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})

const UserKurla= mongoose.model("UserKurla",userschemakurla);
module.exports = UserKurla;