const canvas = document.getElementById('jsCanvas');

let painting = false;

const stopPainting = () => {
  painting = false;
};

const onMouseMove = (event) => {
  //   console.dir(event);
  //   console.log(event);
  //   client X, Y 는 window 범위 내에서 마우스 위치값을 나타 냅니다.
  //   offset X, Y 는 설정 범위 내에서의 마우스 위치 값을 나타냅니다.
  const x = event.offsetX;
  const y = event.offsetY;
  //   console.log(x, y);
};

const onMouseDown = (event) => {
  console.log(event);
  console.dir(event);
  painting = true;
};

const onMouseUp = (event) => {
  console.log(event);
  console.dir(event);
  stopPainting();
};

const onMouseMove = (event) => {
  stopPainting();
};

if (canvas) {
  //   canvas.addEventListener('mouseenter', onMouseMove);
  canvas.addEventListener('mousemove', onMouseMove);
  canvas.addEventListener('mousedown', onMouseDown);
  //   mousedown 은 click 시 발생하는 이벤트 이며, 계속 click 하고 있어야합니다.
  canvas.addEventListener('mouseup', onMouseUp);
  canvas.addEventListener('mouseleave', onMouseLeave);
  //   mouseleave 는 마우스가 canvas를 나가게 되면 painting이 false가 되도록 설정합니다.
}
