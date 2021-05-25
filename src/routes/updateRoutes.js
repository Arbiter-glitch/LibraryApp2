
const express=require("express");
const updateRouter=express.Router();//new Route handler
const Bookdata = require('../model/Bookdata'); //getting Bookdata.js
function router(nav){
  

var genre=["Romance","Comedy","Family","Horror","Drama","Cartoon","Fantasy","Crime","History","Poems","Novel","Sci-Fi","Light Novel"];
    


updateRouter.get("/:id",(req,res)=>{
    const id=req.params.id;
    firstname=req.query.firstname;
    lastname=req.query.lastname;
    Bookdata.findOne({_id:id})
    .then(function(author){
        res.render("update",{
            nav,
            title:'Library',
            title1:'Update data',
            author,
            firstname,
            lastname,
            genre
        });//already specified path
    });
});

            updateRouter.post("/updateall/submit/:id",(req,res)=>{
                firstname=req.query.firstname;
                lastname=req.query.lastname;
                 const id=req.params.id;
                 var item={
                    bookname:req.body.bookname,
                    authorname:req.body.authorname,
                    pubdate:req.body.pubdate,
                    genre:req.body.genre,
                    bookimg:req.body.bookimg,
                    authimg:req.body.authimg
                
                    };
                 Bookdata.updateOne({_id:id},item)
                 .then(function(author){
                       res.redirect("/authors")
                        });//already specified path
                    });
      
    
   
     
return updateRouter;
}

 module.exports = router;// entire module function exported function called as well
 