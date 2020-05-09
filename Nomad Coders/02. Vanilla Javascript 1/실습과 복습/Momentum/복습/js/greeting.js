const greetingForm = document.querySelector('.js-greeting-form'),
  greetingInput = greetingForm.querySelector('input'),
  greetingName = document.querySelector('.name .js-name'),
  display = document.querySelector('.name'),
  delBtn = display.querySelector('button'),
  toDoListC = document.querySelector('.toDo__list'),
  toDoFormC = document.querySelector('.toDo-form');

const LS_NAME = 'name',
  CN_SHOWING = 'showing';

function handleClick() {
  localStorage.removeItem(LS_NAME);
  greetingForm.classList.add(CN_SHOWING);
  display.classList.remove(CN_SHOWING);
  toDoFormC.classList.remove(CN_SHOWING);
  toDoListC.classList.remove(CN_SHOWING);
}

function delUser() {
  delBtn.addEventListener('click', handleClick);
}

function saveName(name) {
  localStorage.setItem(LS_NAME, name);
}

function paintGreeting(name) {
  console.log(name);
  greetingName.innerText = `Hello!!! ${name} 👏`;
  greetingForm.classList.remove(CN_SHOWING);
  display.classList.add(CN_SHOWING);
  toDoFormC.classList.add(CN_SHOWING);
  toDoListC.classList.add(CN_SHOWING);
}

function handleSubmit(event) {
  event.preventDefault();
  console.dir(event);
  console.log(greetingInput.value);
  const currentValue = greetingInput.value;
  paintGreeting(currentValue);
  saveName(currentValue);
  greetingInput.value = '';
  //   name.innerText = currentValue;
}

function askForName() {
  greetingForm.addEventListener('submit', handleSubmit);
  greetingForm.classList.add(CN_SHOWING);
  display.classList.remove(CN_SHOWING);
}

function loadName() {
  const currentUser = localStorage.getItem(LS_NAME);
  console.log(currentUser);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  console.log('greeting.js 의 init(초기화 메소드)실행');
  loadName();
  delUser();
}
init();
