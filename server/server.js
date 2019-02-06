// requiring node modules
const path = require('path');
// requiring 3rd party modules
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

//creating an express application
const app = express();
const PUBLICPATH = path.join(__dirname, '../public');
const PORT = process.env.PORT || 4000;

// using the body-parser middle to parse
// req.body objects to a JSON
app.use(bodyParser.json());

// using express static middleware to serve
// static files in the PUBLICPATH folder
app.use(express.static(PUBLICPATH));

// handing a POST request by the client
// responding using the weather information
app.post('/api/location', function (req, res) {
    // res.send({
    //     time: 1544094925,
    //     summary: 'Sleeting Weather',
    //     icon: 'sleet',
    //     precipIntensity: 0,
    //     precipProbability: 0,
    //     temperature: 92.71,
    //     apparentTemperature: 92.71,
    //     dewPoint: 38.39,
    //     humidity: 0.15,
    //     pressure: 1010.15,
    //     windSpeed: 14.55,
    //     windGust: 19.21,
    //     windBearing: 38,
    //     cloudCover: 0.28,
    //     uvIndex: 9,
    //     visibility: 10,
    //     ozone: 245.12
    // });
    // note that the body property of req is now parsed
    // into a JS object from a JSON format using body-parser
    let location = req.body;
    console.log('Fetching your weather location');
    axios.get(`https://api.darksky.net/forecast/01f9e6361372fc3b78310e171d41181a/${location.latitude},${location.longitude}?exclude=hourly,daily,flags`)
        .then(function (response) {
            // console.log(response.data.currently);
            res.send(response.data.currently);
        }).catch(function (err) {
            console.log(err);
        });
});

app.post('/api/address', function (req, res) {
     // note that the body property of req is now parsed
    // into a JS object from a JSON format using body-parser
    let address = req.body.address;
    //concatenates the ss parameter needed for the [time] parameter
    let datetime = req.body.datetime + ":00";
    
    //2019-02-06T06:00:00
    //Geocoding user's address to get positional coordinates
    console.log('Fetching your address positional coordinates');
    axios.get(`https://geocoder.api.here.com/6.2/geocode.json?app_id=KVuwMjndNDZxztDGks8Z&app_code=BFTTB1Hlw9eKyNw4zWve6Q&searchtext=${address}`)
        .then(function (response) {
            console.log('Got response from geocoder, fetching location weather information');
            //returns the positional coordinates for the next then call to make a GET request
            return response.data.Response.View[0].Result[0].Location.DisplayPosition;
        }).then(function (coordinates) {
            console.log(`https://api.darksky.net/forecast/01f9e6361372fc3b78310e171d41181a/${coordinates.Latitude},${coordinates.Longitude},${datetime}?exclude=hourly,currently,flags`)
            //makes a GET request with the positional request to darksky api and then returns the result to the next then call
            return axios.get(`https://api.darksky.net/forecast/01f9e6361372fc3b78310e171d41181a/${coordinates.Latitude},${coordinates.Longitude},${datetime}?exclude=hourly,currently,flags`)
        })
        .then(function (weather_response) {
            console.log(JSON.stringify(weather_response.data.daily.data[0].temperatureMax, null, 2));
            //sends this response to the back to the client
            res.send(JSON.stringify(weather_response.data.daily.data[0].temperatureMax, null, 2));
         })
        .catch(function (err) {
            res.send(err);
        });
});


//listener function to listen for HTTP requests
app.listen(PORT, function () {
    console.log(`Server listening on port ${PORT}`);
});