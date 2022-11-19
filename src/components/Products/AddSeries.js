import React from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { setSeriesStatus, setSeriesResponse, addSeries } from '../../actions/series';
import { setFileContent,setFileContentTwo } from '../../actions/product';
import { setSeasonStatus, setSeasonResponse } from '../../actions/season';
import { setCategoryId } from '../../actions/category';
import close from '../../images/close.png';

const AddSeriesModal  = () => {
  const dispatch = useDispatch();
  const { fileContent, fileContentTwo } = useSelector(state => state.productModal);
  const { seriesState, seriesResponse, } = useSelector(state => state.seriesModal);
  const { categories, categoryid } = useSelector(state => state.categoryModal);
  const closeSeriesState = () => dispatch(setSeriesStatus(undefined));

const seriesSubmit = (e) => {
  e.preventDefault();
  const movieName = e.target.elements.name.value.trim();
  const cast = e.target.elements.cast.value.trim();
  const catID = e.target.elements.catID.value.trim();
  const description = e.target.elements.description.value.trim();
  const file = fileContent;
  const file2 = fileContentTwo;
  dispatch(addSeries(movieName, cast, catID, description, file, file2));
};

const handleChange = event => {
  const categoryValue = event.target.value;
  const getCategoryId = categories.filter((data) => {
    return data.name === categoryValue;
  });
  dispatch(setCategoryId(getCategoryId[0]._id));
  return getCategoryId[0]._id;
  
};

const fileSelectedHandler = (e) => {
  dispatch(setFileContent(e.target.files[0]))
};

const fileSelectedHandlerTwo = (e) => {
  dispatch(setFileContentTwo(e.target.files[0]))
};

  return (
    <div className='join-group'>
      <Modal isOpen={seriesState}
        onRequestClose={closeSeriesState}
        ariaHideApp={false}
        contentLabel="newlabeltv.com"
        closeTimeoutMS={400}
        className='join-group-modal'>
          <div className='join-group-inner2'>
            <form onSubmit={seriesSubmit} className='join-group-form'>
              <table className='join-group-form-table'>
                <tbody>
                  <tr>
                    <td className='jpft-td'>NEW Series</td>
                    <td className='jpft-td2'><img onClick={() => {
                        dispatch(setSeriesStatus(false));
                        dispatch(setSeriesResponse(''));
                        window.location.href = '/product';
                      }} className='add-genre-close' src={close} alt='new label tv' title='new label tv'/></td>
                  </tr>
                </tbody>
              </table>

                <button onClick={() => {
                  dispatch(setSeriesStatus(false));
                  dispatch(setSeriesResponse(''));
                  dispatch(setSeasonStatus(true));
                  dispatch(setSeasonResponse(''));
                }} className='add-series-btn'>
                  Add Season
                </button>
                <p className='cat-lab'>
                  Series Name*
                </p>
                <input className='join-group-input' name='name' type='text' placeholder='Series Name' />
                <p className='cat-lab'>
                  Cast*
                </p>
                <input className='join-group-input' name='cast' type='text' placeholder='Cast Seperated by comma' />
                <p className='cat-lab'>
                  Series Banner*
                </p>
                <input className='join-group-input' onChange={fileSelectedHandler} name='file' type='file' 
                  placeholder='Banner Image' accept="image/*" />
                <p className='cat-lab'>
                  Series Poster*
                </p>
                <input className='join-group-input' onChange={fileSelectedHandlerTwo} name='file' type='file' 
                  placeholder='Poster Image' accept="image/*" />
                <p className='cat-lab'>
                  Category*
                </p>
                <select name='category' onChange={handleChange} className='join-group-input'>
                  {categories.length > 0 ? 
                    categories.map(data => <option key={data.name} value={data.name}>{data.name}</option>) : ''};
                </select>
                <p className='cat-lab'>
                  Category ID*
                </p>
                <input name='catID' className='join-group-input' type='text' 
                  placeholder='Category Id' value={categoryid} readOnly/>
                <p className='cat-lab'>
                  Description*
                </p>
                <textarea name='description' className='join-group-input' type='text' placeholder='Write a description.' />
              <button className='join-group-submit'> 
                {seriesResponse === 'creating...' ? 'creating...' : 'Add new series'}
              </button>
              <p>{seriesResponse}</p>
            </form>
          </div>
      </Modal>
    </div>
  );
};

export default AddSeriesModal;
