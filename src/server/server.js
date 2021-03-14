const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 3000;
const app = express();
app.use(bodyParser.json());
app.use(cors());


// MongoDB connection
const dburi = "mongodb+srv://ctpdb:AYE0KsBT3tXkFxjQ@corona-tracker.ojwsm.mongodb.net/corona-tracker?retryWrites=true&w=majority";
const mongoose = require("mongoose");
mongoose.connect(dburi, { useNewUrlParser: true, useUnifiedTopology: true }).then((result) => {
    console.log("server connected to MongoDB");
    app.listen(PORT, function () {
        console.log("server listening on port: " + PORT);
    });
}).catch((err) => {
    console.log(err);
})
const User = require('./models/user.ts');




//CORS adapter
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});




app.get('/', function (req, res) {
    console.log("server: default get function");
    res.send("default get function works");
});

app.get('/hello', function (req, res) {
    console.log("server: hello");
    res.send("hello from server");
});

app.post('/registerUser', (req, res) => {
    User.findById(req.body.emailAddress).then((result)=>{
        if (result == null) {
            console.log("registering new user");
            newUser = new User({
                _id: req.body.emailAddress,
                firstName: req.body.userInfo.firstName,
                lastName: req.body.userInfo.lastName,
                dateOfBirth: req.body.userInfo.dateOfBirth,
                password: req.body.password
            });
            newUser.save().then((result) => {
                console.log("new user saved successfuly");
                console.log(result);
                res.send({ 'message': 'success' });
            }).catch((err) => {
                console.log(err);
                res.send({ 'message': err });

            });
        } else{
            res.send({ 'message': 'Email already exists' });
        }
    });
});

function findUser(userEmail) {
    User.findById(userEmail).then((response) => {
        if (response == null) {
            console.log("user was NOT found");
            return false;
        } else {
            console.log("user was found");
            return true;
        }
    }).catch((err) => {
        console.log("error" + err);
        return false;
    })
}

app.post('/loginUser', (req,res)=>{
    let enteredEmail = req.body.enteredEmail;
    let enteredPassword = req.body.enteredPassword;
    User.findById(enteredEmail).then((response)=>{
        if(response==null){
            res.send({"message": "email address does not exist"});
        } else if( response.password != enteredPassword){
            res.send({"message": "incorrect password"});
        } else{
            res.send({"message": "success", "fullName" : response.firstName +" "+ response.lastName});
        }
    }).catch((err)=>{
        res.send({"message": "error"});
    });
});