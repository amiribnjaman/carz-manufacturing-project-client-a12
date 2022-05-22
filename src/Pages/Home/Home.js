import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import InfoSection from './InfoSection';
import Parts from './Parts';

const Home = () => {
    return (
        <>
            <Banner />
            <InfoSection />
            <Parts />
            <BusinessSummary />
        </>
    )
};

export default Home;