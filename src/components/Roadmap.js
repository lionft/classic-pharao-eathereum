import React from 'react';

const Roadmap = () => {
  return (
    <>
      <div className='RoadMap' id='roadmap' style={{}}>
        <div className='px-5 pb-12 RoadMap__inner Main__Margin md:pb-12 lg:px-4'>
          <h2 className='text-3xl md:text-5xl text-left font-bold mb-4'>
            Roadmap
          </h2>
          <div className='RoadMap__phases'>
            <div
              className='mb-12 RoadMap__phase'
              style={{
                transform: 'translate(0px, 0px)',
                opacity: 1,
                visibility: 'inherit',
              }}
            >
              <div className='header-bg px-6 py-8 rounded-xl'>
                <h3 className='mb-4 text-xl md:text-3xl font-normal'>
                  Phase 1
                </h3>
                <p className='text-base font-thin  md:text-left md:text-xl'>
                  Build and Design the website and program the smart contract
                  and build the Classic Pharaohs community twitter account and
                  telegram group and receive feedback.
                </p>
              </div>
            </div>
            <div
              className='mb-12 RoadMap__phase'
              style={{
                transform: 'translate(0px, 0px)',
                opacity: 1,
                visibility: 'inherit',
              }}
            >
              <div className='header-bg px-6 py-8 rounded-xl'>
                <h3 className='mb-4 text-xl md:text-3xl font-normal'>
                  Phase 2
                </h3>
                <p className='text-base font-thin  md:text-left md:text-xl'>
                  Launch minting website to all of our 5,000 Pharaohs on 12/12
                </p>
              </div>
            </div>
            <div
              className='mb-12 RoadMap__phase'
              style={{
                transform: 'translate(0px, 0px)',
                opacity: 1,
                visibility: 'inherit',
              }}
            >
              <div className='header-bg px-6 py-8 rounded-xl'>
                <h3 className='mb-4 text-xl md:text-3xl font-normal'>
                  Phase 3
                </h3>
                <p className='text-base font-thin  md:text-left md:text-xl'>
                  Completely sold out of the 1st Classic Pharaohs drop
                </p>
              </div>
            </div>
            <div
              className='mb-12 RoadMap__phase'
              style={{
                transform: 'translate(0px, 0px)',
                opacity: 1,
                visibility: 'inherit',
              }}
            >
              <div className='header-bg px-6 py-8 rounded-xl'>
                <h3 className='mb-4 text-xl md:text-3xl font-normal'>
                  Phase 4
                </h3>
                <p className='text-base font-thin  md:text-left md:text-xl'>
                  Hold Giveways for the people that were unable to Mint a
                  Pharaoh and Donate 10% of the proceedings to a cause that the
                  ETC community chooses
                </p>
              </div>
            </div>

            <div
              className='mb-12 RoadMap__phase'
              style={{
                transform: 'translate(0px, 0px)',
                opacity: 1,
                visibility: 'inherit',
              }}
            >
              <div className='header-bg px-6 py-8 rounded-xl'>
                <h3 className='mb-4 text-xl md:text-3xl font-normal'>
                  Phase 5
                </h3>
                <p className='text-base font-thin  md:text-left md:text-xl'>
                  Develop and build a Classic Pharaohs Marketplace and
                  potentially do another drop
                </p>
              </div>
            </div>

            <div
              className='mb-12 RoadMap__phase'
              style={{
                transform: 'translate(0px, 0px)',
                opacity: 1,
                visibility: 'inherit',
              }}
            >
              <div className='header-bg px-6 py-8 rounded-xl'>
                <h3 className='mb-4 text-xl md:text-3xl font-normal'>
                  Phase 6
                </h3>
                <p className='text-base font-thin  md:text-left md:text-xl'>
                  Launch a marketplace where people can trade, buy or sell their
                  Pharaohs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Roadmap;
