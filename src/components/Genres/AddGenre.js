import React from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { setGenreStatus } from '../../actions/genres';
import close from '../../images/close.png';

const GenreModal  = () => {
  const dispatch = useDispatch();
  const { genreState } = useSelector(state => state.genreModal)
  const closeGenreState = () => dispatch(setGenreStatus(undefined));

  return (
    <div className='join-group'>
      <Modal isOpen={genreState}
        onRequestClose={closeGenreState}
        ariaHideApp={false}
        contentLabel="newlabeltv.com"
        closeTimeoutMS={400}
        className='join-group-modal'>
          <div className='join-group-inner'>
            <form className='join-group-form'>
              <table className='join-group-form-table'>
                <tbody>
                  <tr>
                    <td className='jpft-td'>NEW GENRE</td>
                    <td className='jpft-td2'><img onClick={() => {
                        dispatch(setGenreStatus(false));
                      }} className='add-genre-close' src={close} alt='new label tv' title='new label tv'/></td>
                  </tr>
                </tbody>
              </table>
                <p className='cat-lab'>
                  Genre*
                </p>
                <input className='join-group-input' type='text' placeholder='New Genre' />
              <button className='join-group-submit'>Add new genre</button>
            </form>
          </div>
      </Modal>
    </div>
  );
};

export default GenreModal;
