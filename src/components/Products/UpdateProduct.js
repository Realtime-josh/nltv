import React from 'react';
import Modal from 'react-modal';
import { updateProduct } from '../../actions/product';
import { useDispatch, useSelector } from 'react-redux';
import { setUpdateStatus, setProductResponse, } from '../../actions/product';
import close from '../../images/close.png';

const UpdateProductModal  = () => {
  const dispatch = useDispatch();
  const { updateState, productResponse, proUpdateValue, } = useSelector(state => state.productModal);
  const closeUpdateState = () => dispatch(setUpdateStatus(undefined));

  const updateSubmit = (e) => {
  e.preventDefault();
  const movieName = e.target.elements.movie.value.trim();
  const price = e.target.elements.price.value.trim();
  const description = e.target.elements.description.value.trim();
  const isonsale = e.target.elements.isonsale.value.trim();
  const isinstock = e.target.elements.isinstock.value.trim();
  dispatch(updateProduct(movieName, price, 
    description, proUpdateValue, isonsale, isinstock));
};

// const updateSectionSubmit = (e) => {
//   e.preventDefault();
//   const sectionName = e.target.elements.section.value.trim();
//   const movieid = e.target.elements.movieid.value.trim();
//   dispatch(updateSection(sectionName, movieid));
// };



  return (
    <div className='join-group'>
      <Modal isOpen={updateState}
        onRequestClose={closeUpdateState}
        ariaHideApp={false}
        contentLabel="newlabeltv.com"
        closeTimeoutMS={400}
        className='join-group-modal'>
          <div className='join-group-inner2'>
            <form onSubmit={updateSubmit} className='join-group-form'>
              <table className='join-group-form-table'>
                <tbody>
                  <tr>
                    <td className='jpft-td'>UPDATE MOVIE</td>
                    <td className='jpft-td2'><img onClick={() => {
                        dispatch(setUpdateStatus(false));
                        dispatch(setProductResponse(''));
                        // window.location.href = '/product';
                      }} className='add-genre-close' src={close} alt='new label tv' title='new label tv'/></td>
                  </tr>
                </tbody>
              </table>
                <p className='cat-lab'>
                  Movie Name*
                </p>
                <input className='join-group-input' name='movie' type='text' placeholder='Movie Name' />
                <p className='cat-lab'>
                  isInStock*
                </p>
                <select className='join-group-input' name='isinstock' type='text' placeholder='Cast Seperated by comma'>
                  <option value='true'>True</option>
                  <option value='false'>false</option>
                </select>
                <p className='cat-lab'>
                  isOnSale*
                </p>
                <select className='join-group-input' name='isonsale' type='text' placeholder='Cast Seperated by comma'>
                  <option value='true'>True</option>
                  <option value='false'>false</option>
                </select>
                <p className='cat-lab'>
                  Price*
                </p>
                <input className='join-group-input' name='price' type='number' placeholder='Price' />
                <p className='cat-lab'>
                  Description*
                </p>
                <textarea name='description' className='join-group-input' type='text' placeholder='Write a description.' />
              <button className='join-group-submit'> 
                {productResponse === 'creating...' ? 'creating...' : 'Update movie'}
              </button>
              <p>{productResponse}</p>
            </form>
          </div>
      </Modal>
    </div>
  );
};

export default UpdateProductModal;
