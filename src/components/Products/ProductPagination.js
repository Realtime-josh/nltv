import React from 'react';
import arrowright from '../../images/arrow-right.png';


const ProductPagination = () => {
  return (
    <div className='product_pagination'>
      <div className='subheader_1'>
        <table className='sub_header_table1'>
          <tbody>
            <tr>
              <td className='film_title_details ddot'>1</td>
              <td className='film_title_details ddot'> <p className='dot'></p> </td>
              <td className='film_title_details ddot'> <p className='dot'></p> </td>
              <td className='film_title_details ddoted'> 25 of 26</td>
              <td className='extend'></td>
              <td className='film_title_details'>1 of 2</td>
              <td></td>
              <td><img className='film_title_details' src={arrowright} alt='newlabeltv' title='newlabeltv'/></td> 
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
};

export default ProductPagination;
