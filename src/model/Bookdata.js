const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:27017/libraryapp');//library app name of database
mongoose.connect('mongodb+srv://userone:userone@clustertest.6ibup.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');

const Schema = mongoose.Schema; //taking Schema from mongoose

const BookSchema =new Schema({
    bookname:String,
    authorname:String,
    pubdate:String,
    genre:String,
    bookimg:String,
    authimg:String
});
//embed schema in model #Model Creation instance of model is a document
var Bookdata = mongoose.model('bookdata',BookSchema);

module.exports = Bookdata;//pass the Bookdata