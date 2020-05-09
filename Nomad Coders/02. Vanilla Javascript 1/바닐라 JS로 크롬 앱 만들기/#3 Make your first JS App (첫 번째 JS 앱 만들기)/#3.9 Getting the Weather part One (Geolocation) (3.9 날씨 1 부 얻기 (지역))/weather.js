const API_KEY = 'bbc6229f5e4d98c82e1e4918cfa841a3';
const COORDS = 'coords';

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

// TODO: 좌표를 성공적으로 가져왔을때 처리하는 함수 생성
function handleGeoSucces(position) {
  console.log(position);
  console.log(position.coords.latitude);
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  //   const coordsObj = {
  //     latitued: latitude,
  //     longitude: longitude,
  //   };
  const coordsObj = {
    latitude,
    longitude,
  };
  saveCoords(coordsObj);
}

// TODO: 좌표를 가져오지 못했을때 처리하는 함수 생성
function handleGeoError() {
  console.log('Cant access geo location');
}

// TODO: 좌표를 요청하는 함수 생성
function askForCoords() {
  console.log(navigator);
  console.dir(navigator);
  console.dir(navigator.geolocation);
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);

  if (loadedCoords === null) {
    askForCoords();
  } else {
    // getWeather
  }
}

function init() {
  loadCoords();
}

init();
