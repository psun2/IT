import React, { useRef } from 'react';

export const useFullscreen = (callback) => {
  const element = useRef();
  const runCallback = (isFull) => {
    if (callback && typeof callback === 'function') callback(isFull);
  };
  const triggerFull = () => {
    if (element.current) {
      // console.dir(element.current);
      // console.log(element.current);
      // console.dir(element.current.requestFullscreen);
      // console.log(element.current.requestFullscreen);

      if (element.current.requestFullscreen) {
        // 크롬
        element.current.requestFullscreen();
      } else if (element.current.mozRequestFullScreen) {
        // 파이어폭스
        element.current.mozRequestFullScreen();
      } else if (element.current.webkitRequestFullscreen) {
        // 오페라
        element.current.webkitRequestFullscreen();
      } else if (element.current.msRequestFullscreen) {
        // Microsoft
        element.current.msRequestFullscreen();
      }

      runCallback(true);
    }
  };

  const exitFull = (callback) => {
    if (callback && typeof callback === 'function') callback(false);

    if (document.requestFullscreen) {
      // 크롬
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      // 파이어폭스
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      // 오페라
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      // Microsoft
      document.msExitFullscreen();
    }

    runCallback(false);
  };

  return { element, triggerFull, exitFull };
};

const App = () => {
  const onFullScreen = (isFull) => {
    console.log(isFull ? 'We are full' : 'We are small');
  };
  const { element, triggerFull, exitFull } = useFullscreen(onFullScreen);
  return (
    <div className="App">
      <h1>useFullscreen</h1>
      <div ref={element}>
        <img src="https://placeimg.com/200/100/any" alt="random" />
        <button onClick={exitFull}>Exit fullscreen</button>
      </div>
      <button onClick={triggerFull}>Make fullscreen</button>
    </div>
  );
};

export default App;