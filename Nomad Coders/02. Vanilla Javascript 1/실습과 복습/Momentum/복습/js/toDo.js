const toDoForm = document.querySelector('.toDo-form'),
  toDoInput = toDoForm.querySelector('input'),
  toDoList = document.querySelector('.toDo__list'),
  hideForm = document.querySelector('.js-greeting-form');

const LN_TODOS = 'toDos',
  SHOWING_CN = 'showing';

const toDos = [];

function saveToDo() {
  //   console.log(toDo);
  //   localStorage.setItem(LN_TODOS, toDo);
  console.log(JSON.stringify(toDos));
  const changeToDos = JSON.stringify(toDos);
  //   localStorage.setItem(LN_TODOS, JSON.stringify(toDo));
  console.log(changeToDos);
  localStorage.setItem(LN_TODOS, changeToDos);
  //   localStorage.setItem(LN_TODOS, JSON.stringify(toDos));
  console.log(toDos);
  console.log(toDos.length);
}

function handleToDoClick(event) {
  console.dir(event);
  console.dir(event.target);
  console.dir(event.target.parentNode);
  const target = event.target.parentNode;
  console.log(target.id);
  toDoList.removeChild(target);
  const clearToDos = toDos.filter((todo) => {
    console.log(todo.id, target.id);
    const idNumber = parseInt(target.id);
    console.log(todo.id, idNumber);
    // return todo.id !== idNumber;
    return todo.id === idNumber;
  });
  console.log(clearToDos);
  console.log(toDos.includes(clearToDos));
  console.log(toDos.includes(clearToDos[0]));
  console.log(toDos.indexOf(clearToDos));
  console.log(toDos.indexOf(clearToDos[0]));
  const newArray = toDos.slice(clearToDos);
  console.log(newArray);
  const index = toDos.indexOf(clearToDos[0]);
  console.log(index);
  toDos.splice(index, 1);
  console.log(toDos);
  saveToDo();
}

function paintToDo(toDo) {
  console.log(toDo);
  const span = document.createElement('span');
  const delBtn = document.createElement('button');
  const li = document.createElement('li');

  delBtn.innerText = 'Remove';
  span.innerText = toDo;
  li.appendChild(delBtn);
  li.appendChild(span);
  toDoList.appendChild(li);

  const newId = toDos.length + 1;

  li.id = newId;

  const toDoObj = {
    id: newId,
    text: toDo,
  };

  toDos.push(toDoObj);
  console.log(toDos);

  delBtn.addEventListener('click', handleToDoClick);

  console.log(toDos);
  console.log(toDos.length);
  saveToDo();
}

function handleToDoSubmit(event) {
  event.preventDefault();
  console.dir(event);
  const currentTodo = toDoInput.value;
  console.dir(currentTodo);
  paintToDo(currentTodo);
  toDoInput.value = '';
}

function askForToDo() {
  toDoForm.addEventListener('submit', handleToDoSubmit);
}

function loadToDos() {
  const currentTodos = localStorage.getItem(LN_TODOS);
  const changeToDos = JSON.parse(currentTodos);
  console.log(currentTodos);
  console.log(toDos.length);
  // console.log(currentTodos.length);
  // console.log(changeToDos.length);
  if (
    // currentTodos === null ||
    // changeToDos.length === 0 ||
    // changeToDos.length === null
    currentTodos === null
  ) {
    askForToDo();
  } else {
    console.log(toDos);
    changeToDos.forEach((toDo) => {
      console.log(toDo.text);
      paintToDo(toDo.text);
    });
  }
  //   if (hideForm.className.includes(SHOWING_CN)) {
  //     toDoForm.classList.remove(SHOWING_CN);
  //     toDoList.classList.remove(SHOWING_CN);
  //   }
  //   else {
  //     toDoForm.classList.add(SHOWING_CN);
  //     toDoList.classList.add(SHOWING_CN);
  //   }
}

function init() {
  console.log('toDo.js 의 init(초기화 메소드)실행');
  loadToDos();
  //   console.log(
  //     document.querySelector('.js-greeting-form').classList.includes('showing'),
  //   );
  askForToDo();
}

init();
console.log(toDos.length);
