

const express = require('express');
const app = express();

//  Respond to GET requests for '/'
app.get('/', (req, res) => {
    //  req = information about the incoming request
    //  res = method to send a answer to the request

    console.log(req.method, req.url);
    res.send('Moi kegen Messi!');
});

//  Respond for get requests for '/nom'
app.get('/nom', (req, res) => {
    console.log(req.method, req.url);
    res.send('Moi messi olsson silva')
});

app.get('/api/nom', (req, res) => {
    res.send({msg: 'kegen är kingen'});
});

app.get('/about', (req, res) => {
    console.log(req.method, req.url);
    res.write('<h1>about</h1>');
    res.write('<p>this is the about page</p>');
});

//  Start listening for incoming requests on port 3000
app.listen(3000, () => {
    console.log("Kegen is here!");
});