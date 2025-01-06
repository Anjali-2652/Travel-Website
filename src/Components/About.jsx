import React from 'react'
import Location from './Location'

const About = () => {
  return (
    <div className='container pt-14'>
      <div className='py-10 '>
        <h1 className='my-8 border-l-8 border-primary py-2 pl-2 text-3xl font-bold'>About Us</h1>
        <p>


Welcome to <span className='italic text-blue-700'>Journey.com.np</span>, your gateway to exploring the breathtaking beauty and rich culture of Nepal!
<p className='mt-5'>Nestled in the heart of the Himalayas, Nepal is a land of majestic mountains, ancient traditions, and warm hospitality.  we are passionate about showcasing the wonders of this enchanting country to travelers from around the world.</p>

<p className='mt-5'>
Whether you dream of conquering the mighty Everest, trekking through the serene Annapurna Circuit, exploring UNESCO World Heritage Sites, or immersing yourself in vibrant festivals and traditions, we are here to guide you every step of the way.
</p>

<p className='mt-5'>
Our mission is to:

Inspire Adventures: Highlight Nepal's iconic trekking routes, hidden gems, and adventure activities.
Celebrate Culture: Showcase Nepal's diverse heritage, from ancient temples to unique festivals.
Empower Travelers: Provide practical tips, curated travel guides, and personalized itineraries to help you make the most of your journey.
From adrenaline-pumping adventures to peaceful retreats in the lap of nature, Nepal offers something for everyone. With [Your Website Name], your trip to Nepal will be an unforgettable experience filled with awe, wonder, and discovery.
</p>
<p className='mt-5 italic text-primary'>
Start exploring Nepal with us – because every step here is a story waiting to unfold!
</p>
</p>
      </div>
      <Location/>
    </div>
  )
}

export default About
