//The planned date for user's journey
let date = "2019-02-18T06:00:00";
//make these days elements across a 7 index array
let seven_days = new Array(7);
//this fills the 7 indexes with the same value of date
seven_days.fill(date);

//this function modifies the value each array index
function incrementDay(daysArray, increment) {
    let year = daysArray.substring(0,4);
    let month = daysArray.substring(5,7);
    let time = daysArray.substring(10);
    let day = Number(daysArray.substring(8,10)) + 1 + increment;
    return ("".concat(year,"-", month,"-", day, time));
}
//sets the first element of seven_days_ahead to date
let seven_days_ahead = [date];

//this then uses the incrementDay function to modify 
//and push into seven_days_ahead array
for (let i = 0; i < seven_days.length-1; i++) {
    seven_days_ahead.push(incrementDay(seven_days[i], i));
}

console.log(seven_days_ahead)