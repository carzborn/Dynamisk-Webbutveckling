

const express = require('express');
const path = require('path');
const app = express();

//  Respond to GET requests for '/'
app.get('/', (req, res) => {
    //  req = information about the incoming request
    //  res = method to send a answer to the request

    console.log(req.method, req.url);
    res.send('Moi kegen Messi!');
});

//  Respond for get requests for '/nom'
app.get('/index', (req, res) => {
    console.log(req.method, req.url);
    res.sendFile(path.join(__dirname,'/pages/index.html'));
});

app.get('/nom', (req, res) => {
    res.sendFile(path.join(__dirname,'/pages/nom.html'));
});

app.get('/about', (req, res) => {
   res.sendFile(path.join(__dirname,'/pages/about.html'));
});



//  Start listening for incoming requests on port 3000
app.listen(3000, () => {
    console.log("Kegen is here!");
});