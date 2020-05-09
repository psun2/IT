console.log('window Object');
console.log('기능을 알아보고 싶다면, 01. window 파일을 실행하세요.');

function handleOffline() {
  console.log('인터넷의 연결이 끊겼습니다.');
  alert('인터넷의 연결이 끊겼습니다.');
}

function handleOnline() {
  console.log('인터넷이 다시 연결 되었습니다.');
  alert('인터넷이 다시 연결 되었습니다.');
}

function handleResize() {
  console.log('윈도우의 화면에 변화를 감지 하였습니다.');
  alert('윈도우의 화면에 변화를 감지 하였습니다.');
}

function initTest() {
  console.log('.addEventListener("option", function)');
  console.log('function사용법 : functionName() 이 기본적이지만');
  console.log(
    '.addEventListener 안에서 바로 실행이 되버려서 용도에 따라 ()를 제거후 사용 하시길 바랍니다.',
  );

  console.log('컴퓨터의 NetWork 를 OFF 시켜보세요.');
  window.addEventListener('offline', handleOffline);
  console.log('컴퓨터의 NetWork 를 ON 시켜보세요.');
  window.addEventListener('online', handleOnline);
  console.log('브라우저 화면의 크기를 변경해 보세요');
  window.addEventListener('resize', handleResize);
}

initTest();
