// TODO: #2.3 Modifying the DOM with JS (JS로 DOM 수정)

const title = document.getElementById('title');
title.innerHTML = 'Hi! From JS';
title.style.color = 'red';

console.dir(title);
console.dir(document);

document.title = 'I own you now';

// const title = document.getElementsByClassName('title');
// const title = document.getElementsByName('title');
// const title = document.getElementsByTagName('title');

// const title = document.querySelector('#title');
// Id가 title 인 것 을 선택합니다.

// const title = document.querySelector('.title');
// class가 title 인 것 을 선택합니다.
