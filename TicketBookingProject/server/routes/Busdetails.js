var express =  require('express');
var router = express.Router();
var Bus = require('../models/Buses');

router.post('/' ,(req,res) => {
    console.log(req.body); //{'FromCity':req.body.From, 'ToCity': req.body.To}
    Bus.find({'FromCity':req.body.From, 'ToCity': req.body.To}).
    then((result) => {
        res.send(result)
    })
    .catch((err)=> {
        console.log(err);
    })
});

router.get('/all' ,(req,res) => {
    console.log(req.body);
    Bus.find().
    then((result) => {
        res.send(result)
    })
    .catch((err)=> {
        console.log(err);
    })
});

module.exports = router;


