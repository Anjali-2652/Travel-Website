import React from "react";
import { FaPersonWalkingLuggage } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { FaFacebook, FaGithubAlt, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="bg-primary/80 mt-10 md:w-full h-fit md:py-5 sm:py-5 sm:px-5 py-10 px-10">
      <div className="grid grid-cols-3  sm:space-x-2">

      <div>
      <p className="text-xl font-bold">Stay Connected</p>
        <div className="flex mt-5 gap-x-4">
      <FaFacebook className = "text-3xl"/>
      <FaLinkedin className = "text-3xl"/>
      <FaTwitter className = "text-3xl"/>
      <FaGithubAlt className = "text-3xl" />
        </div>
       
          </div>

          <div>
          <div className="mt-5 text-xl grid sm:grid-cols-1 lg:grid-cols-2 ">

          <Link to="/">
            <div className="mb-3 flex items-center gap-x-3  hover:text-white">
            <div><FaArrowCircleRight className="" /></div>
            <div>Home</div>
            </div>
            </Link>
            <Link to="/about">
            <div className="mb-3 flex items-center gap-x-3 hover:text-white">
            <div><FaArrowCircleRight className="" /></div>
            <div>About</div>
            </div >
            </Link>

            <Link to="/places">
            <div className="mb-3 flex items-center gap-x-3 hover:text-white">
            <div><FaArrowCircleRight className="" /></div>
            <div>Best Places</div>
            </div>
            </Link>
            
            <Link to="/blog">
            <div className="mb-3 flex items-center gap-x-3 hover:text-white">
            <div><FaArrowCircleRight className="" /></div>
            <div>Blogs</div>
              </div>
              </Link>
            <Link to="/contact">
            <div className="mb-3 flex items-center gap-x-3 hover:text-white">
            <div><FaArrowCircleRight className="" /></div>
            <div>Contact</div>
            </div>
            </Link>
          </div>
          
             
            
          </div>
        <div>
          <Logo />
          <div className="text-wrap sm:text-sm md:text-sm lg:text-lg ">
            Welcome!!!🙏, your gateway to exploring the breathtaking beauty and
            rich culture of Nepal! we are passionate about showcasing the wonders of this enchanting country to travelers from around the world.
          </div>
        </div>

   

          
        </div>
        <div className="flex italic text-gray-900  mt-5 justify-center items-center">
        <p className=" flex">
          &copy; 2023 Divine Travel. All rights reserved. | Designed by{" "}
            Anjali Gupta
         
          with �� and ��️.  | Terms and Conditions | Privacy Policy | Cookie Policy

          &nbsp; | &nbsp;
          <FaPersonWalkingLuggage className="lg:text-xl sm:text-5xl" /> 
        </p>
        </div>
        
      </div>
    
  );
};

export default Footer;
