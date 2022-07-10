import React from 'react';
// import AboutImg from '../../Assets/img/about.png';

const About = () => {
    return (
        <div className='border p-4 md:w-1/2 mx-auto mb-16 my-10 md:my-20'>
            <div className='text-left'>
                <h3>Name: Amir Hosen</h3>
                <h3>Email: amiribnjaman@gmail.com</h3>
                <h3>Education: Dhakil (Madrasah)</h3>
                <h3>Skills: HTML, CSS, TAILWIND, BOOTSTRAP, Vanilla JS, REACT, NODE, EXPRESS etc</h3>
                <h3>Live Projects link:
                    <p><a className='text-blue-500' target='_blank' href="https://electronics-inventory-a11.web.app/">electronics-inventory</a></p>
                    <p><a className='text-blue-500' target='_blank' href="https://smart-gym-trainer.netlify.app/">smart-gym-trainer</a></p>
                    <p><a className='text-blue-500' target='_blank' href="https://amiribnjaman.github.io/weather-site-accuweather-api/">weather-site</a></p>
                </h3>
            </div>
        </div>
    );
};

export default About;