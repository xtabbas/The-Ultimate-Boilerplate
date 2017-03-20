export default class AuthActions {

  static SIGNIN = 'SIGNIN';
  static SIGNIN_SUCCESSFUL = 'SIGNIN_SUCCESSFUL';
  static SIGNIN_REJECTED = 'SIGNIN_REJECTED';

  static LOGOUT = 'LOGOUT';
  static LOGOUT_SUCCESSFUL = 'LOGOUT_SUCCESSFUL';

  static ISLOGGEDIN = 'ISLOGGEDIN';
  static ISLOGGEDOUT = 'ISLOGGEDOUT';

  static signin() {
    return {
      type: AuthActions.SIGNIN
    };
  }

  static signinSuccessful(authUser) {
    return {
      type: AuthActions.SIGNIN_SUCCESSFUL,
      payload: authUser
    };
  }

  static signinRejected(error) {
    return {
      type: AuthActions.SIGNIN_REJECTED,
      payload: error
    };
  }

  static logout() {
    return {
      type: AuthActions.LOGOUT
    };
  }

  static logoutSuccessful() {
    return {
      type: AuthActions.LOGOUT_SUCCESSFUL
    };
  }

  static isLoggedInSuccess(user) {
    return {
      type: AuthActions.ISLOGGEDIN,
      payload: user
    };
  }

  static isLoggedInFailure() {
    return {
      type: AuthActions.ISLOGGEDOUT
    };
  }
}

