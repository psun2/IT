const canvas = document.getElementById('jsCanvas');
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
  //   console.dir(event);
  //   console.log(event);
  //   client X, Y 는 window 범위 내에서 마우스 위치값을 나타 냅니다.
  //   offset X, Y 는 설정 범위 내에서의 마우스 위치 값을 나타냅니다.
  const x = event.offsetX;
  const y = event.offsetY;
  //   console.log(x, y);
  if (!painting) {
    console.log('Creating path in', x, y);
    ctx.beginPath();
    // path 를 만드는 건 기본적으로 선(line), 선의 시작점을 만듭니다.
    // 시작점은 마우스가 움직이는 곳이라면 어디든지 될 수 있습니다.
    // 하지만 클릭하면 시작점부터 클릭한 곳 까지 선을 만드는 겁니다.
    ctx.moveTo(x, y);
  } else {
    console.log('Creating line in', x, y);
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

function onMouseDown(event) {
  // console.log(event);
  // console.dir(event);
  painting = true;
}

// const onMouseUp = (event) => {
//   console.log(event);
//   console.dir(event);
//   stopPainting();
// };

// const onMouseMove = (event) => {
//   stopPainting();
// };

if (canvas) {
  //   canvas.addEventListener('mouseenter', onMouseMove);
  canvas.addEventListener('mousemove', onMouseMove);
  // canvas.addEventListener('mousedown', onMouseDown);
  canvas.addEventListener('mousedown', startPainting);
  //   mousedown 은 click 시 발생하는 이벤트 이며, 계속 click 하고 있어야합니다.
  // canvas.addEventListener('mouseup', onMouseUp);
  canvas.addEventListener('mouseup', stopPainting);
  canvas.addEventListener('mouseleave', stopPainting);
  //   mouseleave 는 마우스가 canvas를 나가게 되면 painting이 false가 되도록 설정합니다.
}
