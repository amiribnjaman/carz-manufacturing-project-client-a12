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

const BestSelling = lazy (() => customDelay(import('./BestSelling')))
const LatestProduct = lazy (() => customDelay(import('./LatestProduct')))
const Products = lazy (() => customDelay(import('./AllProducts')))
const Reviews = lazy (() => customDelay(import('./Reviews')))
const ProductCategory = lazy (() => customDelay(import('./ProductCategory')))

const Home = () => {
    return (
        <>
            <Banner />
            {/* <InfoSection /> */}
            {/* <Parts /> */}
            <Suspense fallback={<ComponentLoading/>}>
                <ProductCategory />
            </Suspense>
            {/* Lazy loading parts section */}
            <Suspense fallback={<ComponentLoading/>}>
                <LatestProduct />
            </Suspense>
            <Suspense fallback={<ComponentLoading/>}>
                <BestSelling />
            </Suspense>
            <Suspense fallback={<ComponentLoading/>}>
                <Products />
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

const customDelay = (promise) => {
    return new Promise(resolve => {
      setTimeout(resolve, 2000);
    }).then(() => promise);
  }

export default Home;