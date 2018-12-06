//decides what weather-symbol image to use based 
//on the icon property from response
function setWeatherIcon(iconName) {
    let weatherSymImg = document.createElement('img');
    switch (iconName) {
        case 'partly-cloudy-night':
        weatherSymImg.setAttribute('src', "../img/icon/partly-cloudy-night.png");
        weatherSymImg.setAttribute('width', "74px");
        weatherSymImg.setAttribute('height', "74px");
        break;
        
        case 'partly-cloudy-day':
        weatherSymImg.setAttribute('src', "../img/icon/partly-cloudy-day.png");
        weatherSymImg.setAttribute('width', "74px");
        weatherSymImg.setAttribute('height', "74px");
        break;
        
        case 'clear-day':
        weatherSymImg.setAttribute('src', "../img/icon/clear-day.png");
        weatherSymImg.setAttribute('width', "74px");
        weatherSymImg.setAttribute('height', "74px");
        break;
        
        case 'clear-night':
        weatherSymImg.setAttribute('src', "../img/icon/clear-night.png");
        weatherSymImg.setAttribute('width', "74px");
        weatherSymImg.setAttribute('height', "74px");
        break;
        
        case 'rain':
        weatherSymImg.setAttribute('src', "../img/icon/rain.png");
        weatherSymImg.setAttribute('width', "74px");
        weatherSymImg.setAttribute('height', "74px");
        break;
        
        case 'snow':
        weatherSymImg.setAttribute('src', "../img/icon/snow.png");
        weatherSymImg.setAttribute('width', "74px");
        weatherSymImg.setAttribute('height', "74px");
        break;
        
        case 'sleet':
        weatherSymImg.setAttribute('src', "../img/icon/sleet.png");
        weatherSymImg.setAttribute('width', "74px");
        weatherSymImg.setAttribute('height', "74px");
        break;
        
        case 'wind':
        weatherSymImg.setAttribute('src', "../img/icon/wind.png");
        weatherSymImg.setAttribute('width', "74px");
        weatherSymImg.setAttribute('height', "74px");
        break;
        
        case 'fog':
        weatherSymImg.setAttribute('src', "../img/icon/fog.png");
        weatherSymImg.setAttribute('width', "74px");
        weatherSymImg.setAttribute('height', "74px");
        break;
        
        case 'cloudy':
        weatherSymImg.setAttribute('src', "../img/icon/cloudy.png");
        weatherSymImg.setAttribute('width', "74px");
        weatherSymImg.setAttribute('height', "74px");
        break;
        
        default:
        weatherSymImg.setAttribute('src', "../img/icon/noimage.png");
        weatherSymImg.setAttribute('width', "74px");
        weatherSymImg.setAttribute('height', "74px");
        break;
    }
    //appends the new img element to the div responsible for it
    document.querySelector("#weather-symbol").appendChild(weatherSymImg);
}