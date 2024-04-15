import React, { useState } from "react";
import Header from "../../components/user/Header";
import Footer from "../../components/Footer";

import { BedIcon, TypeIcon } from "../../assets/images";
import { useNavigate, useParams } from "react-router-dom";
import { getProperties, getPropertyById } from "../../api";
import Placeholder from "../../assets/placeholder/placeholder-image.png";
import { SlCalender } from "react-icons/sl";
import { FaShareAlt } from "react-icons/fa";
import {CameraSVGIcons,LocationSVGIcons} from "../../assets/icons"
import PropertiesCard from "../../components/user/PropertiesCard";

function UserViewProjects() {
  const [properties, setProperties] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [index, setIndex] = useState(0);
  const [toggleImagePoppup, setImageTogglePoppup] = useState(false);
  const [property, setProperty] = React.useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectImageOfIndex, setSelectImageOfIndex] = useState(0);

  
  React.useEffect(() => {
    setLoading(true)
    if (!id) {
      navigate("/all-projects");
    }
    fetchdata();
  }, [navigate]);

  const handleToggleImagePoppup = ()=>{
    setImageTogglePoppup(!toggleImagePoppup)
  }

  const fetchdata = async () => {
    try {
      const blogs = await getProperties();
      setProperties(blogs.result);
      const blog = await getPropertyById(id);
      setProperty(blog.result[0]);
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error.message);
    }
  };

  const handlePrevious = () => {
    console.log(property?.smallImage?.length - 1);
    console.log(property?.smallImage?.length - 1 === index);
    if (index === 0) {
      setIndex(0);
    } else {
      setIndex(index - 1);
    }
  };
  const handleNext = () => {
    console.log(property?.smallImage?.length - 1);
    console.log(property?.smallImage?.length - 1 === index);
    if (property?.smallImage?.length - 1 === index) {
      setIndex(property?.smallImage?.length - 1);
    } else {
      setIndex(index + 1);
    }
  };

  return (
    <div>
      <Header />
      
      {
        loading === true ? 'loading' : (
          <>
          
          
         
        <section className="max-w-[1300px] w-full m-auto">
          <div className="poppins-medium mx-5 flex flex-col lg:flex-row justify-start my-4 lg:my-14 items-center md:mx-20 lg:mx-28">
            <div className="relative w-full pe-6 flex-[60%] h-[530px]">
              <img
                src={
                  property?.smallImage?.length > 0
                    ? property?.smallImage[index]?.image
                    : Placeholder
                }
                alt="loading"
                className="object-cover w-full h-full rounded-[20px]"
                loading="lazy"
              />
              <div className=" h-full  justify-between flex flex-col px-5 absolute top-0 left-0 w-full py-5 ">
                <div className="flex justify-between">
                  <div className="flex gap-3 items-center bg-black w-fit text-white px-3 py-2.5 rounded-md">
                    <SlCalender />
                    <p className="poppins font-semibold text-[10px]">
                      Hand Over Date : {property.handoverDate}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between pe-5">
                  <p className="bg-white text-black rounded-full px-2.5 py-1 cursor-pointer active:opacity-75 " onClick={handlePrevious}>&lt;</p>
                  <p className="bg-white text-black rounded-full px-2.5 py-1 cursor-pointer active:opacity-75 " onClick={handleNext}>&gt;</p>
                </div>
                <div className="flex gap-3">
                   <div onClick={handleToggleImagePoppup} className=" cursor-pointer flex justify-center items-center rounded-md gap-2 bg-black px-6  py-3 text-white">
                      <img src={CameraSVGIcons} />
                      <p className="text-[10px]">Show {property?.smallImage?.length} Photos</p>
                   </div>
                   <div className=" flex justify-center items-center rounded-md gap-2 bg-black px-8  py-3 text-white">
                      <img src={LocationSVGIcons} />
                      <p className="text-[10px]">View On Map</p>
                   </div>
                </div>
              </div>

            
            </div>
            <div className="w-full flex flex-row lg:flex-col justify-center my-5 flex-[30%] h-[530px] gap-3">
              <img
                src={
                  property?.smallImage?.length - 1 > 1
                    ? index + 1 >= property?.smallImage?.length
                      ? Placeholder
                      : property?.smallImage[index + 1]?.image
                    : Placeholder
                }
                alt="loading"
                className=" h-[120px] object-cover lg:block w-[150px] lg:w-full lg:h-full rounded-[20px]"
                loading="lazy"
              />

              <iframe
                className="h-[120px] w-[150px] lg:w-full lg:h-full rounded-[20px]"
                src={property.videoLink}
                frameBorder="0"
              ></iframe>
            </div>
          </div>
          <div className="poppins-medium mx-5 flex justify-center my-4 lg:my-14 items-center md:mx-20 lg:mx-28 ">
            <div className="flex-[60%]  ">
              <h1 className="text-[30px] mb-2 font-medium lg:text-[40px]">
                {property.propretyHeadline}
              </h1>
              <h2 className="text-[20px] font-medium lg:text-[30px] mb-7">
                Starting From {""}
                <span className="poppins-semibold text-[30px] font-bold lg:text-[40px]">
                  {property.price}
                </span>
              </h2>
              <div className="flex justify-around">
                <div className="flex justify-center items-center flex-col lg:flex-row gap-4">
                  <img
                    src={BedIcon}
                    className="w-6 "
                    alt="loading"
                    loading="lazy"
                  />
                  <span className="font-medium text-[11px] lg:text-[15px]">
                    Bedrooms : {property.beds}
                  </span>
                </div>
                <div className="flex justify-center items-center flex-col lg:flex-row gap-4">
                  <img
                    src={TypeIcon}
                    className="w-6 "
                    alt="loading"
                    loading="lazy"
                  />
                  <span className="font-medium text-[11px] lg:text-[15px]">
                    Type :{" "}
                    {property?.propertyType?.length > 0
                      ? property?.propertyType[0]
                      : property?.propertyType}
                  </span>
                </div>
              </div>
            </div>
            <div className="relative border py-4 px-2 rounded-[15px] flex-[30%] hidden lg:block ">
              <div className="sticky top-0">
                <h1 className="text-[30px] sf-medium text-center mb-3">
                  Register Your interest
                </h1>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full poppins font-normal mb-1 rounded-[10px] ps-4 outline-none py-4 text-[12px] border border-[#E4E4E4]"
                />
                <input
                  type="text"
                  placeholder="Phone"
                  className="w-full poppins font-normal rounded-[10px] ps-4 outline-none py-4 text-[12px] border border-[#E4E4E4]"
                />
                <input
                  type="submit"
                  value={"Submit"}
                  placeholder="Name"
                  className="w-full poppins sf-medium-600 rounded-[12px] bg-black text-white mt-2 outline-none py-4 text-[12px] border border-[#E4E4E4]"
                />
              </div>
            </div>
          </div>

          <div className=" poppins-medium mx-5 my-4 lg:my-14 items-center md:mx-20 lg:mx-28 ">
            <h1 className="sf-medium text-[25px] lg:text-[30px] mb-4">
              Location
            </h1>

            <div className="flex gap-7 items-center">
              <iframe
                src={property.googleMapLink}
                className="border-none w-40 h-40 rounded-full"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="text-[#545454]">
                <h1 className="lg:text-[25px] text-black text-[16px] sf-medium">
                  Address
                </h1>
                <p className="lg:text-[18px] text-[12px] sf-medium">
                  {property.address}
                </p>
                <p className="lg:text-[18px] text-[12px] sf-medium">
                  City : {property?.cityInfo?.cityName}
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-3xl poppins-medium mx-5 my-4 lg:my-14 items-center md:mx-20 lg:mx-28 ">
            <h1 className="mt-8 sf-medium text-[25px] lg:text-[30px] mb-4">
              Description
            </h1>

            <p className="flex gap-7 text-[#545454] text-[16px] font-normal items-center">
              {property?.description}
            </p>
          </div>

          <div className="max-w-[680px] poppins-medium mx-5 my-4 lg:my-14 items-center md:mx-20 lg:mx-28 ">
            <h1 className="mt-8 sf-medium text-[25px] lg:text-[30px] mb-4">
              Facilities And Amenities
            </h1>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 xl:grid-cols-4">
              {property.facilities &&
                property.facilities.map((item) => {
                  return (
                    <div key={item._id} className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-black flex"></span>{" "}
                      {item.value}
                    </div>
                  );
                })}
            </div>
          </div>

          <div className="max-w-[680px] poppins-medium mx-5 mt-2 my-4 lg:my-14 items-center md:mx-20 lg:mx-28 ">
            <h1 className="mt-8 sf-medium text-[25px] lg:text-[30px] mb-4">
              Areas Nearby:
            </h1>
            <div className="grid grid-cols-2  gap-3 xl:grid-cols-2">
              {property.areasNearBy &&
                property.areasNearBy.map((item) => {
                  return (
                    <div key={item._id} className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-black flex"></span>{" "}
                      {item.value}
                    </div>
                  );
                })}
            </div>
          </div>

          <div className="max-w-[1300px]  lg:w-[800px] poppins-medium mx-5 my-4 lg:my-14 items-center md:mx-20 lg:mx-28 ">
            <h1 className="sf-medium text-[30px] mb-4">Payment Plan</h1>
            <div className="grid  lg:grid-cols-2">
              {property?.paymentPlan?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="mb-3 m-1 lg:mb-0 flex ms-0 lg:ms-3 rounded-[10px] flex-col justify-center items-center text-white bg-black"
                  >
                    <p className="py-4">{item?.value}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="max-w-[1300px] border py-4 lg:w-[800px] px-2 rounded-[15px] flex-[30%] lg:block mx-5 my-4 lg:my-14 items-center md:mx-20 lg:mx-28 ">
            <div className="">
              <h1 className="text-[30px] sf-medium text-center mb-3">
                Register Your interest
              </h1>
              <input
                type="text"
                placeholder="Name"
                className="w-full poppins font-normal mb-1 rounded-[10px] ps-4 outline-none py-4 text-[12px] border border-[#E4E4E4]"
              />
              <input
                type="text"
                placeholder="Name"
                className="w-full poppins font-normal rounded-[10px] ps-4 outline-none py-4 text-[12px] border border-[#E4E4E4]"
              />
              <input
                type="submit"
                value={"Submit"}
                placeholder="Name"
                className="w-full poppins sf-medium-600 rounded-[12px] bg-black text-white mt-2 outline-none py-4 text-[12px] border border-[#E4E4E4]"
              />
            </div>
          </div>


          <div className="max-w-[1300px] py-4 lg:w-full my-4 lg:my-14    ">
            <h1 className="sf-bold text-[30px] lg:leading-tight lg:text-[40px] my-2 md:mx-20 lg:mx-28">Similar Projects</h1>
            <div className="mx-5 flex flex-col justify-center items-center md:mx-20 lg:mx-28 ">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2 my-10 max-w-[1300px]">
              {properties &&
                properties.map((item, index) => {
                  if (index < 3) {
                    return <PropertiesCard navigate={navigate} key={item?._id} item={item} />;
                  }
                })}
            </div>
          </div>
          </div>

          
        </section>



        
      


              { toggleImagePoppup && <div className="fixed top-0 left-0 ri w-full h-full " style={{background:"rgba(0,0,0,0.9)"}}>
                <h1 onClick={handleToggleImagePoppup} className="absolute top-4 right-3 text-white text-right me-10 pt-4 text-3xl">&times;</h1>
                  <div className="h-screen flex-col flex justify-center items-center">
                    <div className="w-[90%]  md:w-[600px] h-[350px] rounded-md overflow-hidden flex">
                      { property?.smallImage?.length >0 && <img src={property?.smallImage[selectImageOfIndex]?.image} className="cursor-text w-full h-full object-cover " alt="" />}
                    </div>
                    <div className="absolute bottom-5 flex gap-3 overflow-x-scroll sm:overflow-auto">
                        { property?.smallImage?.map((item,index)=>{
                           return <div onClick={()=>setSelectImageOfIndex(index)} key={index} className={`${selectImageOfIndex === index ? 'border' : ''} cursor-pointer w-[150px] h-[80px] rounded-md overflow-hidden flex`}>
                            <img src={item?.image} className="w-full h-full object-cover " alt="" />
                          </div>
                        }) }

                    </div>
                    
                  </div>
              </div>}

              </>
        )
      }




      <Footer />
    </div>
  );
}

export default UserViewProjects;
