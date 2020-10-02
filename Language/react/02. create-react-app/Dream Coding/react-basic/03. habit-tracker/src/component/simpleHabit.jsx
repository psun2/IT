import React, { useState, useRef, useCallback, useEffect } from 'react';
const SimpleHabit = (props) => {
  const [count, setCount] = useState(0); // 인자로는 초기값을 줍니다.
  //   const spanRef = React.createRef();
  const spanRef = useRef();

  // useCallback => 랜더링 될때마다 handelIncrement 함수를 계속 재생성하게 되는데....
  // 이를 방지하고자 메모리에 저장하는 useCallback 함수를 사용 합니다.
  // ❗❗주의❗❗
  // 함수의 로직이 바뀌는 경우라면 사용해선 안됩니다.
  // 처음 생성시 캐쉬에 저장 하고 캐쉬에 저장된 함수를 가져다 쓰게 되서
  // 반영된 값이 나오지 않습니다.
  const handelIncrement = useCallback(() => {
    setCount(count + 1);
    console.log('클릭시 실행 span 의 값', spanRef.current.innerText);
  });

  // TODO:
  // useEffect 1
  // useEffect : 컴포넌트가 마운트 혹은 업데이트 될때마다 호출 되는 함수 입니다.
  //   useEffect(() => {
  //     console.log(`💜 mounted & updated!: ${count}`);
  //   });
  //---------------------------------------------------------------------------

  // useEffect 2
  // useEffect 의 2번째 parameter : 배열의 형태이고
  // 해당 인자가 바뀔때만 useEffect 를 사용 하겠다는 의미입니다.
  //   useEffect(() => {
  //     console.log(count, typeof count);
  //     console.log(`💜 mounted & updated!: ${count}`);
  //   }, [count]);
  //---------------------------------------------------------------------------

  // useEffect 3
  // 2번째 parameter 을 빈 배열로 준다면...
  // componentDidMount 함수와 비슷하게 역할을 할 수 있습니다.
  useEffect(() => {
    console.log(count, typeof count);
    console.log(`💜 mounted & updated!: ${count}`);
  }, []);
  //---------------------------------------------------------------------------

  return (
    <li className="habit">
      <span className="habit-name">Reading</span>
      <span ref={spanRef} className="habit-count">
        {count}
      </span>
      <button className="habit-button habit-increase" onClick={handelIncrement}>
        <i className="fas fa-plus-square"></i>
      </button>
    </li>
  );
};
export default SimpleHabit;
