import React from 'react';
import CountDown from '../components/CountDown';
import Faq from '../components/Faq';
import Footer from '../components/Footer';
import Founder from '../components/Founder';
import Header from '../components/Header';
import ImageSlider from '../components/ImageSlider';
import JoinSociety from '../components/JoinSociety';
import Navbar from '../components/Navbar';
import PreSale from '../components/PreSale';
import Roadmap from '../components/Roadmap';
import WelcomeClub from '../components/WelcomeClub';

const HomeScreen = () => {
  return (
    <>
      <Navbar />
      <Header />
      <ImageSlider />
      <CountDown />
      <JoinSociety />
      <PreSale />
      <WelcomeClub />
      <Roadmap />
      <Founder />
      <Faq />
      <Footer />
    </>
  );
};

export default HomeScreen;
