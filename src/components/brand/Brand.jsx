import React from 'react';
import './brand.scss';
const Brand = () => {
  return (
    <div className='container-fluid brand-container'>
      <div className='row'>
        <div className='img-container'>
          <img src='img/brands/google.png' alt='' />
        </div>
        <div className='img-container'>
          <img src='img/brands/atlassian.png' alt='' />
        </div>
        <div className='img-container'>
          <img src='img/brands/dropbox.png' alt='' />
        </div>
        <div className='img-container'>
          <img src='img/brands/shopify.png' alt='' />
        </div>
        <div className='img-container'>
          <img src='img/brands/slack.png' alt='' />
        </div>
      </div>
    </div>
  );
};

export default Brand;
