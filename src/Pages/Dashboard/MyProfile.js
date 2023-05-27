import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate()
    const [showForm, setShowForm] = useState(false)
    const [useFormDb, setUseFormDb] = useState(false)
    const { name, email, number, role, location, education, linkedin } = useFormDb
    useEffect(() => {
        fetch(`https://carz-manufacturing-project-server-a12.vercel.app/user/${user?.email}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setUseFormDb(data)
            })
    }, [user?.email])

    console.log(useFormDb);


    const handleUpdateProfile = e => {
        e.preventDefault()
        const linkedin = e.target.linkedin.value
        const education = e.target.education.value
        const location = e.target.location.value
        const number = e.target.number.value
        const data = {
            linkedin: linkedin,
            education: education,
            location: location,
            number: number,
        }
        console.log(linkedin);
        if (linkedin && education && location && number) {
            fetch(`https://carz-manufacturing-project-server-a12.vercel.app/updateUser/${user?.email}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data?.acknowledged) {
                        toast.success('Profile Updated successfully!')
                        e.target.reset()
                    }
                })
        }
    }

    return (
        <div className='w-[90%] p-4  border flex justify-between h-[460px] text-left'>
            <div className='w-full mt-4 overflow-y-auto'>
                <div className=' mx-2'>
                    <h3 className='text-xl font-semibold '>General Info</h3>
                    <div className='py-2'>
                        <h3>Name: <span className='font-semibold text-sm'>{user?.displayName}</span></h3>
                        <h4>Email: <span className='font-semibold text-sm'>{user?.email}</span></h4>
                        <h5>Phone Number: <span className='font-semibold text-sm'>{user?.phoneNumber ? user?.phoneNumber : number ? number : 'Not set yet!'} </span></h5>
                        <h5>Your Location <span className='font-semibold text-sm'>{location ? location : 'Not set Yet'} </span></h5>
                        <h5>Your Education <span className='font-semibold text-sm'>{education ? education : 'Not set Yet'} </span></h5>
                        <h5> Linkedin account <a target='_blank' href={`https://${linkedin && linkedin}`} className='font-semibold text-sm'>{linkedin ? linkedin : 'Not set Yet'} </a></h5>
                        <div className='mt-4'>
                            <button
                                onClick={() => setShowForm(!showForm)}
                                type="button" class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-10 py-2 text-center mr-2 mb-2 ">Edit</button>
                        </div>
                    </div>
                </div>

            </div>
            <form
                onSubmit={handleUpdateProfile}
                className={`${showForm ? 'block' : 'hidden'} w-full ml-10 mt-2 text-left overflow-y-auto`}>
                <h2 className='text-xl font-semibold mb-2'>Update Profile </h2>
                <hr />

                <div class="relative z-0 w-full mb-6 group">
                    <input type="text" name="linkedin" class="block py-2.5 px-2 rounded w-full text-sm text-gray-900 bg-transparent border-0 border-gray-300 appearance-none focus:outline-none focus:ring-0 bg-[#eef0f0]" placeholder="Linkedin Link " required="" />
                </div>
                <div class="relative z-0 w-full mb-6 group">
                    <input type="text" name="education" class="block  py-2.5 px-2 rounded w-full text-sm text-gray-900 bg-transparent border-0 border-gray-300 appearance-none focus:outline-none focus:ring-0 bg-[#eef0f0]" placeholder="Your Education " required="" />
                </div>
                <div class="relative z-0 w-full mb-6 group">
                    <input type="text" name="location" class="block  py-2.5 px-2 rounded w-full text-sm text-gray-900 bg-transparent border-0 border-gray-300 appearance-none focus:outline-none focus:ring-0 bg-[#eef0f0]" placeholder="Location" required="" />
                </div>
                <div class="relative z-0 w-full mb-6 group">
                    <input type="text" name="number" class="block  py-2.5 px-2 rounded w-full text-sm text-gray-900 bg-transparent border-0 border-gray-300 appearance-none focus:outline-none focus:ring-0 bg-[#eef0f0]" placeholder="Mobile Number " required="" />
                </div>


                <button type="submit" class="text-white mt-1 bg-blue-600 hover:bg-blue-700 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Update</button>
            </form>
        </div >

    );
};

export default MyProfile;