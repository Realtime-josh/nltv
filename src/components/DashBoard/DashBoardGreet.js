import React from 'react';
import location from '../../images/location.png';
import line from '../../images/line.png';
import Iconly from '../../images/Iconly.png';


const DashBoardGreet = () => {

  const d = new Date();
  

  const findDay = () => {
    const hours = d.getHours();
    const numHrs = Number(hours);
    if( numHrs === 0){
      return "Morning";
    }else if(numHrs > 0 && numHrs < 12){
      return "Morning";
    }else if(numHrs >= 12 && numHrs < 17){
      return "Afternoon";
    }else if(numHrs >= 17 && numHrs < 24){
      return "Evening";
    }else{
      return "Day";
    };
  };


  return (
    <div className='dashboard_greet'>
      <h2 className='goodmessage'>{`Good ${findDay()} Aneri`}</h2>
      <table className='greeting_table'>
        <tbody>
          <tr>
            <td className='greeting_td dtd'><img alt='label' title='labeltv' src={location}/></td>
            <td className='greeting_td'>Hamsterdam, Germany</td>
            <td className='greeting_td dtd'><img alt='label' title='labeltv' src={line}/></td>
            <td className='greeting_td dtd'><img alt='label' title='labeltv' src={Iconly}/></td>
            <td className='greeting_td'>{d.toDateString()}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
};

export default DashBoardGreet;
