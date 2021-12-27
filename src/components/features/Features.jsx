import React from 'react';
import './features.scss';
import { RiAppsLine } from 'react-icons/ri';
import { BiMessageDetail } from 'react-icons/bi';

const Features = () => {
  return (
    <div className='container-fluid container-possibility' id='features'>
      <div className='row row-features'>
        <div className='col-lg-6 first-col'>
          <button className='btnc-secondary'>
            <RiAppsLine className='icon-1' /> My App
          </button>
          <div className='icon-div'>
            <BiMessageDetail className='icon-2' />
          </div>
          <img src='img/features/Rectangle.png' alt='' className='rectangle' />
          <img src='img/features/image.png' alt='' className='main' />
        </div>
        <div className='col-lg-5'>
          <p className='subtext-2'>Get started ASAP !</p>
          <p className='heading'>
            The possibilites are beyong your imagination
          </p>
          <p className='text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            aspernatur dicta distinctio vel sit in deleniti facere quasi fuga
            recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Tempora, optio similique aperiam doloribus dolore perferendis?
          </p>
          <p className='subtext-1'>Get started ASAP !</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
