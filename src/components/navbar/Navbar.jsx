import React from 'react';
import './navbar.scss';
const Navbar = () => {
  return (
    <nav class='navbar navbar-expand-lg navbar-dark'>
      <div className='container-fluid'>
        <a class='navbar-brand flicker-1' href='#home'>
          <span className='word'>M</span>ed<span className='word'>U</span>p
        </a>
        <button
          class='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span class='navbar-toggler-icon'></span>
        </button>
        <div class='collapse navbar-collapse' id='navbarNav'>
          <ul class='navbar-nav'>
            <li class='nav-item'>
              <a class='nav-link ' aria-current='page' href='#'>
                Home
              </a>
            </li>
            <li class='nav-item'>
              <a class='nav-link' href='#about'>
                About
              </a>
            </li>
            <li class='nav-item'>
              <a class='nav-link' href='#experience'>
                Experience
              </a>
            </li>
            <li class='nav-item'>
              <a class='nav-link' href='#features'>
                Features
              </a>
            </li>
            <li class='nav-item'>
              <a class='nav-link' href='#projects'>
                Projects
              </a>
            </li>
          </ul>
          <div className='log-container'>
            <p>Sign in</p>
            <button className='heartbeat btnc-primary'>Sign up</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
