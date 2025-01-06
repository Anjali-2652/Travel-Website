import React from 'react'
import PlacesCard from './PlacesCard'
import Img1 from "../../assets/pashupatinath-kathmandu.jpg"
import Img2 from "../../assets/swambhu.jpg"
import Img3 from "../../assets/Davis-Fall-Pokhara.jpg"
import Img4 from "../../assets/illam.jpg"
import Img5 from "../../assets/poonhill-ghorepani-cover-.webp"
import Img6 from "../../assets/Tengboche_Monastery.png"
import Img7 from "../../assets/bandipur.jpg"
import Img8 from "../../assets/sagarmatha national park.jpg"
import Img9 from "../..//assets/lumbini.jpg"


const Places = () => {
   
  const PlacesData = [
    {
      img: Img1,
      title: "Pashupatinath Temple",
      location: "Kathmandu",
      description: "The Pashupatinath Temple is a Hindu temple located in Kathmandu, Nepal, built in 1953. It is the largest Hindu temple in the world.",
      price: 6500,
    },
    {
      img: Img2,
      title : "Swayambhunath",
      location: "Kathmandu",
      description: "A UNESCO World Heritage site with a stunning panoramic view of Kathmandu.",
      price:6000,
    },
    {
      img: Img3,
      title: "Davis Fall",
      location: "Pokhara",
      description: "A natural waterfall that is particularly dramatic during the monsoon season.",
      price: 7000,
    },
    {
      img: Img4,
      title: "Tea Garden",
      location: "Illam",
      description: "Famous for its tea gardens, lush greenery, and scenic hills, Ilam is located in the eastern part of Nepal. It is a great place for relaxation, nature walks, and birdwatching.",
      price:3500,
    },
    {
      img: Img5,
      title: "Ghorepani Poon Hill",
      location: "Annapurna",
      description: "A famous viewpoint for sunrise and panoramic views of the Annapurna and Dhaulagiri ranges..",
      price: 5000,
    },
    {
      img: Img6,
      title: "Tengboche Monastry",
      location: "Everest Region",
      description: "One of the largest monasteries in the Khumbu region, offering spectacular views of the surrounding peaks.",
      price:5500,
    },
    {
      img: Img7,
      title: "Bandipur",
      location: "Bandipur",
      description: "A hilltop town in central Nepal known for its preserved cultural heritage, stunning mountain views, and traditional Newari architecture. Bandipur is also a great spot for hiking.",
      price: 4000,
    },
    {
      img: Img8,
      title: "Sagarmatha National Park",
      location: "Everest Region",
      description:"Beyond Mount Everest, the park is home to other towering peaks like Lhotse, Cho Oyu, and Makalu. It also boasts of Sherpa villages, monasteries, and glaciers..",
      price: 7000,
    },
    {
      img: Img9,
      title: "Lumbini Garden",
      location: "Lumbini",
      description:"A peaceful park with various monasteries and stupas built by different countries.",
      price: 7000,
    },
  ]

  return (
    <div className='py-10'>
      <div className='container'>
        <h1 className='py-2 my-8 border-l-8 pl-2 text-3xl font-bold border-primary'>Best Places to Visit</h1>

        <div className='grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-3 gap-10'>
          {
            PlacesData.map((item, index)=>(
              <PlacesCard key = {index} {... item}  />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Places
