import React  from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { login } from '../../actions/auth';

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loginState, loginButton, loginMessage } = useSelector(state => state.auth);
  const loginSubmit = (e) => {
    e.preventDefault();
      const email = e.target.elements.email.value.trim();
      const password = e.target.elements.password.value.trim();
      dispatch(login(email, password));
  }
  return (
    <div className='sign-up-form-div'>
      <div className='sign-up-form-welcome'>
        <h1 className='signup-first-welcome'>Welcome Back</h1>
        <span className='signup-first-access-text'>Please login to continue to New Label TV</span>
      </div> 

      <form onSubmit={loginSubmit} className='signup-form-main'>
        <div className='create-account-case'>
          <h2 className='create-an-account'>Please Login</h2>
        </div>

        <div className='form-group'>
          <label>Email Address *</label>
          <input type="text" className="form-control" name="email" id="username" placeholder=" Email Address *" />
        </div>

        <div className='form-group'>
          <label>Password *</label>
          <input type="text" className="form-control" name="password" id="username" placeholder=" Password *" />
        </div>
        
        <div className='terms-policy-statement-div'>
          <p className='terms-policy-statement-p'>By creating an account, you agree with 
          <Link className='terms-policy-statement-span' to='/signup'>
          <span className='terms-policy-statement-span'> our terms and privacy policy</span></Link></p>
        </div>
        <div className='sign-up-submit-div'>
          <input className='sign-up-submit' disabled={loginButton}
          type='submit' value={`${loginState === 'LOGGING IN' ? loginState : 'Login'}`} />
        </div>
        <div className='already-registered-notify-div'>
          <table className='login-table-forgot'>
            <tbody>
              <tr>
                <td className='login-table-forgot-td'>
                  <p onClick={() => {
                    navigate("/signup");
                  }} className='already-registered-notify-text'>Don't have an account? <Link to='/signup'>
                    <span className='already-registered-notify-span'>Sign up</span></Link></p>
                </td>
                <td onClick={() => {
                  navigate("/recover");
                }} className='login-table-forgot-td2'><Link 
                   to='/recover' className='login-table-forgot-td2'>Forgot password?</Link></td>
              </tr>
            </tbody>
          </table>
          <p>{loginMessage}</p>
        </div>
      </form>     
    </div>
  )
}

export default LoginForm;