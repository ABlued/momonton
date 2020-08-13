const COORDS = 'coords';
const API_KEY = "a72b4fa53125a6cfcb6c0909aa496d09";
const weather = document.querySelector(".js-weather");
init();


function init(){
    loadCoords();
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    } else {
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoErro);
}

function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,       // latitude : latitude,
        longitude,      //longitude : longitude,
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}
function handleGeoErro(){
    console.log("cant access geo location")
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function getWeather(lat, lng){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`).then(function(response){
        return response.json();
    }).then(function(json){
        console.log(json);
        const temperature = json.main.temp;
        const place = json.name;
        console.log(temperature);
        console.log(place);
        weather.innerText = `${temperature} @ ${place}`;
    });
}
