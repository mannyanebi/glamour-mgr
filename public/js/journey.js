//Creating a variable to store the search btn from the journey.html file
let search_btn = document.querySelector('#search-btn');

//A function using jQuery library to make http POST request
function sendAddressToServer() {
    //retrieving the value of the search destination
    let search_destination = document.querySelector('#search-destination').value;
    let journey_datetime = document.querySelector('#journey-datetime').value;
    console.log(search_destination);
    let search_destinationOBJ = {
        address: search_destination,
        datetime: journey_datetime
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