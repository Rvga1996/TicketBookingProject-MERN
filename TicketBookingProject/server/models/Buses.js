const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const busSchema = new Schema({
    TravelsName:{
       type:String
    },
    RegistrationNumber:{
      type:String
    },
    FromCity:{
        type:String
    },
    ToCity:{
        type:String
    },
    IsActive:{
        type:Boolean
    }
},{timestamps:true});

const Bus = mongoose.model('Bus', busSchema);

module.exports = Bus;