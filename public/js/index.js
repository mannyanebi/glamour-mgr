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
            //This function creates a new img element 
            //decides what weather-symbol image to use based 
            //on the icon property from response
            requirejs(["helpers/weather-icon"], function (weatherIcon) {
                setWeatherIcon(response.icon);
            });
            
            //This function creates a new img element 
            //decides what weather-card image to use based 
            //on the icon property from response
            requirejs(["helpers/weather-card"], function (weatherIcon) {
                setWeatherCard(response.icon);
            });
            
            //setting to the temperature value of h4#tempValue to response.apparentTemperature
            document.querySelector("#tempValue").innerHTML = response.apparentTemperature;
            //setting to the temperature value of h4#tempSummary to response.apparentTemperature
            document.querySelector("#tempSummary").innerHTML = response.summary;

            //This function sets weatherRelatedInfo
            requirejs(["helpers/set-table-data"], function (weatherIcon) {
                setTableData(response);
            });
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

// this function is to execute only
// when the document and its resources 
// have been loaded successfully
document.onreadystatechange = function () {
    if (document.readyState === "complete") {
        sendLocationToServer();
    }
};