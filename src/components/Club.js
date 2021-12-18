import React from 'react';
import clubImage from '../assets/images/club.png';

const Club = () => {
  return (
    <>
      <div
        className='Landing__welcome Main__Margin'
        id='club-section'
        style={{}}
      >
        <div className='Landing__welcome-inner px-5 lg:px-4 mt-24 mb-12'>
          <div className='Landing__welcome-images Main__Margin'>
            <div
              className='Landing__welcome-image '
              style={{
                transform: 'translate(0px, 0px)',
                opacity: 1,
                visibility: 'inherit',
              }}
            >
              <a
                href='#.'
                className='flex flex-col justify-center items-center'
              >
                <img className='w-4/5' src={clubImage} alt='' />
                <p className='mt-3 md:mt-4 text-center font-light text-sm md:text-lg'>
                  Ratzlits
                </p>
              </a>
            </div>
            <div
              className='Landing__welcome-image '
              style={{
                transform: 'translate(0px, 0px)',
                opacity: 1,
                visibility: 'inherit',
              }}
            >
              <a
                href='#.'
                className='flex flex-col justify-center items-center'
              >
                <img className='w-4/5' src={clubImage} alt='' />
                <p className='mt-3 md:mt-4 text-center font-light text-sm md:text-lg'>
                  Zedserbians
                </p>
              </a>
            </div>
            <div
              className='Landing__welcome-image '
              style={{
                transform: 'translate(0px, 0px)',
                opacity: 1,
                visibility: 'inherit',
              }}
            >
              <a
                href='#.'
                className='flex flex-col justify-center items-center'
              >
                <img className='w-4/5' src={clubImage} alt='' />
                <p className='mt-3 md:mt-4 text-center font-light text-sm md:text-lg'>
                  Cripplons
                </p>
              </a>
            </div>
            <div
              className='Landing__welcome-image '
              style={{
                transform: 'translate(0px, 0px)',
                opacity: 1,
                visibility: 'inherit',
              }}
            >
              <a
                href='#.'
                className='flex flex-col justify-center items-center'
              >
                <img className='w-4/5' src={clubImage} alt='' />
                <p className='mt-3 md:mt-4 text-center font-light text-sm md:text-lg'>
                  Nakamotants
                </p>
              </a>
            </div>
          </div>
          <h1 className='text-3xl font-bold md:text-5xl xl:6xl mb-4 text-left md:mb-8" Landing__welcome-title mt-8'>
            The Origin Of Crypto Rats
          </h1>
          <p className='text-base mb-4 md:mb-8 font-thin  md:text-left md:text-xl Landing__welcome-content'>
            The story of Crypto Rats began in the basement workshop of Satoshi
            Nakamoto on June 14, 2008. While Satoshi was experimenting with
            algorithms on bitcoin’s first mining computers, he observed that two
            rats had chewed their way through the power circuit. Suddenly, there
            was a spark as the cables electrocuted the rats, and a thick cloud
            of smoke filled the room. &nbsp;{' '}
            <button className='accent font-semibold'>READ MORE</button>
          </p>
        </div>
      </div>
    </>
  );
};

export default Club;
