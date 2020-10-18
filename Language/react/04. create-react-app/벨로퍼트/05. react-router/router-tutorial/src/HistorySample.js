import React, { useEffect } from 'react';

const HistorySample = ({ history }) => {
  const goBack = () => {
    history.goBack();
  };

  const goHome = () => {
    history.push('/');
  };

  const replaceToHome = () => {
    // 방문 기록을 남기지 않습니다.
    history.replace('/');
  };

  useEffect(() => {
    console.log(history);
    const unblock = history.block('정말 떠나실건가요?');
    return unblock;
  }, [history]);

  return (
    <div>
      <button onClick={goBack}>뒤로가기</button>
      <button onClick={goHome}>홈으로</button>
      <button onClick={replaceToHome}>홈으로 (Replace)</button>
    </div>
  );
};

export default HistorySample;
