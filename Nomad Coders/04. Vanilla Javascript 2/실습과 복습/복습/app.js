const canvas = document.getElementById('jsCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 700;
canvas.height = 700;

ctx.strokeStyle = '#2c2c2c';
ctx.lineWidth = 2.5;

let painting = false;

const startPainting = () => {
  painting = true;
};

const stopPainting = () => {
  painting = false;
};

const onMouseMove = (event) => {
  // console.log(event);
  // console.dir(event);
  const x = event.offsetX;
  const y = event.offsetY;
  // console.log(x, y);
  if (!painting) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
    // ctx.strokeRect(x, y);
  }
};

// const onMouseDown = (event) => {
//   // console.log(event);
//   // console.dir(event);
//   // painting = true;
//   startPainting();
// };

// const onMouseUp = (event) => {
//   // console.log(event);
//   // console.dir(event);
//   //   painting = false;
//   //   겹치는 부분을 하나의 함수로 정의함으로써, 재사용성을 높여줍니다.
//   stopPainting();
// };

// const onMouseLeave = (event) => {
//   // console.log(event);
//   // console.dir(event);
//   //   painting = false;
//   //   겹치는 부분을 하나의 함수로 정의함으로써, 재사용성을 높여줍니다.
//   stopPainting();
// };

if (canvas) {
  // canvas 내의 마우스의 좌표값을 가져옵니다.
  canvas.addEventListener('mousemove', onMouseMove);
  // 캔버스 위에서 마우스가 클릭(드래그 같이 계속 클릭)되어 그리려고 할때 수행합니다.
  // canvas.addEventListener('mousedown', onMouseDown);
  canvas.addEventListener('mousedown', startPainting);
  // 마우스의 클릭버튼이 해제될때 즉 클릭을 놓아버렸을때 수행합니다.
  // canvas.addEventListener('mouseUp', onMouseUp);
  canvas.addEventListener('mouseup', stopPainting);
  // canvas에 마우스를 통해 그리다 canvas를 벗어났을때 멈추어 주어야 하기 때문에 그 때 수행합니다.
  // canvas.addEventListener('mouseleave', onMouseLeave);
  canvas.addEventListener('mouseleave', stopPainting);
}
