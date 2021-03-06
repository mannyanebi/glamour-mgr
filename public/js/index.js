// function to get current user location using geolocation
function getUserLocation() {
    if(navigator.geolocation){
        let position_options = {
            timeout: 10000,
            minimumAge: 0
        };
        //return positional coordinates of user as a promise
        return new Promise(function (resolve, reject) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    console.log(position);
                resolve({
                    longitude:position.coords.latitude, 
                    latitude: position.coords.longitude
                }); 
            }, function (error) {
                //if error occurs while retrieving user's location

                document.querySelector('#fetch-task').textContent = `Could not fetch your location data || 
                Please allow clear this site settings and ALLOW location access || Check your Network connection`;
            }, position_options);
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
            // This function is to remove previous html elements on home screen
            // so that they can be replaced with new html elements 
            requirejs(["helpers/remove-load-screen"]);
            console.log('Removed Load Screen');

            // // This function creates new elements that should be filled with 
            // // contents from the weather API
            // requirejs(["helpers/create-weather-container"]);
            
            //This function creates a new img element 
            //decides what weather-symbol image to use based 
            //on the icon property from response
            requirejs(["helpers/weather-icon"], function (weatherInfo) {
                setweatherIcon(response.icon);
            });
            
            //This function creates a new img element 
            //decides what weather-card image to use based 
            //on the icon property from response
            requirejs(["helpers/weather-card"], function (weatherInfo) {
                setWeatherCard(response.icon);
            });
            
            //setting to the temperature value of h4#tempValue to response.apparentTemperature
            document.querySelector("#tempValue").innerHTML = response.apparentTemperature;
            //setting to the temperature value of h4#tempSummary to response.apparentTemperature
            document.querySelector("#tempSummary").innerHTML = response.summary;

            //This function sets weatherRelatedInfo
            requirejs(["helpers/set-table-data"], function (weatherInfo) {
                setTableData(response);
            });

            //This function creates a new img element 
            //decides what male-dress image to use based 
            //on the icon property from response
            requirejs(["helpers/set-male-dress"], function (weatherInfo) {
                setMaleDress(response.icon);
            });
            
            //This function creates a new img element 
            //decides what female-dress image to use based 
            //on the icon property from response
            requirejs(["helpers/set-female-dress"], function (weatherInfo) {
                setFemaleDress(response.icon);
            });
        },
        error:      function (err) {
            // console.log(err);
            document.querySelector('#fetch-task').textContent = `Could not fetch your location data`;
        document.querySelector('#fetch-task').style.color = "Tomato";
        }
        });
        // console.log(position);
    }).catch(function (err) {
        console.log(err);
        document.querySelector('#fetch-task').textContent = `Could not fetch your location data`;
        document.querySelector('#fetch-task').style.color = "Tomato";
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