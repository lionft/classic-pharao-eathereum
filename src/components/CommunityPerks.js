import React from 'react';

const CommunityPerks = () => {
  return (
    <>
      <div className='CommunityPerks' style={{}}>
        <div className='CommunityPerks__inner px-5 lg:px-4 pb-12 md:pb-20 Main__Margin'>
          <h2 className='text-3xl md:text-5xl text-left font-bold mb-4 undefined'>
            Secret Society Perks
          </h2>
          <p className='text-base mb-4 md:mb-8 font-thin  md:text-left md:text-xl undefined'>
            Everyone who owns a crypto rat will have access to secret society
            events, we plan to host our first in person event in Q1 2022. These
            event will be hosted to help bring our community leaders and
            Founding team together to brainstorm and develop Crypto Rats long
            term and continue providing value for its holders. In addition, 25
            ultra rare rats will be minted upon release. These rats will be
            characterized by diamond neklaces around their necks with Crypto
            Rats pendants. The 25 people holding these ultra rare rats will have
            an all expenses paid trip to Miami. These same 25 holders will be
            given seats at the Secret Society Board, they will be helping lead
            community driven projects and pickng location to the events. Every
            six months we will select 25 new board members amongst our holders.
            We want to create a real society between our holders and our
            personal community to grow it beyond measures.
          </p>
          <div className='flex'>
            <button className='CommunityPerks__button text-sm md:text-lg text-center px-4 md:px-16 py-4 rounded uppercase font-light'>
              OPENSEA
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommunityPerks;
