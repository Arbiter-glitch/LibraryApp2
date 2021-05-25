
const express=require("express");
const authorRouter=express.Router();//new Route handler
const Bookdata = require('../model/Bookdata'); //getting Bookdata.js
function router(nav){
  

var genre=["Romance","Comedy","Family","Horror","Drama","Cartoon","Fantasy","Crime","History","Poems","Novel","Sci-Fi","Light Novel"];
    

authorRouter.get("/",(req,res)=>{//We can recognize that for books=>booksRouter
    //res.sendFile(__dirname+"/src/views/index.html");//__dirname to specify current directory name
    //for ejs
    firstname=req.query.firstname;
    lastname=req.query.lastname;
    Bookdata.find()
    .then(function(authors){
        res.render("authors",{
            nav,
            title:'Library',
            authors,
            firstname,
            lastname
        });//already specified path
    });
    
   
});
authorRouter.get("/:id",(req,res)=>{
    const id=req.params.id;
    firstname=req.query.firstname;
    lastname=req.query.lastname;
    Bookdata.findOne({_id:id})
    .then(function(author){
        res.render("author",{
            nav,
            title:'Library',
            author,
            firstname,
            lastname
        });//already specified path
    });
});
    authorRouter.get("/delete/:id",(req,res)=>{
        firstname=req.query.firstname;
        lastname=req.query.lastname;
        const id=req.params.id;
        Bookdata.deleteOne({_id:id})
        .then(function(){
           res.redirect("/author?firstname="+firstname+"&lastname="+lastname);
            });//already specified path
        });


    authorRouter.get("/updateall/:id",(req,res)=>{
        firstname=req.query.firstname;
        lastname=req.query.lastname;
         const id=req.params.id;
         Bookdata.findOne({_id:id})
         .then(function(author){
               res.render("update",{
                   nav,
                   title:'Update',
                   title1:'Update data',
                   author,
                   genre
               });
                });//already specified path
            });

            authorRouter.post("/updateall/:id/submit",(req,res)=>{
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
                       res.redirect("/books");
                        });//already specified path
             });
      
    
   
     
return authorRouter;
}

 module.exports = router;// entire module function exported function called as well
 