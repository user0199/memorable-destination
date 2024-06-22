import React from 'react'
import IndiaDestination from '../components/IndianPlaces/IndiaDestination';
import InfoSection from '../components/InfoSection/InfoSection';
import EuropPlaces from '../components/europPlaces/EuropPlaces';
import AsiaPlaces from '../components/asiaPlaces/AsiaPlaces';
import WorldPlaces from '../components/World/WorldPlaces';
import AsperMood from '../components/planpermood/AsperMood';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import PlanWithUs from '../components/planwithus/PlanWithUs';
import Testimonial from '../components/Testimonial';
function HomePage() {
  return (
    <div className=''>
      <Header />
      <Banner />
      <InfoSection />
      <IndiaDestination />
      <EuropPlaces />
      <AsiaPlaces />
      {/* <WorldPlaces/> */}
      <AsperMood />
      <PlanWithUs />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default HomePage