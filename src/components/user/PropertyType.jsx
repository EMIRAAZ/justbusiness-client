import React, { useEffect, useState } from "react";

import {Penthouse,Townhouse,Villa,Apartment} from "../../assets/images"
import { useNavigate } from "react-router-dom";
import { getPropertiesCounts } from "../../api";
function PropertyType() {

    const propertiesTypes = [
        {
            image:Apartment,
            title:'apartment',
            link:'apartment'
        },
        {
            image:Villa,
            title:'Villa',
            link:'villa'
        },
        {
            image:Townhouse,
            title:'Townhouse',
            link:'townhouse'
        },
        {
            image:Penthouse,
            title:'penthouse',
            link:'penthouse'

        },
    ]

    const [data,setData] = useState({})

    const navigate = useNavigate()

 

    React.useEffect(() => {
        fetchdata();
      }, []);
    
      const fetchdata = async () => {
        try {
          const response = await getPropertiesCounts();
          setData(response.result);
        } catch (error) {
          console.log(error.message);
        }
      };

    
  return (
    <section>
      <h1 className="sf-medium sf-medium-600 justify-center items-center text-[33px] md:text-[50px] flex flex-col leading-8 md:leading-tight lg:flex-row gap-4">
        <span className="block text-center ">Availability Based on</span>
        <span className="block text-center text-[#666666]">Proprety Type</span>
      </h1>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
                    <div  onClick={()=>navigate(`/property-type/${propertiesTypes[0].link}`)} className="w-full cursor-pointer border border-[##D2D2D2] flex justify-center items-center  md:w-fit m-auto   p-4 rounded-[15px]">
                        <div className="poppins-medium w-full">
                            <img src={propertiesTypes[0].image} alt='loading' className="md:w-[250px] w-full object-cover h-[182px] rounded-t-[10px]" loading="lazy" />
                            <h1 className="mt-2 text-[25px]">{propertiesTypes[0].title}</h1>
                            <p className="mt-2text-[15px] text-[#666666]">
                                <span className="me-1"> { data.apartment-1 < 0 ? 0 : data.apartment-1 } </span>
                                 New Projects Available</p>
                        </div>
                    </div>

                    <div  onClick={()=>navigate(`/property-type/${propertiesTypes[1].link}`)} className="w-full cursor-pointer border border-[##D2D2D2] flex justify-center items-center  md:w-fit m-auto   p-4 rounded-[15px]">
                        <div className="poppins-medium w-full">
                            <img src={propertiesTypes[1].image} alt='loading' className="md:w-[250px] w-full object-cover h-[182px] rounded-t-[10px]" loading="lazy" />
                            <h1 className="mt-2 text-[25px]">{propertiesTypes[1].title}</h1>
                            <p className="mt-2text-[15px] text-[#666666]">
                                <span className="me-1"> { data.villa-1 < 0 ? 0 : data.villa-1 } </span>
                                 New Projects Available</p>
                        </div>
                    </div>

                    <div  onClick={()=>navigate(`/property-type/${propertiesTypes[2].link}`)} className="w-full cursor-pointer border border-[##D2D2D2] flex justify-center items-center  md:w-fit m-auto   p-4 rounded-[15px]">
                        <div className="poppins-medium w-full">
                            <img src={propertiesTypes[2].image} alt='loading' className="md:w-[250px] w-full object-cover h-[182px] rounded-t-[10px]" loading="lazy" />
                            <h1 className="mt-2 text-[25px]">{propertiesTypes[2].title}</h1>
                            <p className="mt-2text-[15px] text-[#666666]">
                                <span className="me-1"> { data.townhouse-1 < 0 ? 0 : data.townhouse-1 } </span>
                                 New Projects Available</p>
                        </div>
                    </div>

                    <div  onClick={()=>navigate(`/property-type/${propertiesTypes[3].link}/`)} className="w-full cursor-pointer border border-[##D2D2D2] flex justify-center items-center  md:w-fit m-auto   p-4 rounded-[15px]">
                        <div className="poppins-medium w-full">
                            <img src={propertiesTypes[3].image} alt='loading' className="md:w-[250px] w-full object-cover h-[182px] rounded-t-[10px]" loading="lazy" />
                            <h1 className="mt-2 text-[25px]">{propertiesTypes[3].title}</h1>
                            <p className="mt-2text-[15px] text-[#666666]">
                                <span className="me-1"> { data.penthouse-1 < 0 ? 0 : data.penthouse-1 } </span>
                                 New Projects Available</p>
                        </div>
                    </div>
      </div>
    </section>
  );
}

export default PropertyType;
