var express =  require('express');
var router = express.Router();
var Layout = require('../models/BusLayout');
var Seat = require('../models/Seats');

router.post('/', (req,res) => {

    Layout.find({'BusNumber':req.body.busnumber}).
    then((layoutResult) => {
       Seat.find({'BusNumber':req.body.busnumber}).then(
           (seatResult) => {
               res.send({layout:layoutResult, seatData: seatResult});
           }
       )
       .catch((err) =>{
           console.log(err);
       })
    })
    .catch((err)=> {
        console.log(err);
    })
});

module.exports = router;