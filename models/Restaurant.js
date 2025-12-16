const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({

    CustomerID: {
        type: Number,
        required: true,
        unique: true
    },

    OrderID: [{
        type: Number,
        required: true
    }]
})

// look into schema then route
// make schema for customer and items
const Restaurant = mongoose.model('Restaurant', restaurantSchema)
module.exports = Restaurant;