//Creating a variable to store the search btn from the journey.html file
let search_btn = document.querySelector('#search-btn');

//A function using jQuery library to make http POST request
function sendAddressToServer() {
    //retrieving the value of the search destination
    let search_destination = document.querySelector('#search-destination').value;
    let journey_datetime = document.querySelector('#journey-datetime').value + ":00";

    //make these days elements across a 7 index array
    let seven_days = new Array(7);
    //this fills the 7 indexes with the same value of date
    seven_days.fill(journey_datetime);

    // 2019-02-18T06:00:00
    //this function modifies the value each array index
    function incrementDay(daysArray, increment) {
        let year = daysArray.substring(0,4);
        let month = daysArray.substring(5,7);
        let time = daysArray.substring(10);
        let day = Number(daysArray.substring(8,10)) + 1 + increment;
        let date = new Date(("".concat(year,"-", month,"-", day, time)));
        return (date);
    }
    //sets the first element of seven_days_ahead to date
    let seven_days_ahead = [journey_datetime];

    //this then uses the incrementDay function to modify 
    //and push into seven_days_ahead array
    for (let i = 0; i < seven_days.length-1; i++) {
        seven_days_ahead.push(incrementDay(seven_days[i], i));
    }

    //this removes any array index that returns invalid date
    seven_days_ahead = seven_days_ahead.filter(function (date) {
    if (date != 'Invalid Date') {
        return date;
        }
    });

    //this takes any array element and that is a date object, 
    //turns it to a string that can be manipulated to 
    //give only the needed date value in ISO format
    seven_days_ahead = seven_days_ahead.map(function (date) {
        let strDate = String(date);
        return String(new Date(strDate).toISOString()).substring(0,19) ;
    });

    console.log(search_destination);
    let search_destinationOBJ = {
        address: search_destination,
        datetime: seven_days_ahead
    };

    jQuery.ajax({
        method: "POST",
        url: "/api/address",
        data: JSON.stringify(search_destinationOBJ),
        contentType: 'application/json',

        success: function (response) {
            console.log('Success', response);
        },

        error: function (err) {
            console.log('Error', err);
        }
    });
}


//adding an eventlistener to the search btn, when clicked
search_btn.addEventListener('click', function () {
    sendAddressToServer();
});