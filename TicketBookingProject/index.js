const express = require('express')
const mongoose = require('mongoose');
const dbURI = require('./server/config/DBConfig').MongoDBURI;
const BusDetails = require('./server/routes/Busdetails');
const LayoutDetails = require('./server/routes/Seatchart');
const TicketDetails = require('./server/routes/TicketDetails');

const app = express();
app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use('/search', BusDetails);
app.use('/layout', LayoutDetails);
app.use('/ticketinfo', TicketDetails);

mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
.then((result) => {
    console.log("Connected to DB");
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server Started....`));
})
.catch((err) => console.log(err));




