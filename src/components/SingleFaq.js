import React, { useState } from 'react';
import arrow from '../assets/images/icons/arrow.svg';
import arrowUp from '../assets/images/icons/arrow-up.svg';

const SingleFaq = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div className='FrequentlyAsked__questions mb-4'>
        <div
          className='FrequentlyAsked__question header-bg px-8 py-4 rounded'
          onClick={() => setIsActive(!isActive)}
        >
          <p className='text-base md:text-2xl font-light'>{title}</p>
          <span>
            <img src={isActive ? arrowUp : arrow} alt='' />
          </span>
        </div>
        {isActive && (
          <p class='px-5 py-4 text-base font-light md:text-lg'>{content}</p>
        )}
      </div>
    </>
  );
};

export default SingleFaq;
