import React, { useState } from "react";
import { FaCaretDown, FaPersonWalkingLuggage } from "react-icons/fa6";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";
import ResponsiveMenu from "./ResponsiveMenu.jsx";


const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () =>{
        setShowMenu(!showMenu);
    }

const dropdownLinks= [
    {
        name :"Our Services",
        link: "/#services",
    },
    {
        name :"Top Brands",
        link: "/#Travel_brands",
    },
    {
        name :"Location",
        link: "/#location",
    },
]

  return (
    <div className="fixed  top-0 right-0 w-full bg-white text-black shadow-md">
      <div className="bg-gradient-to-r from-primary to-secondary text white">
        <div className="container py-[2px] sm:block hidden">
          <div className="flex justify-between">
            <p>20% off on next booking</p>
            <p>Mobile No. 9800002002</p>
          </div>
        </div>
      </div>

{/* navbar section ....  */}
      <div className="flex justify-between items-center px-10">

        {/* logo.........  */}
        <div className="px-5 py-2">
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>
            <div className="flex p-2 h-fit w-fit  rounded-full items-center  border-b-[3px] border-l-[4px] border-blue-400">
              <div className="font-bold  text-xl uppercase tracking-wider pl-4 text-[#1c6ea5]">
                journey
              </div>
              <div className="text-xl text-orange-600">
                <FaPersonWalkingLuggage />
              </div>
            </div>
          </Link>
        </div>

{/* desktop navlinks section..........  */}

        <div className="hidden md:block text-lg">
          <ul className="flex items-center gap-6">
            <li className="py-4">
              <NavLink to="/" activeclassname = "active" onClick={() => window.scrollTo(0, 0)}>
                Home
              </NavLink>
            </li>
            <li className="py-4">
              <NavLink to="/blogs" activeclassname = "active"  onClick={() => window.scrollTo(0, 0)}>
                Blogs
              </NavLink>
            </li>
            <li className="py-4">
              <NavLink to="/places" activeclassname = "active"  onClick={() => window.scrollTo(0, 0)}>
                Best Places
              </NavLink>
            </li>
            <li className="py-4">
              <NavLink to="/about" activeclassname = "active"  onClick={() => window.scrollTo(0, 0)}>
                About
              </NavLink>
            </li>

 {/* appear drop down list after hover on quick links list.........  */}
            <li className="relative py-4 group cursor-pointer">
                <div className="dropdown group flex items-center">
                    <span>Quick Links</span>
                    <span>
                        <FaCaretDown
                        className="transition-all duration-200 group-hover:rotate-180"
                        />
                    </span>
                </div>
                <div className="absolute -left-9 z-[9999] hidden group-hover:block shadow-md text-black w-[150px] bg-white p-2">
                    <ul>
                        {
                            dropdownLinks.map((data)=>{
                                return(
                                <li key = {data.name}>
                                    <a className="inline-block w-full rounded-md p-2 hover:bg-primary hover:font-bold hover:text-[16px]"
                                     href={data.link}>{data.name}</a>
                                </li>

                                )
                            })
                        }

                    </ul>
                </div>
            </li>
          </ul>
        </div>
        
{/* book now button ..........  */}

        <div className="flex items-center gap-4">
<button
 className="bg-gradient-to-l from-secondary to-primary rounded-full  hover:bg-bg-gradient-to-r hover:from-primary hover:bg-primary transition-all duration-600 text-white px-3 py-1">
    Book Now</button>

    {/* for mobile............  */}
    <div className="md:hidden block">
        { showMenu ? (
           < HiMenuAlt1
            onClick = {toggleMenu} 
            className = "cursor-pointer transition-all"
            size = {30}/>

            ):(
                <HiMenuAlt3
                onClick={toggleMenu} className = "cursor-pointer transition-all" size = {30}/>

            )
        }

    </div>
        </div>
      </div>
      <ResponsiveMenu setShowMenu={showMenu} showMenu={showMenu}/>
    </div>
  );
};

export default Navbar;
