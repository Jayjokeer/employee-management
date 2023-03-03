const mongoose =require('mongoose')

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
})

module.exports = mongoose.model('employees',employeeSchema)