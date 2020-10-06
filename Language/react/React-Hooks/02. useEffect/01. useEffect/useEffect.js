import React, { useEffect, useRef, useState } from 'react';

const App = () => {
  const pRef = useRef();

  const sayHello = () => {
    console.log('hello');
    return 'hello';
  };

  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);

  // DidMount & WillUnmount & Update 시 활성화
  // useEffect(() => {
  //   // @param deps — If present, effect will only activate if the values in the list change.
  //   // @param deps —있는 경우 목록의 값이 변경된 경우에만 효과가 활성화됩니다.
  //   pRef.current.innerText = sayHello();
  //   console.log("DidMount & WillUnmount & Update");
  // });

  // number 가 업데이트 시 활성화
  // useEffect(() => {
  //   // @param deps — If present, effect will only activate if the values in the list change.
  //   // @param deps —있는 경우 목록의 값이 변경된 경우에만 효과가 활성화됩니다.
  //   pRef.current.innerText = sayHello();
  //   console.log("number 가 업데이트 시 활성화");
  // }, [number]);

  // aNumber 가 업데이트 시 활성화
  // useEffect(() => {
  //   // @param deps — If present, effect will only activate if the values in the list change.
  //   // @param deps —있는 경우 목록의 값이 변경된 경우에만 효과가 활성화됩니다.
  //   pRef.current.innerText = sayHello();
  //   console.log("aNumber 가 업데이트 시 활성화");
  // }, [aNumber]);

  // DidMount 시 활성화
  // useEffect(() => {
  //   // @param deps — If present, effect will only activate if the values in the list change.
  //   // @param deps —있는 경우 목록의 값이 변경된 경우에만 효과가 활성화됩니다.
  //   pRef.current.innerText = sayHello();
  //   console.log("DidMount 시 활성화");
  // }, []);

  // WillUnmount 시 활성화
  useEffect(() => {
    // @param deps — If present, effect will only activate if the values in the list change.
    // @param deps —있는 경우 목록의 값이 변경된 경우에만 효과가 활성화됩니다.
    return () => {
      console.log('WillUnmount 시 활성화 (클릭시 콘솔에 안나와요 ~!!)');
      console.log('WillUnmount : 컴포넌트가 화면에서 사라져요 ~ ');
      pRef.current.innerText = 'unmount';
    };
  }, []);

  return (
    <div className="App">
      <h1>useEffect</h1>
      <p ref={pRef}>Default</p>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setAnumber(aNumber - 1)}>{aNumber}</button>
    </div>
  );
};

export default App;
