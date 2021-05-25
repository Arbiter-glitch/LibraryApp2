const express=require("express");
const adminRouter=express.Router();//new Route handler
const Bookdata = require('../model/Bookdata'); //getting Bookdata.js
function router(nav){
    
    var genre=["Romance","Comedy","Family","Horror","Drama","Cartoon","Fantasy","Crime","History","Poems","Novel","Sci-Fi","Light Novel"];
    
    
    adminRouter.get("/",(req,res)=>{//We can recognize that for books=>booksRouter
        //res.sendFile(__dirname+"/src/views/index.html");//__dirname to specify current directory name
        //for ejs
        err=req.query.error;
        firstname=req.query.firstname;
        lastname=req.query.lastname;
        res.render("addBook",{
            nav,
            genre,
            title:'Add',
            title1:'Add New Books',
            err
            
        });//already specified path
        
       
    });

   adminRouter.post('/add',(req,res)=>{
    const bk=req.body.bookname;
    Bookdata.findOne({bookname:bk},function(err,Book){
        if(!Book)
        {
    var item={
    bookname:req.body.bookname,
    authorname:req.body.authorname,
    pubdate:req.body.pubdate,
    genre:req.body.genre,
    bookimg:req.body.bookimg,
    authimg:req.body.authimg

    };
   var book= Bookdata(item);
   book.save();
 res.redirect("/books");
 }
 else{
    var error=encodeURIComponent("Book already Exists!");
    res.redirect("/admin?error="+error);
    
}
});
});
       
    return adminRouter;
    }
    
     module.exports = router;// entire module function exported function called as well




     




 