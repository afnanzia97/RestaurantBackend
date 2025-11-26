const mongoose = require('mongoose');
const { stringify } = require('querystring');


const restaurantSchema = new mongoose.Schema({

    CustomerID: {
        type: Number,
        required: true,
        unique: true
    },

    Menu: [{
        type: Number,
        required: true
    }]
})

// look into schema then route
// make schema for customer and items
const Restaurant = mongoose.model('Restaurant', RestaurantSchema)
module.exports = Restaurant;