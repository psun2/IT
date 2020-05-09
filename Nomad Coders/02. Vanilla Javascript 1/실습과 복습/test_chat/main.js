const input = document.querySelector('input');

const chatBox = document.querySelector('.chat');

const body = document.querySelector('body');
const clicked = 'clicked';

// function asd() {
//   const remove = chatBox.classList.contains(clicked);
//   if (remove) {
//     chatBox.classList.remove(clicked);
//     console.log('remove');
//   } else {
//     chatBox.classList.add(clicked);
//   }
// }

// function Click() {
//   chatBox.classList.add(clicked);
//   console.log('Click');
// }

// function asdfg() {
//     const a = input.addEventListener('focus', handleToggle);
//     const b = input.addEventListener('focus', handleToggle);
//     if(a !== input.addEventListener('focus', handleToggle)) {

//     }

// };

function handleToggle() {
  chatBox.classList.toggle(clicked);
}

function init() {
  input.addEventListener('focus', handleToggle);
  input.addEventListener('blur', handleToggle);
}

init();
