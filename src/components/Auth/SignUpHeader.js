import React  from 'react';
import { useNavigate } from 'react-router';
import newLabelIcon from '../../images/icons/logo11.png';

const SignUpHeader = () => {
  const navigate = useNavigate();
  return (
    <div className='signup-header-bar'>
      <table className='signup-bar-table'>
        <tbody>
          <tr className='new-label-menu-img-tr'>
            <td className='new-label-menu-img-td2'>
              <img onClick={() => {
                navigate("/signup");
              }} className='signup-logo-newlabel' src={newLabelIcon} alt='new label tv' title='new label tv'/>
            </td>

            <td className='new-label-signup-help'>
              <button className='new-label-signup-help-button'>Help & Support</button>
            </td>

            <td onClick={() => {
              navigate("/login");
            }} className='new-label-signup-signin'>
              <button className='new-label-signup-support-signin'>Sign In</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
};

export default SignUpHeader;