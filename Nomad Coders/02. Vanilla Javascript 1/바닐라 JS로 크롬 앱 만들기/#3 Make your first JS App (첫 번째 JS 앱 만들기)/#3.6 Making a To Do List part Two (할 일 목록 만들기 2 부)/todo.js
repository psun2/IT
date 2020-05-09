const toDoForm = document.querySelector('.js-toDoForm'),
  toDoInput = toDoForm.querySelector('input'),
  toDoList = document.querySelector('.js-toDoList');

const TODOS_LS = 'toDos';

// TODO: toDos 목록을 저장하기 위한 배열 생성
const toDos = [];

// TODO: toDos를 가져와서 localStorage에 저장하는 saveToDos() 함수를 구현합니다.
function saveToDos() {
  // TODO: localStorage 는 JS를 String으로만 저장하려고 하는 성질이있습니다.
  // JSON 객체의 Stringify() 함수를 사용하여, String 처럼 보이는 트릭을 사용 합니다.
  // TODO: JSON 객체의 Stringify() 함수
  // JSON 객체의 Stringify() 함수는 Object 를 String으로 변환 시켜줍니다.
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
  //   console.log(text);
  //   TODO: createElement()
  // createElement() 함수는 태그(요소)를 생성합니다.
  const li = document.createElement('li');
  const delBtn = document.createElement('button');
  const span = document.createElement('span');
  const newId = toDos.length + 1;
  //   delBtn.value = '❌';
  delBtn.innerText = '❌';
  span.innerText = text;
  //   li.classList.add('fuck');
  //   TODO: appendChild()
  //   append : 덧붙이다
  //   child : 아이
  // appendChild() 함수는 createElement() 함수로 만들어진 태그를 자식 요소로 삽입합니다.
  //   appendChild() 함수의 위치를 바꿈으로써 Btn을 먼저 나오게 혹은 text 의 뒤로 나오게 할 수 있습니다.
  toDoList.appendChild(li);
  li.appendChild(delBtn);
  li.appendChild(span);
  //   li.appendChild('div');
  li.id = newId;
  // li.classList.add(newId);

  // TODO: toDos Array 에 추가되기 위에선 Object 가 먼저 필요 합니다.
  const toDoObj = {
    text: text,
    id: newId,
  };

  // TODO: push() 함수는 Array의 내장 함수로서 배열의 끝에 index를 생성합니다.
  toDos.push(toDoObj);

  // TODO: push를 한 이후에 saveToDos()함수를 호출합니다.
  // why? saveToDos()를 호출하고 phsu를 하면, push 전이라 저장이 되지 않습니다.
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  //   TODO: 누군가가 엔터를 눌렀을때 todo를 생성하고, input에 남아있는 text를 지우는 방법
  toDoInput.value = '';
  //   TODO: 밑과 같은 코드를 짜서 어이없는 실수를 유발하였습니다.
  //   currentValue 에는 toDoInput.value 가 들어있는데 위 방법을 간단히 하고자 했으나,
  //   const (상수) 에 담긴 currentValue 를 변경하는 결과를 초래 합니다.
  //   currentValue = '';
}

// TODO: forEach() 함수의 argument 를 따로 구성하여도 똑같이 작동합니다.
// function something(toDo) {
//   console.log(toDo.text);
// }

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  // TODO: toDOForm 은 항상 showing 즉 항상 보여짐으로, if block 에서는
  // 하무것도 하지 않습니다.
  //   그러므로 조건을 바꾸어 줍니다.
  //   if (toDos === null) {
  //   } else {
  //   }
  if (loadedToDos !== null) {
    // TODO: 문제점
    // console.log 로 출력한 loadedToDos는 모두 String 입니다.
    // 그래서 JSON 을 활용 하여 다시 변경해주어야 합니다.
    console.log(loadedToDos + 'Object가 텍스트로 출력 됩니다.');

    // TODO: JSON
    // JSON 은 JavaScript Object Notation (자바 스크립트 객체 표기법) 의 준말 입니다.
    // 데이터를 전달할때, 자바스크립트가 그걸 다룰 수 있도록 object로 변경 시켜 줍니다.
    // 그래서 자바스크립트의 Object 를 String 으로 변환해 주기도하고,
    // 반대로 String 을 Object 로 변환 할 수 도 있습니다.
    const parsedToDos = JSON.parse(loadedToDos);
    console.log(
      'JSON.parse() 함수를 사용하여 String 으로 출력되던 Object가 Object type로 출력 됩니다.',
    );
    console.log(parsedToDos);

    // TODO: 브라우저에 그리기
    parsedToDos.forEach((toDo) => {
      console.log(toDo.text);
      paintToDo(toDo.text);
    });
    // parsedToDos.forEach(something);
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener('submit', handleSubmit);
}

init();
