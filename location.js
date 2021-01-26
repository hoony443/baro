const weather = document.querySelector(".corp__loc");

const API_KEY = 'ee5d103889cb4e25392ec48aee50f956';
const COORDS = 'coords';

function getWether(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    ).then(function (response) {
        return response.json();
    }).then(function (json) {
        console.log(json);
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `in ${place}`;
    });
}

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObject = {
        latitude,
        longitude
    };
    saveCoords(coordsObject);
    getWether(latitude, longitude);
}

function handleGeoError() {
    console.log("failed!");
}

function askforCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null) {
        askforCoords();
    } else {
        const parsedCoords = JSON.parse(loadedCoords);
        getWether(parsedCoords.latitude, parsedCoords.longitude);
    }
}

function init() {
    loadCoords();
}

init();


