import React, { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';
import {setSectionStatus, setSectionResponse, addSection, setSectionBoardStatus,} from '../../actions/section';
import close from '../../images/close.png';
import settings from '../../images/icons/settings.png';


const AddSection = (props) => {
  
  const dispatch = useDispatch();
  const closeSectionState = () => dispatch(setSectionStatus(undefined));
  const { products, } = useSelector(state => state.productModal); 
  const { sectionState, sectionResponse, } = useSelector(state => state.sectionModal);
  const [ , setMovies] = useState(props.movies);
  const [ , setMoviesid] = useState(props.moviesid);


  const handleChange = event => {
    const movieName = event.target.value;
    const getMovieId = products.filter((data) => {
      return data.name === movieName;
    });

    const getKnownMovies = props.movies.filter((movie) => {
      return movie === movieName;
    });

  
    if(getKnownMovies.length < 1){
      setMovies(props.movies.push(movieName));
      setMoviesid(props.moviesid.push(getMovieId[0]._id));
    };
  };

  



  
  const sectionSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements.sectionName.value.trim();
    const movies = props.moviesid
    dispatch(addSection( name, movies));
  };

  return (
    <div className='join-group'>
      <Modal isOpen={sectionState}
        onRequestClose={closeSectionState}
        ariaHideApp={false}
        contentLabel="newlabeltv.com"
        closeTimeoutMS={400}
        className='join-group-modal'>
          <div className='join-group-inner2'>
            <form onSubmit={sectionSubmit} className='join-group-form'>
                <table className='join-group-form-table'>
                  <tbody>
                    <tr>
                      <td className='jpft-td'>ADD SECTION</td>
                      <td className='jpft-td2'><img onClick={() => {
                          dispatch(setSectionStatus(false));
                          dispatch(setSectionResponse(''));
                          window.location.href = '/product';
                        }} className='add-genre-close' src={close} alt='new label tv' title='new label tv'/></td>
                    </tr>
                  </tbody>
                </table>
                <div className='movie-display'>
                  {props.movies.length > 0 ? props.movies.map(data => <Fragment>
                    <div className='movies-list' key={`${data}`}>
                  {data}
                </div>
                  {/* <img src={close} 
                    title='remove item nltv'  alt='remove item nltv' /> */}
                    </Fragment>) : ''}
                </div>
                <p className='cat-lab'>
                  
                </p>
                <img onClick={() => {
                  dispatch(setSectionBoardStatus(true));
                }} src={settings} title='nltv' alt='nltv' />
                <p className='cat-lab'>
                  Section Name*
                </p>
                <input className='join-group-input' name='sectionName' type='text' placeholder='Section Name' required/>  
                <p className='cat-lab'>
                  Select Movie*
                </p>
                <select onChange={handleChange} className='join-group-input' name='isinstock' type='text' >
                  {products.length > 0 ? 
                      products.map(data => <option key={`${data._id} ${data.name}`} value={data.name}>{data.name}</option>) : ''};
                </select>

                {props.movies.length > 4 ? (
                  <button  className='join-group-submit'> 
                  {sectionResponse === 'creating...' ? 'creating...' : 'Create section'}
                </button>
                ) : ''}
                <p>{sectionResponse}</p>
              </form>
          </div>
      </Modal>
    </div>
  )
  
};

AddSection.defaultProps = {
  start: [],
  movies : [],
  moviesid: [],
};

export default AddSection;