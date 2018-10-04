const express = require('express');
const app = express();
const path = require('path');
//var router = express.Router();

var invoicelookup = require('./server/routes/invoicelookup');

//need pm3 
/*
if(['production'].includes(process.env.NODE_ENV)){
    app.use(express.static('ui/build'));

    app.get('/', (req, res) => {
        console.log('in get');
        res.sendFile(path.resolve('ui', 'build', 'index.html'));
    });
}*/
//setting up the basic app
app.use(express.static('ui/build'));

//these will be setting in API routes
app.use('/invoice', invoicelookup);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('Listening on Port', PORT);
});
