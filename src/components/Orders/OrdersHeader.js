import React from 'react';
import { useDispatch, useSelector }  from 'react-redux';
import { setToogleBigScreen } from '../../actions/menu';
import searchIcon from '../../images/searchicon.png';
import vector from '../../images/Vector.png';
import down from '../../images/Arrow2.png';
import photo from '../../images/photo.png';
import slash from '../../images/slash.png';


const OrdersHeader = () => {
  const dispatch = useDispatch();
  const { toggleBigScreen } = useSelector(state => state.menuModal);
  return (
    <div className='dash_header'>
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
              <td className='product_text_td dash_td'>Orders</td>
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

              <td className='dash_icons_td tdd'>
                <img className='profile_photoo' src={photo} alt='new label tv' title='new label tv'/>
              </td>

              <td className='searchiconimggg'>

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


export default OrdersHeader;
