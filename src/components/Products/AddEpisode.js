import React from 'react';
import Modal from 'react-modal';
import { addEpisode } from '../../actions/episode'
import { setFileContent } from '../../actions/product';
import { useDispatch, useSelector } from 'react-redux';
import { setSeriesStatus, setSeriesResponse, setSeriesId } from '../../actions/series';
import { getSeason } from '../../actions/season';
import { setEpisodeStatus, setEpisodeResponse } from '../../actions/episode';
import { setSeasonId } from '../../actions/season';
import close from '../../images/close.png';

const AddEpisodeModal  = () => {
  const dispatch = useDispatch();
  const { fileContent } = useSelector(state => state.productModal);
  const { series, seriesid } = useSelector(state => state.seriesModal);
  const { season, } = useSelector(state => state.seasonModal);
  const { episodeState, episodeResponse, } = useSelector(state => state.episodeModal);

  const closeEpisodeState = () => dispatch(setEpisodeStatus(undefined));

const episodeSubmit = (e) => {
  e.preventDefault();
  const name = e.target.elements.name.value.trim();
  const videoUrl = e.target.elements.imageurl.value.trim();
  const runtime = e.target.elements.runtime.value.trim();
  const price = e.target.elements.price.value.trim();
  const seasonId = e.target.elements.seasonId.value.trim();
  const description = e.target.elements.description.value.trim();
  const file = fileContent;
  dispatch(addEpisode( name, runtime, price, seasonId, description, videoUrl, file));
};


const handleChangeSeries = event => {
  const seriesValue = event.target.value;
  const getSeriesId = series.filter((data) => {
    return data.name === seriesValue;
  });
  dispatch(setSeriesId(getSeriesId[0]._id));
  dispatch(getSeason(getSeriesId[0]._id));
  return getSeriesId[0]._id;
};

const handleChangeSeason = event => {
  console.log(season)
  const seasonValue = event.target.value;
  const getSeasonId = season.filter((data) => {
    return data._id === seasonValue;
  });
  console.log(getSeasonId)
  dispatch(setSeasonId(getSeasonId[0]._id));
  return getSeasonId[0]._id;
};

const fileSelectedHandler = (e) => {
  dispatch(setFileContent(e.target.files[0]))
};


  return (
    <div className='join-group'>
      <Modal isOpen={episodeState}
        onRequestClose={closeEpisodeState}
        ariaHideApp={false}
        contentLabel="newlabeltv.com"
        closeTimeoutMS={400}
        className='join-group-modal'>
          <div className='join-group-inner2'>
            <form onSubmit={episodeSubmit} className='join-group-form'>
              <table className='join-group-form-table'>
                <tbody>
                  <tr>
                    <td className='jpft-td'>NEW Episode</td>
                    <td className='jpft-td2'><img onClick={() => {
                        dispatch(setEpisodeStatus(false));
                        dispatch(setEpisodeResponse(''));
                        window.location.href = '/product';
                      }} className='add-genre-close' src={close} alt='new label tv' title='new label tv'/></td>
                  </tr>
                </tbody>
              </table>
                <button onClick={() => {
                  dispatch(setEpisodeStatus(false));
                  dispatch(setEpisodeResponse(''));
                  dispatch(setSeriesStatus(true));
                  dispatch(setSeriesResponse(''));
                }} className='add-series-btn'>
                  Add Series
                </button>
                <p className='cat-lab'>
                  Episode Name*
                </p>
                <input className='join-group-input' name='name' type='text' placeholder='Episode Name' />
                <p className='cat-lab'>
                  Run Time*
                </p>
                <input className='join-group-input' name='runtime' type='text' placeholder='Run Time' />
                <p className='cat-lab'>
                  Video URL*
                </p>
                <input className='join-group-input' name='imageurl' type='text' placeholder='Video URL' />
                <p className='cat-lab'>
                  Episode Poster*
                </p>
                <input className='join-group-input' onChange={fileSelectedHandler} name='file' type='file' 
                  placeholder='Image URL' accept="image/*" />
                <p className='cat-lab'>
                  Price*
                </p>
                <input className='join-group-input' name='price' type='number' placeholder='Price' />
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
                <input name='seriesid' className='join-group-input' type='text' 
                  placeholder='Season Id' value={seriesid} readOnly/>
                <p className='cat-lab'>
                  Season Tag*
                </p>
                <select name='seasonId' onChange={handleChangeSeason} className='join-group-input'>
                  {season.length > 0 ? 
                    season.map(data => <option key={`${data.number} ${data._id}`} value={`No ${data.number}: ${data._id}`}>
                                         {`No ${data.number}: ${data._id}`}
                                      </option>) : ''};
                </select>
                <p className='cat-lab'>
                  Description*
                </p>
                <textarea name='description' className='join-group-input' type='text' placeholder='Write a description.' />
              <button className='join-group-submit'> 
                {episodeResponse === 'creating...' ? 'creating...' : 'Add New Episode'}
              </button>
              <p>{episodeResponse}</p>
            </form>
          </div>
      </Modal>
    </div>
  );
};

export default AddEpisodeModal;
