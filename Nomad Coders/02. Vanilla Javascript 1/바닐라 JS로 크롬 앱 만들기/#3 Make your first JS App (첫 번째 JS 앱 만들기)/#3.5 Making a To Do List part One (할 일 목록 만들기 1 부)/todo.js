const toDoForm = document.querySelector('.js-toDoForm'),
  toDoInput = toDoForm.querySelector('input'),
  toDoList = document.querySelector('.js-toDoList');

const TODOS_LS = 'toDos';

function paintToDo(text) {
  //   console.log(text);
  //   TODO: createElement()
  // createElement() 함수는 태그(요소)를 생성합니다.
  const li = document.createElement('li');
  const delBtn = document.createElement('button');
  //   delBtn.value = '❌';
  delBtn.innerText = '❌';
  const span = document.createElement('span');
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

function loadToDos() {
  const toDos = localStorage.getItem(TODOS_LS);
  // TODO: toDOForm 은 항상 showing 즉 항상 보여짐으로, if block 에서는
  // 하무것도 하지 않습니다.
  //   그러므로 조건을 바꾸어 줍니다.
  //   if (toDos === null) {
  //   } else {
  //   }
  if (toDos !== null) {
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener('submit', handleSubmit);
}

init();
