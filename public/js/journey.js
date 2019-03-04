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
        let date;
        if (day < 10) {
            //the '-0' is to add a 0 to the day so that days less than 10
            //would have the 00 - 99 notation
            date = new Date(("".concat(year,"-", month,"-0", day, time)));        
        } else {
            date = new Date(("".concat(year,"-", month,"-", day, time)));
        }

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
            //retrieving the weather info from response
            let weatherInfo = response.weather_info;
            let weatherSummaryInfo = response.weather_summary_info;

            // This function is to remove previous html elements on home screen
            // so that they can be replaced with new html elements 
            requirejs(["./helpers/display-dresses-div"]);
            
            //this sets the male dress for day1 according to
            //weather info received from the server
            //and sets the weather summary information for that particular day
            requirejs(["helpers/days-logic/set-male-dress-day1"], function (weather_info) {
                setMaleDressDay1(weatherInfo[0], weatherSummaryInfo[0]);
            });
            //this sets the female dress for day1 according to
            //weather info received from the server
            requirejs(["helpers/days-logic/set-female-dress-day1"], function (weather_info) {
                setFemaleDressDay1(weatherInfo[0]);
            });
            
            //this sets the male dress for day2 according to
            //weather info received from the server
            //and sets the weather summary information for that particular day
            requirejs(["helpers/days-logic/set-male-dress-day2"], function (weather_info) {
                setMaleDressDay2(weatherInfo[1], weatherSummaryInfo[1]);
            });
            //this sets the female dress for day1 according to
            //weather info received from the server
            requirejs(["helpers/days-logic/set-female-dress-day2"], function (weather_info) {
                setFemaleDressDay2(weatherInfo[1]);
            });
            
            //this sets the male dress for day3 according to
            //weather info received from the server
            //and sets the weather summary information for that particular day
            requirejs(["helpers/days-logic/set-male-dress-day3"], function (weather_info) {
                setMaleDressDay3(weatherInfo[2], weatherSummaryInfo[2]);
            });
            //this sets the female dress for day1 according to
            //weather info received from the server
            requirejs(["helpers/days-logic/set-female-dress-day3"], function (weather_info) {
                setFemaleDressDay3(weatherInfo[2]);
            });
            
            //this sets the male dress for day4 according to
            //weather info received from the server
            //and sets the weather summary information for that particular day
            requirejs(["helpers/days-logic/set-male-dress-day4"], function (weather_info) {
                setMaleDressDay4(weatherInfo[3], weatherSummaryInfo[3]);
            });
            //this sets the female dress for day1 according to
            //weather info received from the server
            requirejs(["helpers/days-logic/set-female-dress-day4"], function (weather_info) {
                setFemaleDressDay4(weatherInfo[3]);
            });
            
            //this sets the male dress for day5 according to
            //weather info received from the server
            //and sets the weather summary information for that particular day
            requirejs(["helpers/days-logic/set-male-dress-day5"], function (weather_info) {
                setMaleDressDay5(weatherInfo[4], weatherSummaryInfo[4]);
            });
            //this sets the female dress for day1 according to
            //weather info received from the server
            requirejs(["helpers/days-logic/set-female-dress-day5"], function (weather_info) {
                setFemaleDressDay5(weatherInfo[4]);
            });
            
            //this sets the male dress for day6 according to
            //weather info received from the server
            //and sets the weather summary information for that particular day
            requirejs(["helpers/days-logic/set-male-dress-day6"], function (weather_info) {
                setMaleDressDay6(weatherInfo[5], weatherSummaryInfo[5]);
            });
            //this sets the female dress for day1 according to
            //weather info received from the server
            requirejs(["helpers/days-logic/set-female-dress-day6"], function (weather_info) {
                setFemaleDressDay6(weatherInfo[5]);
            });
            
            //this sets the male dress for day7 according to
            //weather info received from the server
            //and sets the weather summary information for that particular day
            requirejs(["helpers/days-logic/set-male-dress-day7"], function (weather_info) {
                setMaleDressDay7(weatherInfo[6], weatherSummaryInfo[6]);
            });
            //this sets the female dress for day1 according to
            //weather info received from the server
            requirejs(["helpers/days-logic/set-female-dress-day7"], function (weather_info) {
                setFemaleDressDay7(weatherInfo[6]);
            });
            
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