const mongoose = require('mongoose');

const employee = mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    department: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    }


})

module.exports = mongoose.model('Employee', employee);



