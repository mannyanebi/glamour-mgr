//gets the parent div that contains the loading screen and fetch-task header. 
let weather_container = document.querySelector('#weatherContainer');
let loadScreen = document.querySelector('#loading-screen');
let fetchTask = document.querySelector('#fetch-task-container');
weather_container.removeChild(loadScreen);
weather_container.removeChild(fetchTask);

//this now makes the current weather container div visible, 
// since it was hidden in the beginning
let current_weather_container = document.querySelector('#currentWeatherContainer');
current_weather_container.setAttribute('style', 'visibility: visible');
