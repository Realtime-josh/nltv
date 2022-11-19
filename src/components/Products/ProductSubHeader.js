import React from 'react';
import searchicon from '../../images/searchicon.png';
import downarrow from '../../images/down.png';
import slashes from '../../images/slash.png';
import categories from '../../images/categories.png';
import dotted from '../../images/dotted.png'


const ProductSubHeader = () => {
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
                <input className='subheader_text' type='text' placeholder='Search product by name or keyword...' />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='subheader_two'>
        <table className='sub_table'>
          <tbody>
            <tr>
              <td className='product_icons_td2'>Sort by: Name <img src={downarrow} alt='newlabeltv' title='newlabeltv'/></td>

              <td className='product_icons_td2'>Filters <img src={downarrow} alt='newlabeltv' title='newlabeltv'/></td>

              <td className='product_icons_td2'>
                <img src={slashes} alt='newlabeltv' title='newlabeltv'/>
              </td>
              
              <td className='product_icons_td2'>
                <img src={categories} alt='newlabeltv' title='newlabeltv'/>
              </td>

              <td className='product_icons_td3'>
                <img src={dotted} alt='newlabeltv' title='newlabeltv'/>
              </td>
            </tr>
          </tbody>
        </table>
        
      </div>
    </div>
  )
};


export default ProductSubHeader;
