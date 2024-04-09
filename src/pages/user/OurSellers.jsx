import Header from "../../components/user/Header";
import Footer from "../../components/Footer";

import {OurSellerSVG} from "../../assets/images"
import React from "react";
import { getClientLogos } from "../../api";
import { errorToast } from "../../toast";

function OurSellers() {

  const [data,setData] = React.useState([]);


  React.useEffect(()=>{
    fetchdata()
  },[])

  const fetchdata =async ()=>{
    try {
      const response = await getClientLogos()
      setData(response.result)

    } catch (error) {
      if (error.response && error.response.data) {
        errorToast(error.response.data.message)
      } else {
        errorToast('An error occurred during login.');
      }
    }
    }

  return (
    <div className="w-full">
      <div className="mt-2">
        <Header />
      </div>
      <section className="max-w-[1330px] w-full m-auto">
        <section className="relative lg:w-[100%] w-[97%] m-auto rounded-[10px] overflow-hidden mt-2 h-[170px] ">
          <img src={OurSellerSVG} className="w-full h-full object-cover" />
          <div className="flex w-full justify-center  items-center h-full absolute top-0 left-0 ">
            <h1 className=" text-white sf-medium-600 text-[45px] lg:text-[70px] ">
              Our Sellers
            </h1>
          </div>
        </section>
        <div className="mx-5 flex flex-col justify-center my-4 lg:my-14 items-center md:mx-20 lg:mx-28 ">
          <section className=" gap-3 flex justify-center items-center flex-wrap mx-10 ">
            
              {
                data && data.length > 0 && data.map((item)=>{
                  return <div className="lg:w-[200px] max-w-[150px] my-5 lg:my-0 py-10 lg:py-0 h-[180px] rounded-[15px] flex justify-center items-center px-5 border max-h-[100px] lg:max-w-[200px] lg:max-h-[180px]" key={item._id}>
                      <img src={item?.mainImgaeLink} alt="loading" />
                  </div>
                })
              }
            
           
          </section>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default OurSellers;
