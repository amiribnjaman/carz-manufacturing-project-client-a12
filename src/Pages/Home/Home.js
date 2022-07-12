import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import ContactUs from './ContactUs';
import InfoSection from './InfoSection';
import OurTeam from './OurTeam';
import Parts from './Parts';
import Reviews from './Reviews';

const Home = () => {
    return (
        <>
            <Banner />
            {/* <InfoSection /> */}
            <Parts />
            <OurTeam />
            <Reviews />
            <BusinessSummary />
            <ContactUs />
        </>
    )
};

export default Home;