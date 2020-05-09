// FIXME:TODO: 09. Message Queue and Event Loop (메시지 큐 및 이벤트 루프)

// TODO: blocking 언어(Language)
// python

// TODO: none blocking언어(Language)
// JavaScript
// input Element 로 예를 들겠습니다.
// 만약 자바스크립트가 blocking 언어 였다면, 유저는 input 에 타이핑을 할 수 가 없습니다.
// 왜냐면 자바스크립트는 API fetch를 핸들링하느라 바쁠 것 입니다.

// TODO: alert() 함수는 blocking 함수 입니다.
console.log('alert 함수가 끝날때까지 콘솔에 어떠한 출력도 하지 않습니다.');
alert(
  'alert는 blocking 함수 입니다. alert 함수가 끝날때 까지 자바스크립트는 어떠한 동작도 하지 않습니다.',
);
console.log('alert 함수가 끝나면 콘솔에 출력합니다.');
// alert()는 blocking 함수 입니다. alert()가 끝날때 까지
// 자바스크립트는 console.log()함수를 실행하지 않습니다.

// TODO: setTimeout()
setTimeout(() => console.log('5초후에 실행 되었습니다. lalalala'), 5000);
console.log('24Line 의 hi 보다 25Line의 bye 가 먼저 출력 됩니다.');
setTimeout(() => console.log('hi'), 0);
console.log('bye');

// setTimeout()함수의 콜백함수는 setTimeout()함수로 인해 Stack이 아닌 다른 곳으로 이동하게 됩니다.
// 그곳이 바로 Web API 입니다.
// Web API에서 setTimeout()함수의 콜백함수는 또 다른 곳으로 이동됩니다.
// Queue 로 이동하게 되고, 이경우 message Queue 를 의미합니다.
// message Queue 란 Web API에서 온 메세지를 뜻합니다.
// 자바스크립트에서 이경우 message Queue의 규칙은 Stack에 아무것도 없을시,
// 자바스크립트는 message Queue 에서 console.log('bye')를 가져갈 것입니다.

// TODO: 정리
// setTimeout(() => console.log('hi'), 0);
// console.log('bye');
// 위와 같은 코드가 있을경우 자바스크립트는 코드를 실행하기위해 Stack으로 가져갑니다.
// Stack에서 setTimeout() 함수를 보는 순간 자바스크립트는 브라우저가 관리하라고,
// Web API로 넘겨 주게 됩니다.
// 그리고, Stack에 있는 console.log('bye'); 를 먼저 실행 합니다.
// console.log('bye'); 가 실행된 이후, Web API 에 있는 console.log('hi');를
// setTimeout() 함수로 인하여, 최소 기다려야 하는 시간을 기다린후,
// Queue에게 다시 전달합니다. 이 경우의 Queue는 Message Queue 입니다.
// Message Queue 는 Stack을 참조하고, 더이상 실행시킬 코드가 없게 되면,
// Message Queue의 코드를 Stack으로 보내주어 실행하게 되고, console.log('hi'); 를 출력 합니다.

// setTimeout() 함수의 인자로 받는 시간은 얼마나 기다려서 코드를 실행하느냐가 아니라,
// 최소 기다려야하는 시간입니다. (실행하기 까지 최소 기다려야하는 시간)
// 그래서 설정한 시간을 조금 초과 할 수 있습니다.

// fetch() 함수의 경우 setTimeout 과 동일한 과정을 거쳐 실행됩니다.
