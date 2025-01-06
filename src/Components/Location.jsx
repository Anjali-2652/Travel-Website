import React from 'react'

const Location = () => {
  return (
    <div>
        <div className="container pb-10">
            <h1 className='inline-block border-l-8 border-primary py-2 pl-2 mb-4 text-xl font-bold sm:text-3xl'>
                Location to Visit
            </h1>
            <div className='rounded-xl'>
                <iframe
                width="100%"
                height="360"
                loading='lazy'
                allowFullScreen = ""
                 src="https://www.google.com/maps/embed/v1/place?q=Nepal&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8" frameborder="0"></iframe>

            </div>
        </div>
      
    </div>
  )
}

export default Location



