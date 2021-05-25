const express=require("express");
const signinRouter=express.Router();//new Route handler
const nav =[
    {
        link:'/signin',name:'Login'
    },
    {
        link:'/signup',name:'Register'
    }];
const Userdata= require("../model/Userdata");
function router(){

    
    
    
    signinRouter.get("/",(req,res)=>{//We can recognize that for books=>booksRouter
        //res.sendFile(__dirname+"/src/views/index.html");//__dirname to specify current directory name
        //for ejs
         err=req.query.error;
        res.render("signin",{
            nav,
            title:'Login',
            err
        });//already specified path
        
       
    });
    signinRouter.post("/u",(req,res)=>{//We can recognize that for books=>booksRouter
        const emph=req.body.email;
        const password=req.body.password;
       Userdata.findOne({$or:[{email:emph},{phonenumber:emph}]},function(err,user){
           if(!user){
             var error=encodeURIComponent("Wrong Email or Phonenumber!");
            res.redirect("/signin?error="+error);
           
           }
        else if(password==user.password){
            var firstname=encodeURIComponent(user.firstname);
            var lastname=encodeURIComponent(user.lastname);
            res.redirect("/u?firstname="+firstname+"&lastname="+lastname);   //Redirects to home page with the name of the User
        }
        else if(password!=user.password){   
            var error=encodeURIComponent("Wrong Password!");
            res.redirect("/signin?error="+error);
        }
       
      });
       
    });
    
    return signinRouter;
    }
    
     module.exports = router;// entire module function exported function called as well