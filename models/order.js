const mongoose = require('mongoose');
const { stringify } = require('querystring');

// what is schema?
//

const userSchema = new mongoose.Schema({
    ID: {
        type: Number,
        required: true,
        unique: true
    },
    customerID: {
        type: Number,
        required: true,
        unique: true
    },
    items: [{
        type: Number,
        required: true
    }]
})