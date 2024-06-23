import React, { useEffect } from 'react';
import IndiaDestination from '../components/IndianPlaces/IndiaDestination';
import InfoSection from '../components/InfoSection/InfoSection';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import PlanCard from '../components/PlaneCard';
import constants from "../data/constants.json";
import PlanWithUs from "../components/planwithus/PlanWithUs"
import Testimonial from "../components/Testimonial"
import ContactUsButton from '../components/ContactUsButton';
import PricingCard from '../components/PricingCard';


function Kashmir() {
    const kashmirData = constants.data.find(item => item.Place === "Jammu and Kashmir");
    const { Place, bannerContent, bannerimage, details,price,days } = kashmirData || {};
    const { title, itinerary } = details || {};

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Header />
            <Banner content={bannerContent} bannerImage={bannerimage} />
            <PlanCard title={title} itinerary={itinerary} Place={Place} />
            <PricingCard place={Place} image={bannerimage} price={price} days={days} />
            <IndiaDestination title={"Other Places"} />
            <InfoSection />
            <PlanWithUs />
            <Testimonial />
            <ContactUsButton />
            <Footer />
        </div>
    );
}

export default Kashmir;
