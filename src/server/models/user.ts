const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    _id: {
        type:String,
        required:true,
        unique:true,
        trim: true
    },
    firstName: {
        type:String,
        trim: true,
        required:true
    },
    lastName: {
        type:String,
        trim: true,
        required:true
    },
    dateOfBirth : String,

    password: {
        type:String,
        required:true
    }
},{timestamps:true});

const User = mongoose.model('User',userSchema);
module.exports = User;