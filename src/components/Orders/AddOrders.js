import React from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { setOrdersStatus } from '../../actions/orders';
import close from '../../images/close.png';

const OrderModal  = () => {
  const dispatch = useDispatch();
  const { orderState } = useSelector(state => state.orderModal)
  const closeOrderState = () => dispatch(setOrdersStatus(undefined));

  return (
    <div className='join-group'>
      <Modal isOpen={orderState}
        onRequestClose={closeOrderState}
        ariaHideApp={false}
        contentLabel="newlabeltv.com"
        closeTimeoutMS={400}
        className='join-group-modal'>
          <div className='join-group-inner'>
            <form className='join-group-form'>
              <table className='join-group-form-table'>
                <tbody>
                  <tr>
                    <td className='jpft-td'>NEW ORDER</td>
                    <td className='jpft-td2'><img onClick={() => {
                        dispatch(setOrdersStatus(false));
                      }} className='add-genre-close' src={close} alt='new label tv' title='new label tv'/></td>
                  </tr>
                </tbody>
              </table>
                <p className='cat-lab'>
                  Order*
                </p>
                <input className='join-group-input' type='text' placeholder='New Order' />
              <button className='join-group-submit'>Add new order</button>
            </form>
          </div>
      </Modal>
    </div>
  );
};

export default OrderModal;
