import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Header from '../../layout/Header';
import OurMission from '../../components/HomPageComponents/OurMission';
import FlowerPricing from '../../components/HomPageComponents/FlowerPricing';
import EventPricing from '../../components/HomPageComponents/EventPricing';
import OurTeam from '../../components/HomPageComponents/OurTeam';
const Home = () => {
  return (
    <>
     <Helmet>
        <title>Home</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <Header/>
      <OurMission/>
      <FlowerPricing/>
      <EventPricing/>
      <OurTeam/>
    </>
  )
}

export default Home