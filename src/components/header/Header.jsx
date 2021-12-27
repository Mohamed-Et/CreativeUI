import React from 'react';
import './header.scss';
import { GiFire } from 'react-icons/gi';
const Header = () => {
  return (
    <div className='container-fluid container-header'>
      <div className='row'>
        <div className='col-md-6 first-col'>
          <p className='heading'>
            Modern website using React.Js Sass & Bootstrap
          </p>
          <p className='text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea hic,
            aperiam perferendis obcaecati odit nihil similique incidunt
            molestias! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Id, quasi!
          </p>
          <div class='input-group'>
            <input
              type='text'
              class='form-control'
              placeholder='Your Email Address'
              aria-label='Your Email Address'
              aria-describedby='basic-addon2'
            />
            <span class='input-group-text' id='basic-addon2'>
              Get Started
            </span>
          </div>
          <div className='icon-container'>
            <p>
              <GiFire className='fire-icon-1' />
              Elegant, Simple, Modern & Concise
              <GiFire className='fire-icon-2' />
            </p>
          </div>
        </div>
        <div className='col-md-6 second-col'>
          <img
            src='../../../../img/header/illustration.png'
            alt=''
            className='img-fluid'
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
