//setting weatherRelatedInfo
function setTableData(weatherData) {
    let weatherRelatedInfo = `
    <tr>
    <td>Cloud Cover</td>
    <td>${weatherData.cloudCover}</td>
    </tr>
    <tr>
    <td>Humidity</td>
    <td>${weatherData.humidity}</td>
    </tr>
    <tr>
    <td>Visibility</td>
    <td>${weatherData.visibility}</td>
    </tr>
    <tr>
    <td>Wind Speed</td>
    <td>${weatherData.windSpeed}</td>
    </tr>
    `;
    
    document.querySelector("#weatherRelatedInfo").innerHTML = weatherRelatedInfo;
}
