const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const travelsSchema = new Schema({
    Name:{
       type:String
    },
    Cities:[{
        type:Array 
    }],
    IsActive:{
        type:Boolean
    }
},{timestamps:true});

const Travel = mongoose.model('travel', travelsSchema);

module.exports = Travel;