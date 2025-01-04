import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'


const NavbarLinks = [
    {
        name : "Home",
        link : "/",
    },
    {
        name : "About",
        link : "/about",
    },
    {
        name : "Blog",
        link : "/blogs",
    },
    {
        name : "Best Places",
        link : "/places",
    }
]

const ResponsiveMenu = ({showMenu, setShowMenu}) => {
  return (
    <div className={`${
        showMenu ? "left-0" : "-left-[100%]"}
        fixed bottom-0 top-0 z-20 flex h-screen w-[60%] flex-col justify-between bg-white dark:bg-[#f7cbc6] dark:text-white px-8 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md
    `}>

        <div className='Navbar_card'>

{/* profile section..........  */}
            <div>
                <div className='flex items-center justify-start gap-4'>
                    <FaUserCircle size={50} className='text-[#821d30]'/>
                    <div className='text-[#821d30] '>
                        <h1 className='text-xl'>Hello User</h1>
                        <h2>username@gmail.com</h2>
                    </div>
                </div>
            </div>

 {/* navbarlinks section .........  */}
 <div className='mt-12 text-black'>
    <ul className=' text-xl'>
        {
            NavbarLinks.map(({name,link})=>(
                <li >
<Link to = {link} onClick={()=>setShowMenu(false)} className='mb-5 hover:bg-[#f79489] hover:text-[#821d30] hover:font-bold hover:p-3 rounded-xl  hover:w-full inline-block'>{name}</Link>
                </li>
            ))
        }
    </ul>
 </div>
        </div>
      
    </div>
  )
}

export default ResponsiveMenu
