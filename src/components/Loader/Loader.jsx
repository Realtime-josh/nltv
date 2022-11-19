import React from 'react';
import spinner from '../../images/icons/spinner2.gif';

const Loader = () => {
  return (
    <div className='loader-div'>
      <img className='loader-div-spinner' src={spinner} alt='New Label TV' title='New Label TV' />
    </div>
  )
};

export default Loader;