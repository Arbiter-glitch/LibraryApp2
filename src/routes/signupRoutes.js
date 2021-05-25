const express=require("express");
const signupRouter=express.Router();//new Route handler
const Userdata= require('../model/Userdata');
const nav =[
{
    link:'/signin',name:'Login'
},
{
    link:'/signup',name:'Register'
}];
function router(){

    

    signupRouter.get("/",(req,res)=>{//We can recognize that for books=>booksRouter
        //res.sendFile(__dirname+"/src/views/index.html");//__dirname to specify current directory name
        //for ejs
        err=req.query.error;
        res.render("signup",{
            nav,
            title:'Register',
            err
        });//already specified path
        
       
    });
    signupRouter.post("/u",(req,res)=>{//We can recognize that for books=>booksRouter
        //res.sendFile(__dirname+"/src/views/index.html");//__dirname to specify current directory name
        //for ejs
        const em=req.body.email;
        const pn=req.body.phonenumber;
        Userdata.findOne({$or:[{email:em},{phonenumber:pn}]},function(err,user){
            if(!user){
                var items={
                    firstname:req.body.firstname,
                    lastname:req.body.lastname,
                    phonenumber:req.body.phonenumber,
                    email:req.body.email,
                    password:req.body.password
                };
        
                var user=Userdata(items);
                user.save();
                res.redirect('/signin');
            
            }
            else{
                var error=encodeURIComponent("User already Exists!");
            res.redirect("/signup?error="+error);
                
            }
        });
       
    });
       
    return signupRouter;
    }
    
     module.exports = router;// entire module function exported function called as well