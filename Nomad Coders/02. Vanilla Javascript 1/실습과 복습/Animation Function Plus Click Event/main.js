// TODO: button
const ease_in = document.querySelector('.ease-in--animation');
const ease_out = document.querySelector('.ease-out--animation');
const ease_in_out = document.querySelector('.ease-in-out--animation');
const linear = document.querySelector('.linear--animation');

// TODO: Element
const In = document.querySelector('.ease-in:nth-child(1)');
const Out = document.querySelector('.ease-out:nth-child(1)');
const InOut = document.querySelector('.ease-in-out:nth-child(1)');
const Linear = document.querySelector('.linear:nth-child(1)');

// TODO: new Element
const change = 'change';

const Object = {
  change_in: function () {
    const changes = In.classList.contains(change);
    if (changes) {
      console.log('change 클래스를 제거 합니다.');
      In.classList.remove(change);
    } else {
      console.log('change 클래스를 추가 합니다.');
      In.classList.add(change);
    }
  },
  change_out: function () {
    const changes = Out.classList.contains(change);
    if (changes) {
      console.log('change 클래스를 제거 합니다.');
      Out.classList.remove(change);
    } else {
      console.log('change 클래스를 추가 합니다.');
      Out.classList.add(change);
    }
  },
  change_inout: function () {
    const changes = InOut.classList.contains(change);
    if (changes) {
      console.log('change 클래스를 제거 합니다.');
      InOut.classList.remove(change);
    } else {
      console.log('change 클래스를 추가 합니다.');
      InOut.classList.add(change);
    }
  },
  change_linear: function () {
    const changes = Linear.classList.contains(change);
    if (changes) {
      console.log('change 클래스를 제거 합니다.');
      Linear.classList.remove(change);
    } else {
      console.log('change 클래스를 추가 합니다.');
      Linear.classList.add(change);
    }
  },
};

// TODO: 그 외 이벤트
const ect = {
  resize: function () {
    console.log('브라우저의 크기를 확인해 주세요.');
  },
  offline: function () {
    console.log('인터넷의 연결을 확인해 주세요.');
  },
  online: function () {
    console.log('인터넷이 연결 되었습니다.');
  },
};

function init() {
  ease_in.addEventListener('click', Object.change_in);
  ease_out.addEventListener('click', Object.change_out);
  ease_in_out.addEventListener('click', Object.change_inout);
  linear.addEventListener('click', Object.change_linear);
  window.addEventListener('resize', ect.resize);
  window.addEventListener('offline', ect.offline);
  window.addEventListener('online', ect.online);
}

init();
