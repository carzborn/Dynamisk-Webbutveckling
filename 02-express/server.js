

const express = require('express');
const path = require('path');
const lodash = require('lodash');
const morgan = require('morgan');
const oneliners = require('./data/oneliners.json');

const app = express();

// tell express to use EJS as veiwengine
app.set('view engine', 'ejs');

// inject logic to al incoming requests
// app.use((req, res, next)    => {
//     console.log(`Incoming ${req.method} request for ${req.url}`);
//     next();
// });

// Log stuff
app.use(morgan('dev'));

//  Respond to GET requests for '/'
app.get('/', (req, res) => {
    //  req = information about the incoming request
    //  res = method to send a answer to the request

    console.log(req.method, req.url);
    res.send('Moi kegen Messi!');
});

app.get('/jokes', (req, res) => {
    // const i = Math.floor( Math.random() * oneliners.length);
    // const oneliner = oneliners[i];
    const oneliner = lodash.sample(oneliners);

    res.render('jokes', {oneliner});
});

//  Respond for get requests for '/nom'
// app.get('/index', (req, res) => {
//     console.log(req.method, req.url);
//     res.sendFile(path.join(__dirname,'/pages/index.html'));
// });

// app.get('/nom', (req, res) => {
//     res.sendFile(path.join(__dirname,'/pages/nom.html'));
// });

// app.get('/about', (req, res) => {
//    res.sendFile(path.join(__dirname,'/pages/about.html'));
// });

app.use(express.static('pages'));


//  Start listening for incoming requests on port 3000
app.listen(3000, () => {
    console.log("Kegen is here!");
});