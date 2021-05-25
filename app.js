
const express=require("express");
const app = express();//or const app = new express();
const port=process.env.PORT || 3300 ;
const nav =[{
    link:'/books',name:'Books'
},
{
    link:'/author',name:'Authors'
},
{
    link:'/signin',name:'Login'
},
{
    link:'/signup',name:'Register'
}];
const nav1 =[
{
    link:'/signin',name:'Login'
},
{
    link:'/signup',name:'Register'
}];

const booksRouter=require('./src/routes/bookRoutes')(nav);//also pass nav array to other router files
const authorRouter=require('./src/routes/authorRoutes')(nav);
const signinRouter=require('./src/routes/signinRoutes')(nav);
const signupRouter=require('./src/routes/signupRoutes')(nav);
const adminRouter=require('./src/routes/adminRoutes')(nav);


app.use(express.urlencoded({extended:true}));
app.use(express.static("./public"));//css,images and js files are static files in express in public folder path!!
app.set('view engine','ejs');
app.set('views','./src/views'); //or app.set('views',__dirname+'src/views');  -->path specification
app.use('/books',booksRouter);//For /books we take this routehandler not app
app.use('/author',authorRouter);
app.use('/signin',signinRouter);
app.use('/signup',signupRouter);
app.use('/admin',adminRouter);



app.get("/",(req,res)=>{
    //res.sendFile(__dirname+"/src/views/index.html");//__dirname to specify current directory name
    //for ejs
    
    res.render("index",{
        nav1,
        title:'Library',
        
    });//already specified path
    
   
});
app.get("/u",(req,res)=>{
    //res.sendFile(__dirname+"/src/views/index.html");//__dirname to specify current directory name
    //for ejs
    firstname=req.query.firstname;
    lastname=req.query.lastname;
    res.render("indexu",{
        nav,
        title:'Library',
        firstname,
        lastname
    });//already specified path
    
   
});


app.listen(port,()=>{
    console.log("SERVER ready at PORT "+port);
});
