import React from 'react'
import { FaPersonWalkingLuggage } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <div>

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
      
    </div>
  )
}

export default Logo
