import React, { useEffect } from 'react';
import IndiaDestination from '../components/IndianPlaces/IndiaDestination';
import InfoSection from '../components/InfoSection/InfoSection';
import EuropPlaces from '../components/europPlaces/EuropPlaces';
import AsiaPlaces from '../components/asiaPlaces/AsiaPlaces';
import WorldPlaces from '../components/World/WorldPlaces';
import AsperMood from '../components/planpermood/AsperMood';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import constants from "../data/constants.json";

function Kashmir() {
    const kashmirData = constants.data.find(item => item.Place === "Jammu and Kashmir");
    const { bannerContent, bannerimage } = kashmirData || {};
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <Header />
            <Banner content={bannerContent} bannerImage={bannerimage} />
            <InfoSection />
            <IndiaDestination />
            <EuropPlaces />
            <AsiaPlaces />
            <WorldPlaces />
            <AsperMood />
            <Footer />
        </div>
    );
}

export default Kashmir;
