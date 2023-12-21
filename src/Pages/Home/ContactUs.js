import React from 'react';

const ContactUs = () => {
    return (
      // <div className='contact-section mt-24 mb-32 text-left w-9/12 mx-auto'>
      //     <h2 className='text-3xl font-semibold font-[Roboto Flex]'>Have You any query?</h2>
      //     <h2 className='text-3xl font-semibold'>Please Fill free to message.</h2>
      //     <div className='w-full grid md:grid-cols-2 gap-3 mt-10'>
      //         <form className='w-full' action="">
      //             <div className='mb-4'>
      //                 <input type="text" placeholder='Your Name' className='w-full md:w-96 border-0 border-b focus:border-gray-700' />
      //             </div>
      //             <div className='mb-4'>
      //                 <input type="text" placeholder='Your Email' className='w-full md:w-96 border-0 border-b focus:border-gray-700' />
      //             </div>
      //             <div>
      //                 <textarea name="" id="" cols="10" rows="3" placeholder='Your Message' className='w-full md:w-96 border-0 border-b focus:border-gray-700'></textarea>
      //             </div>
      //             <div className='mt-3'>
      //                 <button type="button" class="text-white bg-[#5B72EE] hover:bg-[#576ded] focus:ring-blue-300 focus:ring-2 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none">Send Message</button>
      //             </div>
      //         </form>
      //         <div className=' mt-8 md:relative md:border-l md:pl-20 md:h-40 border-gray-600'>
      //             <h2 className=' text-xl font-semibold'>What would you like to know?</h2>
      //             <p>If You have any query to our company or services you can direct message to us. Our Customer care operator 24/7 ready to response you and ensure to get you the best services. Thanks </p>

      //         </div>
      //     </div>
      // </div>

      <div className="bg-[#fcfcfc] pt-[5px] pb-10 mt-4">
        <div className="md:w-[80%] md:mt-20 px-3 md:grid grid-cols-12 expert-section gap-5 mx-auto mt-24 mb-8 md:mb-14">
          {/*--------------CONTACT US HEADER------------ */}
          <div className="col-span-4 text-left">
            <h2 className="text-[22px] font-[600] text-left">Contact Us</h2>
            {/* Divider */}
            <div className="flex float-left jusify-between gap-2 mt-2 ">
              <span className="w-[8px] rounded-full h-[8px] bg-[#014E9C] "></span>
              <span className="w-[8px] rounded-full h-[8px] bg-[#769fcb] "></span>
              <span className="w-[8px] rounded-full h-[8px] bg-[#a9c4df] "></span>
              <span className="w-[8px] rounded-full h-[8px] bg-[#d7ebff] "></span>
              <span className="w-[8px] rounded-full h-[8px] bg-[#e9f4ff] "></span>
            </div>
            <div className="text-left text-sm mt-10 w-full mr-auto">
              <h4 className="text-[14px]">
                If You have any query you can direct message to us. Our Customer
                care operator 24/7 ready to response you and ensure to get you
                the best services.
              </h4>
              {/* <button className="ml-auto hover:bg-[#014E9C] hover:text-white hover:bg-right inline-block mt-4 py-[6px] px-[25px] border border-[#014E9C]">
            More Data
          </button> */}
            </div>
          </div>

          {/* <h2 className='text-2xl md:text-3xl font-semibold'></h2>
            <p className='w-4/5 md:w-3/6 mx-auto text-center text-sm'>We have a bunch of talented & expert team whom always doing hard work for ensure the best services. </p> */}
          <div className="col-span-8">
            <form className="w-full" action="">
              <div className="mb-4 flex">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full py-2.5 md:w-[80%] ml-auto bg-[#f7f7f7] border-0 border-b border-b-[#eee] focus:border-gray-700"
                />
              </div>
              <div className="mb-4 flex">
                <input
                  type="text"
                  placeholder="Your Email"
                  className="w-full py-2.5 md:w-[80%] ml-auto bg-[#f7f7f7] border-0 border-b border-b-[#eee] focus:border-gray-700"
                />
              </div>
              <div className="flex ">
                <textarea
                  name=""
                  id=""
                  cols="10"
                  rows="3"
                  placeholder="Your Message"
                  className="w-full py-2.5 md:w-[80%] bg-[#f7f7f7] border-0 border-b border-b-[#eee] focus:border-gray-700 ml-auto"
                ></textarea>
              </div>
              <div className="mt-3 md:w-[80%] ml-auto flex">
                <button
                  type="button"
                  class="text-black bg-gradient-to-r from-[#e2effb] to-[#fafffd] border border-[#014E9C] hover:bg-[#0358ae] focus:ring-blue-[#0358ae] focus:ring-2 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default ContactUs;