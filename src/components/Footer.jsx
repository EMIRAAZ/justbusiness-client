import React from 'react'
import { Instagram } from '../icons'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="bg-black pb-6 px-7 sm:px-20 pt-8 sm:pt-20">
    <div className=" flex justify-between mb-8 flex-col sm:flex-row">
      <div className="pb-6 sm:pb-0">
        {/* <img className=' object-contain w-full h-full bg-transparent' src="/assets/image/PropertysellerBlackLogo 22.svg" alt="" /> */}
        <h1 className=' text-center sm:text-start text-[24px] font-bold font-["poppins"] leading-9 text-[#fff]'>
          PropertySeller.
        </h1>
      </div>
      <div className="flex justify-between items-center">
        <div className=" gap-4  items-center flex-row sm:flex">
          <Link to={"/"}>
            <p className="mb-3 sm:mb-0 text-white text-[13px] border-0 sm:border-r border-solid border-white pe-3">
              Home
            </p>
          </Link>
          <Link to={"/about"}>
            <p className="mb-3 sm:mb-0 text-white text-[13px] border-0 sm:border-r border-white pe-3">
              About Us
            </p>
          </Link>
          <Link to={'/blog'}>
          <p className="mb-3 sm:mb-0 text-white text-[13px] border-0 sm:border-r border-white pe-3">
            Blog
          </p>
          </Link>
          <Link to={'/property-type/apartment'}>
          <p className="mb-3 sm:mb-0 text-white text-[13px] border-0 sm:border-r border-white pe-3">
            Apartment
          </p>
          </Link>
          <Link to={'/property-type/townhouse'}>
          <p className="mb-3 sm:mb-0 text-white text-[13px] border-0 sm:border-r border-white pe-3">
          Townhouse
          </p>
          </Link>
          <Link to={'/property-type/penthouse/'}>
          <p className="mb-3 sm:mb-0 text-white text-[13px] border-0 sm:border-r border-white pe-3">
            Penthouse            </p>
          </Link>
        
        </div>
        <div className="flex gap-4 items-center sm:hidden me-5">
          <Instagram width="18" height="30" fill="#fff" />
          <span className="text-white text-[13px]">Follow Us</span>
        </div>
      </div>
    </div>
    <div className="">
      <hr className="bg-white" />
    </div>
    <div className="flex items-center justify-between mt-4 pb-0">
      <p className="text-white text-[13px]">
        Copyright {new Date().getFullYear()} &#169; Propertyseller
      </p>
      <div className="hidden sm:flex gap-4 items-center">
        <div className="">
          <Instagram width="18" height="30" fill="#fff" />
        </div>
        <span className="text-white text-[13px]">Follow Us</span>
      </div>
      <div className="flex gap-7">
        <p className="text-white text-[13px]">
          <Link to={"/terms-conditions "}>Terms of Use</Link>
        </p>
        <p className="text-white text-[13px]">
          <Link to={'/privacy-policy'}>Privacy Policy</Link></p>
      </div>
    </div>
  </div>
  )
}

export default Footer