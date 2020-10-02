import React, { useState, useRef, useEffect, useCallback, memo } from 'react';
import styles from './button2.module.css';

// class Test extends React.PureComponent {
//     componentDidUpdate
//     componentDidMount
// }

const Button2 = memo((props) => {
  const [text, setText] = useState('Button2');

  const btnRef = useRef();
  const spanRef = useRef();

  const handleClick = useCallback(() => {
    // btnRef.current.style.backgroundColor = 'red';
    setText(text + 1); // ❗❗❗❗이때 useEffect 에서 찍히는 콘솔을 관찰❗❗❗❗
  }, [text, setText]);

  useEffect(() => {
    console.log('💌 componentDidMount & componentDidUpdate');
  });

  return (
    <div>
      <button className={styles.button} ref={btnRef} onClick={handleClick}>
        <span className={styles.text} ref={spanRef}>
          {text}
        </span>
      </button>
    </div>
  );
});

export default Button2;
