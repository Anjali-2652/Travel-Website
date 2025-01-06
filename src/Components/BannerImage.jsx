import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const BannerImage = () => {
  
   useEffect(() => {
     AOS.init({ duration: 1000 });
   }, []);

  return (
    <div 
     className=' '>
        <div className='lg:grid sm:grid sm:grid-cols-2 lg:grid-cols-2 gap-x-10 items-center mt-10'>
        <div>
            <img
            data-aos = "fade-right"
             className='h-[400px] w-full rounded-r-2xl'
        src="src/assets/bannerImage.jpg" alt="" />
            </div>
            <div
            data-aos = "fade-left"
             className='pr-5 ml-5'>
                <p className='text-[#f56062] font-bold md:text-5xl sm:text-3xl mt-4 mb-5'>Explore The Nature</p>
                <p className='lg:text-lg sm:text-sm font-black'>We live in a wonderful world that is full of beauty, charm and adventure. There is no end to the adventures we can have if only we seek them with our eyes open.🤗🤗🤗</p>
                <p className='text-center italic font-bold mt-2 text-[#f56062] sm:text-sm lg:text-lg'>Remember that happiness is a way of travel.☺️☺️☺️</p>
                <button className='text-white font-bold px-8 py-3 rounded-full bg-[#1c6ea5] hover:bg-[#f79489]'>Discover Now</button>
            </div>
       
        </div>
       
     
    </div>
  );
};

export default BannerImage
