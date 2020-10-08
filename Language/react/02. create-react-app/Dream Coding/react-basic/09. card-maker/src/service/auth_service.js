import firebase from 'firebase';
import firebaseApp from './firebase';

class AuthService {
  // providerName
  // ex> 구글인지.. 페이스북인지.. 트위터 인지..
  login(providerName) {
    // 어떤 로그인 방법인지를 선택하는 곳
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();

    // 우리의 정보로 초기화되어 반환받은 firebase를 사용하여
    // 로그인을 할 수 있는 함수 반환
    return firebaseApp.auth().signInWithPopup(authProvider);
  }

  logout() {
    firebase.auth().signOut();
  }

  onAuthChange(onUserChanged) {
    // 사용자의 로그인 상태를 관리하는 함수 auth 내장 api
    firebase.auth().onAuthStateChanged((user) => {
      onUserChanged(user);
    });
  }
}

export default AuthService;
