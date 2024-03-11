import React from 'react'
import pic from "../assets/demo/agrim-hfc 1.png"
import { useNavigate } from 'react-router-dom';


function BlogCard() {
    const navigate = useNavigate();
  return (
    <div className='max-w-[360px] w-[360px] rounded-2xl border px-4 py-4'>
        <div className="w-full h-48 rounded-[10px] overflow-hidden">
            <img src={pic} className=' w-full h-full object-cover' alt="" />
        </div>
        <div className="poppins-medium text-2xl text-center mt-3">
            <h1>Home Financing vs pers....</h1>
        </div>
        <div className="poppins-medium text-sm text-[#666666] text-left mt-3">
            <p>A lot of the time, our teams are asked by customers about the difference between a personal loan and home loan so let’s talk about it </p>
        </div>
        <div className="flex gap-2 mt-3">
            <button onClick={()=>navigate('/admin/edit-blog/1')} className='flex-1 py-3 rounded-[5px] border border-[#000000] text-[#000000] bg-[#FFFFFF]'>Edit</button>
            <button className='flex-1 py-3 rounded-[5px] border border-[#000000]  text-[#ffffff] bg-[#000000]'>Delete</button>
        </div>
    </div>
  )
}

export default BlogCard