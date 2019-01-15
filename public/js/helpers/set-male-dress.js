function setMaleDress(weatherSummary) {
    let male_dress_img = document.createElement('img');

    // This sets the wysbw container to block so that contents can be added to it
    let wysbwContainer = document.querySelector('#wysbw-container');
    wysbwContainer.setAttribute('style', 'display: block');

    // This creates a random number appends .jpg to make a random image file name
    let imageName = (Math.floor(Math.random() * 2) + 1).toString() + ".jpg";
    switch (weatherSummary) {
        case 'partly-cloudy-night':
        // male_dress_img.setAttribute('src', "../img/cards/partly-cloudy-night-card.png");
        male_dress_img.setAttribute('src', "../img/dresses/men/partly-cloudy-night/"+imageName);
        male_dress_img.setAttribute('width', "35%");
        male_dress_img.setAttribute('height', "100%");
        break;
        
        case 'partly-cloudy-day':
        male_dress_img.setAttribute('src', "../img/dresses/men/partly-cloudy-day/"+imageName);
        male_dress_img.setAttribute('width', "35%");
        male_dress_img.setAttribute('height', "100%");
        break;
        
        case 'clear-day':
        male_dress_img.setAttribute('src', "../img/dresses/men/clear-day/"+imageName);
        male_dress_img.setAttribute('width', "35%");
        male_dress_img.setAttribute('height', "100%");
        break;
        
        case 'clear-night':
        male_dress_img.setAttribute('src', "../img/dresses/men/clear-night/"+imageName);
        male_dress_img.setAttribute('width', "35%");
        male_dress_img.setAttribute('height', "100%");
        break;
        
        case 'rain':
        male_dress_img.setAttribute('src', "../img/dresses/men/rain/"+imageName);
        male_dress_img.setAttribute('width', "35%");
        male_dress_img.setAttribute('height', "100%");
        break;
        
        case 'snow':
        male_dress_img.setAttribute('src', "../img/dresses/men/snow/"+imageName);
        male_dress_img.setAttribute('width', "35%");
        male_dress_img.setAttribute('height', "100%");
        break;
        
        case 'sleet':
        male_dress_img.setAttribute('src', "../img/dresses/men/sleet/"+imageName);
        male_dress_img.setAttribute('width', "35%");
        male_dress_img.setAttribute('height', "100%");
        break;
        
        case 'wind':
        male_dress_img.setAttribute('src', "../img/dresses/men/wind/"+imageName);
        male_dress_img.setAttribute('width', "35%");
        male_dress_img.setAttribute('height', "100%");
        break;
        
        case 'fog':
        male_dress_img.setAttribute('src', "../img/dresses/men/fog/"+imageName);
        male_dress_img.setAttribute('width', "35%");
        male_dress_img.setAttribute('height', "100%");
        break;
        
        case 'cloudy':
        male_dress_img.setAttribute('src', "/img/dresses/men/cloudy/"+imageName);
        male_dress_img.setAttribute('width', "35%");
        male_dress_img.setAttribute('height', "100%");
        break;
        
        default:
        male_dress_img.setAttribute('src', "../img/dresses/men/noimage.png");
        male_dress_img.setAttribute('width', "35%");
        male_dress_img.setAttribute('height', "100%");
        break;
    }
    document.querySelector("#male-dress").appendChild(male_dress_img);
}