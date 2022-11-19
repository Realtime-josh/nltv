import React from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { setSeasonStatus, setSeasonResponse, addSeason } from '../../actions/season';
import { setEpisodeStatus, setEpisodeResponse} from '../../actions/episode';
import { setSeriesId } from '../../actions/series';
import close from '../../images/close.png';

const AddSeasonModal  = () => {
  const dispatch = useDispatch();
  const { series, seriesid } = useSelector(state => state.seriesModal);
  const { seasonState, seasonResponse, } = useSelector(state => state.seasonModal);
  const closeSeasonState = () => dispatch(setSeasonStatus(undefined));

const seasonSubmit = (e) => {
  e.preventDefault();
  const number = e.target.elements.number.value.trim();
  const seasonPassPrice = e.target.elements.seasonPassPrice.value.trim();
  const series = e.target.elements.seriesID.value.trim();
  const description = e.target.elements.description.value.trim();
  dispatch(addSeason(number, seasonPassPrice, series, description));
};


const handleChangeSeries = event => {
  const seriesValue = event.target.value;
  const getSeriesId = series.filter((data) => {
    return data.name === seriesValue;
  });
  dispatch(setSeriesId(getSeriesId[0]._id));
  return getSeriesId[0]._id;
  
};



  return (
    <div className='join-group'>
      <Modal isOpen={seasonState}
        onRequestClose={closeSeasonState}
        ariaHideApp={false}
        contentLabel="newlabeltv.com"
        closeTimeoutMS={400}
        className='join-group-modal'>
          <div className='join-group-inner2'>
            <form onSubmit={seasonSubmit} className='join-group-form'>
              <table className='join-group-form-table'>
                <tbody>
                  <tr>
                    <td className='jpft-td'>NEW Season</td>
                    <td className='jpft-td2'><img onClick={() => {
                        dispatch(setSeasonStatus(false));
                        dispatch(setSeasonResponse(''));
                        window.location.href = '/product';
                      }} className='add-genre-close' src={close} alt='new label tv' title='new label tv'/></td>
                  </tr>
                </tbody>
              </table>
                <button onClick={() => {
                  dispatch(setSeasonStatus(false));
                  dispatch(setSeasonResponse(''));
                  dispatch(setEpisodeStatus(true));
                  dispatch(setEpisodeResponse(''));
                }} className='add-series-btn'>
                  Add Episode
                </button>
                <p className='cat-lab'>
                  Season Number*
                </p>
                <input className='join-group-input' name='number' type='number' placeholder='Season Number' />
                <p className='cat-lab'>
                  Price*
                </p>
                <input className='join-group-input' name='seasonPassPrice' type='number' placeholder='Price' />
                <p className='cat-lab'>
                  Series Tag*
                </p>
                <select name='series' onChange={handleChangeSeries} className='join-group-input'>
                  {series.length > 0 ? 
                    series.map(data => <option key={`${data.name} ${data._id}`} value={data.name}>{data.name}</option>) : ''};
                </select>
                <p className='cat-lab'>
                  Series ID*
                </p>
                <input name='seriesID' className='join-group-input' type='text' 
                  placeholder='Series Id' value={seriesid} readOnly/>
                <p className='cat-lab'>
                  Description*
                </p>
                <textarea name='description' className='join-group-input' type='text' placeholder='Write a description.' />
              <button className='join-group-submit'> 
                {seasonResponse === 'creating...' ? 'creating...' : 'Add new season'}
              </button>
              <p>{seasonResponse}</p>
            </form>
          </div>
      </Modal>
    </div>
  );
};

export default AddSeasonModal;
