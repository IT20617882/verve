const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const driverSchema = new Schema({


  
    
    deliveryStatus : {
        type : String,
       
    },
    referenceNo:{
        type : String,
       
    }

    
})

const Driver = mongoose.model("Driver",driverSchema);

module.exports = Driver;