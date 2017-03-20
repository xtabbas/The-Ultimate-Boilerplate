export default class LocalStorageManager {
  static setUserToken(userToken) {
    localStorage.setItem('localStorageUserToken', JSON.stringify(userToken));
  }

  static removeUserToken() {
    localStorage.removeItem('localStorageUserToken');
  }

  static getUserToken() {
    return JSON.parse(localStorage.getItem('localStorageUserToken'));
  }

  static clearLocalStorage() {
    localStorage.clear();
  }
}
