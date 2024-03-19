import { useEffect, useState } from "react";
import { getEnquiries } from "../api";
import { errorToast } from "../toast";

function RecentEnquiries() {

  const [properties,setProprties] = useState([])

  useEffect(()=>{
    fetchdata()
  },[])

  const fetchdata =async ()=>{
    try {
      const response = await getEnquiries()
      setProprties(response.result)
    } catch (error) {
      if (error.response && error.response.data) {
        errorToast(error.response.data.message)
      } else {
        errorToast('An error occurred during login.');
      }
    }
    }

  return (
    <div className=" md:h-[65vh] overflow-scroll md:overflow-scroll">
      <table className="w-full">
        <thead className="sticky top-0 bg-white">
          <tr>
            <th className="p-3 text-[23px] poppins-semibold">ID</th>
            <th className="p-3 text-[23px] poppins-semibold">Name</th>
            <th className="p-3 text-[23px] poppins-semibold">Phone</th>
            <th className="p-3 text-[23px] poppins-semibold">Proprety</th>
            <th className="p-3 text-[23px] poppins-semibold"></th>
          </tr>
        </thead>
        <tbody className="text-center ">
          {
            properties?.map((item)=> {
             return (  <tr key={item._id} className="bg-transparent hover:bg-[#EBEBEB]"> 
                <td className="p-3 poppins-medium text-[14px] ">1</td>
                <td className="p-3 poppins-medium text-[14px] ">{item?.name}</td>
                <td className="p-3 poppins-medium text-[14px] ">{item?.number}</td>
                <td className="p-3 poppins-medium text-[14px] ">{item?.propertyInfo?.propretyHeadline}</td>
                <td className="p-3 poppins-medium text-xs ">
                  <div className="w-36 h-7 bg-[#000000] text-[#ffffff] hover:bg-[#666666] flex justify-center items-center rounded-[4px] cursor-pointer">
                    <span>Checked</span>
                  </div>
                </td>
            </tr>)
            }
            )
          }
        </tbody>
      </table>
    </div>
  );
}

export default RecentEnquiries;
