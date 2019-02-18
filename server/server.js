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
    let datetime = req.body.datetime;
    console.log(datetime);
    
    //2019-02-06T06:00:00
    //Geocoding user's address to get positional coordinates
    console.log('Fetching your address positional coordinates');
    axios.get(`https://geocoder.api.here.com/6.2/geocode.json?app_id=KVuwMjndNDZxztDGks8Z&app_code=BFTTB1Hlw9eKyNw4zWve6Q&searchtext=${address}`)
        .then(function (response) {
            console.log('Got response from geocoder, fetching location weather information');
            //returns the positional coordinates for the next then call to make a GET request
            return response.data.Response.View[0].Result[0].Location.DisplayPosition;
        }).then(function (coordinates) {
            //make 7 GET requests with the positional request to darksky api and then returns the result to the next then call
            let day1 = axios.get(`https://api.darksky.net/forecast/01f9e6361372fc3b78310e171d41181a/${coordinates.Latitude},${coordinates.Longitude},${datetime[0]}?exclude=hourly,currently,flags`);
            let day2 = axios.get(`https://api.darksky.net/forecast/01f9e6361372fc3b78310e171d41181a/${coordinates.Latitude},${coordinates.Longitude},${datetime[1]}?exclude=hourly,currently,flags`);
            let day3 = axios.get(`https://api.darksky.net/forecast/01f9e6361372fc3b78310e171d41181a/${coordinates.Latitude},${coordinates.Longitude},${datetime[2]}?exclude=hourly,currently,flags`);
            let day4 = axios.get(`https://api.darksky.net/forecast/01f9e6361372fc3b78310e171d41181a/${coordinates.Latitude},${coordinates.Longitude},${datetime[3]}?exclude=hourly,currently,flags`);
            let day5 = axios.get(`https://api.darksky.net/forecast/01f9e6361372fc3b78310e171d41181a/${coordinates.Latitude},${coordinates.Longitude},${datetime[4]}?exclude=hourly,currently,flags`);
            let day6 = axios.get(`https://api.darksky.net/forecast/01f9e6361372fc3b78310e171d41181a/${coordinates.Latitude},${coordinates.Longitude},${datetime[5]}?exclude=hourly,currently,flags`);
            let day7 = axios.get(`https://api.darksky.net/forecast/01f9e6361372fc3b78310e171d41181a/${coordinates.Latitude},${coordinates.Longitude},${datetime[6]}?exclude=hourly,currently,flags`);

            console.log(`https://api.darksky.net/forecast/01f9e6361372fc3b78310e171d41181a/${coordinates.Latitude},${coordinates.Longitude},${datetime[6]}?exclude=hourly,currently,flags`)

            Promise.all([day1, day2, day3, day4, day5, day6, day7])
            .then(function (weather_responses) {
                //this collects all the respective weather information for each day and puts them into 
                //weather_infos array
                let weather_infos = [weather_responses[0].data.daily.data[0].icon, 
                weather_responses[1].data.daily.data[0].icon,
                weather_responses[2].data.daily.data[0].icon,
                weather_responses[3].data.daily.data[0].icon,
                weather_responses[4].data.daily.data[0].icon,
                weather_responses[5].data.daily.data[0].icon,
                weather_responses[6].data.daily.data[0].icon
                ];

                //this collects all the respective weather summary for each day and puts them into 
                //weather_summary array
                let weather_summaries = [weather_responses[0].data.daily.data[0].summary, 
                weather_responses[1].data.daily.data[0].summary,
                weather_responses[2].data.daily.data[0].summary,
                weather_responses[3].data.daily.data[0].summary,
                weather_responses[4].data.daily.data[0].summary,
                weather_responses[5].data.daily.data[0].summary,
                weather_responses[6].data.daily.data[0].summary
                ];

                //sends this response to the back to the client
                res.send(JSON.stringify(weather_infos, null, 2));
                //prints the weather_infos arrays
                console.log(JSON.stringify(weather_infos, null, 2));
                console.log(JSON.stringify(weather_summaries, null, 2));
             });
        })
        .catch(function (err) {
            res.send(err);
        });
});


//listener function to listen for HTTP requests
app.listen(PORT, function () {
    console.log(`Server listening on port ${PORT}`);
});