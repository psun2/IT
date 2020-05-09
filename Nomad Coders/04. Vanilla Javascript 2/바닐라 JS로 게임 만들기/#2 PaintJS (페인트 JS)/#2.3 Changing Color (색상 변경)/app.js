const canvas = document.getElementById('jsCanvas'),
  colors = document.getElementsByClassName('jsColor');
// colors = document.querySelectorAll('.jsColor');
// colors = document.querySelector('.jsColor'); // 배열 형태 사용 불가
const ctx = canvas.getContext('2d');

canvas.width = 700;
canvas.height = 700;

ctx.strokeStyle = '#2c2c2c';
ctx.lineWidth = 2.5;

let painting = false;

function startPainting() {
  painting = true;
}

function stopPainting() {
  painting = false;
}

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if (!painting) {
    // console.log('Creating path in', x, y);
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    // console.log('Creating line in', x, y);
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

function onMouseDown(event) {
  painting = true;
}

function handleColorClick(event) {
  console.log(event.target.style);
  const color = event.target.style.backgroundColor;
  console.log(color);
  ctx.strokeStyle = color;
}

if (canvas) {
  canvas.addEventListener('mousemove', onMouseMove);
  canvas.addEventListener('mousedown', startPainting);
  canvas.addEventListener('mouseup', stopPainting);
  canvas.addEventListener('mouseleave', stopPainting);
}

console.log(colors, typeof colors);
console.dir(colors);
console.log(Array.from(colors));

// TODO: 그사이 업데이트 된 것인가 Array.from 사용 하지 않고 Array로 받아집니다.
// querySelector 사용 가능
// colors.forEach((color) => color.addEventListener('click', handleColorClick));

// TODO: querySelector 로 선택시 Array.from 이 작동안됨.
Array.from(colors).forEach((color) =>
  color.addEventListener('click', handleColorClick),
);
