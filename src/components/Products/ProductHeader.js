import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { setToogleBigScreen, setMenuStatus, } from '../../actions/menu';
import { setProductStatus, } from '../../actions/product';
import searchIcon from '../../images/searchicon.png';
import vector from '../../images/Vector.png';
import photo from '../../images/photo.png';
import groupadd from '../../images/groupadd.png';
import slash from '../../images/slash.png';
// import slash2 from '../../images/slash.png';


const ProductHeader = () => {
  const dispatch = useDispatch();
  const { productState,  } = useSelector(state => state.productModal);
  const { toggleBigScreen } = useSelector(state => state.menuModal);
  return (
    <div className='product_header'>
      <img onClick={() => {
        dispatch(setMenuStatus(true));
      }} className='menu-icon-head2' src={slash} title='New label TV' alt='New label TV' />
      <div className='product_text'>
        <table className='product_text_table'>
          <tbody>
            <tr>
              <td className='product_text_td dash_td'>
                <img onClick={() => {
                  // dispatch(setMenuStatus(true));
                  dispatch(setToogleBigScreen(!toggleBigScreen));
                }} className='menu-icon-head' src={slash} title='New label TV' alt='New label TV' />
              </td>
              <td className='product_text_td'>Products</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='product_icons'>
        <table className='product_icons_table'>
          <tbody>
            <tr>
              <td className='product_icons_td'>
                <img src={searchIcon} alt='new label tv' title='new label tv'/>
              </td>

              <td className='product_icons_td'>
                <img src={vector} alt='new label tv' title='new label tv'/>
              </td>

              <td className='product_icons_td'>
                <img className='profile_photo' src={photo} alt='new label tv' title='new label tv'/>
              </td>

              <td className='product_icons_td'>
                <img onClick={() => {
                  dispatch(setProductStatus(!productState))
                }} src={groupadd} alt='new label tv' title='new label tv'/>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  )
};


export default ProductHeader;
