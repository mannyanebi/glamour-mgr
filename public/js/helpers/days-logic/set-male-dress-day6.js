function setMaleDressDay6(weatherSummary, summaryInfo) {
    if (weatherSummary) {
        let male_dress_img = document.createElement('img');

    // This creates a random number appends .jpg to make a random image file name
    let imageName = (Math.floor(Math.random() * 2) + 1).toString() + ".jpg";
    switch (weatherSummary) {
        case 'partly-cloudy-night':
        // male_dress_img.setAttribute('src', "../img/cards/partly-cloudy-night-card.png");
        male_dress_img.setAttribute('src', "../img/dresses/men/partly-cloudy-night/"+imageName);
        male_dress_img.setAttribute('width', "25%");
        male_dress_img.setAttribute('height', "90%");
        break;
        
        case 'partly-cloudy-day':
        male_dress_img.setAttribute('src', "../img/dresses/men/partly-cloudy-day/"+imageName);
        male_dress_img.setAttribute('width', "25%");
        male_dress_img.setAttribute('height', "90%");
        break;
        
        case 'clear-day':
        male_dress_img.setAttribute('src', "../img/dresses/men/clear-day/"+imageName);
        male_dress_img.setAttribute('width', "25%");
        male_dress_img.setAttribute('height', "90%");
        break;
        
        case 'clear-night':
        male_dress_img.setAttribute('src', "../img/dresses/men/clear-night/"+imageName);
        male_dress_img.setAttribute('width', "25%");
        male_dress_img.setAttribute('height', "90%");
        break;
        
        case 'rain':
        male_dress_img.setAttribute('src', "../img/dresses/men/rain/"+imageName);
        male_dress_img.setAttribute('width', "25%");
        male_dress_img.setAttribute('height', "90%");
        break;
        
        case 'snow':
        male_dress_img.setAttribute('src', "../img/dresses/men/snow/"+imageName);
        male_dress_img.setAttribute('width', "25%");
        male_dress_img.setAttribute('height', "90%");
        break;
        
        case 'sleet':
        male_dress_img.setAttribute('src', "../img/dresses/men/sleet/"+imageName);
        male_dress_img.setAttribute('width', "25%");
        male_dress_img.setAttribute('height', "90%");
        break;
        
        case 'wind':
        male_dress_img.setAttribute('src', "../img/dresses/men/wind/"+imageName);
        male_dress_img.setAttribute('width', "25%");
        male_dress_img.setAttribute('height', "90%");
        break;
        
        case 'fog':
        male_dress_img.setAttribute('src', "../img/dresses/men/fog/"+imageName);
        male_dress_img.setAttribute('width', "25%");
        male_dress_img.setAttribute('height', "90%");
        break;
        
        case 'cloudy':
        male_dress_img.setAttribute('src', "/img/dresses/men/cloudy/"+imageName);
        male_dress_img.setAttribute('width', "25%");
        male_dress_img.setAttribute('height', "90%");
        break;
        
        default:
        male_dress_img.setAttribute('src', "../img/dresses/men/noimage.png");
        male_dress_img.setAttribute('width', "25%");
        male_dress_img.setAttribute('height', "90%");
        break;
    }
    male_dress_img.className = 'mx-auto';
    document.querySelector("#male-dress-day6").appendChild(male_dress_img);    

    //for summary information gotten from server
    document.querySelector('#summary-info-day6').innerHTML = summaryInfo;
    } else {
        //remove male dress div so that nothing will display since
        //no data was received from the server
        document.querySelector("#male-dress-day6").setAttribute('style', 'display:none');
        document.querySelector('#summary-info-day6').setAttribute('style', 'display:none');
    }
}