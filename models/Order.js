const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({

    orderNumber : {
        type : Number,
        required : true,
        unique : true 
    },                                          

    meal : {
        type : String,
        enum : ['chicken burger and fries','beef bruger and fries','ultra cheesy chicken pasta','thai lamb curry','carbonara','chinese fried rice',
            'mashed peas and fried fish','chicken biryani','beef pulao','whole grilled chicken','chicken tikka masala']
        
    },

    dessert : {
        type : String,
        enum : ['strawberry ice cream','jaffa cakes','lemon drizzle cake','cookies','jam tarts','cheesecake','pancakes','doughnuts']
        
    },

    drinks : {
        type : String,
        enum : ['coke zero','coke','fanta','sprite','pepsi','orange juice','apple juice','mango milkshake','raspberry slush','blueberry slush','vimto']
        
    },
    
    size : {
        type : String,
        enum : ['small','medium','large']
    },

    dinein_OR_takeaway : [{
        type : String,
        enum : ['Dine in','Take-away']
    }]
});

const Order = mongoose.model("Menu", orderSchema);
module.exports = Order;
