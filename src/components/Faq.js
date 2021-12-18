import React from 'react';

import SingleFaq from './SingleFaq';
const Faq = () => {
  return (
    <>
      <div className='FrequentlyAsked' id='faq'>
        <div className='FrequentlyAsked__inner Main__Margin px-5 lg:px-4 pb-12 md:pb-16'>
          <h3 className='text-center mb-12 rounded text-2xl md:text-5xl'>
            Frequently Asked Questions
          </h3>
          <SingleFaq
            title='What are NFTS?'
            content='A non-fungible token is a unique and non-interchangeable unit of data stored on a digital ledger. NFTs can be associated with easily-reproducible items such as photos, videos, audio, and other types of digital files as unique items, and use blockchain technology to give the NFT a public proof of ownership'
          />
          <SingleFaq
            title='What is $ETC ??'
            content='Ethereum Classic is the original Ethereum blockchain, an open source, blockchain-based distributed computing platform featuring smart contract functionality. It supports a modified version of Nakamoto consensus via transaction-based state transitions executed on a public Ethereum Virtual Machine.'
          />
          <SingleFaq
            title='How much do Classic Pharaohs cost?'
            content='1 Classic Pharaoh goes for 2 $ETC'
          />
          <SingleFaq
            title='How do I get a Classic Pharaoh?'
            content='To Mint you first need to access our site from your wallets address and click Mint and voila!!'
          />
        </div>
      </div>
    </>
  );
};

export default Faq;
