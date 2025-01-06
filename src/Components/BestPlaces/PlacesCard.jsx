import React from "react";
import { IoLocation } from "react-icons/io5";

const PlacesCard = ({ img, title, location, description, price }) => {
  return (
    <div className="shadow-2xl transition-all duration-500 hover:shadow-xl cursor-pointer ">
      <div className="overflow-hidden">
        <img
          className="mx-auto h-[220px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
          src={img}
          alt=""
        />
      </div>
      <div className="px-3">
        <h1 className="line-clamp-1 font-bold text-xl">{title}</h1>

        <div>
          <div>
            <p className="text-sm">{description}</p>
          </div>
        </div>
        <div className="flex justify-between items-center  border-t-2 mt-3">
          <div className="flex items-center justify-center  gap-x-1">
            <IoLocation />
            <p>{location}</p>
          </div>

          <div>
            <p className="text-lg font-bold ">${price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlacesCard;
