import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Auth/Login";
import Signup from "./Pages/Auth/Signup";
import Home from "./Pages/Home/Home";
import Footer from "./Pages/Shared/Footer";
import Navbar from "./Pages/Shared/Navbar";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyOrders from "./Pages/Dashboard/MyOrders";
import AddReview from "./Pages/Dashboard/AddReview";
import MyProfile from "./Pages/Dashboard/MyProfile";
import ProtectedRoute from "./Pages/Auth/ProtectedRoute.js";
import AddProduct from "./Pages/Dashboard/Admin/AddProduct";
import MakeAdmin from "./Pages/Dashboard/Admin/MakeAdmin";
import ManageAllOrders from "./Pages/Dashboard/Admin/ManageAllOrders";
import ManageProducts from "./Pages/Dashboard/Admin/ManageProducts";
import { Toaster } from "react-hot-toast";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./firebase.init";
import { useState, useEffect, createContext } from "react";
import Purchase from "./Pages/Purchase/Purchase";
import Payment from "./Pages/Purchase/Payment";
import Blogs from "./Pages/Blogs/Blogs";
import MyPortfolio from "./Pages/MyPortfolio/MyPortfolio";
import NotFound from "./Pages/NotFound/NotFound";
import TopNav from "./Pages/Shared/TopNav";
import { useHistory, useLocation } from "react-router-dom";
import SecondaryMenu from "./Pages/Shared/SecondaryMenu.jsx";
import { useMemo } from "react";
import MyShopCard from "./Components/MyShopCard.jsx";
import LoadingSpinner from "./Components/LoadingSpinner.js";
// const OrderContext = createContext([])

function App() {
  const [myOrders, setMyOrders] = useState([]);
  // This operation for getting the user role and then set the dashboar default component.
  const [user, setUser] = useState("");
  const [loginUser, ,] = useAuthState(auth);
  const location = useLocation();
  const path = location.pathname;

  const [showSecondaryNav, setShowSecondaryNav] = useState(false);

  // Handle menu toggle
  // const handleShowMenu = () => {
  //   setShowLogout(!showMenu)
  // }

  {
    /*
     **
     ** HANDLER FUNCTION TO SHOWING SECONDARY MENU USEING USER SCROLLING
     **
     */
  }
  const handleMenuScroll = () => {
    // Secondary toggle
    if (window.scrollY > 250) {
      setShowSecondaryNav(true);
    } else {
      setShowSecondaryNav(false);
    }
  };

  useMemo(() => {
    document.addEventListener("scroll", handleMenuScroll);
  }, [showSecondaryNav]);

  {
    /*
     **
     ** FETCHING USER INFO THROUGH USER EMAIL
     **
     */
  }
  useEffect(() => {
    fetch(
      `https://carz-manufacturing-project-server-a12.vercel.app/user/${loginUser?.email}`,
      {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [loginUser?.email]);

  // const order = {
  //   myOrders,
  //   setMyOrders
  // }

  const userRoute = ['/phachase']

  return (
    // <OrderContext.provider value={order}>
    <div className="App">
        <Toaster position="top-center" />
      {path == "/" ? (
        <>
          <TopNav />
          <Navbar />
          {showSecondaryNav && <SecondaryMenu />}
        </>
      ) : path.includes("/purchase") ? (
        ""
      ) : (
        <SecondaryMenu />
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/blogs" element={<Blogs />} />
        {/* <Route path='/myportfolio' element={<MyPortfolio />} /> */}
        <Route
          path="/my-shop"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          <Route
            index
            element={user?.role != "admin" ? <MyOrders /> : <ManageAllOrders />}
          />
          <Route path="addreview" element={<AddReview />} />
          <Route path="myprofile" element={<MyProfile />} />

          {/* Admin routes */}
          <Route path="manageorder" element={<ManageAllOrders />} />
          <Route path="addproduct" element={<AddProduct />} />
          <Route path="makeadmin" element={<MakeAdmin />} />
          <Route path="manageproducts" element={<ManageProducts />} />
        </Route>
        <Route
          path="/purchase/:id"
          element={
            <ProtectedRoute>
              <Purchase />
            </ProtectedRoute>
          }
        />
        {/* <Route
          path="/payment/:id"
          element={
            <ProtectedRoute>
              <Payment />
            </ProtectedRoute>
          }
        /> */}
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
      <Toaster />
    </div>
    // </OrderContext.provider>
  );
}

export default App;
