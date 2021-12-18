import React from 'react';
import twitter from '../assets/images/icons/twitter-bg.svg';
import telegram from '../assets/images/icons/telegram-bg.svg';

const JoinSociety = () => {
  return (
    <>
      <div className='JoinSociety' style={{}}>
        <div className='JoinSociety__inner px-8 lg:px-4 pb-12 md:pb-20 Main__Margin'>
          <h3 className='text-xl md:text-4xl mt-4'>
            Join the Pharaohs on our Socials
          </h3>
          <div className='JoinSociety__socials mt-4 md:mt-12'>
            <a
              href='https://twitter.com/classicpharaohs'
              target='_blank'
              rel='noreferrer'
              className='JoinSociety__social header-bg rounded-xl px-0 py-6 md:py-11'
            >
              <div className='JoinSociety__social-image'>
                {' '}
                <img src={twitter} alt='' className='w-2/5 lg:w-3/5' />
              </div>
              <div className='JoinSociety__social-content'>
                <p className='mb-2 text-xl md:text-3xl font-light'>Twitter</p>
              </div>
            </a>

            <a
              href='https://t.me/+XgP0WrkX5JQ2NjRh'
              target='_blank'
              rel='noreferrer'
              className='JoinSociety__social header-bg rounded-xl px-0 py-6 md:py-11'
            >
              <div className='JoinSociety__social-image'>
                {' '}
                <img src={telegram} alt='' className='w-2/5 lg:w-3/5' />
              </div>
              <div className='JoinSociety__social-content'>
                <p className='mb-2 text-xl md:text-3xl font-light'>Telegram</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinSociety;
