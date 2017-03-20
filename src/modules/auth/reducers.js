import AuthActions from './actions';

const INITIAL_STATE = {
  authUser: {},
  isAuthenticated: null,
  isProcessing: false,
  isRegistered: false,
  isError: false,
  errorMessage: ''
};

function AuthReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case AuthActions.SIGNIN:
    return { ...state, isProcessing: true, isAuthenticated: false, isError: false };
  case AuthActions.SIGNIN_SUCCESSFUL:
    return { ...state, isProcessing: false, isAuthenticated: true, isError: false, authUser: action.payload, errorMessage: {} };
  case AuthActions.SIGNIN_REJECTED:
    return { ...state, isProcessing: false, isAuthenticated: false, authUser: {}, isError: true, errorMessage: action.payload };
  case AuthActions.LOGOUT:
    return { ...state, isProcessing: true };
  case AuthActions.LOGOUT_SUCCESSFUL:
    return { ...state, isProcessing: false, isAuthenticated: false, authUser: {} };
  case AuthActions.ISLOGGEDIN:
    return { ...state, isProcessing: false, isAuthenticated: true, authUser: action.payload };
  case AuthActions.ISLOGGEDOUT:
    return { ...state, isProcessing: false, isAuthenticated: false, authUser: {} };
  default:
    return state;
  }
}

export default AuthReducer;
