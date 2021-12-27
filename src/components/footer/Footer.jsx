import React from 'react';
import './footer.scss';
const Footer = () => {
  return (
    <div className='container-fluid container-footer'>
      <div className='text-container'>
        <p className='heading'>
          Lorem ipsum dolor sit <br /> amet consectetur
        </p>
        <button className='btnc-outline'>Request Early Access</button>
      </div>

      {/* parent row */}
      <div className='row parent-row'>
        {/* left part */}
        <div className='col-lg-4 left-col'>
          <p className='logo'>
            <span className='word'>M</span>ed
            <span className='word'>U</span>p
          </p>
          <p className='subheading-2'>
            Lorem ipsum dolor sit <br /> amet consectetur.
          </p>
        </div>
        {/* right part */}
        <div className='col-lg-7 right-col'>
          {/* subrow */}
          <div className='row child-row'>
            <div className='col-lg-4'>
              <p className='title'>Links</p>
              <p className='text-2'>Lorem, ipsum.</p>
              <p className='text-2'>Lorem, ipsum.</p>
              <p className='text-2'>Lorem, ipsum.</p>
            </div>
            <div className='col-lg-4'>
              <p className='title'>Company</p>
              <p className='text-2'>Lorem, ipsum.</p>
              <p className='text-2'>Lorem, ipsum.</p>
              <p className='text-2'>Lorem, ipsum.</p>
            </div>
            <div className='col-lg-4'>
              <p className='title'>Get in touch</p>
              <p className='text-2'>Lorem, ipsum.</p>
              <p className='text-2'>Lorem, ipsum.</p>
              <p className='text-2'>Lorem, ipsum.</p>
            </div>
          </div>
        </div>
      </div>
      <p className='footer'>&copy; 2021 MedUp All rights Reserved</p>
    </div>
  );
};

export default Footer;
