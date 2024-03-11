import React from 'react'
import PlaceHolder from "../assets/placeholder/placeholder-image.png";
import Pic1 from "../assets/demo/22-presidential-penthouse-in-serenia-residences-the-palm-dubai 2.png";
import { FaBed } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FaBuilding } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { FaShareAlt } from "react-icons/fa";
// swipper
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';



function Cards() {

    const navigate = useNavigate();
  return (
        <div className="max-w-[361px] rounded-[20px] border ">
            <div className="w-full h-[221px] relative overflow-hidden rounded-[20px]">
                <Swiper cssMode={true}  style={{width:"100%",height:"100%",textAlign:"center"}} navigation={true} pagination={true} mousewheel={true} keyboard={true} modules={[Navigation, Pagination, Mousewheel, Keyboard]} className="mySwiper">
                    <SwiperSlide>
                        <img src={Pic1} className='w-full h-full object-contain' alt="Placeholder" />
                    </SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide>
                </Swiper>
                <div className=" absolute w-full flex justify-between  z-30 px-4 top-4 left-0 ">
                    <div className="  flex items-center  bg-[#000000] text-[#ffffff]  gap-2 h-[29px] justify-center w-44 rounded-md ">
                        <SlCalender/>
                        <p className='poppins font-semibold text-[10px]'>Hand Over Date : June 2025</p>
                    </div>
                    <div className="bg-[#ffffff] rounded-md w-8 h-8 flex justify-center items-center">
                        <FaShareAlt/>
                    </div>
                </div>

            </div>
            <div className="px-5 py-3 poppins-medium">
                <div className="text-[#545454] font-normal text-xs  flex justify-between items-center">
                    <p>Apartment</p>
                    <p className='flex gap-2 justify-center items-center'><FaBed color='#545454' size={18} /> <span className='font-normal text-[10px]'>1</span> </p>
                </div>
                <div className="poppins-semibold text-[#000000] text-xl mt-3">
                    <h1>Parkside Hills</h1>
                </div>
                <div className="poppins-semibold text-[#000000] text-base mt-3">
                    <h1 className='font-medium'>Starting from <span className='font-bold text-xl'>4M AED</span></h1>
                </div>
                
                <div className="flex items-center gap-1 mt-3">
                    <IoLocationSharp size={19} color='#545454'/>
                    <p className='font-normal poppins text-xs text-[#545454]'>Terra Nova, Arabian Ranches, Dubai</p>
                </div>
                <div className="flex items-center gap-1 mt-3">
                    <FaBuilding color='#545454' size={15}/>
                    <p className='font-semibold text-[10px] poppins'>Emaar Propreties</p>
                </div>

                <div className="mt-5 mb-2.5 flex gap-2">
                    <button onClick={()=>navigate('/admin/edit-property/1')}  className='flex-1 py-2.5 rounded font-semibold text-[10px] bg-[#D2D2D2] text-[#000000]' >Edit</button>
                    <button className='flex-1 py-2.5 rounded font-semibold text-[10px] bg-[#000000] text-[#ffffff]' >Delete</button>
                </div>
            </div>
        </div>
  )
}

export default Cards