//
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const deliverySchema = new Schema({


    date : {
        type : Date,
        required : true
    },
   
    driverId : {
        type : String,
        required : true
    },
    timeOfDispatch:{
        type : Date,
        required : true
    }

    
})

const Delivery = mongoose.model("Delivery",deliverySchema);

module.exports = Delivery;