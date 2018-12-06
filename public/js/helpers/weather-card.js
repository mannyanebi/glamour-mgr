//decides what weather-card image to use based 
//on the icon property from response
function setWeatherCard(weatherSummary) {
    let weatherCardImg = document.createElement('img');
    switch (weatherSummary) {
        case 'partly-cloudy-night':
        weatherCardImg.setAttribute('src', "../img/cards/partly-cloudy-night-card.png");
        weatherCardImg.setAttribute('width', "100%");
        weatherCardImg.setAttribute('height', "100%");
        break;
        
        case 'partly-cloudy-day':
        weatherCardImg.setAttribute('src', "../img/cards/partly-cloudy-day-card.png");
        weatherCardImg.setAttribute('width', "100%");
        weatherCardImg.setAttribute('height', "100%");
        break;
        
        case 'clear-day':
        weatherCardImg.setAttribute('src', "../img/cards/clear-day-card.png");
        weatherCardImg.setAttribute('width', "100%");
        weatherCardImg.setAttribute('height', "100%");
        break;
        
        case 'clear-night':
        weatherCardImg.setAttribute('src', "../img/cards/clear-night-card.png");
        weatherCardImg.setAttribute('width', "100%");
        weatherCardImg.setAttribute('height', "100%");
        break;
        
        case 'rain':
        weatherCardImg.setAttribute('src', "../img/cards/rain-card.png");
        weatherCardImg.setAttribute('width', "100%");
        weatherCardImg.setAttribute('height', "100%");
        break;
        
        case 'snow':
        weatherCardImg.setAttribute('src', "../img/cards/snow-card.png");
        weatherCardImg.setAttribute('width', "100%");
        weatherCardImg.setAttribute('height', "100%");
        break;
        
        case 'sleet':
        weatherCardImg.setAttribute('src', "../img/cards/sleet-card.png");
        weatherCardImg.setAttribute('width', "100%");
        weatherCardImg.setAttribute('height', "100%");
        break;
        
        case 'wind':
        weatherCardImg.setAttribute('src', "../img/cards/wind-card.png");
        weatherCardImg.setAttribute('width', "100%");
        weatherCardImg.setAttribute('height', "100%");
        break;
        
        case 'fog':
        weatherCardImg.setAttribute('src', "../img/cards/fog-card.png");
        weatherCardImg.setAttribute('width', "100%");
        weatherCardImg.setAttribute('height', "100%");
        break;
        
        case 'cloudy':
        weatherCardImg.setAttribute('src', "/img/cards/cloud-card.png");
        weatherCardImg.setAttribute('width', "100%");
        weatherCardImg.setAttribute('height', "100%");
        break;
        
        default:
        weatherCardImg.setAttribute('src', "../img/cards/noimage.png");
        weatherCardImg.setAttribute('width', "100%");
        weatherCardImg.setAttribute('height', "100%");
        break;
    }
    document.querySelector("#bunny-reaction").appendChild(weatherCardImg);
}