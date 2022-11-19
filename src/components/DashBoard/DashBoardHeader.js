import React from 'react';
import { useDispatch, useSelector }  from 'react-redux';
import { setToogleBigScreen, setMenuStatus } from '../../actions/menu';
import searchIcon from '../../images/searchicon.png';
import vector from '../../images/Vector.png';
import down from '../../images/Arrow2.png';
import slash from '../../images/slash.png';
import '../../styles/base/base.scss';
import '../../styles/base/components/dashboard.scss';


const DashBoardHeader = () => {
  const dispatch = useDispatch();
  const { toggleBigScreen } = useSelector(state => state.menuModal);

  return (
    <div className='dash_header'>
      <img onClick={() => {
        dispatch(setMenuStatus(true));
      }} className='menu-icon-head3' src={slash} title='New label TV' alt='New label TV' />
      <div className='dash_text'>
        <table className='dash_text_table'>
          <tbody>
            <tr>
              <td className='product_text_td dash_td'>
                <img onClick={() => {
                  // dispatch(setMenuStatus(true));
                  dispatch(setToogleBigScreen(!toggleBigScreen));
                }} className='menu-icon-head' src={slash} title='New label TV' alt='New label TV' />
              </td>
              <td className='product_text_td dash_td'>Dashboard Home</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='dash_icons'>
        <table className='dash_icons_table'>
          <tbody>
            <tr>
              <td className='dash_icons_td tdd'>
                <img className='searchiconimg' src={searchIcon} alt='new label tv' title='new label tv'/>
              </td>

              <td className='dash_icons_td tdd'>
                <img className='searchiconimg' src={vector} alt='new label tv' title='new label tv'/>
              </td>

              <td className='searchiconimgg'>

              </td>

              <td className='dash_icons_tdd'>
                <div className='dash_header_naming'>Jenny Dendle</div>
                <div className='dash_super_admin'>Super Administrator</div>
              </td>

              <td className='dash_icons_td'>
                <img className='searchiconimg' src={down} alt='new label tv' title='new label tv'/>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  )
};


export default DashBoardHeader;
