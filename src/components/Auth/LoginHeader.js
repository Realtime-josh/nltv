import React  from 'react';
import { useNavigate } from 'react-router';
import newLabelIcon from '../../images/icons/logo11.png';

const LoginHeader = () => {
  const navigate = useNavigate();
  return (
    <div className='signup-header-bar'>
      <table className='signup-bar-table'>
        <tbody>
          <tr className='new-label-menu-img-tr'>
            <td className='new-label-menu-img-td2'>
              <img onClick={() => {
                navigate("/login");
              }} className='signup-logo-newlabel' src={newLabelIcon} title='new label tv' alt='new label tv'/>
            </td>

            <td className='new-label-signup-help'>
              <button className='new-label-signup-help-button'>Help & Support</button>
            </td>

            <td className='new-label-signup-signin'>
              <button onClick={() => {
                navigate("/signup");
              }} className='new-label-signup-support-signin'>Sign Up</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
};

export default LoginHeader;