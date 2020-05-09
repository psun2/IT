const canvas = document.getElementById('jsCanvas'),
  colors = document.getElementsByClassName('jsColor'),
  range = document.getElementById('jsRange'),
  mode = document.getElementById('jsMode'),
  saveBtn = document.getElementById('jsSave');

const ctx = canvas.getContext('2d');

const INITIAL_COLOR = '#2c2c2c';
const CANVAS_SIZE = 700;

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

// TODO: 저장시 이미지의 배경색 즉 fill이 없을시 투명한색으로 바뀌게 됩니다.
// 이를 방지하기 위해 load 될때 기본 값 default 를 설정합니다.
// html의 background 와는 다른 개념 입니다.

ctx.fillStyle = '#fcfcfc';
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

ctx.strokeStyle = INITIAL_COLOR;
// stroke 는 line 을 위한 속성값입니다. fill 의 style 에 적용 되지 않습니다.
ctx.lineWidth = 2.5;
ctx.fillStyle = INITIAL_COLOR;
// ctx.fillRect(50, 20, 100, 49);
// x   y   width   height

let painting = false;
let filling = false;

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
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
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
  ctx.fillStyle = color;
}

function handleRangeChange(event) {
  console.log(event);
  console.log(event.target.value);
  const size = event.target.value;
  ctx.lineWidth = size;
}

function handleModeClick() {
  // if (filling === true) {
  if (filling) {
    filling = false;
    mode.innerText = 'Fill';
  } else {
    filling = true;
    mode.innerText = 'paint';
    ctx.fillStyle = ctx.strokeStyle;
  }
}

function handleCanvasClick() {
  if (filling) {
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    // 편한 방법으로 사용 합니다.
    // ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
}

function handleCM(event) {
  console.log(event);
  event.preventDefault();
}

function handleSaveClick(event) {
  console.log(event);
  // const image = canvas.toDataURL('image/jpeg');
  const image = canvas.toDataURL('image/png');
  console.log(image);
  const link = document.createElement('a');
  // link.download = image;
  link.href = image;
  link.download = 'PaintJS[🎨]';
  console.log(link);
  link.click();
}

if (canvas) {
  canvas.addEventListener('mousemove', onMouseMove);
  canvas.addEventListener('mousedown', startPainting);
  canvas.addEventListener('mouseup', stopPainting);
  canvas.addEventListener('mouseleave', stopPainting);
  canvas.addEventListener('click', handleCanvasClick);
  // TODO: 기본적으로 칸바스 위에 그려지는 파일은 마우스 우 클릭으로
  // 저장할 수 있는데 이걸 막을 수 있습니다. 아래와 같은 이벤트를 이용하세요.
  canvas.addEventListener('contextmenu', handleCM);
}

Array.from(colors).forEach((color) =>
  color.addEventListener('click', handleColorClick),
);

if (range) {
  range.addEventListener('input', handleRangeChange);
}

if (mode) {
  mode.addEventListener('click', handleModeClick);
}

if (saveBtn) {
  saveBtn.addEventListener('click', handleSaveClick);
}
