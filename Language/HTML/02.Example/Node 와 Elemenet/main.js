const body = document.querySelector('body');
const h1 = body.querySelector('h1');
const div = document.createElement('div');

function node(event) {
  console.dir(event);
  console.log(event.target);
  console.dir(event.target);
  //   console.log(h1.target);
  //   console.log(h1.parentNode);
  //   const eventSting = JSON.stringify(event);
  //   div.innerText = eventSting;
  //   body.appendChild(div);
}

function init() {
  h1.addEventListener('click', node);
}

init();
