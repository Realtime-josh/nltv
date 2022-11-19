const defaultState = {
  userDetails: {},
  loginState: 'STATE_LOGGED_OUT',
  loginMessage: undefined,
  signupError: undefined,
  signupCity: 'Abia',
  signupCities: {},
  signupButton: false,
  loginButton: false,
  signupTalk: undefined,
};
  
 const auth = (state = defaultState, action) => {
  switch(action.type){
    case 'SET_USER':
      return {
        ...state,
        userDetails: action.userDetails,
      }
    case 'SET_LOGIN_STATE':
      return {
        ...state,
        loginState: action.loginState,
      }
    case 'LOGIN_ERROR_MESSAGE':
      return {
        ...state,
        loginMessage: action.loginMessage,
      }
      case 'SET_SIGNUP_ERROR':
        return {
            ...state,
            signupError: action.signupError,
        }
      case 'SET_SIGNUP_CITY':
        return {
          ...state,
          signupCity: action.signupCity,
        }
      case 'SET_SIGNUP_CITIES':
        return {
          ...state,
          signupCities: action.signupCities,
        }
      case 'SET_SIGNUP_BUTTON':
        return {
          ...state,
          signupButton: action.signupButton,
        }
      case 'SET_LOGIN_BUTTON':
        return {
          ...state,
          loginButton: action.loginButton,
        }
      case 'SET_SIGNUP_TALK':
        return {
          ...state,
          signupTalk: action.signupTalk,
        }
    default:
      return state;
  };
};

  export default auth;