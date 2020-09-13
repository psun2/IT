const projectsBtn = document.querySelector('.projects button'),
  productsBtn = document.querySelector('.products button'),
  projectsUl = document.querySelector('.projects ul'),
  productsUl = document.querySelector('.products ul'),
  projectsLi = document.querySelectorAll('.projects ul li'),
  productsLi = document.querySelectorAll('.products ul li');

const mouseleave = () => {
  projectsUl.addEventListener('mouseleave', handleFocus);
  productsUl.addEventListener('mouseleave', handleFocus);
};

const handleClick = (event) => {
  const target = event.target;
  const displayTarget = target.nextElementSibling;
  displayTarget.classList.toggle('active');
};

const handleFocus = (event) => {
  const target = event.target;
  target.classList.toggle('active');
};

const handleClickItem = (event) => {
  const target = event.target.parentNode.parentNode;
  projectsUl.removeEventListener('mouseleave', handleFocus);
  productsUl.removeEventListener('mouseleave', handleFocus);
  target.classList.toggle('active');
  setTimeout(() => {
    mouseleave();
  }, 100);
};

const init = () => {
  projectsBtn.addEventListener('click', handleClick);
  productsBtn.addEventListener('click', handleClick);
  mouseleave();
  Array.from(projectsLi).forEach((index) => {
    index.addEventListener('click', handleClickItem);
  });
  Array.from(productsLi).forEach((index) => {
    index.addEventListener('click', handleClickItem);
  });
};

init();
