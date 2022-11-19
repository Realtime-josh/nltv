import React  from 'react';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='copyright-text-format'>
        <p className='footer-copy-statement'>©Copyright 2022 www.newlabeltv.com. All Rights Reserved</p>
      </div>
  
      <div className='footer-social-icons'>
        <i className="fa fa-facebook-f social-icons facebook-color"></i>
        <i className="fa fa-twitter social-icons twitter-color" aria-hidden="true"></i>
        <i className="fa fa-instagram social-icons instagram-color" aria-hidden="true"></i>
        <i className="fa fa-youtube-play social-icons youtube-color" aria-hidden="true"></i>
      </div>
    </div>
  )
};

export default Footer;
