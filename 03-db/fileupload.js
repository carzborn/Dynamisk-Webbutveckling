const express = require('express');
const multer = require('multer');
const app = express();

app.use(express.static('static'));

const storage = multer.diskStorage(
    {
        destination: (req, file, cb) => {
            cb(null, 'uploads');
        },
        filename: (req, file, cb) => {
            // cb(null, file.originalname + '-' + Date.now() + '.png');
            const strDate =(new Date).valueOf().toString();
            cb(null, strDate + '-' + file.originalname);
        }
    }
);
const multipartDataEncoder = multer({storage: storage} );

app.post('/upload', multipartDataEncoder.single('myFile'),  (req, res) => {
    console.log(req.file);
    res.send(req.file);
});

app.listen(3000, ()  => {
    console.log('Server started at http://localhost:3000');
})