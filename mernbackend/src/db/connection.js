const mongoose =require("mongoose");
mongoose.connect("mongodb://localhost:27017/userRegistration",(err)=>{
    if(err)
    console.log("failed to connect");
    else
    {
        console.log("successfully connected to data base");
    }
})