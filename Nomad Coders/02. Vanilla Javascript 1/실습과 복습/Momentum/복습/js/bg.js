const body = document.querySelector('body');

const imgNumber = 7;
const randomImgNumber = Math.floor(Math.random() * imgNumber + 1);
console.log(randomImgNumber);

function loadimg() {
  const image = new Image();
  image.src = `./images/${randomImgNumber}.png`;
  image.alt = `${randomImgNumber}`;
  body.prepend(image);
}

function init() {
  console.log('bg.js 의 init(초기화 메소드)실행');
  loadimg();
}

init();
