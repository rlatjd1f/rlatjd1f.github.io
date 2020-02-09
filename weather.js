const weather = document.querySelector(".js-weather");
const API_KEY = "4ea516b2f0af36cd91c0b3ff48296f51";
const COORDS = "coords";

function getWeather(latitude, longitude) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
        .then(function (response) {
            return response.json();
        }).then(function (json) {
            const temperature = json.main.temp;
            const place = json.name;
            weather.innerHTML = `${place} ${temperature}℃`;
        });

}

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));    
}

function handleGeoSucces(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError() {
    console.log('Cant access get location');
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords() {
    const loadedCords = localStorage.getItem(COORDS);

    if (loadedCords === null) {
        askForCoords();
    } else {
        const parseCoords = JSON.parse(loadedCords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init() {
    loadCoords();

}

init();