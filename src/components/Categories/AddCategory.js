import React from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryStatus, addCategory, setCategoriesResponse } from '../../actions/category';
import close from '../../images/close.png';

const CategoryModal  = () => {
  const dispatch = useDispatch();
  const { categoryState, categoriesResponse } = useSelector(state => state.categoryModal)
  const closeCategoryState = () => dispatch(setCategoryStatus(undefined));
 

  const categorySubmit = (e) => {
    e.preventDefault();
      const category = e.target.elements.cat.value.trim();
      dispatch(addCategory(category));
  };

  return (
    <div className='join-group'>
      <Modal isOpen={categoryState}
        onRequestClose={closeCategoryState}
        ariaHideApp={false}
        contentLabel="newlabeltv.com"
        closeTimeoutMS={400}
        className='join-group-modal'>
          <div className='join-group-inner'>
            <form onSubmit={categorySubmit} className='join-group-form'>
              <table className='join-group-form-table'>
                <tbody>
                  <tr>
                    <td className='jpft-td'>NEW CATEGORY</td>
                    <td className='jpft-td2'><img onClick={() => {
                        dispatch(setCategoryStatus(false));
                        dispatch(setCategoriesResponse(''));
                      }} className='add-genre-close' src={close} alt='new label tv' title='new label tv'/></td>
                  </tr>
                </tbody>
              </table>
                <p className='cat-lab'>
                  Name*
                </p>
                <input className='join-group-input' name='cat' type='text' placeholder='New Category' />
                <button className='join-group-submit'>
                  {categoriesResponse === 'creating...' ? 'creating...' : 'Add new category'}
                </button>
                <p>{categoriesResponse === 'Category already exist' ? 'Category already exist' : ''}</p>
                <p className='catresponse'>{categoriesResponse === 'Category Created.' ? 'Category Created.' : ''}</p>
              </form>
          </div>
      </Modal>
    </div>
  );
};

export default CategoryModal;
