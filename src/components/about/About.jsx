import React from 'react';
import './About.scss';
const About = () => {
  return (
    <div className='container container-about' id='about'>
      <div className='row about-row'>
        {/* first line */}
        <div className='col-lg-3'>
          <p className='subheading'>Who are we</p>
        </div>
        <div className='col-lg-9'>
          <p className='text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus, saepe sit. Vero, omnis? Placeat magnam in quam officia
            voluptatem amet sed autem sunt corrupti quidem. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Ipsam quia illum officiis
            dignissimos nam minus.
          </p>
        </div>
        {/* second line */}
        <div className='col-lg-6 my-5'>
          <p className='heading'>Get ready to be amazed !</p>
        </div>
        <div className='col-lg-6'>
          <p className='subtext-1'>Explore the library</p>
        </div>
        {/* third line */}
        <div className='col-lg-4 mb-3'>
          <p className='subheading'>Lorem, ipsum.</p>
        </div>
        <div className='col-lg-4'>
          <p className='subheading'>Lorem, ipsum.</p>
        </div>
        <div className='col-lg-4'>
          <p className='subheading'>Lorem, ipsum.</p>
        </div>
        {/* fourth line */}
        <div className='col-lg-4'>
          <p className='text'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
            vero expedita adipisci quas culpa deserunt ipsam dicta, doloremque
            sunt amet modi rem ducimus quo rerum.
          </p>
        </div>
        <div className='col-lg-4'>
          <p className='text'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
            vero expedita adipisci quas culpa deserunt ipsam dicta, doloremque
            sunt amet modi rem ducimus quo rerum.
          </p>
        </div>
        <div className='col-lg-4'>
          <p className='text'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
            vero expedita adipisci quas culpa deserunt ipsam dicta, doloremque
            sunt amet modi rem ducimus quo rerum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
