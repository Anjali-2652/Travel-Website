import React from 'react'
import { Link } from 'react-router-dom'
import BlogContent from './BlogContent';

const BlogsCard = ({image, date, title, content, author }) => {
  return (
   <Link
   to = {`/blogs/${title}`}
   onClick={()=>{
    window.scrollTo(0, 0);
   }}
   state={{image, date, title, content, author}}
   >
    <div className='flex justify-items-center'>
    <div className='p-5 mb-10 bg-[#fabcbd] rounded-2xl  shadow-2xl  transition-all duration-500  hover:shadow-2xl'>
     
      <div className='overflow-hidden'>
        <img className='mx-auto h-[250px]  w-full rounded-xl object-cover transition-all duration-700 hover:skew-x-2 hover:scale-110'
        src  = {image} alt="" />
      </div>
      <div className='flex justify-between  font-bold pt-2 text-[#cf6869]'>
        <p>{date}</p>
        <p>by {author}</p>
      </div>
      <div className='space-y-2 py-3'>
        <h1 className='line-clamp-1 font-bold'>{title}</h1>
        <p onClick={<BlogContent/>}
        className='line-clamp-2'>{content}</p>
      </div>
      </div>
     
    </div>
    <BlogContent/>
   </Link>
  )
}

export default BlogsCard
