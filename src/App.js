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

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/dashboard' element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>}>
            
          <Route index element={<MyOrders />} />
          <Route path='addreview' element={<AddReview />} />
          <Route path='myprofile' element={<MyProfile />} />

          {/* Admin routes */}
          <Route index element={<ManageAllOrders />} />
          <Route path='addproduct' element={<AddProduct />} />
          <Route path='makeadmin' element={<MakeAdmin />} />
          <Route path='manageproducts' element={<ManageProducts />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
