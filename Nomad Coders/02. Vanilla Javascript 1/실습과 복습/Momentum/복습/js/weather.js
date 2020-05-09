const weather = document.querySelector('.weather');

const LS_COORDS = 'coords_',
  API_KEY = 'bbc6229f5e4d98c82e1e4918cfa841a3';

function saveWeather(coordsObj) {
  const weather = JSON.stringify(coordsObj);
  localStorage.setItem(LS_COORDS, weather);
}

function getWeather(lat, lon) {
  console.log(lat, lon);
  //   console.dir(lat, lon);
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=${API_KEY}`,
  )
    .then((response) => {
      //   console.dir(response);
      //   json(response);
      return response.json();
    })
    .then((json) => {
      console.dir(json);
      console.log(json);
      weather.innerText = `${json.sys.country} ${json.main.temp} @ ${json.name}`;
    });
}

function handleGeoError() {
  throw Error('위치 정보를 load하는데 실패했습니다.');
}

function handleGeoSucces(position) {
  console.log(position);

  const coordsObj = {
    latitude: position.coords.latitude,
    longitude: position.coords.longitude,
  };
  getWeather(coordsObj.latitude, coordsObj.longitude);
  saveWeather(coordsObj);
}

function askForCoords() {
  console.dir(navigator.geolocation);
  //   const currentPosition = navigator.geolocation.getCurrentPosition();
  console.dir(navigator.geolocation.getCurrentPosition);
  //   console.log(currentPosition);
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords() {
  const currentCoords = localStorage.getItem(LS_COORDS);
  if (currentCoords === null) {
    askForCoords();
  } else {
    const coordsPosition = JSON.parse(currentCoords);
    getWeather(coordsPosition.latitude, coordsPosition.longitude);
  }
}

function init() {
  console.log('weather.js 의 init(초기화 메소드)실행');
  loadCoords();
}

init();
