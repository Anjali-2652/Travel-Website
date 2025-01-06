import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  const[priceValue, setPriceValue] = useState(3000)
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className=" h-[600px]">
      <div className="h-[600px] m-auto flex justify-center items-center text-center p-4 bg-primary/10">
        <div className="container grid grid-cols-1 gap-4">
          <div className="text-black">
            <h1 data-aos = "fade-up"
            data-aos-delay = "600"
            className="lg:text-5xl mt-10 text-4xl font-bold mb-2 ">
              Unlock Your Travel Dreams <div>With Us!</div>{" "}
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="600"
              className="text-2xl text-white"
            >
              Discover the world's most adventerous nature, life is so short for
              trip!!!
            </p>
          </div>

          {/* search section ..........       */}
          <div 
          data-aos = "fade-up"
          data-aos-delay="600"        
          className=" flex flex-wrap gap-y-4 m-auto w-fit px-5 justify-center   gap-x-6">
            <div className=" full basis-11/12 flex justify-center items-center bg-[#f79a9b] rounded-full">
              <input
                className=" placeholder-white   bg-[#f79a9b] px-4 py-2 outline-none rounded-full"
                type="text"
                name="destination"
                id = "destination"
                placeholder="Search Your Destination Here........"
              />
              <FaSearch className="text-xl text-white  mr-5" />
            </div>
            <div>
              <input 
                className="bg-[#f79a9b] rounded-full px-4 py-2 outline-none "
                type="date"
                name="destination"
                id="destination"
              />
            </div>
            <div className="bg-[#f79a9b] px-4 py-2 h-fit rounded-full outline-none">
              <label htmlFor="destination">
              <div className="flex justify-between w-full items-center">
              <p className="">Price </p>
              <p className="font-bold">Rs.{priceValue}</p>
              </div>
              </label>
          
              <div className="">
                <input className="bg-black  h-1 flex items-center justify-center"
                type="range"
                name = "destination"
                id="destination"
                min="3000"
                max="100000"
                value={priceValue}
                step="100"
                onChange={(e)=>setPriceValue(e.target.value)}
                 />
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
