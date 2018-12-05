// requiring node modules
const path = require('path');
// requiring 3rd party modules
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

//creating an express application
const app = express();
const PUBLICPATH = path.join(__dirname, '../public');
const PORT = 4000;

// using the body-parser middle to parse
// req.body objects to a JSON
app.use(bodyParser.json());

// using express static middleware to serve
// static files in the PUBLICPATH folder
app.use(express.static(PUBLICPATH));

// handing a POST request by the client
// responding using the weather information
app.post('/api/location', function (req, res) {
    // note that the body property of req is now parsed
    // into a JS object from a JSON format using body-parser
    let location = req.body;

    axios.get(`https://api.darksky.net/forecast/01f9e6361372fc3b78310e171d41181a/${location.latitude},${location.longitude}`)
        .then(function (response) {
            console.log(response.data.currently);
            res.send(response.data.currently);
        }).catch(function (err) {
            console.log(err);
        });
});

//listener function to listen for HTTP requests
app.listen(PORT, function () {
    console.log(`Server listening on port ${PORT}`);
});