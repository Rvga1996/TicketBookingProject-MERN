const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const seatSchema = new Schema({
    Number:{
       type:String
    },
    IsWindow:{
        type:Boolean
    },
    Price:{
        type:Number
    },
    BusNumber:{
        type:String
    },
    IsBooked:{
        type:Boolean
    }
},{timestamps:true});

const Seat = mongoose.model('seat', seatSchema);

module.exports = Seat;