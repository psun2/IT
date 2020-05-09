const clock = document.querySelector('.js-clock');

function info() {
  console.log('1분에 한번씩 시간이 업데이트 됩니다.');
}

function getTime() {
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();
  function paint() {
    console.log('1분이 지나 시간이 업데이트 되었습니다.');
    return (clock.innerText = `${hour < 10 ? `0${hour}` : hour} : ${
      minute < 10 ? `0${minute}` : minute
    }`);
  }
  paint();
}

function init() {
  // setInterval(getTime, 1000);
  info();
  getTime();
  setInterval(getTime, 60000);
}

init();
