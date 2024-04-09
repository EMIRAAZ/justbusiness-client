import React from "react";
import { getBannerLogos } from "../../api";
import { errorToast } from "../../toast";

function Brands() {

  const [data,setData] = React.useState([]);


  React.useEffect(()=>{
    fetchdata()
  },[])

  const fetchdata =async ()=>{
    try {
      const response = await getBannerLogos()
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
    <div className="justify-center lg:justify-start flex-wrap  mt-6 flex gap-3 items-center">
      {
        data && data.length > 0 && data.map((item)=>{
          return <div className="" key={item._id}>

            <img
              src={item?.mainImgaeLink}
              alt={"loading"}
              loading="lazy"
              className="max-w-32 my-3 lg:my-0 max-h-6"
            />
          </div>
        })
      }
    </div>
  );
}

export default Brands;
