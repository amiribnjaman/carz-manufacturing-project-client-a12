import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import ContactUs from './ContactUs';
import InfoSection from './InfoSection';
import Parts from './Parts';
import Reviews from './Reviews';

const Home = () => {
    return (
        <>
            <Banner />
            <InfoSection />
            <Parts />
            <BusinessSummary />
            <Reviews />
            <ContactUs />
        </>
    )
};

export default Home;