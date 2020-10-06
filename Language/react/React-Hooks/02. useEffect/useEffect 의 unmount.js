const init = () => {
  console.log('init');

  return console.log('return');
};

init();
// init
// return
// 리턴으로 함수를 내보내면 동작합니다.

//----------------------------------------------------

const useEffect = () => {
  console.log('useEffect');
  return () => {
    console.log('return');
  };
};
const r = useEffect(); // useEffect
console.log(r); // [Function]
// useEffect 는 반환받은 함수를
// 💚 내부의 어딘가에 저장 해 두었다가,
// 💚 unmount 시 실행시켜줍니다.
// 결론 : 오류를 범했던 부분은 언마운트 될때 할 작업을 위의 init 함수처럼
// 바로 반환해주었고, mount 가 될때 unmount 가 될때 실행 할 함수를 즉시 실행 하므로,
// 원하는 값을 얻지 못했습니다.
// 마무리 : unmount 시 실행할 것들은 새로운 리턴형 함수로 실행합니다. !!!

r(); // return
