import React from 'react'
import natureVideo from '../assets/naturevid.mp4';
import Hero from './Hero';
import Places from './BestPlaces/Places';
import BannerImg from '../assets/bannerImage.jpg';
import BannerImage from './BannerImage';
import Blogs from './Blogs';
import BannerDown from './BannerDown';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {
  return (
    <div >
       <div className=''>
        <video autoPlay loop muted
        className='absolute right-0 top-0 h-[600px] w-full object-cover z-[-1]'>
          <source  src={natureVideo}/>

        </video>
       </div>
       <Hero/>
       <Places/>
       <BannerImage/>
       <Blogs/>
       {/* <BannerDown/> */}
       <Testimonials className = "" />
    </div>
  )
}

export default Home
