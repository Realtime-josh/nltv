import React from 'react';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import remove from '../../images/icons/accountsettings.png'
import close from '../../images/close.png'
import { setCatDeleteState, deleteCategory } from '../../actions/category';

const CategoryMore = () => {
  const dispatch = useDispatch();
  const { catDeleteValue,} = useSelector(state => state.categoryModal);
  return (
    <div className='category-more'>
      <table className='category-more-table'>
        <tbody>
          <tr>
            <td onClick={() => {
              dispatch(deleteCategory(catDeleteValue));
            }} className='category-more-tr'>{<img src={remove} title='new label tv' alt='new label tv'/>}</td>
            <td onClick={() => {
              dispatch(deleteCategory(catDeleteValue));
            }} className='category-more-tr2'><Link className='remove-cat' to='\'>Remove</Link></td>
            <td onClick={() => {
              dispatch(setCatDeleteState(false));
            }} className='category-more-tr2'>{<img src={close} title='new label tv' alt='new label tv'/>}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
};

export default CategoryMore;