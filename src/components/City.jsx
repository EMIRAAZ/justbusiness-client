import React from 'react'
import pic1 from '../assets/demo/marina 1.png'
import { useNavigate } from 'react-router-dom';

function City() {
    const navigate = useNavigate();
  return (
    <div className='w-52 max-w-52  border pb-3 rounded-[10px] mb-4'>
        <div className="w-52 h-[200px] relative">
            <img src={pic1} className='object-cover w-full h-full rounded-[10px]' alt="" />
            {/* <div className="absolute flex top-3 w-[300px] z-50 left-3 poppins">
                <span className='bg-[#666666]  font-semibold text-[10px] rounded-[40px]'></span>
                <h1 className='font-semibold text-2xl'></h1>
            </div> */}
            <div className="absolute top-3 left-3 w-full ">
                <p className='bg-[#666666] text-center poppins-semibold text-[#ffffff] max-w-[78px] w-[78px] py-2 text-[10px] rounded-[40px]'>Dubai</p>
                <h1 className='text-2xl text-[#ffffff]  poppins-semibold'>Marina</h1>
            </div>
        </div>
        <div className="mt-4  flex gap-2 w-full px-2.5">
            <button onClick={()=>navigate('/admin/edit-citiy/1')}  className='flex-1 py-2.5 rounded poppins-semibold text-[10px] bg-[#D2D2D2] text-[#000000]' >Edit</button>
            <button className='flex-1 py-2.5 rounded poppins-semibold text-[10px] bg-[#000000] text-[#ffffff]' >Delete</button>
         </div>
    </div>
  )
}

export default City