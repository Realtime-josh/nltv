import { history } from '../routers/AppRouter';
import axios from 'axios';
import paths from '../helpers/paths';
import { setAuthState, setUserDetails, setToken, deleteToken,
         deleteAuthState, deleteUserDetails, } from '../helpers/auth';

const loginUrl ='https://newlabel-api-staging.herokuapp.com/auth/admin/login';
const signupUrl ='https://newlabel-api-staging.herokuapp.com/auth/admin/signup';

export const setUser = (userDetails) => (
  {
    type: 'SET_USER',
    userDetails
  }
)

export const setLoginState = (loginState) => (   
  {
    type: 'SET_LOGIN_STATE',
    loginState
  }
)

export const setSignupCity = (signupCity) => (   
  {
    type: 'SET_SIGNUP_CITY',
    signupCity,
  }    
)

export const setSignupCities = (signupCities) => (   
  {
    type: 'SET_SIGNUP_CITIES',
    signupCities,
  }    
)


export const setSignupError = (signupError) => (   
  {
    type: 'SET_SIGNUP_ERROR',
    signupError,
  }    
)

export const setSignupButton = (signupButton) => (   
  {
    type: 'SET_SIGNUP_BUTTON',
    signupButton,
  }    
)

export const setSignupTalk = (signupTalk) => (   
  {
    type: 'SET_SIGNUP_TALK',
    signupTalk,
  }    
)

export const setLoginButton = (loginButton) => (   
  {
    type: 'SET_LOGIN_BUTTON',
    loginButton,
  }    
)

export const setLoginMessage = (loginMessage) => (   
  {
    type: 'LOGIN_ERROR_MESSAGE',
    loginMessage,
  }    
)


export const signUp = (holderLevel, holderName, email, password, address, phoneNo, state, city) => dispatch => {
  dispatch(setSignupTalk('Signing In..'))
  dispatch(setSignupButton(true))
  return axios.post(signupUrl, {
    holderLevel,
    holderName,
    email,
    password,
    address,
    phoneNo,
    state,
    city,
  })
  .then(({data}) => {
    if(200 <= data.status  <= 299){
      dispatch(setSignupTalk(undefined))
      dispatch(setSignupError('Successfully signed up. Proceed to login.'));
      dispatch(setSignupButton(false))
      history.push(paths.login);
    }else if( 400 <= data.status <= 599){
      dispatch(setSignupError(`${data.error}`));
      dispatch(setSignupButton(false));
    }else{
      dispatch(setSignupError('An error occurred while signinig up'));
      dispatch(setSignupButton(false));
    }
  }).catch(error => {
    dispatch(setSignupTalk(undefined));
    dispatch(setSignupButton(false));
    dispatch(setSignupError(!!error.response ? error.response.data.error : 'An error occured. Please ensure that your internet connection is stabe.'));
  })
};

export const login = (email, password) => dispatch => {
  dispatch(setLoginState('LOGGING IN'));
  dispatch(setLoginButton(true))
  return axios.post(loginUrl, {
   email,
   password,
})
  .then(({data}) => {
    if({data}){
      setToken(data.data.accessToken);
      dispatch(setUser(data.data.admin));
      setUserDetails(JSON.stringify(data.data.admin));
      setAuthState('STATE_LOGGED_IN');   
      dispatch(setLoginState('STATE_LOGGED_IN'));
      dispatch(setLoginMessage(data.message));
      dispatch(setLoginButton(false));
      window.location.href = "/home";
    }else{
      dispatch(setLoginState('STATE_LOGIN_FAILED'));
      dispatch(setLoginButton(false));
      // dispatch(setLoginError('Network error'));   
    }   
 })
  .catch(error => {
    dispatch(setLoginState('STATE_LOGIN_FAILED'));
    dispatch(setLoginButton(false));
    dispatch(setLoginMessage(error.response.data.message)); 
  });
};



export const tokenVerify = (clientToken) => dispatch => {
  const retrievedToken = clientToken
  return axios.get(`https://glorifiedserve.herokuapp.com/api/v1/auth/userverification?clienttoken=${retrievedToken}`)
  .then((response) => {
    if(response.data){
      dispatch(setLoginState('STATE_LOGGED_IN'));
      dispatch(setUser(response.data.updatedUsers));
    }else{
      this.props.dispatch(setLoginState('STATE_LOGGED_OUT'));
    }
})
  .catch((error) =>{
    dispatch(setLoginState('STATE_LOGGED_OUT'));
  })
};

export const logout = () => dispatch => {
  deleteToken();
  deleteUserDetails();
  deleteAuthState();
  dispatch(setLoginState('STATE_LOGGED_OUT'));     
};