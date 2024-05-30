import React from 'react';
import IndiaDestination from './components/IndianPlaces/IndiaDestination';
import InfoSection from './components/InfoSection/InfoSection';
import EuropPlaces from './components/europPlaces/EuropPlaces';
import AsiaPlaces from './components/asiaPlaces/AsiaPlaces';
function App() {
  return (
    <>
      <div className='h-full'>
        <InfoSection />
        <IndiaDestination />
        <EuropPlaces/>
        <AsiaPlaces/>
      </div>
    </>
  );
}

export default App;
