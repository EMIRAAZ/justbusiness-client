import { useEffect, useState } from 'react'
import { deleteBanner, deleteBannerLogo, getBannerLogos } from '../api';
import { errorToast } from '../toast';
import { BrandNameAZIAZI, BrandNameDAMAC, BrandNameEMIRAZZ, BrandNameNAKHEEL } from '../assets/images';
import { Navigate, useNavigate } from 'react-router-dom';

function ViewBannerClient() {

  const [refresh,setRefresh] = useState(true);
  const [data,setData] = useState([]);

  const navigate = useNavigate();

  useEffect(()=>{
    fetchdata()
  },[refresh])

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


    const handleDelete = async (id) => {
      if (!id) return errorToast("Id Is Not Provided!");
  
      try {
        await deleteBannerLogo(id);
        setRefresh(!refresh);
      } catch (error) {
        if (error.response && error.response.data) {
          errorToast(error.response.data.message);
        } else {
          errorToast("An error occurred during login.");
        }
      }
    };

  return (
    <div>
      <div className="">
        <div className="sticky top-0 bg-white flex justify-between py-6">
          <h1 className="sf-medium  font-medium text-5xl">VIews</h1>
        </div>
        {
        <div className="flex gap-3 flex-wrap justify-center items-center">
          {
            data.map((item)=>{
              return(
                <div className="" key={item._id}>
                  <img className="w-[300px] h-[150px]   my-3 lg:my-0 object-contain" src={item.mainImgaeLink} key={item._id} alt="loading" loading='lazy' />
                  <a
                   onClick={() =>
                    navigate(`/admin/edit-banner-client/${item._id}`, {
                      state: item,
                    })
                  }
                  className=" me-4 cursor-pointer text-xs  hover:underline font-medium"
                >
                  Edit
                </a>
                  <a
                  onClick={() => handleDelete(item._id)}
                  className="cursor-pointer text-xs  hover:underline font-medium"
                >
                  Delete
                </a>
                </div>
              )
            })
          }
        </div>
        }
       
     

      </div>
    </div>
  )
}

export default ViewBannerClient