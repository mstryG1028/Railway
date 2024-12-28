const mongoose=require("mongoose");

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/RegistrationKurla');
}

main()
.then((res)=>{
    console.log("successful")
}).catch((err)=>{
    console.log(err)
});