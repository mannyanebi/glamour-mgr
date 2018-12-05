// function to get current user location using geolocation
function getUserLocation() {
    if("geolocation" in navigator){
        return new Promise(function (resolve, reject) {
                navigator.geolocation.getCurrentPosition(function (position) {
                resolve({
                    longitude:position.coords.latitude, 
                    latitude: position.coords.longitude
                }); 
            });
        });
    } else {
        alert(`Your browser does not support geolocation!
        Please update your browser`);
    }
}

function sendLocationToServer() {
   let userLocation = getUserLocation();
   console.log(userLocation);
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
        success:    function (response) {
            console.log(response);
        },
        error:      function (err) {
            console.log(err)
        }
        });
        console.log(position);
    }).catch(function (err) {
        console.log(err);
    });
}

document.onreadystatechange = function () {
    if (document.readyState === "complete") {
        sendLocationToServer();
    }
};