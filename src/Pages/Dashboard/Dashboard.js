import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='w-[95%] mx-auto mt-4 mb-10'>
            <div class="drawer drawer-mobile h-96 overflow-y-auto">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col items-start justify-start">
                    {/* <!-- Page content here --> */}
                    <Outlet />
                    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                </div>
                <div class="drawer-side h-96 border mr-2">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu py-4 overflow-y-auto w-60 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to='/dashboard'>My Orders</Link></li>
                        <li><Link to='addreview'>Add a Review</Link></li>
                        <li><Link to='myprofile'>My Profile</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;