import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';
import {setSectionStatus, setSectionBoardStatus,} from '../../actions/section';
import Loader from '../Loader/Loader';
import close from '../../images/icons/close.png';
import update from '../../images/icons/updated.png';
import deleteSect from '../../images/icons/deleter.png';


const SectionBoard = () => {
  
  const dispatch = useDispatch();
  const { sectionBoardState, sectionMovies } = useSelector(state => state.sectionModal);
  const closeSectionState = () => {
    dispatch(setSectionBoardStatus(undefined));
    dispatch(setSectionStatus(undefined));
  };

  return (
    <div className='join-group'>
      <Modal isOpen={sectionBoardState}
        onRequestClose={closeSectionState}
        ariaHideApp={false}
        contentLabel="newlabeltv.com"
        closeTimeoutMS={400}
        className='join-group-modal'>
        <div className='section-board-group'>
          <img onClick={() => {
            dispatch(setSectionBoardStatus(undefined));
            dispatch(setSectionStatus(undefined));      
          }} className='add-sb-close' src={close} alt='new label tv' title='new label tv'/>
          <div className='film_board'>
            {/* <div className='secGroups'>
              <img className='sectionAction' src={deleteSect} alt='new label tv' title='new label tv' />
              <img className='sectionAction2' src={update} alt='new label tv' title='new label tv' />
              <h2>Trending</h2><hr />
              <h4>Cool</h4>
              <h4>Breeze</h4>
            </div> */}
            {sectionMovies.data && (sectionMovies.data).length > 0 ? (sectionMovies.data).map(res => (
              <div key={`${res.name} ${res.createdAt} ${res._id}`} className='secGroups'>
              <img key={`${res.name} ${res.createdAt} img1  ${res._id}`}  className='sectionAction' src={deleteSect} alt='new label tv' title='new label tv' />
              <img   key={`${res.name} ${res.createdAt} img2  ${res._id}`}  className='sectionAction2' src={update} alt='new label tv' title='new label tv' />
              <h2   key={`${res.name} ${res.createdAt}  ${res._id}`}>{res.name}</h2><hr />
              <Fragment>
                {(res.movies).map(movie => (
                  <h4 key={`${res._id}`}>{movie.name}</h4>
                ))}
              </Fragment>
            </div>
            )) : <Loader />}
            
          </div>
        </div>
      </Modal>
    </div>
  ) 
};



export default SectionBoard;