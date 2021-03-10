const express= require('express');
const bodyParser= require('body-parser');
const cors= require('cors');
const PORT = 3000;
const app = express();
app.use(bodyParser.json());
app.use(cors());


// MongoDB connection
const dburi = "mongodb+srv://ctpdb:AYE0KsBT3tXkFxjQ@corona-tracker.ojwsm.mongodb.net/corona-tracker?retryWrites=true&w=majority";
const mongoose = require("mongoose");
mongoose.connect(dburi , {useNewUrlParser: true, useUnifiedTopology: true}).then((result)=>{
    console.log("server connected to MongoDB");
    app.listen(PORT, function(){
        console.log("server listening on port: "+PORT);
    });
}).catch((err)=>{
    console.log(err);
})
const User = require('./models/user.ts');




//CORS adapter
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});




app.get('/',function(req,res){
    console.log("server: default get function");
    res.send("default get function works");
});

app.get('/hello', function(req,res){
    console.log("server: hello");
    res.send("hello from server");
});

app.post('/registerUser',function(req,res){
    newUser = new User({
        firstName: req.body.userInfo.firstName,
        lastName:req.body.userInfo.lastName ,
        dateOfBirth : req.body.userInfo.dateOfBirth,
        emailAddress: req.body.emailAddress,
        password: req.body.password
    });
    newUser.save().then((res)=>{
        console.log("new user saved successfuly");
        return res.status(200).send({'message': 'success'});
    }).catch((err)=>{
        console.log(err);
        return res.status(200).send({'message': err});
    });
});