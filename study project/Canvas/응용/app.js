const canvas = document.querySelector('.canvas .canvas__canvas'),
  range = document.querySelector('.canvas__control .canvas__range'),
  fill = document.querySelector('.canvas__fill'),
  span = fill.querySelector('span'),
  save = document.querySelector('.canvas__save'),
  //   color = document.querySelectorAll(".canvas__color"),
  colors = document.getElementsByClassName('canvas__color'),
  remove = document.querySelector('.canvas__remove'),
  modal = document.querySelector('.modal'),
  modalClose = document.querySelector('.modal__colse');

const ctx = canvas.getContext('2d');

const CTX_COLOR = '#2c2c2c',
  CANVAS_SIZE = 700;

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.strokeStyle = CTX_COLOR;
ctx.lineWidth = 2.5;

// TODO: fillStyle 과 fillRect 를 통해 초기화 해주지 않으면
// 저장시 배경이 없습니다. 투명입니다.
ctx.fillStyle = '#ffffff';
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

let painting = false;
let filling = false;

const startPainting = () => {
  painting = true;
};

const endPainting = () => {
  painting = false;
};

const onMouseMove = (event) => {
  //   console.log(event);
  const x = event.offsetX;
  const y = event.offsetY;
  //   console.log(`x: ${x}, y: ${y}`);
  //   const { painting } = state.painting;
  if (painting) {
    // TODO: painting 이 true 면 그려집니다.
    ctx.lineTo(x, y);
    ctx.stroke();
    // console.log('painting');
  } else {
    ctx.beginPath();
    ctx.moveTo(x, y);
    // console.log('!painting');
  }
};

const handleInput = (event) => {
  //   console.log(event.target.value);
  const strokeSize = event.target.value;
  ctx.lineWidth = strokeSize;
};

const handleFillClick = (event) => {
  //   event.preventDefault();
  //   span.innerText = 'paint';
  //   ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
  if (filling) {
    filling = false;
    span.innerText = 'fill';
  } else {
    filling = true;
    span.innerText = 'paint';
    // ctx.fillStyle = ctx.strokeStyle;
  }
};

const handleCanvasClick = (event) => {
  if (filling) ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
};

const handleSaveClick = (event) => {
  const url = canvas.toDataURL('image/png');
  const link = document.createElement('a');
  link.href = url;
  link.download = 'PaintinJS 🎨';
  //   console.log(url);
  // save 버튼을 눌렀을떈 위의 코드가 실행되고, 정작 저장은 되지않으나.
  link.click();
  // click 이라는 함수를 이용해 마치 a 태그의 다운로드에 접근하는 것처럼 속일 수 있습니다.
};

const handleColorClick = (event) => {
  //   console.log(event.target);
  //   console.log(event.target.style.backgroundColor);
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
  ctx.fillStyle = ctx.strokeStyle;
};

const havdleRemoveClick = () => {
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
};

const handelCM = (event) => {
  console.log(event);
  console.log(event.target);
  event.preventDefault();
  modal.style.display = 'flex';
};

const handleModalClick = () => {
  modal.style.display = 'none';
};

const init = () => {
  canvas.addEventListener('mousemove', onMouseMove);
  canvas.addEventListener('mousedown', startPainting);
  canvas.addEventListener('mouseup', endPainting);
  canvas.addEventListener('mouseout', endPainting);
  range.addEventListener('input', handleInput);
  fill.addEventListener('click', handleFillClick);
  canvas.addEventListener('click', handleCanvasClick);
  save.addEventListener('click', handleSaveClick);
  Array.from(colors).forEach((color) =>
    color.addEventListener('click', handleColorClick),
  );
  remove.addEventListener('click', havdleRemoveClick);
  canvas.addEventListener('contextmenu', handelCM);
  modalClose.addEventListener('click', handleModalClick);
};

init();

// console.log(span);

// console.log(Array.from(colors));

// console.log(!state.painting);

// TODO: 필요에의해 만들었지만 더 깔끔하고 코드수를 줄일수 있는 로직이 되어 필요가 없어졌습니다.
// const onMouseUp = (event) => {
//   //   console.log(event);
//   //   console.log(event.target);
//   //   painting = false;
//   endPainting();
// };

// const onMouseDown = (event) => {
//   //   console.log(event);
//   //   console.log(event.target);
//   //   let { painting } = state.painting;
//   //   console.log(painting); // undefined
//   //   painting = true;
//   //   console.log(painting);
//   //   console.log(state.painting);
//   startPainting();
// };
