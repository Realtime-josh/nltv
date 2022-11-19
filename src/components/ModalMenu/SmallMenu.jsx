import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { setMenuStatus } from '../../actions/menu';
import { logout } from '../../actions/auth';
import logo from '../../images/logo.png';
import menuBar from '../../images/three-bars.png';
import home from '../../images/home.png';
import film from '../../images/film.png';
import categories from '../../images/categories.png';
import genres from '../../images/genres.png';
import coupons from '../../images/coupons.png';
import orders from '../../images/orders.png';

const SmallMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className='sidebar_bscreen2'>
      <table className='menu_logo_table'>
        <tbody>
          <tr>
            <td className='bar_table_td'>
          
            </td>

            <td className='menu_table_td'>
              <img className='menu' src={menuBar} title="new label tv" alt='new label tv' />
            </td>

            <td className='logo_table_td'>
              <img onClick={() => {
                navigate("/home");
                dispatch(setMenuStatus(false));
              }} className='logo' src={logo} title="new label tv" alt='new label tv'/>
            </td>
          </tr>
        </tbody>
      </table>

      <table className='menu_action_table'>
        <tbody>
          <tr id='action_tr_1'>
            <td className='bar_table_td'>
              <button id='action_bar_1' className='bar_table_td_button'>

              </button>
            </td>

            <td className='menu_table_td'>
              <img className='home' src={home} title="new label tv" alt='new label tv' />
            </td>

            <td className='logo_table_td'>
              <button onClick={() => {
                 navigate("/home");
                 dispatch(setMenuStatus(false));
              }} id='menu_button_1' className='action_menu_button'>home</button>
            </td>
          </tr>
        </tbody>
      </table>

      <table className='menu_action_table'>
        <tbody>
          <tr id='action_tr_2'>
            <td className='bar_table_td'>
              <button id='action_bar_2' className='bar_table_td_button'>

              </button>
            </td>

            <td className='menu_table_td'>
              <img className='home' src={film} title="new label tv" alt='new label tv' />
            </td>

            <td className='logo_table_td'>
              <button onClick={() => {
                 navigate("/product");
                 dispatch(setMenuStatus(false));
              }} id='menu_button_2' className='action_menu_button'>products</button>
            </td>
          </tr>
        </tbody>
      </table>

      <table className='menu_action_table'>
        <tbody>
          <tr id='action_tr_3'>
            <td className='bar_table_td'>
              <button id='action_bar_3' className='bar_table_td_button'>

              </button>
            </td>

            <td className='menu_table_td'>
              <img className='home' src={categories} title="new label tv" alt='new label tv' />
            </td>

            <td className='logo_table_td'>
              <button onClick={() => {
                 navigate("/category");
                 dispatch(setMenuStatus(false));
              }} id='menu_button_3' className='action_menu_button'>categories</button>
            </td>
          </tr>
        </tbody>
      </table>

      <table className='menu_action_table'>
        <tbody>
          <tr id='action_tr_4'>
            <td className='bar_table_td'>
              <button id='action_bar_4' className='bar_table_td_button'>

              </button>
            </td>

            <td className='menu_table_td'>
              <img className='home' src={genres} title="new label tv" alt='new label tv' />
            </td>

            <td className='logo_table_td'>
              <button onClick={() => {
                 navigate("/genre");
                 dispatch(setMenuStatus(false));
              }} id='menu_button_4' className='action_menu_button'>genres</button>
            </td>
          </tr>
        </tbody>
      </table>

      <table className='menu_action_table'>
        <tbody>
          <tr id='action_tr_5'>
            <td className='bar_table_td'>
              <button id='action_bar_5' className='bar_table_td_button'>

              </button>
            </td>

            <td className='menu_table_td'>
              <img className='home' src={coupons} title="new label tv" alt='new label tv' />
            </td>

            <td className='logo_table_td'>
              <button id='menu_button_5' className='action_menu_button'>coupons</button>
            </td>
          </tr>
        </tbody>
      </table>

      <table className='menu_action_table'>
        <tbody>
          <tr id='action_tr_6'>
            <td  className='bar_table_td'>
              <button id='action_bar_6' className='bar_table_td_button'>

              </button>
            </td>

            <td className='menu_table_td'>
              <img className='home' src={orders} title="new label tv" alt='new label tv' />
            </td>

            <td className='logo_table_td'>
              <button onClick={() => {
                navigate("/orders");
                dispatch(setMenuStatus(false));
              }} id='menu_button_6' className='action_menu_button'>orders</button>
            </td>
          </tr>
        </tbody>
      </table>

      <button onClick={() => {
        dispatch(logout())
        navigate("/login");
      }} className='logout_button'>LOGOUT</button>

    </div>
  )
};

export default SmallMenu;

