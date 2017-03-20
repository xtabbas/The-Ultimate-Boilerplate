import LocalStorageManager from 'utils/LocalStorageManager';
import AuthActions from './actions';

export default class AuthMiddleware {

  // Signin Functions Starts
  static signin(credentials) {
    console.log('test ', credentials);
    return (dispatch) => {
      dispatch(AuthActions.signin());
      AuthMiddleware.signinWithUserCredentials(dispatch, credentials);
    };
  }

  static signinWithUserCredentials(dispatch, credentials) {
    // fake login
    if (credentials) {
      setTimeout(() => {
        console.log('singIN successfull');
        LocalStorageManager.setUserToken('fake token');
        dispatch(AuthActions.signinSuccessful());
      }, 500);
    } else {
      console.log('signup error ');
      dispatch(AuthActions.signinRejected('error no credentials'));
    }
  }
  // Signin Functions Ends

  // Logout Functions Starts
  static logout() {
    return (dispatch) => {
      dispatch(AuthActions.logout());
      AuthMiddleware.logoutFromAPI(dispatch);
    };
  }

  static logoutFromAPI(dispatch) {
    LocalStorageManager.removeUserToken();
    LocalStorageManager.clearLocalStorage();
    dispatch(AuthActions.logoutSuccessful());
  }
  // Logout Functions Ends

  // isLoggedIn
  static isLoggedIn() {
    return (dispatch) => {
      const token = LocalStorageManager.getUserToken();
      if (token) {
        AuthMiddleware.ensureAuthenticated(dispatch, token);
      } else {
        console.log('not logged in ');
        dispatch(AuthActions.isLoggedInFailure());
      }
    };
  }

  // ensureAuthenticated
  static ensureAuthenticated(dispatch, token) {
    if (token) {
      console.log('authentication successfull ');
      dispatch(AuthActions.isLoggedInSuccess());
    } else {
      // never gonna happen
      console.log('authentication error ');
      dispatch(AuthActions.signinRejected('no token'));
    }
  }
}
