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
    res.send({
        time: 1544094925,
        summary: 'Sleeting Weather',
        icon: 'sleet',
        precipIntensity: 0,
        precipProbability: 0,
        temperature: 92.71,
        apparentTemperature: 92.71,
        dewPoint: 38.39,
        humidity: 0.15,
        pressure: 1010.15,
        windSpeed: 14.55,
        windGust: 19.21,
        windBearing: 38,
        cloudCover: 0.28,
        uvIndex: 9,
        visibility: 10,
        ozone: 245.12
    });
});

//listener function to listen for HTTP requests
app.listen(PORT, function () {
    console.log(`Server listening on port ${PORT}`);
});