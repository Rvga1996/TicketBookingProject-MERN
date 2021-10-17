var express =  require('express');
var router = express.Router();
var Ticket = require('../models/Tickets');
var Seat = require('../models/Seats');
var uuid = require('uuid');

router.post('/', (req,res) => {

    const ticketDetails = new Ticket({
        TicketNumber: uuid.v4(),
        BusNumber: req.body.busnumber,
        Date: req.body.date,
        SeatNo: req.body.seat,
        UserEmail: req.body.useremail,
        UserName: req.body.username,
        UserPhoneNumber: req.body.phonenumber
    });
    
    
    Seat.findOneAndUpdate({Number:parseInt(req.body.seat), BusNumber: req.body.busnumber}, {$set:{IsBooked:true}})
    .then((res) =>{
    ticketDetails.save()
    .then((result) => {
         res.send(result);
    })
    .catch((err)=> {
        console.log(err);
    })
    })
    .catch((err)=> {
        console.log(err);
    })
});

module.exports = router;