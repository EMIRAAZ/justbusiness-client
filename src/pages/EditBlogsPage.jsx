import React from 'react'
import BlogCard from "../components/BlogCard.jsx"

function EditBlogsPage() {
  return (
    <div className='grid grid-cols-3'>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
    </div>
  )
}

export default EditBlogsPage