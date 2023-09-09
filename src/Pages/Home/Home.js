import React, { Suspense, lazy }  from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import ContactUs from './ContactUs';
import InfoSection from './InfoSection';
import OurTeam from './OurTeam';
import ComponentLoading from '../../Components/componentLoading'
// import Parts from './Parts';
// import Reviews from './Reviews';

import './Home.css'
import LoadingSpinner from '../../Components/LoadingSpinner';

const Parts = lazy (() => customDealay(import('./Parts')))
const Reviews = lazy (() => customDealay(import('./Reviews')))

const Home = () => {
    return (
        <>
            <Banner />
            {/* <InfoSection /> */}
            {/* <Parts /> */}

            {/* Lazy loading parts section */}
            <Suspense fallback={<ComponentLoading/>}>
                <Parts />
            </Suspense>
            <OurTeam />
            {/* Lazy loading parts section */}
            <Suspense fallback={<LoadingSpinner />}>
                <Reviews />
            </Suspense>
            <BusinessSummary />
            <ContactUs />
        </>
    )
};

const customDealay = (promise) => {
    return new Promise(resolve => {
      setTimeout(resolve, 3000);
    }).then(() => promise);
  }

export default Home;