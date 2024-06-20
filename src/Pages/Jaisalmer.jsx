import React, { useEffect } from 'react';
import IndiaDestination from '../components/IndianPlaces/IndiaDestination';
import InfoSection from '../components/InfoSection/InfoSection';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import PlanCard from '../components/PlaneCard';
import constants from "../data/constants.json";

function Kashmir() {
    const JaisalmerData = constants.data.find(item => item.Place === "Jaisalmer");
    const { Place, bannerContent, bannerimage, details } = JaisalmerData || {};
    const { title, itinerary } = details || {};

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Header />
            <Banner content={bannerContent} bannerImage={bannerimage} />
            <PlanCard title={title} itinerary={itinerary} Place={Place} />
            <IndiaDestination title={"Other Places"}/>
            <InfoSection />
            <Footer />
        </div>
    );
}

export default Kashmir;
