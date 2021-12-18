import React from 'react';
import welcomeImage from '../assets/images/slider/15.png';
import welcomeImage2 from '../assets/images/slider/16.png';
import welcomeImage3 from '../assets/images/slider/13.png';
import welcomeImage4 from '../assets/images/slider/14.png';

const WelcomeClub = () => {
  return (
    <>
      <div className='WelcomeClub' id='why-classic-pharaohs' style={{}}>
        <div className='px-5 pb-12 WelcomeClub__inner Main__Margin md:pb-16 lg:px-4'>
          <h2 className='text-3xl md:text-5xl text-left font-bold mb-4 undefined'>
            Why Classic Pharaohs?
          </h2>
          <p className='text-base mb-4 md:mb-8 font-thin  md:text-left md:text-xl'>
            Classic Pharaohs are a collection of 5,000 unique and different NFTS
            that are inspired by ancient Egypt. The Pharaohs are built on the
            Ethereum Classic blockchain and they're one of the first ever unique
            NFTS on the blockchain. Classic Pharaohs is also the first NFT
            project on $ETC that is donating a portion of the proceeds to
            Charity that was chosen by the $ETC community. Don't be hesitant and
            mint your Pharaohs now!!
          </p>
          <div className='flex gap-2 justify-between'>
            <div className=''>
              <img src={welcomeImage} alt='' className='' />
            </div>
            <div className=''>
              <img src={welcomeImage2} alt='' className='' />
            </div>
            <div className=''>
              <img src={welcomeImage3} alt='' className='' />
            </div>
            <div className=''>
              <img src={welcomeImage4} alt='' className='' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomeClub;
