const axios = require('axios');

console.log('Getting your request');
axios.get(`https://api.darksky.net/forecast/01f9e6361372fc3b78310e171d41181a/${3.040032},${9.400201}?exclude=hourly,daily,flags`)
.then(function (response) {
    console.log(JSON.stringify(response.data.currently.icon, null,2));
})
.catch(function (err) {
    console.log(err)
});

console.log('Getting your Promises request');
let first = axios.get(`https://api.darksky.net/forecast/01f9e6361372fc3b78310e171d41181a/${9.400201},${3.040032}?exclude=hourly,daily,flags`);
let second = axios.get(`https://api.darksky.net/forecast/01f9e6361372fc3b78310e171d41181a/${3.040032},${9.400201}?exclude=hourly,daily,flags`);


console.log('Printing your Promises responses');
Promise.all([first, second])
    .then(function (responses) {
        console.log(JSON.stringify(responses[0].data.currently.icon, null, 2));
        console.log(JSON.stringify(responses[1].data.currently.icon, null, 2));
    })
    .catch(function (err) {
        console.log(err)
    });
