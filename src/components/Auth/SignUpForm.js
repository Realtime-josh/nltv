import React  from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';

const SignUpForm = () => {
  const navigate = useNavigate();
  return (
    <div className='sign-up-form-div'>
      <div className='sign-up-form-welcome'>
        <h1 className='signup-first-welcome'>Welcome on Board</h1>
        <span className='signup-first-access-text'>Please Sign Up to access New Label TV</span>
      </div> 

      <form className='signup-form-main'>
        <div className='create-account-case'>
          <h2 className='create-an-account'>Create an account</h2>
        </div>

        <div className='form-group'>
          <label>First Name *</label>
          <input type="text" className="form-control" name="fname" id="firstname" placeholder=" First Name *" />
        </div>

        <div className='form-group'>
          <label>Last Name *</label>
          <input type="text" className="form-control" name="lname" id="username" placeholder=" Last Name *" />
        </div>

        <div className='form-group'>
          <label>Email Address *</label>
          <input type="text" className="form-control" name="email" id="username" placeholder=" Email Address *" />
        </div>

        <div className='form-passwords'>
          <div className='passwrds'>
            <label>Password *</label>
            <input type="text" className="form-control" name="password" id="username" placeholder=" Password *" />
          </div>

          <div className='passwrds'>
            <label>Confirm Password *</label>
            <input type="text" className="form-control" name="passagain" id="username" placeholder=" Confirm Password *" />
          </div>
        </div>
        
        <div className='terms-policy-statement-div'>
          <p className='terms-policy-statement-p'>By creating an account, you agree with <span className='terms-policy-statement-span'>our terms and privacy policy</span></p>
        </div>
        <div className='sign-up-submit-div'>
          <input className='sign-up-submit' type='submit' value='SIGN UP' />
        </div>
        <div className='already-registered-notify-div'>
          <p onClick={() => {
            navigate("/login");
          }} className='already-registered-notify-text'>Already registered? 
          <Link to='/login'><span className='already-registered-notify-span'> Log In</span></Link></p>
        </div>
      </form>     
    </div>
  )
}

export default SignUpForm;