import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Auth/Login';
import Signup from './Pages/Auth/Signup';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';
import Dashboard from './Pages/Dashboard/Dashboard'
import MyOrders from './Pages/Dashboard/MyOrders';
import AddReview from './Pages/Dashboard/AddReview';
import MyProfile from './Pages/Dashboard/MyProfile';
import ProtectedRoute from './Pages/Auth/ProtectedRoute.js'
import AddProduct from './Pages/Dashboard/Admin/AddProduct';
import MakeAdmin from './Pages/Dashboard/Admin/MakeAdmin';
import ManageAllOrders from './Pages/Dashboard/Admin/ManageAllOrders';
import ManageProducts from './Pages/Dashboard/Admin/ManageProducts';
import { Toaster } from 'react-hot-toast';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './firebase.init';
import { useState, useEffect } from 'react';
import Purchase from './Pages/Purchase/Purchase';
import Payment from './Pages/Purchase/Payment';
import Blogs from './Pages/Blogs/Blogs'
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio'
import NotFound from './Pages/NotFound/NotFound';
import TopNav from './Pages/Shared/TopNav';



function App() {
  // This operation for getting the user role and then set the dashboar default component.
  const [user, setUser] = useState('')
  const [loginUser, ,] = useAuthState(auth);

  useEffect(() => {
    fetch(`http://localhost:5000/user/${loginUser?.email}`, {
      method: 'GET',
      headers: {
        'authorization': `Bearer ${localStorage.getItem("accessToken")}`
      }
    })
      .then(res => res.json())
      .then(data => setUser(data))

  }, [loginUser?.email])


  return (
    <div className='App'>
      <TopNav />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/myportfolio' element={<MyPortfolio />} />
        <Route path='/dashboard' element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>}>

          <Route index element={user?.role != 'admin' ? <MyOrders /> : <ManageAllOrders />} />
          <Route path='addreview' element={<AddReview />} />
          <Route path='myprofile' element={<MyProfile />} />

          {/* Admin routes */}
          <Route path='manageorder' element={<ManageAllOrders />} />
          <Route path='addproduct' element={<AddProduct />} />
          <Route path='makeadmin' element={<MakeAdmin />} />
          <Route path='manageproducts' element={<ManageProducts />} />
        </Route>
        <Route path='/purchase/:id' element={
          <ProtectedRoute>
            <Purchase />
          </ProtectedRoute>
        } />
        <Route path='/payment/:id' element={
          <ProtectedRoute>
            <Payment />
          </ProtectedRoute>
        } />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
