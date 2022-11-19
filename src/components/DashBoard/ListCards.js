import React from 'react';
import group8 from '../../images/group8.png';
import group81 from '../../images/Group81.png';
import group9 from '../../images/Group9.png';
import group10 from '../../images/Group10.png';
import group12 from '../../images/Group12.png';

const ListCards = () => {
  return (
    <div className='list_card_div'>
      <div className='list_card list_card1'>
        <table className='list_card_table'>
          <tbody>
            <tr>
              <td className='list_card_table_td lc_td'><img alt='label' title='labeltv' className='list_images' src={group8}/></td>
              <td className='list_card_table_td'><h3 className='list_num'>256</h3></td>
            </tr>
            <tr>
              <td className='list_card_table_tdd'>Products</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='list_card list_card2'>
        <table className='list_card_table'>
          <tbody>
            <tr>
              <td className='list_card_table_td lc_td'><img alt='label' title='labeltv'  className='list_images' src={group81}/></td>
              <td className='list_card_table_td'><h3 className='list_num'>256</h3></td>
            </tr>
            <tr>
              <td className='list_card_table_tdd'>Orders</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='list_card list_card3'>
        <table className='list_card_table'>
          <tbody>
            <tr>
              <td className='list_card_table_td lc_td'><img alt='label' title='labeltv' className='list_images' src={group9}/></td>
              <td className='list_card_table_td'><h3 className='list_num'>256</h3></td>
            </tr>
            <tr>
              <td className='list_card_table_tdd'>Orders</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='list_card list_card1'>
        <table className='list_card_table'>
          <tbody>
            <tr>
              <td className='list_card_table_td lc_td'><img alt='label' title='labeltv' className='list_images' src={group10}/></td>
              <td className='list_card_table_td'><h3 className='list_num'>256</h3></td>
            </tr>
            <tr>
              <td className='list_card_table_tdd'>Genres</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='list_card list_card2'>
        <table className='list_card_table'>
          <tbody>
            <tr>
              <td className='list_card_table_td lc_td'><img alt='label' title='labeltv' className='list_images' src={group12}/></td>
              <td className='list_card_table_td'><h3 className='list_num'>256</h3></td>
            </tr>
            <tr>
              <td className='list_card_table_tdd'>Coupons</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
};

export default ListCards;
