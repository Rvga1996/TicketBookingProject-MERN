const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
    TicketNumber:{
        type:String
    },
    Date:{
        type:Date
    },
    SeatNo:{
        type:Number
    },
    FromCity:{
       type:String
    },
    ToCity:{
        type:String
     },    
    BusNumber:{
        type:String
    },
    StartTime:{
        type:String
    },
    UserName:{
        type:String
    },
    UserEmail:{
        type:String
    },
    UserPhoneNumber:{
        type:String
    }
},{timestamps:true});

const Ticket = mongoose.model('ticket', ticketSchema);

module.exports = Ticket;