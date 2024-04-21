import React, { useState } from "react";
import Header from "../../components/user/Header";
import Footer from "../../components/Footer";

import { BedIcon, SuccessLabel, TypeIcon } from "../../assets/images";
import { useNavigate, useParams } from "react-router-dom";
import { addingEnquiry, getProperties, getPropertyById } from "../../api";
import Placeholder from "../../assets/placeholder/placeholder-image.png";
import { SlCalender } from "react-icons/sl";
import {
  CameraSVGIcons,
  CloseSVG,
  LocationSVGIcons,
  BgBlackCLoseIcon,
  LeftSVGBlackIcon,
  RightSVGBlackIcon,
} from "../../assets/icons";
import PropertiesCard from "../../components/user/PropertiesCard";
import { errorToast } from "../../toast";
import Lazyloading from "../../components/Lazyloading/Lazyloading";

function UserViewProjects() {
  const [properties, setProperties] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [index, setIndex] = useState(0);
  const [isVisibleVideoScreenIs,setIsVisibleVideoScreenIs] = useState(true)
  const [toggleImagePoppup, setImageTogglePoppup] = useState(false);
  const [property, setProperty] = React.useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectImageOfIndex, setSelectImageOfIndex] = useState(0);

  React.useEffect(() => {
    setLoading(true);
    if (!id) {
      navigate("/all-projects");
    }
    fetchdata();
  }, [navigate]);

  const handleToggleImagePoppup = () => {
    setImageTogglePoppup(!toggleImagePoppup);
  };

  const fetchdata = async () => {
    try {
      const blogs = await getProperties();
      setProperties(blogs.result);
      const blog = await getPropertyById(id);
      setProperty(blog.result[0]);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error.message);
    }
  };

  const handlePrevious = () => {
    if (index === 0) {
      setIndex(0);
    } else {
      setIndex(index - 1);
    }
  };
  const handleNext = () => {
    if (property?.smallImage?.length - 1 === index) {
      setIndex(property?.smallImage?.length - 1);
    } else {
      setIndex(index + 1);
    }
  };

  const [modal, setModal] = React.useState(false);
  const [developerId, setDeveloperId] = React.useState("");
  const [successCLoseModal, setSuccessCLoseModal] = React.useState(false);
  const [number, setNumber] = React.useState("");
  const [name, setName] = React.useState("");
  const [property_id, setId] = React.useState("");

  const handleRegister = (id, deveId) => {
    setDeveloperId(deveId);
    setModal(true);
    setSuccessCLoseModal(false);
    setId(id);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      if (!name) return errorToast("Name is required");
      if (name.length < 3)
        return errorToast("Minimum three chracters mustbe entered");
      if (!number) return errorToast("Mobile number is required");
      if (number.length > 10)
        return errorToast("Mobile number is no morethan 10");
      if (number.length < 10) return errorToast("10 digits required");

      let data = {
        name,
        number,
      };

      if (!property_id) {
        data.propertyId = id;
      }

      if (property_id) {
        data.propertyId = property_id;
      }

      if (developerId) {
        data.developerId = developerId;
      }
      if (!developerId) {
        data.developerId = property.developerRef;
      }

      await addingEnquiry(data);

      setName("");
      setNumber("");
      setModal(false);
      setSuccessCLoseModal(true);
      setId("");
      setDeveloperId("");
      data("");
    } catch (error) {
      console.log(error.message);
    }
  };

  const closeRegister = () => {
    setModal(false);
    setSuccessCLoseModal(false);
    setId("");
  };

  const result = property?.propertyType?.map((i, index) => {
    return (
      <p key={i?._id}>
        {i.name} {property.propertyType?.length > index + 1 && ","}
      </p>
    );
  });

  return (
    <div className="relative">
      <div className="pt-2">
        <Header />
      </div>

      <>
        <section className=" mt-[24px]  px-[24px] w-full lg:px-[80px]">
          {/* image banner */}
          <div className=" h-fit md:flex md:h-[535px] md:gap-3">
            <div className="h-[318px] sm:h-full relative w-full flex-[60%]">
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
              <div className=" px-5 h-full  justify-between flex flex-col absolute top-0 left-0 w-full py-5 ">
                <div className="flex justify-between">
                  <div className="flex justify-center gap-3 items-center bg-black w-fit text-white px-3 py-2  rounded-[3px]">
                    <SlCalender />
                    <p className="poppins font-semibold text-[8px] lg:text-[10px]">
                      Hand Over Date : {property.handoverDate}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between">
                  <p
                    className="bg-white text-black rounded-full text-[16px] px-3 py-2 cursor-pointer active:opacity-75 "
                    onClick={handlePrevious}
                  >
                    <Lazyloading
                      src={LeftSVGBlackIcon}
                      alt={"left"}
                      className={""}
                    />
                  </p>
                  <p
                    className="bg-white text-black rounded-full text-[16px] px-3 py-2 cursor-pointer active:opacity-75 "
                    onClick={handleNext}
                  >
                    <Lazyloading
                      src={RightSVGBlackIcon}
                      alt={"right"}
                      className={""}
                    />
                  </p>
                </div>
                <div className="poppins font-semibold gap-2  flex items-center lg:justify-start justify-center ">
                  <div
                    onClick={handleToggleImagePoppup}
                    className=" lg:w-[150px] lg:flex-none cursor-pointer flex-1 flex justify-center items-center rounded-[5px] gap-2 bg-black px-6  py-2.5 text-white"
                  >
                    <img className="w-[16px] h-[14px]" src={CameraSVGIcons} />
                    <p className=" text-[8px]">
                      Show {property?.smallImage?.length} Photos
                    </p>
                  </div>
                  <div className="lg:w-[150px] lg:flex-none flex justify-center items-center rounded-md gap-2 flex-1 bg-black px-6  py-2.5 text-white">
                    <img className="w-[11px] h-[15px]" src={LocationSVGIcons} />
                    <p className="text-[8px] lg:text-[10px]">View On Map</p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" md:flex-col flex  justify-center gap-3  my-[25px] md:my-0 ">
              <img
                src={
                  property?.smallImage?.length - 1 > 1
                    ? index + 1 >= property?.smallImage?.length
                      ? Placeholder
                      : property?.smallImage[index + 1]?.image
                    : Placeholder
                }
                alt="loading"
                className=" h-[82px] sm:h-1/2 object-cover  w-[82px] sm:w-[280px] lg:w-[415px] rounded-[10px]"
                loading="lazy"
              />
              <img
                src={
                  property?.smallImage?.length > 2
                    ? index + 2 >= property?.smallImage?.length
                      ? Placeholder
                      : property?.smallImage[index + 2]?.image
                    : Placeholder
                }
                alt="loading"
                className=" h-[82px] sm:hidden   object-cover  w-[82px] sm:w-[280px]   rounded-[10px]"
                loading="lazy"
              />

              <iframe
                className=" hidden h-[82px] md:block object-cover lg:w-[415px]  w-[82px] sm:w-[280px] sm:h-1/2 rounded-[10px]"
                src={property.videoLink}
                frameBorder="0"
              ></iframe>
              {/* <iframe
                onClick={() => setIsVisibleVideoScreenIs(true)}
                className=" block md:hidden h-[82px] object-cover lg:w-[415px]  w-[82px] sm:w-[280px] sm:h-1/2 rounded-[10px]"
                src={property.videoLink}
                frameBorder="0"
              ></iframe> */}

         
            </div>
            {  isVisibleVideoScreenIs && <iframe
                
                className=" mb-6 block md:hidden h-[200px] object-cover   w-[100%] rounded-[10px]"
                src={property.videoLink}
                frameBorder="0"
              ></iframe>}
          </div>
          {/* image banner */}

          <div className="   poppins-medium lg:h-[200px] xl:mt-4 xl:h-[150px] mb-10 flex justify-start">
            <div className="w-full ">
              {/* property headline */}
              <h1 className="text-[30px] capitalize lg:text-[40px] lg:me-3 md:mt-5 font-medium ">
                {/* { property.propretyHeadline.length > 27 ? property.propretyHeadline.slice(0,27) :  property.propretyHeadline } */}
                {property?.propretyHeadline &&
                property?.propretyHeadline?.length > 27
                  ? property?.propretyHeadline?.slice(0, 27)
                  : property?.propretyHeadline}
              </h1>
              {/* property headline */}

              {/* starting price */}
              <h2 className="text-[20px] lg:text-[30px] poppins-medium">
                Starting From {""}
                <span className="poppins-semibold text-[30px] lg:text-[30px] font-bold ">
                  {property.price}
                </span>
              </h2>
              {/* starting price */}

              <div className="flex justify-around lg:justify-start lg:gap-20 mt-5 ">
                <div className="flex justify-center  items-center flex-col lg:flex-row gap-4">
                  <img
                    src={BedIcon}
                    className="w-[23px] h-[15px] "
                    alt="loading"
                    loading="lazy"
                  />
                  <span className="font-medium text-[10px] lg:text-[15px]">
                    Bedrooms : {property.beds}
                  </span>
                </div>
                <div className="flex justify-center items-center flex-col lg:flex-row gap-4">
                  <img
                    src={TypeIcon}
                    className="w-[19px] h-[15px] "
                    alt="loading"
                    loading="lazy"
                  />
                  <span className="capitalize font-medium flex gap-2 text-[10px] lg:text-[15px]">
                    <span>Type :</span>
                    <span className="flex gap-1"> {result}</span>
                  </span>
                </div>
              </div>

              <hr className="mt-3 mx-4 lg:my-6 max-w-[740px] lg:mx-0" />
            </div>

            {/* enquiries */}
            <div className="ms-auto sticky top-0 border lg:h-fit py-4  px-2 mt-4 rounded-[15px] flex-[30%] lg:flex-none lg:max-w-[400px]   hidden lg:block ">
              <form onSubmit={handleSubmit} className="sticky top-0">
                <h1 className="text-[30px] sf-medium text-center mb-3">
                  Register Your interest
                </h1>
                <input
                  type="text"
                  value={name}
                  name={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  className="w-full poppins font-normal mb-1 rounded-[10px] ps-4 outline-none py-4 text-[12px] border border-[#E4E4E4]"
                />
                <input
                  type="number"
                  value={number}
                  name={number}
                  onChange={(e) => setNumber(e.target.value)}
                  placeholder="Phone"
                  className="w-full poppins font-normal rounded-[10px] ps-4 outline-none py-4 text-[12px] border border-[#E4E4E4]"
                />
                <input
                  type="submit"
                  value={"Submit"}
                  placeholder="Name"
                  className="w-full poppins cursor-pointer sf-medium-600 rounded-[12px] bg-black text-white mt-2 outline-none py-4 text-[12px] border border-[#E4E4E4]"
                />
              </form>
            </div>
            {/* enquiries */}
          </div>

          <div className=" poppins-medium max-w-[740px]">
            <h1 className="sf-medium text-[25px] lg:text-[30px] my-3">
              Location
            </h1>

            {/* map */}
            <div className=" flex gap-7 items-center">
              <iframe
                src={property.googleMapLink}
                className="border-none w-[120px] h-[120px] rounded-full"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="text-[#545454] capitalize">
                <h1 className="text-black text-[16px] sf-medium">Address</h1>
                <p className="text-[12px] sf-medium">{property.address}</p>
                <p className="text-[12px] sf-medium">
                  City : {property?.cityInfo?.cityName}
                </p>
              </div>
            </div>
            {/* map */}
          </div>

          <hr className="mt-6 mb-4 max-w-[740px]" />

          {/* description */}
          <div className="max-w-[740px] poppins-medium ">
            <h1 className="sf-medium lg:text-[30px] text-[25px] my-3 text-black">
              Description
            </h1>

            <p className="flex sf-medium gap-7 text-[#545454] text-[16px] items-center">
              {property?.description}
            </p>
          </div>
          {/* description */}

          <hr className="mt-6 mb-4 max-w-[740px]" />

          {/* facilities and amentites */}
          <div className="max-w-[740px] capitalize">
            <h1 className="sf-medium text-black lg:text-[30px] text-[25px] mt-3 my-2">
              Facilities And Amenities
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-3 ">
              {property.facilities &&
                property.facilities.map((item) => {
                  return (
                    <div
                      key={item._id}
                      className="flex my-1 text-[14px] lg:text-[16px] gap-3 items-center"
                    >
                      <span className="w-3 h-3  rounded-full bg-[#545454] flex"></span>{" "}
                      {item.value}
                    </div>
                  );
                })}
            </div>
          </div>
          {/* facilities and amentites */}

          <hr className="mt-6 mb-4 max-w-[740px]" />

          {/* areas nearby */}
          <div className="poppins-medium max-w-[740px] capitalize ">
            <h1 className="lg:text-[30px] sf-medium text-[25px] text-black mt-3 my-2">
              Areas Nearby:
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 ">
              {property.areasNearBy &&
                property.areasNearBy.map((item) => {
                  return (
                    <div
                      key={item._id}
                      className="text-[18px] flex items-center gap-2 my-1"
                    >
                      <span className="w-3 h-3 rounded-full bg-[#545454] flex"></span>{" "}
                      {item.value}
                    </div>
                  );
                })}
            </div>
          </div>
          {/* areas nearby */}

          <hr className="mt-3 mb-4 max-w-[740px]" />

          {/* payment plan */}
          <div className=" poppins-medium max-w-[740px] capitalize">
            <h1 className=" lg:text-[30px] sf-medium text-[25px] mt-3 my-2 text-black">
              Payment Plan
            </h1>
            <div className="grid  grid-cols-1 md:grid-cols-2 md:gap-3">
              {property?.paymentPlan?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="mb-1 flex rounded-[10px] flex-col justify-center items-center text-white bg-black"
                  >
                    <p className="py-4 tlgtext-[16px]">{item?.value}</p>
                  </div>
                );
              })}
            </div>
          </div>
          {/* payment plan */}

          {/* enquiry form */}
          <div className="pt-4 pb-0 max-w-[740px] ">
            <form onSubmit={handleSubmit} className="">
              <h1 className="sf-medium lg:text-[30px] text-[25px] mt-3 my-2 text-black">
                Register Your interest
              </h1>
              <input
                type="text"
                placeholder="Name"
                value={name}
                name={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full poppins font-normal mb-1.5 rounded-[10px] ps-4 outline-none py-4 text-[12px] border border-[#E4E4E4]"
              />
              <input
                type="number"
                placeholder="Phone"
                name={number}
                onChange={(e) => setNumber(e.target.value)}
                className="w-full poppins font-normal rounded-[10px] ps-4 outline-none py-4 text-[12px] border border-[#E4E4E4]"
              />
              <input
                type="submit"
                value={"Submit"}
                placeholder="Name"
                className="w-full poppins sf-medium-600 rounded-[12px] bg-black text-white mt-2 outline-none py-4 text-[12px] border border-[#E4E4E4] cursor-pointer"
              />
            </form>
          </div>
          {/* enquiry form */}

          <hr className="mt-6 mb-4 max-w-[740px]" />

          <div className="pt-1 pb-0">
            <h1 className="sf-medium lg:font-bold lg:text-[40px] text-[25px] mt-0 my-0 text-black">
              Similar Projects
            </h1>
            <div className="flex flex-col justify-center items-center ">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 my-7 lg:grid-cols-3 ">
                {properties &&
                  properties.map((item, index) => {
                    if (index < 3) {
                      return (
                        <PropertiesCard
                          handleRegister={handleRegister}
                          navigate={navigate}
                          key={item?._id}
                          item={item}
                        />
                      );
                    }
                  })}
              </div>
            </div>
          </div>
        </section>

        {modal && (
          <div
            className="w-full h-screen z-50 fixed top-0  flex justify-center items-center left-0"
            style={{ background: "rgba(0,0,0,0.9" }}
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-[20px] py-7 max-w-[820px] w-[90%] lg:w-full   h-auto flex flex-col  bg-white px-8 "
            >
              <div className="justify-between w-ful flex text-[30px] mb-4 sf-medium ">
                <p>Register Your Interest</p>
                <p>
                  {" "}
                  <img
                    onClick={closeRegister}
                    src={CloseSVG}
                    alt="loading"
                    loading="lazy"
                    className="w-6 h-6 cursor-pointer"
                  />{" "}
                </p>
              </div>
              <input
                type="text"
                name={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className="mb-1 outline-none w-[100%] py-4 px-5  appearance-none border border-[#E4E4E4] text-xs poppins rounded-[10px]"
              />
              <input
                type="number"
                name={number}
                onChange={(e) => setNumber(e.target.value)}
                placeholder="Phone"
                className="outline-none w-[100%] py-4 px-5  appearance-none border border-[#E4E4E4] text-xs poppins rounded-[10px]"
              />
              <input
                type="submit"
                value={"Submit"}
                className="outline-none w-[100%] py-4 px-5  appearance-none border bg-black text-white mt-2 text-xs poppins rounded-[10px]"
              />
            </form>
          </div>
        )}

        {successCLoseModal && (
          <div
            className="w-full h-screen z-50 fixed top-0  flex justify-center items-center left-0"
            style={{ background: "rgba(0,0,0,0.9" }}
          >
            <div className="relative rounded-[20px] py-7 max-w-[820px] w-[90%] lg:w-full   h-auto flex flex-col  bg-white px-8  justify-center items-center ">
              <Lazyloading
                alt={"loading"}
                src={SuccessLabel}
                className={"w-[100px] object-contain"}
              />
              <p>
                <div className="" onClick={() => setSuccessCLoseModal(false)}>
                  <Lazyloading
                    className={"w-6 h-6 absolute right-8 top-6"}
                    src={CloseSVG}
                    alt={"loading"}
                  />
                </div>
              </p>
              <h1 className="text-[30px] poppins-semibold mt-4 ">
                Your Interest has Been Registered
              </h1>
              <h2 className="text-[18px]  poppins-medium mt-4">
                Our team will contact you shortly
              </h2>
            </div>
          </div>
        )}

        {toggleImagePoppup && (
          <div className="fixed bottom-0 w-full h-[100vh] z-[500] bg-white ">
            <h1
              onClick={handleToggleImagePoppup}
              className="absolute top-2 right-0 text-right me-5 pt-4 text-3xl"
            >
              <Lazyloading
                src={BgBlackCLoseIcon}
                alt={"close"}
                className={"w-[50px] h-[50px] cursor-pointer "}
              />
            </h1>
            <div className="h-screen flex-col flex justify-center items-center">
              <div className="w-[90%] h-[380px]  lg:md:w-[800px] lg:h-[500px] rounded-[20px] object-cover overflow-hidden flex">
                {property?.smallImage?.length > 0 && (
                  <img
                    src={property?.smallImage[selectImageOfIndex]?.image}
                    className="cursor-text w-full h-full object-cover "
                    alt=""
                  />
                )}
              </div>
              <div className="absolute w-[90%] bottom-5 flex gap-3 overflow-x-scroll sm:overflow-auto">
                {property?.smallImage?.map((item, index) => {
                  return (
                    <div
                      onClick={() => setSelectImageOfIndex(index)}
                      key={index}
                      className={`${
                        selectImageOfIndex === index ? "border" : ""
                      } cursor-pointer w-[150px] h-[80px] rounded-md overflow-hidden flex`}
                    >
                      <img
                        src={item?.image}
                        className="w-full h-full object-cover "
                        alt=""
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </>

      <Footer />

      <div className="sm:hidden bg-[#FFFFFF] border rounded-t-[20px] max-[430px]:px-5 fixed flex justify-center items-center z-50 text-[14px] bottom-[0px] h-[103px] w-full">
        <button
          onClick={() => handleRegister(property._id, property.developerId)}
          className="bg-black flex rounded-[7px] justify-center items-center max-w-[382px] w-full h-[53px] text-white"
        >
          Register Now
        </button>
      </div>
    </div>
  );
}

export default UserViewProjects;
