// - [GitHub](https://github.com/leonardomso/33-js-concepts)
// - [Nomad Coders YouTube](https://www.youtube.com/watch?v=ZlCYIMVMMX8&list=PL7jH19IHhOLMmmjrwCi7-dMFVdoU0hhgF&index=2)

// TODO:FIXME: 09. Message Queue and Event Loop ( 메시지 큐 및 이벤트 루프)

// TODO: nonBlocking
console.log('nonBlocking');
console.log('자바스크립트는 nonBlocking 언어 입니다.');
console.log('python 은 Blocking 언어 입니다.');

console.log(
  'alert() 에서 모든 코드가 멈춥니다. 확인을 눌러야 다음코드들이 진행됩니다.',
);
alert('hello');
console.log('Hi');
console.log('alert() 는 Blocking funtion 입니다.');

// TODO: Message Queue and Event Loop
console.log('Message Queue and Event Loop');

setTimeout(() => console.log('lalalala'), 1000);

// TODO: 똑같이 0 초인데 hi보다 bye가 먼저 출력되는 이유
console.log('똑같이 0 초인데 hi보다 bye가 먼저 출력되는 이유');

setTimeout(() => console.log('hi'), 0);
console.log('bye');

// setTimeout() 함수는 Stack에 bye와 같이 쌓였다가 Web API 라는 곳으로 코드를 데려 갑니다.
// 그런이후 Web API에 있는 setTimeout() 내부의 코드를 Queue로 전달합니다.
// Queue 는 Stack에 무엇인가 실행할 코드가 있으면 대기 합니다.
// 그리고 Stack에 더이상 진행할 코드가 없을시 Queue 에서 Stack으로 보내서 실행을 완료하게 됩니다.
console.log(
  'setTimeout() 함수는 Stack에 bye와 같이 쌓였다가 Web API 라는 곳으로 코드를 데려 갑니다.',
);
console.log(
  '그런이후 Web API에 있는 setTimeout() 내부의 코드를 Queue로 전달합니다.',
);
console.log('Queue 는 Stack에 무엇인가 실행할 코드가 있으면 대기 합니다.');
console.log(
  '그리고 Stack에 더이상 진행할 코드가 없을시 Queue 에서 Stack으로 보내서 실행을 완료하게 됩니다.',
);

// setTimeout() 의 option 인 시간초는 얼마나 기다려야 하는가가 아니라 최소 기다려야하는 시간입니다.
// 그렇기 때문에 때로는 사람의 눈으로 구분하지 못하는 시간만큼 초과하게 됩니다.
// 실행하기까지 최소 기다려야 하는 시간입니다.

console.log(
  'setTimeout() 의 option 인 시간초는 얼마나 기다려야 하는가가 아니라 최소 기다려야하는 시간입니다.',
);
console.log(
  '그렇기 때문에 때로는 사람의 눈으로 구분하지 못하는 시간만큼 초과하게 됩니다.',
);
console.log('실행하기까지 최소 기다려야 하는 시간입니다.');
