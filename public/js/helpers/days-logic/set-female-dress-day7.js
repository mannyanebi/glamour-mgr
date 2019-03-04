function setFemaleDressDay7(weatherSummary) {
    if (weatherSummary) {
        let female_dress_img = document.createElement('img');

    // This creates a random number appends .jpg to make a random image file name
    let imageName = (Math.floor(Math.random() * 3) + 1).toString() + ".jpg";
    switch (weatherSummary) {
        case 'partly-cloudy-night':
        // male_dress_img.setAttribute('src', "../img/cards/partly-cloudy-night-card.png");
        female_dress_img.setAttribute('src', "../img/dresses/women/partly-cloudy-night/"+imageName);
        female_dress_img.setAttribute('width', "25%");
        female_dress_img.setAttribute('height', "90%");
        break;
        
        case 'partly-cloudy-day':
        female_dress_img.setAttribute('src', "../img/dresses/women/partly-cloudy-day/"+imageName);
        female_dress_img.setAttribute('width', "25%");
        female_dress_img.setAttribute('height', "90%");
        break;
        
        case 'clear-day':
        female_dress_img.setAttribute('src', "../img/dresses/women/clear-day/"+imageName);
        female_dress_img.setAttribute('width', "25%");
        female_dress_img.setAttribute('height', "90%");
        break;
        
        case 'clear-night':
        female_dress_img.setAttribute('src', "../img/dresses/women/clear-night/"+imageName);
        female_dress_img.setAttribute('width', "25%");
        female_dress_img.setAttribute('height', "90%");
        break;
        
        case 'rain':
        female_dress_img.setAttribute('src', "../img/dresses/women/rain/"+imageName);
        female_dress_img.setAttribute('width', "25%");
        female_dress_img.setAttribute('height', "90%");
        break;
        
        case 'snow':
        female_dress_img.setAttribute('src', "../img/dresses/women/snow/"+imageName);
        female_dress_img.setAttribute('width', "25%");
        female_dress_img.setAttribute('height', "90%");
        break;
        
        case 'sleet':
        female_dress_img.setAttribute('src', "../img/dresses/women/sleet/"+imageName);
        female_dress_img.setAttribute('width', "25%");
        female_dress_img.setAttribute('height', "90%");
        break;
        
        case 'wind':
        female_dress_img.setAttribute('src', "../img/dresses/women/wind/"+imageName);
        female_dress_img.setAttribute('width', "25%");
        female_dress_img.setAttribute('height', "90%");
        break;
        
        case 'fog':
        female_dress_img.setAttribute('src', "../img/dresses/women/fog/"+imageName);
        female_dress_img.setAttribute('width', "25%");
        female_dress_img.setAttribute('height', "90%");
        break;
        
        case 'cloudy':
        female_dress_img.setAttribute('src', "/img/dresses/women/cloudy/"+imageName);
        female_dress_img.setAttribute('width', "25%");
        female_dress_img.setAttribute('height', "90%");
        break;
        
        default:
        female_dress_img.setAttribute('src', "../img/dresses/women/noimage.png");
        female_dress_img.setAttribute('width', "25%");
        female_dress_img.setAttribute('height', "90%");
        break;
    }
        female_dress_img.className = 'mx-auto';
        document.querySelector("#female-dress-day7").appendChild(female_dress_img);

    } else {
        //trying to replace avatar images with error message here
        //set avatar div with an id so that you can remove it and add error message
        let errMsg =  document.createElement('h1');
        errMsg.textContent = "Oops! ...this day's weather information could not be retrieved from the server.";
        errMsg.className = 'text-center ml-3 py-4 text-danger';
        document.querySelector("#female-dress-day7").setAttribute('style', 'display:none');
        document.querySelector("#dresses-container-day7").appendChild(errMsg);
    }
}