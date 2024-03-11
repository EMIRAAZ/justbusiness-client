import React from 'react'
import { Link } from 'react-router-dom';
import ImageSVG from "../assets/logo/PropertysellerBlackLogo.svg"


// --------------------REACT-ICONS---------------------------------//
import { FaRegCircleUser } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";
import { FaBlogger, FaHome, FaRegBuilding, FaUsers } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
// --------------------REACT-ICONS---------------------------------//

function LefAdminPanel() {

    //-------------------------------STATES-----------------------//
    const [style,setStyle] = React.useState('')
    const [toggleView,setToggleView] = React.useState('hidden')
    //-------------------------------STATES-----------------------//

    //-------------------------------FUNCTIONS-----------------------//
    const closeSidebar = ()=>{
        setStyle('-translate-x-96 fixed  opacity-0 transition-all')
        setToggleView('block')
    }
    const openSideBar = ()=>{
        setStyle('')
        setToggleView('hidden')
    }
    //-------------------------------FUNCTIONS-----------------------//

  return (
    <>
    <div className={`${style} z-50 fixed md:overflow-clip overflow-scroll top-1 left-0 ease-out duration-1000 max-w-60 h-[99vh] rounded-e-[50px] bg-[#000000] text-white`}>
        <div className="pt-14 px-6">
            <img src={ImageSVG} alt="logo" className='w-44 h-12 object-contain'  />
        </div>
        <div className="flex justify-center items-center sf-medium flex-col">
            <div className="mt-12  ">
                <FaRegCircleUser size={50} />
            </div>
            <h1 className='text-center text-2xl pb-1.5'>Admin</h1>
            <h2 className='text-center text-sm pb-1.5'>Edit Profile</h2>
            <h3 className=' flex justify-center text-sm items-center gap-2'>Logout <MdLogout/></h3>
        </div> 
        <div className="flex justify-center text-[#ffffff] sf-medium pt-16 pb-12 px-4 ">
            <ul>
                <Link to={'/admin/dashboard'}>
                    <li className='flex transition-all duration-150 ease-in-out hover:scale-105  items-center gap-3  hover:bg-white hover:text-black py-4 px-6 rounded-lg' > <FaHome/> Dashboard</li>
                </Link>
                <Link to={'/admin/enquiries'}>
                    <li className='flex transition-all duration-150 ease-in-out hover:scale-105  items-center gap-3  hover:bg-white hover:text-black py-4 px-6 rounded-lg' > <FaUsers/> Enquiries</li>
                </Link>
                <Link to={'/admin/manage-properties'}>
                    <li className='flex transition-all duration-150 ease-in-out hover:scale-105  items-center gap-3  hover:bg-white hover:text-black py-4 px-6 rounded-lg' > <FaRegBuilding/> Manage Properties</li>
                </Link>
                <Link to={'/admin/manage-blog'}>
                    <li className='flex transition-all duration-150 ease-in-out hover:scale-105  items-center gap-3  hover:bg-white hover:text-black py-4 px-6 rounded-lg' > <FaBlogger/> Blog</li>
                </Link>
                <Link to={'/admin/manage-banner'}>
                    <li className='flex transition-all duration-150 ease-in-out hover:scale-105  items-center gap-3  hover:bg-white hover:text-black py-4 px-6 rounded-lg' > <FaBlogger/> Manage Banner</li>
                </Link>
            </ul>
        </div>
        <div onClick={closeSidebar} className="absolute right-6 top-4 cursor-pointer border rounded-3xl p-1 " title='close'>
            <IoCloseOutline   size={30} />
        </div>
    </div>
    <div onClick={openSideBar} title='open' className={`${toggleView} absolute left-0-10 top-5 border border-black rounded-3xl p-2 ms-3 hover:bg-black hover:text-white cursor-pointer`}>
        <RxHamburgerMenu  title='close' size={20} />
    </div>
    </>
  )
}

export default LefAdminPanel