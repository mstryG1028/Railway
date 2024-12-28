const mongoose=require("mongoose");

const dataSchemakurla=new mongoose.Schema({
unitNo:{
    type:Number, 
      required:true  
},
coachNo:{
    type:Number,
    required:true 
        
},
coachType:{
    type:String, 
    required:true
        
},
commisionDate:{
    type:Date,
    required:true 
},
POHDate:{
    type:Date,
    required:true 
},
IADate:{
    type:Date,
    required:true 
},
TIDate:{
    type:Date,
    required:true 
},
ICDate:{
    type:Date,
    required:true 
},
USTDate:{
    type:Date,
    required:true
},

    WashingDate:{
        type:Date,
        required:true
            
    }
});
   
const DataKurla= mongoose.model("DataKurla",dataSchemakurla);
module.exports =DataKurla;