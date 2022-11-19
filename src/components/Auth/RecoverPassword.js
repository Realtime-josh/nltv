import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import returnIcon from '../../images/icons/returnIcon.png';


const RecoverPassword = () => {
  const navigate = useNavigate();
  return (
    <div className='recover-password'>
      <form className='recover-password-form'>
        <p className='recover-pswd-text'>RECOVER PASSWORD</p>
        <input type='text' className='recover-input-text' placeholder=' Email'/><br/><br/>
        <input type='submit' className='recover-submit-btn' value='SUBMIT RESET' /><br/><br/>
        <table>
          <tbody>
            <tr>
              <td><img src={returnIcon} title='new label tv' alt='Login new label tv'/> </td>
              <td onClick={() =>{
                navigate("/login");
              }}> <Link to='/login' className='recover-redirect-login'>Cancel and go back to login</Link></td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  )
}

export default RecoverPassword;