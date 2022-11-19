import React from 'react';
import { useDispatch } from 'react-redux';
import searchicon from '../../images/searchicon.png';
import downarrow from '../../images/down.png';
import slashes from '../../images/slash.png';
import categories from '../../images/categories.png';
import add from '../../images/add.png'
import { setOrdersStatus } from '../../actions/orders';


const OrdersSubHeader = () => {
  const dispatch = useDispatch();
  return (
    <div className='product_sub_header'>
      <div className='subheader_one'>
        <table className='sub_header_table1'>
          <tbody>
            <tr>
              <td>
                <img src={searchicon} alt='new label tv' title='new label tv'/>
              </td>

              <td className='product_sub_td'>
                <input className='subheader_text' type='text' placeholder='Search discount by name or code...' />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='subheader_two'>
        <table className='sub_table'>
          <tbody>
            <tr>
              <td className='product_icons_td2'>Sort by: Name <img src={downarrow} alt='new label tv' title='new label tv'/></td>

              <td className='product_icons_td2'>Filters <img src={downarrow} alt='new label tv' title='new label tv'/></td>

              <td className='product_icons_td2'>
                <img src={slashes} alt='new label tv' title='new label tv'/>
              </td>
              
              <td className='product_icons_td2'>
                <img src={categories} alt='new label tv' title='new label tv'/>
              </td>

              <td className='add_new'>
                <button onClick={() => {
                  dispatch(setOrdersStatus(true));
                }} className='categories_button'>
                  <img className='categories_button_img' src={add} alt='new label tv' title='new label tv'/> Add new</button>
              </td>
            </tr>
          </tbody>
        </table>
        
      </div>
    </div>
  )
};


export default OrdersSubHeader;
