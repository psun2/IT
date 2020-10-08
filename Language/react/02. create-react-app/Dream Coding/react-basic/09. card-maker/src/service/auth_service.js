import firebase from 'firebase';

class AuthService {
  // providerName
  // ex> 구글인지.. 페이스북인지.. 트위터 인지..
  login(providerName) {
    // const authProvider = new firebase.auth`${providerName}AuthProvider`();
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebase.auth().signInWithPopup(authProvider);
  }
}

export default AuthService;
