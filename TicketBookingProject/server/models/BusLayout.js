const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const layoutSchema = new Schema({
    WindowSeats:{
        type:Number
    },
    AisleSeats:{
        type:Number
    },
    SeatsPerRow:{
        type:Number
    },
    TotalSeats:{
        type:Number
    },
    BusNumber:{
        type:String
    }
});

const Layout = mongoose.model('layout',layoutSchema);

module.exports = Layout;