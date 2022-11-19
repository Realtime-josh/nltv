import React from 'react';
import Modal from 'react-modal';
import { addProduct } from '../../actions/product';
import { useDispatch, useSelector } from 'react-redux';
import { setProductStatus, setProductResponse,
         setFileContent,setFileContentTwo } from '../../actions/product';
import { setSeriesStatus, setSeriesResponse } from '../../actions/series';
import { setSeasonStatus, setSeasonResponse } from '../../actions/season';
import { setEpisodeStatus, setEpisodeResponse } from '../../actions/episode';
import { setSectionStatus, setSectionResponse, } from '../../actions/section';
import { setCategoryId } from '../../actions/category';
import close from '../../images/close.png';

const AddProductModal  = () => {
  const dispatch = useDispatch();
  const { productState, productResponse, fileContent, fileContentTwo } = useSelector(state => state.productModal);
  const { categories, categoryid } = useSelector(state => state.categoryModal);
  const closeProductState = () => dispatch(setProductStatus(undefined));

const productSubmit = (e) => {
  e.preventDefault();
  const movieName = e.target.elements.movie.value.trim();
  const videoURL = e.target.elements.videourl.value.trim();
  const file = fileContent;
  const file2 = fileContentTwo;
  const price = e.target.elements.price.value.trim();
  const catID = e.target.elements.catID.value.trim();
  const description = e.target.elements.description.value.trim();
  const year = e.target.elements.year.value.trim();
  const runtime = e.target.elements.runtime.value.trim();
  const cast = e.target.elements.cast.value.trim();
  dispatch(addProduct(movieName, videoURL, price, catID, description, year, runtime, cast, file, file2));
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

const fileSelectedHandler2 = (e) => {
  dispatch(setFileContentTwo(e.target.files[0]))
};


  return (
    <div className='join-group'>
      <Modal isOpen={productState}
        onRequestClose={closeProductState}
        ariaHideApp={false}
        contentLabel="newlabeltv.com"
        closeTimeoutMS={400}
        className='join-group-modal'>
          <div className='join-group-inner2'>
            <form onSubmit={productSubmit} className='join-group-form'>
              <table className='join-group-form-table'>
                <tbody>
                  <tr>
                    <td className='jpft-td'>NEW MOVIE</td>
                    <td className='jpft-td2'><img onClick={() => {
                       dispatch(setProductResponse(''));
                        dispatch(setProductStatus(false));
                        window.location.href = '/product';
                      }} className='add-genre-close' src={close} alt='new label tv' title='new label tv'/></td>
                  </tr>
                </tbody>
              </table>
                <div className='series-season-epi'>
                  <button onClick={() => {
                    dispatch(setProductStatus(false));
                    dispatch(setProductResponse(''));
                    dispatch(setSeasonStatus(false));
                    dispatch(setSeasonResponse(''));
                    dispatch(setEpisodeStatus(false));
                    dispatch(setEpisodeResponse(''));
                    dispatch(setSectionStatus(false));
                    dispatch(setSectionResponse(''));
                    dispatch(setSeriesStatus(true));
                    dispatch(setSeriesResponse(''));
                  }} className='add-series-btn'>
                    Add Series
                  </button>

                  <button onClick={() => {
                    dispatch(setProductStatus(false));
                    dispatch(setProductResponse(''));
                    dispatch(setSeriesStatus(false));
                    dispatch(setSeriesResponse(''));
                    dispatch(setEpisodeStatus(false));
                    dispatch(setEpisodeResponse(''));
                    dispatch(setSectionStatus(false));
                    dispatch(setSectionResponse(''));
                    dispatch(setSeasonStatus(true));
                    dispatch(setSeasonResponse(''));
                  }} className='add-series-btn'>
                    Add Season
                  </button>

                  <button onClick={() => {
                    dispatch(setProductStatus(false));
                    dispatch(setProductResponse(''));
                    dispatch(setSeriesStatus(false));
                    dispatch(setSeriesResponse(''));
                    dispatch(setSeasonStatus(false));
                    dispatch(setSeasonResponse(''));
                    dispatch(setSectionStatus(false));
                    dispatch(setSectionResponse(''));
                    dispatch(setEpisodeStatus(true));
                    dispatch(setEpisodeResponse(''));
                  }} className='add-series-btn'>
                    Add Episode
                  </button>

                  {/* <button onClick={() => {
                    dispatch(setProductStatus(false));
                    dispatch(setProductResponse(''));
                    dispatch(setSeriesStatus(false));
                    dispatch(setSeriesResponse(''));
                    dispatch(setSeasonStatus(false));
                    dispatch(setSeasonResponse(''));
                    dispatch(setEpisodeStatus(false));
                    dispatch(setEpisodeResponse(''));
                    dispatch(setSectionStatus(true));
                    dispatch(setSectionResponse(''));
                  }} className='add-series-btn'>
                    Add Section
                  </button> */}
                </div>
                <p className='cat-lab'>
                  Movie Name*
                </p>
                <input className='join-group-input' name='movie' type='text' placeholder='Movie Name' />
                <p className='cat-lab'>
                  Cast*
                </p>
                <input className='join-group-input' name='cast' type='text' placeholder='Cast Seperated by comma' />
                <p className='cat-lab'>
                  Run Time*
                </p>
                <input className='join-group-input' name='runtime' type='text' placeholder='Run Time' />
                <p className='cat-lab'>
                  Video URL*
                </p>
                <input className='join-group-input' name='videourl' type='text' placeholder='Video URL' />
                <p className='cat-lab'>
                  Banner Image*
                </p>
                <input className='join-group-input'  
                  onChange={fileSelectedHandler} name='file' type='file' placeholder='Image URL' accept="image/*"  />
                <p className='cat-lab'>
                  Poster Image*
                </p>
                <input className='join-group-input'  
                  onChange={fileSelectedHandler2} name='file' type='file' placeholder='Image URL' accept="image/*"  />
                <p className='cat-lab'>
                  Price*
                </p>
                <input className='join-group-input' name='price' type='number' placeholder='Price' />
                <p className='cat-lab'>
                  Year*
                </p>
                <input className='join-group-input' name='year' type='number' placeholder='Price' />
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
                {productResponse === 'creating...' ? 'creating...' : 'Add new movie'}
              </button>
              <p>{productResponse}</p>
            </form>
          </div>
      </Modal>
    </div>
  );
};

export default AddProductModal;
