// function to get current user location using geolocation
function getUserLocation() {
    if("geolocation" in navigator){
        //return positional coordinates of user as a promise
        return new Promise(function (resolve, reject) {
                navigator.geolocation.getCurrentPosition(function (position) {
                resolve({
                    longitude:position.coords.latitude, 
                    latitude: position.coords.longitude
                }); 
            });
        });
    } else {
        //error if user's browser does not support geolocation
        alert(`Your browser does not support geolocation!
        Please update your browser`);
    }
}
// function to send user Location to the server
// to get current weather information
// response: JavaScript object contain current weather info
function sendLocationToServer() {
   let userLocation = getUserLocation();
   userLocation.then(function (position) {
       let location = {
        longitude: position.longitude,
        latitude: position.latitude
    };

    jQuery.ajax({
        method: "POST",
        url: "/api/location",
        data: JSON.stringify(location),
        contentType: 'application/json',
        
        //callback to display response from server i.e. weather info to the user
        success:    function (response) { 
            //creates a new img element
            let weatherSymImg = document.createElement('img');
            //decides what weather-symbol image to use based 
            //on the icon property from response
            switch (response.icon) {
                case 'partly-cloudy-night':
                weatherSymImg.setAttribute('src', "../img/partly-cloudy-night.png");
                weatherSymImg.setAttribute('width', "74px");
                weatherSymImg.setAttribute('height', "74px");
                break;
                
                case 'partly-cloudy-day':
                weatherSymImg.setAttribute('src', "../img/partly-cloudy-day.jpg");
                weatherSymImg.setAttribute('width', "74px");
                weatherSymImg.setAttribute('height', "74px");
                break;
                
                case 'clear-day':
                weatherSymImg.setAttribute('src', "../img/clear-day.png");
                weatherSymImg.setAttribute('width', "74px");
                weatherSymImg.setAttribute('height', "74px");
                break;
                
                case 'clear-night':
                weatherSymImg.setAttribute('src', "../img/clear-night.png");
                weatherSymImg.setAttribute('width', "74px");
                weatherSymImg.setAttribute('height', "74px");
                break;
                
                default:
                weatherSymImg.setAttribute('src', "../img/noimage.png");
                weatherSymImg.setAttribute('width', "74px");
                weatherSymImg.setAttribute('height', "74px");
                    break;
            }
            //appends the new img element to the div responsible for it
            document.querySelector("#weather-symbol").appendChild(weatherSymImg);
            //setting to the temperature value of h4#tempValue to response.apparentTemperature
            document.querySelector("#tempValue").innerHTML = response.apparentTemperature;
            //setting to the temperature value of h4#tempSummary to response.apparentTemperature
            document.querySelector("#tempSummary").innerHTML = response.summary;

            //setting weatherRelatedInfo
            let weatherRelatedInfo = `
            <tr>
            <td>Cloud Cover</td>
            <td>${response.cloudCover}</td>
            </tr>
            <tr>
            <td>Humidity</td>
            <td>${response.humidity}</td>
            </tr>
            <tr>
            <td>Visibility</td>
            <td>${response.visibility}</td>
            </tr>
            <tr>
            <td>Wind Speed</td>
            <td>${response.windSpeed}</td>
            </tr>
            `;
            
            document.querySelector("#weatherRelatedInfo").innerHTML = weatherRelatedInfo;
        },
        error:      function (err) {
            console.log(err);
        }
        });
        // console.log(position);
    }).catch(function (err) {
        console.log(err);
    });
}

document.onreadystatechange = function () {
    if (document.readyState === "complete") {
        sendLocationToServer();
    }
};