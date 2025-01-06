import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "react-slick";

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      name: "Aashika Singh",
      text: "Our trip was nothing short of spectacular! The itinerary was perfectly planned, and the destinations exceeded our expectations. From breathtaking mountain views to serene beach sunsets, this travel agency made it all possible!",
      img: "src/Components/Testimonials/profilepic1.avif",
    },
    {
      id: 2,
      name: "Ankur Ahuja",
      text: "The team went above and beyond to ensure our journey was smooth and stress-free. From personalized suggestions to quick responses, their professionalism and care made all the difference!",
      img: "src/Components/Testimonials/profilepic2.jpg",
    },
    {
      id: 3,
      name: "Sima Bhatia",
      text: "I couldn’t believe the incredible value we got for the price! Everything was taken care of, and we got to enjoy a hassle-free holiday filled with amazing experiences",
      img: "src/Components/Testimonials/profilepic3.jpg",
    },
    {
      id: 4,
      name: "Dev Chandra",
      text: "As a family with young kids, we were nervous about traveling, but this travel service made it so easy. They catered to our needs perfectly, and we all came back with unforgettable memories!",
      img: "src/Components/Testimonials/profilepic4.jpg",
    },
    {
      id: 5,
      name: "Aashika Singh",
      text: "As a solo traveler, I appreciated the attention to detail and safety. I felt supported throughout the trip and met amazing people along the way. It was the solo adventure of a lifetime!",
      img: "src/Components/Testimonials/profilepic1.avif",
    },
  ];



  return (
    <div className="mt-10">
      <div className="text-center md:px-4 sm:px-10 mb-5 lg:px-[300px]">
        <p className="font-bold text-2xl text-[#c44b4d]">Testimonial</p>
        <p className="mt-1">
          "If you love nature, this is the agency for you! From serene hiking
          trails to stunning national parks, every part of our trip brought us
          closer to the beauty of the natural world."
        </p>
      </div>
      <div className="flex  items-center animate-loop-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] gap-x-5 justify-center space-x-10   ">
        {testimonialsData.map((data) => {
          return (
            <div key={data.id} className=" ">
              <div
                className="overflow-y-scroll  [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] h-[250px] w-[250px]   mb-5 
                items-center gap-5 text-center shadow-xl p-4  rounded-xl bg-primary/40 realtive "
              >
                <img
                  src={data.img}
                  alt={data.name}
                  className="object-cover m-auto h-[100px] w-[100px]   rounded-full"
                />
                <div className="flex-grow md:flex-shrink-0">
                  <p className="text-md font-bold text-[#c44b4d]">
                    {data.name}
                  </p>
                  <p className="  text-sm text-black">{data.text}</p>
                  <p></p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;
