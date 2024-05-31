import React from 'react';
import IndiaDestination from './components/IndianPlaces/IndiaDestination';
import InfoSection from './components/InfoSection/InfoSection';
import EuropPlaces from './components/europPlaces/EuropPlaces';
import AsiaPlaces from './components/asiaPlaces/AsiaPlaces';
import WorldPlaces from './components/World/WorldPlaces';
import AsperMood from './components/planpermood/AsperMood';
function App() {
  return (
    <>
      <div className='h-full'>
        <InfoSection />
        <IndiaDestination />
        <EuropPlaces/>
        <AsiaPlaces/>
        <WorldPlaces/>
        <AsperMood/>
      </div>
    </>
  );
}

export default App;
