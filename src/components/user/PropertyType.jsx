import React, { useEffect, useState } from "react";

import {Penthouse,Townhouse,Villa,Apartment} from "../../assets/images"
import { useNavigate } from "react-router-dom";
import { fetchPropertyTypeAPI, getPropertiesCounts } from "../../api";
import { errorToast } from "../../toast";
function PropertyType() {

    const [isLoading, setIsLoading] = useState();
    const [data, setData] = useState([]);
    const navigate = useNavigate([]);

    const fetchdata = async () => {
      try {
          setIsLoading(true)
        const response = await fetchPropertyTypeAPI();
        setData(response.result)
        setIsLoading(false)
      }  catch (error) {
          errorToast(error.response.data.message || error.message || 'An error occurred ')
          setIsLoading(false)
      }
    };


    React.useEffect(() => {
        fetchdata();
      }, []);

    
    
  return (
    <section>
      <h1 className="sf-medium sf-medium-600 justify-center items-center text-[33px] md:text-[50px] flex flex-col leading-8 md:leading-tight lg:flex-row gap-4">
        <span className="block text-center ">Availability Based on</span>
        <span className="block text-center text-[#666666]">Proprety Type</span>
      </h1>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 capitalize">
                   { data && data.map((item)=>{
                    return(
                        <div key={item.propertyType._id} onClick={()=>navigate(`/property-type/${item.propertyType.name}/${item.propertyType._id}`)} className="w-full cursor-pointer border border-[##D2D2D2] flex justify-center items-center  md:w-fit m-auto   p-4 rounded-[15px]">
                        <div className="poppins-medium w-full">
                            <img src={item.propertyType.mainImgaeLink} alt='loading' className="md:w-[250px] w-full object-cover h-[182px] rounded-t-[10px]" loading="lazy" />
                            <h1 className="mt-2 text-[25px]">{item.propertyType.name}</h1>
                            <p className="mt-2text-[15px] text-[#666666]">
                                <span className="me-1"> { item.counts } </span>
                                 New Projects Available</p>
                        </div>
                    </div>
                    )
                   }) }

                   
      </div>
    </section>
  );
}

export default PropertyType;
