import React from 'react';
import Checkbox from 'react-custom-checkbox';
import dotted from '../../images/dotted.png';
import Ellipse11 from '../../images/Ellipse11.png';
import photo from '../../images/photo.png';

const OrdersActions = () => {
  return (
    <div className='cat_actions_div'>
      <table className='cat_actions_table' cellSpacing={0}>
        <tbody>
          <tr>
            <th className='cat_table_header cth'>
              <Checkbox 
                name="my_input"
                checked={false}
                borderColor= "green"
                backgroundColor= "green"
                style={{cursor: "pointer"}}
                labelStyle={{ marginLeft: 20, userSelect: "none" }}
                label="#"
              />   
            </th>
            <th className='cat_table_header'>Date</th>
            <th className='cat_table_header'>Customer</th>
            <th className='cat_table_header'>Status</th>
            <th className='cat_table_header'>Purchased</th>
            <th className='cat_table_header cth2'></th>
          </tr>

          <tr>
            <th className='cat_table_data'>
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
                backgroundColor= "green"
                style={{cursor: "pointer"}}
                labelStyle={{ marginLeft: 20, userSelect: "none" }}
                label="#10492"
              />   
            </th>
            <th className='cat_table_data'>09 Jun 2021, 00:00</th>
            <th className='cat_table_data'>
              <img className='orders-custom' src={photo} alt='new label tv' title='new label tv'/>
              Gray Schafer
            </th>
            <th className='cat_table_data'>
              <img className='orders-ellipse' src={Ellipse11} alt='new label tv' title='new label tv'/>
              Paid
            </th>
            <th className='cat_table_data'>The 100: Dawn of time</th>
            <th className='cth3'><img src={dotted} alt='new label tv' title='new label tv'/></th>
          </tr>

          <tr>
            <th className='cat_table_data'>
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
                backgroundColor= "green"
                style={{cursor: "pointer"}}
                labelStyle={{ marginLeft: 20, userSelect: "none" }}
                label="#10492"
              />   
            </th>
            <th className='cat_table_data'>09 Jun 2021, 00:00</th>
            <th className='cat_table_data'>
              <img className='orders-custom' src={photo} alt='new label tv' title='new label tv'/>
              Gray Schafer
            </th>
            <th className='cat_table_data'>
              <img className='orders-ellipse' src={Ellipse11} alt='new label tv' title='new label tv'/>
              Paid
            </th>
            <th className='cat_table_data'>The 100: Dawn of time</th>
            <th className='cth3'><img src={dotted} alt='new label tv' title='new label tv'/></th>
          </tr>

          <tr>
            <th className='cat_table_data'>
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
                backgroundColor= "green"
                style={{cursor: "pointer"}}
                labelStyle={{ marginLeft: 20, userSelect: "none" }}
                label="#10492"
              />   
            </th>
            <th className='cat_table_data'>09 Jun 2021, 00:00</th>
            <th className='cat_table_data'>
              <img className='orders-custom' src={photo} alt='new label tv' title='new label tv'/>
              Gray Schafer
            </th>
            <th className='cat_table_data'>
              <img className='orders-ellipse' src={Ellipse11} alt='new label tv' title='new label tv'/>
              Paid
            </th>
            <th className='cat_table_data'>The 100: Dawn of time</th>
            <th className='cth3'><img src={dotted} alt='new label tv' title='new label tv'/></th>
          </tr>

          <tr>
            <th className='cat_table_data'>
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
                backgroundColor= "green"
                style={{cursor: "pointer"}}
                labelStyle={{ marginLeft: 20, userSelect: "none" }}
                label="#10492"
              />   
            </th>
            <th className='cat_table_data'>09 Jun 2021, 00:00</th>
            <th className='cat_table_data'>
              <img className='orders-custom' src={photo} alt='new label tv' title='new label tv'/>
              Gray Schafer
            </th>
            <th className='cat_table_data'>
              <img className='orders-ellipse' src={Ellipse11} alt='new label tv' title='new label tv'/>
              Paid
            </th>
            <th className='cat_table_data'>The 100: Dawn of time</th>
            <th className='cth3'><img src={dotted} alt='new label tv' title='new label tv'/></th>
          </tr>

          <tr>
            <th className='cat_table_data'>
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
                backgroundColor= "green"
                style={{cursor: "pointer"}}
                labelStyle={{ marginLeft: 20, userSelect: "none" }}
                label="#10492"
              />   
            </th>
            <th className='cat_table_data'>09 Jun 2021, 00:00</th>
            <th className='cat_table_data'>
              <img className='orders-custom' src={photo} alt='new label tv' title='new label tv'/>
              Gray Schafer
            </th>
            <th className='cat_table_data'>
              <img className='orders-ellipse' src={Ellipse11} alt='new label tv' title='new label tv'/>
              Paid
            </th>
            <th className='cat_table_data'>The 100: Dawn of time</th>
            <th className='cth3'><img src={dotted} alt='new label tv' title='new label tv'/></th>
          </tr>

          <tr>
            <th className='cat_table_data'>
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
                backgroundColor= "green"
                style={{cursor: "pointer"}}
                labelStyle={{ marginLeft: 20, userSelect: "none" }}
                label="#10492"
              />   
            </th>
            <th className='cat_table_data'>09 Jun 2021, 00:00</th>
            <th className='cat_table_data'>
              <img className='orders-custom' src={photo} alt='new label tv' title='new label tv'/>
              Gray Schafer
            </th>
            <th className='cat_table_data'>
              <img className='orders-ellipse' src={Ellipse11} alt='new label tv' title='new label tv'/>
              Paid
            </th>
            <th className='cat_table_data'>The 100: Dawn of time</th>
            <th className='cth3'><img src={dotted} alt='new label tv' title='new label tv'/></th>
          </tr>
        </tbody>
      </table>
    </div>
  )
};


export default OrdersActions;
