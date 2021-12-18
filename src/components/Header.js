import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { connect } from '../redux/blockchain/blockchainActions';
import { fetchData } from '../redux/data/dataActions';
import headerImage from '../assets/images/header.jpg';
import headerImage2 from '../assets/images/header-2.jpg';

const Header = () => {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(`Click buy to mint your NFT.`);
  const [mintAmount, setMintAmount] = useState(1);
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: '',
    SCAN_LINK: '',
    NETWORK: {
      NAME: '',
      SYMBOL: '',
      ID: 0,
    },
    NFT_NAME: '',
    SYMBOL: '',
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    COST1: 0,

    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: '',
    MARKETPLACE_LINK: '',
    SHOW_BACKGROUND: false,
  });

  const claimNFTs = () => {
    let WalletAddress = blockchain.account;
    WalletAddress = WalletAddress.toUpperCase();

    let TheOwnerAddress = CONFIG.OWNER_ADDRESS;
    TheOwnerAddress = TheOwnerAddress.toUpperCase();

    // eslint-disable-next-line
    if (WalletAddress == TheOwnerAddress) {
      CONFIG.WEI_COST = 0;
    } else if (data.totalSupply > 1 && data.totalSupply < 5000)
      // eslint-disable-next-line
      CONFIG.WEI_COST = CONFIG.WEI_COST;

    let cost = CONFIG.WEI_COST;
    // eslint-disable-next-line
    let cost1 = CONFIG.COST1;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit * mintAmount);
    console.log('Cost: ', totalCostWei);
    console.log('Gas limit: ', totalGasLimit);
    setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
    setClaimingNft(true);
    blockchain.smartContract.methods
      .mint(mintAmount)
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: totalCostWei,
      })
      .once('error', (err) => {
        console.log(err);
        setFeedback('Sorry, something went wrong please try again later.');
        setClaimingNft(false);
      })
      .then((receipt) => {
        console.log(receipt);
        setFeedback(
          `WOW, Congrats! the ${CONFIG.NFT_NAME} Pharaoh is yours, import it to metamask to view it!`
        );
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
  };

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 10) {
      newMintAmount = 10;
    }
    setMintAmount(newMintAmount);
  };

  const getData = () => {
    if (blockchain.account !== '' && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  const getConfig = async () => {
    const configResponse = await fetch('/config/config.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };

  useEffect(() => {
    getConfig();
  }, []);

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, [blockchain.account]);

  useEffect(() => {
    dispatch(connect());
    getData();
    // eslint-disable-next-line
  }, [dispatch]);

  let barValue = data.totalSupply.toString().split('')[0];

  return (
    <>
      <header
        className='Landing__hero Main__Margin px-5 lg:px-4'
        id='header'
        style={{}}
      >
        <div className='Landing__hero-inner'>
          <div className='Landing__hero-video'>
            <img src={headerImage} alt='' />
            <div className='relative h-full flex items-center justify-center'>
              <div className='absolute w-full px-4'>
                <h1 className='font-bold uppercase text-lg md:text-3xl lg:text-4xl md:mb-6'>
                  $etc classic pharaohs
                </h1>
                {/* <p className='text-center text-xs sm:text-base md:text-xl lg:text-2xl lg:py-4 lg:px-12'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  consectetur explicabo ratione
                </p> */}

                {/* start mint */}

                <div
                  className={`progressbar bg-orange-500 w-full h-6 rounded-md mt-2 relative  border-2 border-gray-200 before:bg-green-600 before:absolute before:left-0 before:top-0 before:h-6 overflow-hidden sm:w-96 sm:mx-auto before:w-${barValue}/12`}
                ></div>
                <h1 className='font-bold uppercase text-xl mt-2'>
                  {data.totalSupply} / {CONFIG.MAX_SUPPLY}
                </h1>

                {Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? (
                  <>
                    <p className='font-bold text-default'>
                      The sale has ended.
                    </p>
                    <p className='font-bold text-default'>
                      You can still find {CONFIG.NFT_NAME} on
                    </p>

                    <a
                      target='_blank'
                      rel='noreferrer'
                      href={CONFIG.MARKETPLACE_LINK}
                    >
                      {CONFIG.MARKETPLACE}
                    </a>
                  </>
                ) : (
                  <>
                    {blockchain.account === '' ||
                    blockchain.smartContract === null ? (
                      <>
                        {blockchain.errorMsg !== '' ? (
                          <>
                            <p className='err__msg text-center pt-4'>
                              {blockchain.errorMsg}
                            </p>
                          </>
                        ) : null}
                      </>
                    ) : (
                      <>
                        <p className='err__msg text-center py-4'>{feedback}</p>
                        <>
                          <div className=' flex justify-center items-center my-4 md:py-6 gap-4'>
                            <div className='bg-green-600 py-1 px-4 text-xl font-bold rounded-md hover:bg-green-700'>
                              <button
                                className=''
                                disabled={claimingNft ? 1 : 0}
                                onClick={(e) => {
                                  e.preventDefault();
                                  decrementMintAmount();
                                }}
                              >
                                <span className='text-xl'>-</span>
                              </button>
                            </div>

                            <p className='text-default font-bold text-xl border px-4 py-0.5 rounded-sm'>
                              {mintAmount}
                            </p>
                            <div className='bg-green-600 py-1 px-4  text-xl font-bold rounded-md hover:bg-green-700'>
                              <button
                                className=''
                                disabled={claimingNft ? 1 : 0}
                                onClick={(e) => {
                                  e.preventDefault();
                                  incrementMintAmount();
                                }}
                              >
                                <span className='text-xl'>+</span>
                              </button>
                            </div>
                          </div>
                        </>
                        <>
                          <div>
                            <div className='mint__btn__wrapper'>
                              <button
                                className='bg-green-600 hover:bg-green-700 transition-all duration-500 py-2 px-6 rounded-full mt-2 font-bold text-base md:text-lg md:px-8'
                                disabled={claimingNft ? 1 : 0}
                                onClick={(e) => {
                                  e.preventDefault();
                                  claimNFTs();
                                  getData();
                                }}
                              >
                                <span>{claimingNft ? 'BUSY' : 'MINT'}</span>
                              </button>
                            </div>
                          </div>
                        </>
                      </>
                    )}
                  </>
                )}

                {/* end mint */}
              </div>
              <img src={headerImage2} alt='' className='lg:w-full' />
            </div>
          </div>

          <div className='Landing__hero-video'></div>

          <a
            href='https://t.me/+XgP0WrkX5JQ2NjRh'
            target='_blank'
            rel='noreferrer'
            className='Landing__hero-button text-sm md:text-xl font-light text-center px-2 py-4 md:px-8 md:py-6 rounded uppercase'
          >
            Join The Telegram
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
