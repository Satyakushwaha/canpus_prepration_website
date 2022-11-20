const mongoose=require("mongoose");

const userschema= new mongoose.Schema({
    u_name:{type:String,required: true},
    u_email:{type:String,required:true,unique:true},
    u_password:{
        type:String,
        required:true
    },
    c_password:{
        type:String,required:true
    }


})
//now we are creating a collection
const Register= new mongoose.model("Register",userschema);
module.exports=Register;