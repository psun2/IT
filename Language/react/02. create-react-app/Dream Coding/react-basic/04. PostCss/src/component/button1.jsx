import React, { useState, useRef, useEffect, useCallback, memo } from 'react';
import styles from './button1.module.css';

// class Test extends React.PureComponent {
//     componentDidUpdate
//     componentDidMount
// }

const Button1 = memo((props) => {
  const [text, setText] = useState('Button1');

  const btnRef = useRef();
  const spanRef = useRef();

  const handleClick = useCallback(() => {
    // btnRef.current.style.backgroundColor = 'red';
    setText(text + 1); // ❗❗❗❗이때 useEffect 에서 찍히는 콘솔을 관찰❗❗❗❗
  }, [text]);

  useEffect(() => {
    console.log('💌 componentDidMount');
  }, []);

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

export default Button1;
