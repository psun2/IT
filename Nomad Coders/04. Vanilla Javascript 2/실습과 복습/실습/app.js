const canvas = document.getElementById('jsCanvas'),
  ctx = canvas.getContext('2d');

canvas.width = 700;
canvas.height = 700;

ctx.lineWidth = 2.5;
ctx.strokeStyle = '#2c2c2c';

let painting = false;

const startPainting = () => (painting = true);

const stopPainting = () => (painting = false);

const onMouseMove = (event) => {
  //   console.dir(event);
  //   console.log(event.target);
  //   console.dir(event.target);
  const x = event.offsetX;
  const y = event.offsetY;
  //   console.log(x, y);
  if (!painting) {
    ctx.beginPath(); // 좌표 초기화
    // 하위 경로 목록을 비워서 새 경로를 시작합니다. 새 경로를 만들려면이 메서드를 호출하십시오.
    ctx.moveTo(x, y); // 좌표 이동
    // 새 하위 경로의 시작점을 (x, y) 좌표로 이동합니다.
  } else {
    ctx.lineTo(x, y); // 이전 좌표와 업데이트 된 자표를 연결
    // 현재 하위 경로의 마지막 점을 직선을 사용하여 지정된 (x, y) 좌표에 연결합니다.
    ctx.stroke(); // 그린다.
    // 현재 획 스타일을 사용하여 현재 하위 경로를 획합니다.
  }
};

const init = () => {
  canvas.addEventListener('mousemove', onMouseMove); // 마우스 움직임을 체크 하는 이벤트 입니다.
  canvas.addEventListener('mousedown', startPainting); // 마우스 다운 즉 클릭을 계속 누르고 있는 이벤트 입니다.
  canvas.addEventListener('mouseup', stopPainting); // 마우스 클릭에서 뗏을시 마우스 버튼이 위로 올라와 up이라고 하는 이벤트 입니다.
  canvas.addEventListener('mouseout', stopPainting); // 해당요소에서 마우스가 벗어날때 해주는 이벤트 입니다. 유사 이벤트로는 mouseleave 가 있습니다.
};

init();
