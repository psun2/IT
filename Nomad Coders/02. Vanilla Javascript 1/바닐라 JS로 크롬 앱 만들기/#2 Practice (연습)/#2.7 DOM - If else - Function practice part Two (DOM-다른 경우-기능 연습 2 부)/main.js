// TODO: #2.7 DOM - If else - Function practice part Two (DOM-다른 경우-기능 연습 2 부)

// TODO: html element classname : https://developer.mozilla.org/ko/docs/Web/API/Element/className

// TODO: html element classList : https://developer.mozilla.org/ko/docs/Web/API/Element/classList

const title = document.getElementById('title');

const CLICKED__CLASS = 'clicked';

// TODO: className 을 통해 해당 class 의 모든 className 을 지워 버리게 되어,
//       css 의 .btn 클래스의 스타일이 먹히지 않습니다.
// function handleClick() {
//   const currentClass = title.className;
//   // console.log(currentClass);
//   if (currentClass !== CLICKED__CLASS) {
//     title.className = CLICKED__CLASS;
//   } else {
//     title.className = '';
//   }
// }

// TODO: classList를 통해 btn 클래스를 가지고 있으면서도, clicked 클래스를 동시에
// 가질 수 있게 되었습니다.
// 클릭을 하는 순간 currentClass(btn) 은 CLICKED__CLASS(clicked) 와 다르므로,
// if block의 코드가 실행되어 clicked 클래스가 추가되어, css의 명령으로 인하여
// color 가 바뀌게 됩니다.
// 하지만, 다시 색깔을 바꾸려 else 를 실행시키려고 다시 클릭을 하지만 바뀌지 않습니다.
// why? btn 클래스와 clicked 클래스를 가지고 있고 currentClass(btn)은 btn 클래스 만
// 가지고 있기 때문에 또다시 if block 의 코드가 실행됩니다.
// function handleClick() {
//   const currentClass = title.className;
//   // console.log(currentClass);
//   if (currentClass !== CLICKED__CLASS) {
//     title.classList.add(CLICKED__CLASS);
//   } else {
//     title.classList.remove(CLICKED__CLASS);
//   }
// }

// TODO: 문제를 해결하기 위하여 contains() 를 사용합니다.
// contains() 함수는 해당 문자열이 존재 하나를 확인 하는 함수 입니다.
// contains() 함수로 해당 클래스의 List에 clicked 클래스가 존재 하지 않으면
// clicked 클래스를 추가 하고, 존재하면 clicked 클래스를 제거하는 로직 입니다.
// function handleClick() {
//   const hasClass = title.classList.contains(CLICKED__CLASS);
//   // console.log(currentClass);
//   if (!hasClass) {
//     title.classList.add(CLICKED__CLASS);
//   } else {
//     title.classList.remove(CLICKED__CLASS);
//   }
// }

// TODO: 위와 같은 방식의 로직 입니다. (이런식으로도 할 수 있습니다.)
// function handleClick() {
//   const hasClass = title.classList.contains(CLICKED__CLASS);
//   // console.log(currentClass);
//   if (hasClass) {
//     title.classList.remove(CLICKED__CLASS);
//   } else {
//     title.classList.add(CLICKED__CLASS);
//   }
// }

// TODO: 위와 같은 방법을 add 와 remove 대신에 toggle() 를 적용
function handleClick() {
  title.classList.toggle(CLICKED__CLASS);
}

// TODO: click 시 event 발생
function init() {
  title.addEventListener('click', handleClick);
}

init();
