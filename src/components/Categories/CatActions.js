import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Checkbox from 'react-custom-checkbox';
import dotted from '../../images/dotted.png';
import CategoryMore from './CategoryMore';
import { setCatDeleteState, setCatDeleteValue, } from '../../actions/category';

const CatActions = () => {
  const dispatch = useDispatch();
  const { catDeleteState, categories,} = useSelector(state => state.categoryModal);

  const timeStruct = (time) => {
    let arrayTime = time.split("");
    let data = arrayTime.lastIndexOf("T");
    let slicedTime = arrayTime.slice(data+1, data+6);
    let slicedDate = arrayTime.slice(0, data);
    let date = slicedDate.join("");
    let realTime = slicedTime.join("");
    return `${date} ${realTime}`;
  };

  return (
    <div className='cat_actions_div'>
      {catDeleteState && <CategoryMore />}
      <table className='cat_actions_table' cellSpacing={0}>
        <tbody>
          <tr>
            <th className='cat_table_header cth'>
              <Checkbox 
                name="my_input"
                checked={false}
                // onChange={(value) => {
                //   let p = {
                //     isTrue: value,
                //   };
                //   return value;
                // }}
                borderColor= "green"
                backgroundcolor= "green"
                style={{cursor: "pointer"}}
                labelStyle={{ marginLeft: 20, userSelect: "none" }}
                label="Name"
              />   
            </th>
            <th className='cat_table_header'>Created</th>
            <th className='cat_table_header'>No of Files</th>
            <th className='cat_table_header cth2'></th>
          </tr>

          {categories.length > 0 ? 
            categories.map(data => (<tr key={`${data.slug}tr`}>
              <th className='cat_table_data'  key={`${data.slug}th`}>
                <Checkbox 
                  name="my_input"
                  checked={false}
                  // onChange={(value) => {
                  //   let p = {
                  //     isTrue: value,
                  //   };
                  //   return value;
                  // }}
                  borderColor= "green"
                  backgroundcolor= "green"
                  style={{cursor: "pointer"}}
                  labelStyle={{ marginLeft: 20, userSelect: "none" }}
                  label={data.name}
                  key={`${data.slug}checkbox`}
                />   
                </th>
                <th className='cat_table_data'  key={`${data.slug}th2`}>{timeStruct(data.createdAt)}</th>
                <th className='cat_table_data'  key={`${data.slug}th3`}>234</th>
                <th className='cth3'  key={`${data.slug}th4`}><img  onClick={() => catDeleteState === false ? (
                  dispatch(setCatDeleteState(true)),
                  dispatch(setCatDeleteValue(data.slug))
                ): dispatch(setCatDeleteState(false))}
                 src={dotted} alt='new label tv' title='new label tv'/></th>
              </tr>)) : (
                <tr>
                  <th className='cat_table_data'>
                    Could not retrieve files 
                  </th>
                  <th className='cat_table_data'>N/A</th>
                  <th className='cat_table_data'>N/A</th>
                  <th className='cth3'></th>
                </tr>
              )}
        </tbody>
      </table>
    </div>
  )
};


export default CatActions;
