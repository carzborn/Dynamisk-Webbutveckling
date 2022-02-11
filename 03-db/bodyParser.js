const express = require('express');
const app = express();

app.use(express.static('static'));

app.get('/bodyParser', (req,res) => {
    console.log('GET /bodyParser');
    console.log("Name =" + req.query.name);
    console.log("Profile =" + req.query.profile);
    res.send('OK')
})

/*
const bodyParser = require('body-parser');
const urlEncodedBodyParser = bodyParser.urlencoded({extended: false});
*/

app.post('/bodyParser', express.urlencoded({ extended: false }), (req, res) => {
    console.log(req.query);
    console.log(req.body);
    console.log("Name = " + req.body.name);
    console.log("Profile = " + req.body.profile);
    res.send('OK');
});

app.listen(3000, () => {
    console.log('Server started at http://localhost:3000');
});