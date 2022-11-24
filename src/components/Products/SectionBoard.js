import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';
import {setSectionStatus, setSectionBoardStatus,} from '../../actions/section';
// import close from '../../images/close.png';
import update from '../../images/icons/updated.png';
import deleteSect from '../../images/icons/deleter.png';


const SectionBoard = () => {
  
  const dispatch = useDispatch();
  const { sectionBoardState, } = useSelector(state => state.sectionModal);
  const closeSectionState = () => {
    dispatch(setSectionBoardStatus(undefined));
    dispatch(setSectionStatus(undefined));
  }

  return (
    <div className='join-group'>
      <Modal isOpen={sectionBoardState}
        onRequestClose={closeSectionState}
        ariaHideApp={false}
        contentLabel="newlabeltv.com"
        closeTimeoutMS={400}
        className='join-group-modal'>
        <div className='section-board-group'>
          {/* <table className='join-group-form-table sectab'>
            <tbody>
              <tr>
                <td className='jpft-td'>ADD SECTION</td>
                <td className='jpft-td2'><img onClick={() => {
                    
                  }} className='add-genre-close' src={close} alt='new label tv' title='new label tv'/></td>
              </tr>
            </tbody>
          </table> */}
          <div className='film_board'>
            <div className='secGroups'>
              <img className='sectionAction' src={deleteSect} alt='new label tv' title='new label tv' />
              <img className='sectionAction2' src={update} alt='new label tv' title='new label tv' />
              <h2>Trending</h2><hr />
              <h4>Cool</h4>
              <h4>Breeze</h4>
            </div>

            <div className='secGroups'>
              <img className='sectionAction' src={deleteSect} alt='new label tv' title='new label tv' />
              <img className='sectionAction2' src={update} alt='new label tv' title='new label tv' />
              <h2>Popular</h2><hr />
              <h4>Cool</h4>
              <h4>Breeze</h4>
            </div>

            <div className='secGroups'>
              <img className='sectionAction' src={deleteSect} alt='new label tv' title='new label tv' />
              <img className='sectionAction2' src={update} alt='new label tv' title='new label tv' />
              <h2>Most Viewed</h2><hr />
              <h4>Cool</h4>
              <h4>Breeze</h4>
            </div>

            <div className='secGroups'>
              <img className='sectionAction' src={deleteSect} alt='new label tv' title='new label tv' />
              <img className='sectionAction2' src={update} alt='new label tv' title='new label tv' />
              <h2>Most Viewed</h2><hr />
              <h4>Cool</h4>
              <h4>Breeze</h4>
            </div>

            <div className='secGroups'>
              <img className='sectionAction' src={deleteSect} alt='new label tv' title='new label tv' />
              <img className='sectionAction2' src={update} alt='new label tv' title='new label tv' />
              <h2>Most viewed</h2><hr />
              <h4>Cool</h4>
              <h4>Breeze</h4>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
  
};



export default SectionBoard;