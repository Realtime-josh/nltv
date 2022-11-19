import React from 'react';
import Vector6 from '../../images/Vector6.png';
import Group46 from '../../images/Group46.png';
import Vector26 from '../../images/Vector26.png';

const SalesRecent = () => {
  return (
    <div className='sales_recent'>
      <div className='sales'> 
        <table className='sales_table'>
          <tbody>
            <tr>
              <td className='sales_td sales_td1'>Sales summary</td>
              <td className='sales_td sales_td2'><button className='sales_button'>
                This year <img alt='label' title='labeltv' className='sales_button_img' src={Vector6}/></button>
              </td>
            </tr>
          </tbody>
        </table>

        <table className='sales_table2'>
          <tbody>
            <tr>
              <td className='sales_td sales_td11'>10</td>
              <td className='sales_td sales_td22'>
                <img alt='label' title='labeltv' className='sale_line_img' src={Vector26} />
              </td>
            </tr>
            <tr>
              <td className='sales_td sales_td11'>8</td>
              <td className='sales_td sales_td22'>
                <img alt='label' title='labeltv' className='sale_line_img' src={Vector26} />
              </td>
            </tr>
            <tr>
              <td className='sales_td sales_td11'>6</td>
              <td className='sales_td sales_td22'>
                <img alt='label' title='labeltv' className='sale_line_img' src={Vector26} />
              </td>
            </tr>
            <tr>
              <td className='sales_td sales_td11'>4</td>
              <td className='sales_td sales_td22'>
                <img alt='label' title='labeltv' className='sale_line_img' src={Vector26} />
              </td>
            </tr>
            <tr>
              <td className='sales_td sales_td11'>2</td>
              <td className='sales_td sales_td22'>
                <img alt='label' title='labeltv' className='sale_line_img' src={Vector26} />
              </td>
            </tr>
            <tr>
              <td className='sales_td sales_td11'>0</td>
              <td className='sales_td sales_td22'>
                <img alt='label' title='labeltv' className='sale_line_img' src={Vector26} />
              </td>
            </tr>
          </tbody>
        </table>

        <table className='sales_date_table'>
          <tbody>
            <tr>
              <td className='sales_date_td'></td>
              <td className='sales_date_td'>Jan</td>
              <td className='sales_date_td'>Feb</td>
              <td className='sales_date_td'>Mar</td>
              <td className='sales_date_td'>Apr</td>
              <td className='sales_date_td'>May</td>
              <td className='sales_date_td'>Jun</td>
              <td className='sales_date_td'>Aug</td>
              <td className='sales_date_td'>Sep</td>
              <td className='sales_date_td'>Oct</td>
              <td className='sales_date_td'>Nov</td>
              <td className='sales_date_td'>Dec</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='recent'>
      <table className='sales_table'>
          <tbody>
            <tr>
              <td className='sales_td sales_td1'>Recent activities</td>
              <td className='sales_td sales_td2'><button className='sales_button'>View all orders</button></td>
            </tr>
          </tbody>
        </table>

        <table className='sales_table2'>
          <tbody>
            <tr>
              <td className='sales_tdd'><img alt='label' title='labeltv' className='recent_img' src={Group46}/></td>
              <td className='sales_tdd'>
                Successfully uploaded "jumanji part 2" media
              </td>
              <td className='sales_tdd'><button className='sales_tdd_button'>3 hours ago</button></td>
            </tr>
            <tr>
              <td className='sales_tdd'><img alt='label' title='labeltv' className='recent_img' src={Group46}/></td>
              <td className='sales_tdd'>
                Successfully uploaded "jumanji part 2" media
              </td>
              <td className='sales_tdd'><button className='sales_tdd_button'>3 hours ago</button></td>
            </tr>
            <tr>
              <td className='sales_tdd'><img alt='label' title='labeltv' className='recent_img' src={Group46}/></td>
              <td className='sales_tdd'>
                Successfully uploaded "jumanji part 2" media
              </td>
              <td className='sales_tdd'><button className='sales_tdd_button'>3 hours ago</button></td>
            </tr>
            <tr>
              <td className='sales_tdd'><img alt='label' title='labeltv' className='recent_img' src={Group46}/></td>
              <td className='sales_tdd'>
                Successfully uploaded "jumanji part 2" media
              </td>
              <td className='sales_tdd'><button className='sales_tdd_button'>3 hours ago</button></td>
            </tr>
            <tr>
              <td className='sales_tdd'><img alt='label' title='labeltv' className='recent_img' src={Group46}/></td>
              <td className='sales_tdd'>
                Successfully uploaded "jumanji part 2" media
              </td>
              <td className='sales_tdd'><button className='sales_tdd_button'>3 hours ago</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
};

export default SalesRecent;
