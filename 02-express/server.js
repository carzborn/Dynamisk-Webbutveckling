

const express = require('express');
const path = require('path');
const app = express();
const oneliners = require('./data/oneliners.json');

// inject logic to al incoming requests
app.use((req, res, next)    => {
    console.log(`Incoming ${req.method} request for ${req.url}`);
    next();
});
//  Respond to GET requests for '/'
app.get('/', (req, res) => {
    //  req = information about the incoming request
    //  res = method to send a answer to the request

    console.log(req.method, req.url);
    res.send('Moi kegen Messi!');
});

app.get('/jokes', (req, res) => {
    const i = Math.floor( Math.random() * oneliners.length);
    const oneliner = oneliners[i];
    // const oneliner = _.sample(oneliners);
    res.send(oneliner);
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

// app.use(express.static());


//  Start listening for incoming requests on port 3000
app.listen(3000, () => {
    console.log("Kegen is here!");
});