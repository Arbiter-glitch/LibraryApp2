
const express=require("express");
const booksRouter=express.Router();//new Route handler
const Bookdata = require('../model/Bookdata'); //getting Bookdata.js
function router(nav){





booksRouter.get("/",(req,res)=>{//We can recognize that for books=>booksRouter
    //res.sendFile(__dirname+"/src/views/index.html");//__dirname to specify current directory name
    //for ejs
    firstname=req.query.firstname;
    lastname=req.query.lastname;
    Bookdata.find()
    .then(function(books){
        res.render("books",{
            nav,
            title:'Library',
            books,
            firstname,
            lastname
        });//already specified path
    });
   
    
   
});
booksRouter.get("/:id",(req,res)=>{
    const id=req.params.id;
    firstname=req.query.firstname;
    lastname=req.query.lastname;
    Bookdata.findOne({_id:id})
    .then(function(book){
        res.render("book",{
            nav,
            title:'Library',
            book,
            firstname,
            lastname
        });//already specified path
    })
    booksRouter.get("/delete/:id",(req,res)=>{
        firstname=req.query.firstname;
        lastname=req.query.lastname;
        const id=req.params.id;
        Bookdata.deleteOne({_id:id})
        .then(function(){
           res.redirect("/books?firstname="+firstname+"&lastname="+lastname);
            });//already specified path
        });
    
   
});
return booksRouter;
}

 module.exports = router;// entire module function exported function called as well
 