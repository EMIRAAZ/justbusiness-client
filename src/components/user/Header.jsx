import React, { useEffect, useState } from "react";

import { SuccessLabel, WhiteLogo } from "../../assets/images/";
import BlackLogoForWhite from "../../assets/logo/PropertysellerBlackLogoForBgWhite.svg";
import { HamburgerSVG,HamburgBlackWhiteBg } from "../../assets/icons";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { fetchPropertyTypeAPI } from "../../api";

function Header() {
  const navigate = useNavigate();

  const { pathname } = useLocation();

  const [togggleButton, setToggleButton] = React.useState(false);

  const [data, setData] = useState([]);
  const [pathName, setPathName] = useState();

  const fetchdata = async () => {
    try {
      const response = await fetchPropertyTypeAPI();
      setData(response.result)
    }  catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {

    fetchdata();
  

    if (pathname === "/") {
      setPathName(true);
    } else {
      setPathName(false);
    }
  }, [pathname]);



  return (
    <>
      <div className={`flex justify-center`}>
        <header
          className={`${pathName ? " bg-black  " : "bg-white border  "} ${
            togggleButton && "fixed w-[90%] top-3 z-[300px]"
          } relative poppins-medium text-white flex justify-between md:w-[98%] w-[95%] px-7 h-20 items-center  rounded-[10px]`}
        >
          <img
            onClick={() => navigate("/")}
            className="cursor-pointer object-cover w-[195px] "
            src={pathName ? WhiteLogo : BlackLogoForWhite}
            alt=""
          />
          <ul
            className={`${
              pathName ? "text-white" : "text-black"
            } hidden md:flex`}
          >
            <li className="px-2 flex items-center capitalize">
              <Link to={"/"}>Home</Link>{" "}
              <span
                className={`ms-4 w-[1px] h-4 ${
                  pathName ? "bg-slate-50" : "bg-black"
                }  block`}
              ></span>
            </li>
            <li className="px-2 flex items-center">
              <Link to={"/about"}>About Us</Link>{" "}
              <span
                className={`ms-4 w-[1px] h-4 ${
                  pathName ? "bg-slate-50" : "bg-black"
                }  block`}
              ></span>
            </li>
            <li className="px-2 flex items-center">
              <Link to={"/blog"}>Blog</Link>{" "}
              <span
                className={`ms-4 w-[1px] h-4 ${
                  pathName ? "bg-slate-50" : "bg-black"
                }  block`}
              ></span>
            </li>
            {/* <li className="px-2 flex items-center">
              <Link to={"/property-type/apartment"}>Apartment</Link>{" "}
              <span
                className={`ms-4 w-[1px] h-4 ${
                  pathName ? "bg-slate-50" : "bg-black"
                }  block`}
              ></span>
            </li>
            <li className="px-2 flex items-center">
              <Link to={"/property-type/townhouse"}>Townhouse</Link>{" "}
              <span
                className={`ms-4 w-[1px] h-4 ${
                  pathName ? "bg-slate-50" : "bg-black"
                }  block`}
              ></span>
            </li> */}
            
            { data && data.map((item,index)=>{
              if(index < 4){

              return(
                <li key={item.propertyType._id} className="px-2 flex items-center">
              <Link className="capitalize" to={`/property-type/${item.propertyType.name}/${item.propertyType._id}`}>{item.propertyType.name}
              </Link>{" "}
             { index < 3 && <span
                className={`ms-4 w-[1px] h-4 ${
                  pathName ? "bg-slate-50" : "bg-black"
                }  block`}
              ></span>}
            </li>)
}
            }) }
          </ul>

          {togggleButton && (
            <ul className={`border-b border-l border-r poppins font-medium text-[15px] capitalize md:hidden flex flex-col ${pathName ? 'bg-black text-white' : 'bg-white text-black'} w-full absolute z-50 top-[60px] pt-5 pb-8   rounded-[10px] left-0 `}>
              <li className="px-2 mx-4 py-2.5 cursor-pointer flex items-start flex-col ">
                <Link to={"/"}>Home</Link>
                <span className={`w-full h-[2px] mt-3 ${pathName ? 'bg-white': 'bg-black'}`}></span>
              </li>
              <li className="px-2 mx-4 py-2.5 cursor-pointer flex items-start flex-col ">
                <Link to={"/about"}>About Us</Link>
                <span className={`w-full h-[2px] mt-3 ${pathName ? 'bg-white': 'bg-black'}`}></span>
              </li>
              <li className="px-2 mx-4 py-2.5 cursor-pointer flex items-start flex-col ">
                <Link to={"/blog"}>Blog</Link>
                <span className={`w-full h-[2px] mt-3 ${pathName ? 'bg-white': 'bg-black'}`}></span>
              </li>
              { data && data.map((item,index)=>{
              if(index < 4){

              return(
                <li key={item.propertyType._id} className="px-2 mx-4 py-2.5 cursor-pointer flex items-start flex-col ">
              <Link className="capitalize" to={`/property-type/${item.propertyType.name}/${item.propertyType._id}`}>{item.propertyType.name}
              </Link>{" "}
             { index < 3 && <span className={`w-full h-[2px] mt-3 ${pathName ? 'bg-white': 'bg-black'}`}></span>}
            </li>)
}
            }) }
              
            </ul>
          )}

          {!togggleButton && (
            <div
              className="flex md:hidden"
              onClick={() => setToggleButton(true)}
            >
              <img
                src={ pathName ? HamburgerSVG :  HamburgBlackWhiteBg }
                className="w-6 h-6 object-cover"
                alt="loading"
                loading="lazy"
              />
            </div>
          )}

          {togggleButton && (
            <div
              className="text-[60px] flex md:hidden"
              onClick={() => setToggleButton(false)}
            >
              <p className={`${pathName ? 'text-white' : 'text-black'}`}>&times;</p>
            </div>
          )}
        </header>
      </div>
      {/* <div className={`${ togggleButton && "h-screen fixed w-full z-10 top-0"}`} style={{background:'rgba(0,0,0,0.6)'}}></div> */}
    </>
  );
}

export default Header;
