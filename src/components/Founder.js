import React from 'react';
import founderBg from '../assets/images/founder-bg.jpg';
import founderImage from '../assets/images/founder-image.png';
import twitter from '../assets/images/icons/twitter-bg.svg';
import instagram from '../assets/images/icons/instagram-bg.svg';
import linkedin from '../assets/images/icons/linkedin-bg.svg';

const Founder = () => {
  return (
    <>
      <div className='founder' id='founder'>
        <div className='founder__wrapper Main__Margin px-5 pb-12 md:pb-12 lg:px-4'>
          <div className='founder__inner relative w-full'>
            <div className='absolute w-full px-4 py-12 flex flex-col items-center justify-center h-full'>
              <div className='founder__image w-44 mx-auto '>
                <img src={founderImage} alt='' className='' />
              </div>
              <div className='founder__info md:w-3/5 mx-auto'>
                <h1 className='text-center font-bold text-4xl my-2'>
                  Our Founder
                </h1>
                <p className='founder__info leading-6 text-sm text-center pb-4'>
                  Our Founder is Ali Essa, a young student that us passionate
                  about the cryptocurrency space and the NFT market. Ali plans
                  to pursue a degree in software engineering due to his extreme
                  interest in Softwae, you can follow his social links below.
                </p>
                <div className='social__links flex justify-between'>
                  <a
                    href='http://www.twitter.com/ali22essa'
                    target='_blank'
                    rel='noreferrer'
                    className='w-12'
                  >
                    <img src={twitter} alt='' />
                  </a>

                  <a
                    href='http://www.instagram.com/alii.essa'
                    target='_blank'
                    rel='noreferrer'
                    className='w-12'
                  >
                    <img src={instagram} alt='' />
                  </a>

                  <a
                    href='#.'
                    target='_blank'
                    rel='noreferrer'
                    className='w-12'
                  >
                    <img src={linkedin} alt='' />
                  </a>
                </div>
              </div>
            </div>
            <div className='sm:h-96 sm:overflow-hidden founder__bg'>
              <img src={founderBg} alt='' className='max-w-full w-full' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Founder;
