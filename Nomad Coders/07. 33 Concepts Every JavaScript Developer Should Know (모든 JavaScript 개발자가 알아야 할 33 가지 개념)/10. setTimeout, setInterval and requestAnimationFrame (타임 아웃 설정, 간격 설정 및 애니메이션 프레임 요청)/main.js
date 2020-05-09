// FIXME:TODO: 10. setTimeout, setInterval and requestAnimationFrame (타임 아웃 설정, 간격 설정 및 애니메이션 프레임 요청)
// -[Nomad Coders YouTube](https://www.youtube.com/watch?v=JaHlR1IGLN8&list=PL7jH19IHhOLMmmjrwCi7-dMFVdoU0hhgF&index=1)

// TODO: setTimeout()
// setTimeout() 은 2개의 argument 를 받습니다.
// 첫번째 argument 는 함수를 받고,
// 두번째 argument 는 최소 대기 시간을 받습니다.

setTimeout(() => console.log('Hi (1초후 실행)'), 1000);
setTimeout(console.log, 2000, 'Hi  (2초후 실행)');

console.log('----------------------------------------------');

// TODO: setTimeout()의 취소 clearTimeout()
// 1. variable에 setTimeout을 담아줍니다.
const helloTimeout = setTimeout(console.log, 10000, 'Hello  (10초후 실행)');
console.log(helloTimeout); // 출력값 3
// 위의 2개의 코드가 있어 그 코드를 실행하고, 그 뒤 3번째로 실행된다는 의미 인것같습니다.
clearTimeout(helloTimeout);
// 대기시간의 최소대기 시간이지 최대대기 시간이 아닙니다.

console.log('----------------------------------------------');

// TODO: ssetInterval()
// setInterval()은 정해진 매시간마다 함수를 실행시켜줍니다.
// setInterval() 은 2개의 argument 를 받습니다.
// 첫번째 argument 는 함수를 받고,
// 두번째 argument 는 최소 대기 시간을 받습니다.
const helloInterval = setInterval(console.log, 5000, 'Hello  (5초마다 실행)');
console.log(helloInterval); // 출력값 4
// 위의 3개의 코드가 있어 그 코드를 실행하고, 그 뒤 4번째로 실행된다는 의미 인것같습니다.
clearInterval(helloInterval);
// Interval의 경우 최소 대기 시간이 1초보다 빠를 경우,
// 크롬이 강제로 1초로 만들수 있습니다.
// setTimeout과 같이 최소대기 시간이지 최대대기 시간이 아닙니다.

console.log('----------------------------------------------');

// TODO: requestAnimationFrame()
// callback은 브라우저 repaint 전에 호출 됩니다.
requestAnimationFrame(() => console.log('Hi'));
const sayHi = () => {
  console.log('Hi requestAnimationFrame를 사용 한 Hi입니다.');
  requestAnimationFrame(sayHi);
};

requestAnimationFrame(sayHi);
// 무엇인가를 최대한 빠르게 실행하고 싶다면 requestAnimationFrame() 을 사용합니다.
