const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:27017/libraryapp');//library app name of database
mongoose.connect('mongodb+srv://userone:userone@clustertest.6ibup.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');

const Schema = mongoose.Schema; //taking Schema from mongoose

const UserSchema =new Schema({
    firstname:String,
    lastname:String,
    phonenumber:String,
    email:String,
    password:String
});
//embed schema in model #Model Creation instance of model is a document
var Userdata = mongoose.model('userdata',UserSchema);//userdatas is a collection_name and Userdata is a model that is to be exported

module.exports = Userdata;//pass the Userdata model 