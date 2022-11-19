import React from 'react';
import { useDispatch, useSelector, } from 'react-redux';
import { setProductStatusTwo, setProductDelete, setProductUpdate, setProductID } from '../../actions/product';
import Loader from '../Loader/Loader';

const FilmBoard = () => {

  const dispatch = useDispatch();
  const { products } = useSelector(state => state.productModal);
  const dateStruct = (time) => {
    let arrayTime = time.split("");
    let data = arrayTime.lastIndexOf("T");
    let slicedDate = arrayTime.slice(0, data);
    let date = slicedDate.join("");
    return `${date}`;
  };
  return (
    <div className='film_board'>
      {products.length > 0 ? products.map(data => (
        <div onClick={() => {
          dispatch(setProductStatusTwo(true));
          dispatch(setProductDelete(data.slug));
          dispatch(setProductUpdate(data.slug));
          dispatch(setProductID(data._id))
        }} key={`${data.createdAt}div`} className="groups">
          <img key={`${data.createdAt}img`} className="groupImages" src={data.banner} alt='newlabeltv' title='newlabeltv'/>
          <h3 key={`${data.createdAt}h3`} className='film_title'>{`Media / ${data.name}`}</h3>
          <table key={`${data.createdAt}table`} className='film_board_table'>
            <tbody key={`${data.createdAt}tbody`}>
              <tr key={`${data.createdAt}tr`}>
                <td key={`${data.createdAt}td1`} className='film_title_details'> {dateStruct(data.createdAt)} </td>
                <td key={`${data.createdAt}td2`} className='film_title_details'> <p className='dot'></p> </td>
                <td key={`${data.createdAt}td3`} className='film_title_details'>1.4k Downloads</td>
                <td key={`${data.createdAt}td4`} className='film_title_details'> <p className='dot'></p> </td>
                <td key={`${data.createdAt}td5`} className='film_title_details'>1:40</td>
              </tr>
            </tbody>
          </table>
        </div>
      )) : <Loader />}
    </div>
  )
};


export default FilmBoard;
