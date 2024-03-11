import React from 'react'
import BannerPic from "../assets/images/Interior-of-a-luxury-panorama-penthouse.png"

function EditBanners() {
  return (
    <div className='mt-3'>
        <div className="w-full h-52 flex rounded-[20px] overflow-hidden">
            <div className="flex-[55%] text-[#FFFFFF] bg-[#000000] ps-8 pt-10">
                <h1 className='poppins-semibold text-3xl pb-3 '>Find Your Dream Home Today</h1>
                <p className='poppins-medium text-lg pb-2'>
                    Explore our curated collection of exquisite properties for sale and discover the perfect place to call home.
                </p>
                <button className='text-[#000000] py-3 px-5 bg-[#ffffff] rounded-[10px] poppins-semibold text-xs'>View All Propreties</button>
            </div>
            <div className="flex-[45%]">
                <img src={BannerPic} className='w-full object-cover h-full ' alt="banner" />
            </div>
        </div>
    </div>
  )
}

export default EditBanners