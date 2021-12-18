import React, { useState } from 'react';
import logo from '../assets/images/logo.jpg';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const mobileNav = () => {
    setShowNav(!showNav);
    console.log('1');
  };
  return (
    <>
      <nav className='Navbar' style={{}}>
        <div className='px-5 Navbar__inner Main__Margin lg:px-4 relative'>
          <div
            className='Navbar__logo'
            style={{ transform: 'translate(0px, 0px)', opacity: 1 }}
          >
            <a href='#header'>
              <img src={logo} alt='crypto-rat logo' />
            </a>
          </div>

          <div className='Navbar__links'>
            <button className='lg:hidden' aria-label='Menu' onClick={mobileNav}>
              <svg
                width={24}
                height={24}
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M3 12h18M3 6h18M3 18h18'
                  stroke='#fff'
                  strokeWidth={2}
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </button>
            <div
              className={`Navbar__menu-links mr-8 lg:flex flex flex-wrap ${
                showNav
                  ? 'flex-col absolute w-full mobile__bg p-5 gap-5 top-16 left-0 m-0'
                  : 'hidden'
              } `}
            >
              <a
                className='Navbar__menu-link uppercase'
                href='#why-classic-pharaohs'
              >
                Why Classic Pharaohs?
              </a>
              <a className='Navbar__menu-link uppercase' href='#roadmap'>
                Roadmap
              </a>
              <a className='Navbar__menu-link uppercase' href='#founder'>
                Founder
              </a>
              <a className='Navbar__menu-link uppercase' href='#faq'>
                Faq
              </a>
              <a
                className='Navbar__menu-link uppercase bg-green-400'
                href='https://blockscout.com/etc/mainnet/address/0xb93a8534446f5B2dBa9D0AbCeA89286A5c657A23/transactions'
              >
                Smart Contract
              </a>
            </div>
          </div>
        </div>
        {/* <div className='MobileNavbar'>
          <ul className='MobileNavbar__links'>
            <div>
              <li className='MobileNavbar__menuLink'>
                <a className='Navbar__menu-link uppercase' href='#pre-sale'>
                  Pre-sale
                </a>
              </li>
              <li className='MobileNavbar__menuLink'>
                <a
                  className='Navbar__menu-link uppercase'
                  href='#why-crypto-rats'
                >
                  Why Crypto Rats
                </a>
              </li>
              <li className='MobileNavbar__menuLink'>
                <a className='Navbar__menu-link uppercase' href='#roadmap'>
                  Roadmap
                </a>
              </li>
              <li className='MobileNavbar__menuLink'>
                <a className='Navbar__menu-link uppercase' href='#team'>
                  Team
                </a>
              </li>
              <li className='MobileNavbar__menuLink'>
                <a className='Navbar__menu-link uppercase' href='#faq'>
                  Faq
                </a>
              </li>
            </div>
            <div className='MobileNavbar__social-links'>
              <a
                href='https://discord.gg/nZrsZGHBKF'
                target='_blank'
                rel='noreferrer'
              >
                <img
                  alt=''
                  className='w-6 h-6 mr-8'
                  src='/static/media/discord.4b3001b1.svg'
                />
              </a>
              <a
                href='https://twitter.com/CryptoRats_NFT'
                target='_blank'
                rel='noreferrer'
              >
                <img
                  alt=''
                  className='w-6 h-6 mr-8'
                  src='/static/media/twitter.07deeab3.svg'
                />
              </a>
              <a
                href='https://www.instagram.com/cryptorats'
                target='_blank'
                rel='noreferrer'
              >
                <img
                  alt=''
                  className='w-6 h-6 mr-8'
                  src='/static/media/instagram.a11b1f0d.svg'
                />
              </a>
              <a
                href='https://vm.tiktok.com/TTPd2vptXE/'
                target='_blank'
                rel='noreferrer'
              >
                <img
                  alt=''
                  className='w-6 h-6'
                  src='/static/media/tiktok.073bec5a.svg'
                />
              </a>
            </div>
          </ul>
        </div> */}
      </nav>
    </>
  );
};

export default Navbar;
