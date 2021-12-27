import React from 'react';
import './projects.scss';
const Projects = () => {
  return (
    <div className='container-fluid container-projects' id='projects'>
      <p className='heading'>Lorem ipsum dolor sit amet Lorem, ipsum.</p>
      {/* parent row */}
      <div className='row row-1'>
        {/* big card column */}
        <div className='col-lg-4 big-card'>
          <img
            src='img/projects/Rectangle 22-4.png'
            alt=''
            className='img-fluid'
          />
          {/* text container */}
          <div className='content-container'>
            <p className='text-small-1'>December, 23 2021</p>
            <p className='text-big'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className='text-small-2'>Read full article</p>
          </div>
        </div>
        {/* 4 cards column container */}
        <div className='col-lg-8 p-0'>
          {/* subrow */}
          <div className='row row-2 g-5'>
            {/* first col */}
            <div className='col-lg-6 small-card'>
              <img
                src='img/projects/Rectangle 22.png'
                alt=''
                className='img-fluid'
              />
              <div className='content-container-small'>
                <p className='text-small'>December, 23 2021</p>
                <p className='text-big'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <p className='text-small'>Read full article</p>
              </div>
            </div>
            {/* second col */}
            <div className='col-lg-6 small-card'>
              <img
                src='img/projects/Rectangle 22-1.png'
                alt=''
                className='img-fluid'
              />
              <div className='content-container-small'>
                <p className='text-small'>December, 23 2021</p>
                <p className='text-big'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <p className='text-small'>Read full article</p>
              </div>
            </div>
            {/* third col */}
            <div className='col-lg-6 small-card'>
              <img
                src='img/projects/Rectangle 22-2.png'
                alt=''
                className='img-fluid'
              />
              <div className='content-container-small'>
                <p className='text-small'>December, 23 2021</p>
                <p className='text-big'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <p className='text-small'>Read full article</p>
              </div>
            </div>
            {/* fourth col */}
            <div className='col-lg-6 small-card'>
              <img
                src='img/projects/Rectangle 22-3.png'
                alt=''
                className='img-fluid'
              />
              <div className='content-container-small'>
                <p className='text-small'>December, 23 2021</p>
                <p className='text-big'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <p className='text-small'>Read full article</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
