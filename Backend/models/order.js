const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//wafra
const orderSchema = new Schema({

    ID : {
        type : String,
    },
    address : {
        type: String,
        required: true
    },
    contactNO : {
        type: Number,
        required: true
        
    },
    quantity : {
        type : Number,
        required: true
    },
    

    
})

const Order = mongoose.model("Order",orderSchema);

module.exports = Order;