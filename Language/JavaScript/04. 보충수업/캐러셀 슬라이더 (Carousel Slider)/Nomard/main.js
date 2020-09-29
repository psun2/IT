const SHOWING_CLASS = 'showing';
const firstSlide = document.querySelector('.slider__item:first-child');

// firstSlide.classList.add(SHOWING_CLASS);
const slide = () => {
  const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
  console.log('currentSlide : ', currentSlide); // currentSlide : null
  // if (currentSlide !== null) {
  if (currentSlide) {
    currentSlide.classList.remove(SHOWING_CLASS);
    const nextSlide = currentSlide.nextElementSibling;
    console.log('nextSlide : ', nextSlide);
    // 5번은 다음번 의 brother 이 없음. 마지막 입니다.
    if (nextSlide) {
      // 존재한다면
      nextSlide.classList.add(SHOWING_CLASS);
    } else {
      // 존재하지 않는다면
      firstSlide.classList.add(SHOWING_CLASS);
    }
    // 정보 출력
    // const nextSlide2 = currentSlide.nextSibling;
    // console.log('nextSlide2: ', nextSlide2);
  } else {
    // currentSlide  가 존재 할때
    firstSlide.classList.add(SHOWING_CLASS);
  }
};

const init = () => {
  setInterval(slide, 2000);
};

init();
