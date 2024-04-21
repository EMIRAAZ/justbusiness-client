import React, { useEffect, useState } from "react";
import { Instagram } from "../icons";
import { Link } from "react-router-dom";
import Lazyloading from "./Lazyloading/Lazyloading";
import { FooterLogoTransparentWhiteLogo } from "../assets/images/index";
import { fetchPropertyTypeAPI } from "../api";

function Footer() {
  const [data, setData] = useState([]);

  const fetchdata = async () => {
    try {
      const response = await fetchPropertyTypeAPI();
      setData(response.result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div className="bg-black pb-6 px-7 sm:px-20 pt-8 sm:pt-20">
      <div className=" flex justify-between mb-8 flex-col sm:flex-row overflow-hidden">
        <div className="pb-6 sm:pb-0 flex justify-center items-center">
          {/* <img className=' object-contain w-full h-full bg-transparent' src="/assets/image/PropertysellerBlackLogo 22.svg" alt="" /> */}
          <Lazyloading
            alt={"loading"}
            src={FooterLogoTransparentWhiteLogo}
            className={" object-contain sm:min-w-[300px] ml-0 md:-ml-14"}
          />
          {/* <h1 className=' text-center sm:text-start text-[24px] font-bold font-["poppins"] leading-9 text-[#fff]'>
          PropertySeller.
        </h1> */}
        </div>
        <div className="flex capitalize justify-between items-center">
          <div className=" gap-4  items-center flex-row sm:flex">
            <Link to={"/"}>
              <p className="mb-3 sm:mb-0 text-white text-[10px] sm:text-[14px] border-0 sm:border-r border-solid border-white pe-3">
                Home
              </p>
            </Link>
            <Link to={"/about"}>
              <p className="mb-3 sm:mb-0 text-white text-[10px] sm:text-[14px] border-0 sm:border-r border-white pe-3">
                About Us
              </p>
            </Link>
            <Link to={"/blog"}>
              <p className="mb-3 sm:mb-0 text-white text-[10px] sm:text-[14px] border-0 sm:border-r border-white pe-3">
                Blog
              </p>
            </Link>
            {data &&
              data.map((item, index) => {
                if (index < 4) {
                  return (
                    <Link
                      key={item.propertyType._id}
                      to={`/property-type/${item.propertyType.name}/${item.propertyType._id}`}
                    >
                      <p className={`${index < 3 ? 'mb-3 sm:mb-0 text-white text-[10px] sm:text-[14px] border-0 sm:border-r border-white pe-3' : 'mb-3 sm:mb-0 text-white text-[10px] sm:text-[14px] border-0  border-white pe-3'} `}>
                        {item.propertyType.name}
                      </p>
                    </Link>
                  );
                }
              })}
            
           
          </div>
          <div className="flex gap-4 items-center sm:hidden me-5">
            <Instagram width="18" height="30" fill="#fff" />
            <span className="text-white text-[10px] sm:text-[14px] ">
              Follow Us
            </span>
          </div>
        </div>
      </div>
      <div className="">
        <hr className="bg-white" />
      </div>
      <div className="flex items-center justify-between mt-4 pb-0">
        <p className="text-white text-[10px] sm:text-[14px]">
          Copyright &#169; Propertyseller
        </p>
        <div className="hidden sm:flex gap-4 items-center">
          <div className="">
            <Instagram width="18" height="30" fill="#fff" />
          </div>
          <span className="text-white text-[13px]">Follow Us</span>
        </div>
        <div className="flex gap-3">
          <p className="text-white text-[10px] sm:text-[14px]">
            <Link to={"/terms-conditions "}>Terms of Use</Link>
          </p>
          <p className="text-white text-[10px] sm:text-[14px]">
            <Link to={"/privacy-policy"}>Privacy Policy</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
