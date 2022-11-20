const apath=require("../../absolutepath.js")

const express=require("express");
const path=require("path");
app=express();
require("./db/connection");
const Register=require("./models/registerschema");
const {json}=require("express");
const port=process.env.PORT||3000;
const static_path=path.join(__dirname,"../public");
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//all the files are served statically useing middleware and get request for reading purpose 
app.use(express.static(static_path)); 

app.get("/",(req,res)=>{
    const indexpath= path.join(apath,"/index.html");
    console.log(indexpath);
    res.sendFile(indexpath);
});
app.get("/home.html|home",(req,res)=>{
    const indexpath= path.join(apath,"/index.html");
    console.log(indexpath);
    res.sendFile(indexpath);
});
app.get("/about.html|about",(req,res)=>{
    const aboutpath= path.join(apath,"/about.html");
    console.log(aboutpath);
    res.sendFile(aboutpath);
});
app.get("/aptitude.html|aptitude",(req,res)=>{
    const aptitudepath= path.join(apath,"/aptitude.html");
    console.log(aptitudepath);
    res.sendFile(aptitudepath);
});
app.get("/reasoning.html|reasoning",(req,res)=>{
    const reasoningpath= path.join(apath,"/reasoning.html");
    console.log(reasoningpath);
    res.sendFile(reasoningpath);
});
app.get("/verbalability.html|verbalability",(req,res)=>{
    const varbalpath= path.join(apath,"/verbal.html");
    console.log(verbalpath);
    res.sendFile(verbalpath);
});
app.get("/registration.html|registration",(req,res)=>{
    const registerpath= path.join(apath,"/registration.html");
    console.log(registerpath);
    res.sendFile(registerpath);
});
app.get("/login.html|login",(req,res)=>{
    const loginpath= path.join(apath,"/login.html");
    console.log(loginpath);
    res.sendFile(loginpath);
});
app.post("/registration",async (req,res)=>{
    try{
      const u_password=req.body.u_password;
      const c_password=req.body.c_password;
      console.log(u_password, c_password);
      if(u_password===c_password)
      {
        const registeruser= new Register({
            u_name:req.body.u_name,
            u_email:req.body.u_email,
            u_password:req.body.u_password,
            c_password:req.body.c_password
        })
        const registered=await registeruser.save();
        const indexpath= path.join(apath,"/index.html");
       
        
        res.status(201).sendFile(indexpath);
      
      }
      else
      {
        res.send("invalid credentials");
      }
    }
    catch(error)
    {
        res.status(400).send(error);
    }

})
app.post("/login",async(req,res)=>{
    try{
        const u_emailb=req.body.u_email;
        const u_password=req.body.u_password;
        const user_email=await Register.findOne({u_email:u_emailb})
       if(user_email.u_password===u_password)
       {
        
        const indexpath= path.join(apath,"/index.html");
       
        
        res.status(201).sendFile(indexpath);
       }
       else
       {
        res.send("invalid email or password");
       }
    }
    catch(error)
    {
        res.status(400).send("invalid error occur during login")
    }
})

app.listen(port,()=>{
    console.log(`server is running at port ${port}`); 
})