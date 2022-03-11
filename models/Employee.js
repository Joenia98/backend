const {Schema, model} = require('mongoose')

const employeeSchema = new Schema({
    name_employee:{
        type: String,
        required:true
    },
    lname_employee:{
        type: String,
        required:true
    },
    email_employee:{
        type: String,
        required:true
    },
    nationality:{
        type: String,
        required:true
    },
    phone_employee:{
        type: String,
        required:true,
        match: [
            /^(\d{10})$/,
            "Provide a valid phone number",
          ],
         
    },
    civil_status:{
        type: String,
        required:true
    },
    birthday:{
        type: String,
        required:true,
    },
})

module.exports = model('Employee', employeeSchema)