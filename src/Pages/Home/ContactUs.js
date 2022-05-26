import React from 'react';

const ContactUs = () => {
    return (
        <div className='contact-section mt-24 mb-10 text-left w-9/12 mx-auto'>
            <h2 className='text-3xl font-semibold font-[Roboto Flex]'>Have You any query?</h2>
            <h2 className='text-3xl font-semibold'>Please Fill free to message.</h2>
            <div className='w-full grid md:grid-cols-2 gap-3 mt-10'>
                <form className='w-full' action="">
                    <div className='mb-4'>
                        <input type="text" placeholder='Your Name' className='w-full md:w-96 border-0 border-b focus:border-gray-700' />
                    </div>
                    <div className='mb-4'>
                        <input type="text" placeholder='Your Email' className='w-full md:w-96 border-0 border-b focus:border-gray-700' />
                    </div>
                    <div>
                        <textarea name="" id="" cols="10" rows="3" placeholder='Your Message' className='w-full md:w-96 border-0 border-b focus:border-gray-700'></textarea>
                    </div>
                    <div className='mt-3'>
                        <button type="button" class="text-white bg-[#06998f] hover:bg-[#099e94]  focus:ring-blue-300 focus:ring-2 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none">Send Message</button>
                    </div>
                </form>
                <div className=' mt-8 md:relative md:border-l md:pl-20 md:h-40 border-gray-600'>
                    <h2 className=' text-xl font-semibold'>What would you like to know?</h2>
                    <p>If You have any query to our company or services you can direct message to us. Our Customer care operator 24/7 ready to response you and ensure to get you the best services. Thanks </p>

                </div>
            </div>
        </div>
    );
};

export default ContactUs;