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
function HomePage() {
  return (
    <div className='h-full'>
    <Header/>
    <Banner/>
    <InfoSection />
    <IndiaDestination />
    <EuropPlaces/>
    <AsiaPlaces/>
    <WorldPlaces/>
    <AsperMood/>
    <Footer/>
  </div>
  )
}

export default HomePage