const mongoose =require('mongoose')
const path= require('path')

const employeeSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String   
    },
    mobile:{
        type:String
    },
    city:{
        type:String
    }
});

employeeSchema.path('email').validate(function (email) {
    var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailRegex.test(email); // Assuming email has a text attribute
 }, 'The e-mail is invalid')

module.exports = mongoose.model('employees',employeeSchema)