import React, { Suspense, lazy, useEffect, useMemo, useState } from "react";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import ContactUs from "./ContactUs";
// import ShortDescription from "./ShortDescription";
import ShortDescription from "./ShortDescription";
import InfoSection from "./InfoSection";
import OurTeam from "./OurTeam";
import ComponentLoading from "../../Components/componentLoading";
// import Parts from './Parts';
// import Reviews from './Reviews';

import "./CSS/Home.css";
import LoadingSpinner from "../../Components/LoadingSpinner";

const BestSellingProduct = lazy(() =>
  customDelay(import("./BestSellingProduct"))
);
const LatestProduct = lazy(() => customDelay(import("./LatestProduct")));
const AllProducts = lazy(() => customDelay(import("./AllProducts")));
const Reviews = lazy(() => customDelay(import("./Reviews")));
const ProductCategory = lazy(() => customDelay(import("./ProductCategory")));

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log(products, "hey");
    fetch(
      "https://carz-manufacturing-project-server-a12.vercel.app/products/all"
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <Banner />
      {/* <InfoSection /> */}
      {/* <Parts /> */}
      <Suspense fallback={<ComponentLoading />}>
        <ProductCategory />
      </Suspense>
      {/* Lazy loading parts section */}
      <Suspense fallback={<ComponentLoading />}>
        <LatestProduct products={products} />
      </Suspense>
      <Suspense fallback={<ComponentLoading />}>
        <BestSellingProduct products={products} />
      </Suspense>
      <Suspense fallback={<ComponentLoading />}>
        <AllProducts products={products} />
      </Suspense>
      <OurTeam />
      {/* Lazy loading parts section */}
      <Suspense fallback={<LoadingSpinner />}>
        <Reviews />
      </Suspense>
      {/* <BusinessSummary /> */}
      <ContactUs />
      <ShortDescription />
    </>
  );
};

const customDelay = async (promise) => {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
};

export default Home;
