import React from 'react';
import teamImage1 from '../assets/images/team/team-1.jpg';
import teamImage2 from '../assets/images/team/team-2.jpg';
import teamImage3 from '../assets/images/team/team-3.jpg';
const TheTeam = () => {
  return (
    <>
      <div className='TheTeam' id='team'>
        <div className='px-5 pb-12 TheTeam__inner md:pb-20 lg:px-4 Main__Margin'>
          <h3 className='mb-5 text-3xl md:text-5xl text-center md:text-left font-bold'>
            The Team
          </h3>
          <div className='TheTeam__members'>
            <div
              className='TheTeam__member'
              style={{
                transform: 'translate(0px, 0px)',
                opacity: 1,
                visibility: 'inherit',
              }}
            >
              <img src={teamImage1} alt='' className='rounded-3xl' />
              <p className='mt-4 font-normal text-center md:text-center text-lg md:text-xl'>
                Andrew William Ralph Designs
              </p>
              <p className='gray-100 text-center text-base font-thin'>
                Lead Artist
              </p>
            </div>
            <div
              className='TheTeam__member'
              style={{
                transform: 'translate(0px, 0px)',
                opacity: 1,
                visibility: 'inherit',
              }}
            >
              <img src={teamImage2} alt='' className='rounded-3xl' />
              <p className='mt-4 font-normal text-center md:text-center text-xl'>
                Montech Studios INC
              </p>
              <p className='gray-100 text-center text-base font-thin'>
                Lead Developer
              </p>
            </div>
            <div
              className='TheTeam__member'
              style={{
                transform: 'translate(0px, 0px)',
                opacity: 1,
                visibility: 'inherit',
              }}
            >
              <img src={teamImage3} alt='' className='rounded-3xl' />
              <p className='mt-4 font-normal text-center md:text-center text-xl'>
                Momentum Media ILC
              </p>
              <p className='gray-100 text-center text-base font-thin'>
                Marketing
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TheTeam;
