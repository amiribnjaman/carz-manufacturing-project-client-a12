import React, { Suspense, lazy, useEffect, useMemo, useState } from "react";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import ContactUs from "./ContactUs";
// import ShortDescription from "./ShortDescription";
import ShortDescription from "./ShortDescription";
import InfoSection from "./InfoSection";
import OurTeam from "./OurTeam";
import ComponentLoading from "../../Components/ComponentLoading";
// import Parts from './Parts';
// import Reviews from './Reviews';
import auth from "../../firebase.init";

import "./CSS/Home.css";
import LoadingSpinner from "../../Components/LoadingSpinner";
import { useAuthState } from "react-firebase-hooks/auth";
import MyShopCard from "../../Components/MyShopCard";

const BestSellingProduct = lazy(() =>
  customDelay(import("./BestSellingProduct"))
);
const LatestProduct = lazy(() => customDelay(import("./LatestProduct")));
const AllProducts = lazy(() => customDelay(import("./AllProducts")));
const Reviews = lazy(() => import("./Reviews"));
const ProductCategory = lazy(() => customDelay(import("./ProductCategory")));

const Home = () => {
  const [user, loading, error] = useAuthState(auth);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(
      "https://carz-manufacturing-project-server-a12.vercel.app/products/all"
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <>
      <MyShopCard />
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
