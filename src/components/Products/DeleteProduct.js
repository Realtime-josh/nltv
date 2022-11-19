import React from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { setProductStatusTwo, deleteProduct, setProductResponse, 
  setUpdateStatus, } from '../../actions/product';
import close from '../../images/close.png';

const DeleteProduct  = () => {
  const dispatch = useDispatch();
  const { productResponse, proDeleteValue,
          productStateTwo, } = useSelector(state => state.productModal)
  const closeProductState = () => dispatch(setProductStatusTwo(undefined));

  return (
    <div className='join-group'>
      <Modal isOpen={productStateTwo}
        onRequestClose={closeProductState}
        ariaHideApp={false}
        contentLabel="newlabeltv.com"
        closeTimeoutMS={400}
        className='join-group-modal'>
          <div className='join-group-inner'>
            <div  className='join-group-form'>
              <table className='join-group-form-table'>
                <tbody>
                  <tr>
                    <td className='jpft-td'>PRODUCT SETTINGS</td>
                    <td className='jpft-td2'><img onClick={() => {
                        dispatch(setProductStatusTwo(false));
                        dispatch(setProductResponse(''));
                        // window.location.href = '/product';
                      }} className='add-genre-close' src={close} alt='new label tv' title='new label tv'/></td>
                  </tr>
                </tbody>
              </table>

                <button onClick={() => {
                  dispatch(setProductStatusTwo(false));
                  dispatch(setUpdateStatus(true));
                }} className='join-group-submit'>
                  {productResponse === 'updating...' ? 'updating...' : 'Update Product'}
                </button>

                <button onClick={() => {
                  dispatch(deleteProduct(proDeleteValue));
                }} className='join-group-submit'>
                  {productResponse === 'deleting...' ? 'deleting...' : 'Delete Product'}
                </button>
                <p className='catresponse'>{productResponse === 'Product deleted.' ? 'Product deleted.' : ''}</p>
              </div>
          </div>
      </Modal>
    </div>
  );
};

export default DeleteProduct;
