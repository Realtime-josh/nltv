import React from 'react';
import { useSelector, useDispatch }  from 'react-redux';
import Modal from 'react-modal';
import SmallMenu from './SmallMenu';
import { setMenuStatus } from '../../actions/menu';



const SmallScreen = () => {

  const dispatch = useDispatch();
  const { menuState } =  useSelector(state => state.menuModal);
  const requestClose = () => dispatch(setMenuStatus(undefined));

  return (
    <Modal
    isOpen={menuState}
    onRequestClose={requestClose}
    ariaHideApp={false}
    contentLabel="newlabeltv.com"
    closeTimeoutMS={400}
    className='modal'>
      <SmallMenu />
    </Modal>
  )
};

export default SmallScreen;