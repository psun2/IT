// 알림(Notifications) API
// https://developer.mozilla.org/ko/docs/WebAPI/Using_Web_Notifications
// https://developer.mozilla.org/ko/docs/Web/API/notification

// 2020-10-07 코드는 문제 없으나 현재 윈도우10에서 동작 하지 않음

import React from 'react';

export const useNotification = (title, options) => {
  if (!('Notification' in window)) return;

  const fireNotification = () => {
    if (Notification.permission !== 'granted') {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          new Notification(title, options);
        } else return;
      });
    } else {
      new Notification(title, options);
    }
  };

  return fireNotification;
};

const App = () => {
  const triggerNotification = useNotification('Can I steal your kimchi?', {
    body: 'I love kimchi',
  });
  return (
    <div className="App">
      <h1>useNotification</h1>
      <button onClick={triggerNotification}>알림창</button>
    </div>
  );
};

export default App;
