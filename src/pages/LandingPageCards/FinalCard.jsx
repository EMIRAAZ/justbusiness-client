import React, { useEffect, useState } from "react";
import { getActivityAPI } from "../../api";

function FinalCard({userCardInputData,setUserCardInputData,handleActivityCount}) {

    const [loading,setLoading] = useState(false)
    const [freeZone, setFreeZone] = useState("");
    const [mainLand, setMainLand] = useState("");

    useEffect(() => {
        setLoading(true)
        fetchdata();
      }, []);

      const fetchdata = async () => {
        try {
          const response =  await getActivityAPI();
          console.log(response,'response')
          const result = response?.result?.find((item) => item._id === userCardInputData?.activityID );
          setFreeZone(result.freezone)
          setMainLand(result.mainland)
          setUserCardInputData({
            activityID: "",
            owners: "",
            visa: "",
            officeSpace: "",
            BusinessName: "",
            website: "",
            name: "",
            number: "",
            email: "",
          })
          setLoading(false)
        } catch (error) {
         console.error(error)
         setLoading(false)
        }
      };

  return (
    <>
    
    {
        !loading && 

        <div className="h-full w-full bg-transparent flex justify-center items-center">
      <div
        className=" 650px:w-[508px] w-full p-[21px] 650px:h-fit h-fit rounded-[20px] bg-[#FFFFFF]"
      >
        <h2 className="sf-bold text-[30px] text-[#016EFF] mb-[15px]">
        Estimated Cost
        </h2>

        <h3 className="sf-bold mb-4 text-[26px] text-[#000000]">
        Free zone : <span className="sf-extrabold text-[#016EFF]">AED {freeZone}</span>
        </h3>
        <h3 className="sf-bold mb-2 text-[26px] text-[#000000]">
        Mainland : <span className="sf-extrabold text-[#016EFF]">AED {mainLand}</span>
        </h3>
       
       <div className="">
        <p className="text-[#016EFF] text-[18px] pb-1 sf-bold">Note</p>

        <ul className="list-disc ps-5" >
            <li className="text-[#666666] pb-1 text-[14px] poppins-medium">Prices presented are only approximates, For an accurate cost of your buiness incorporation, kindly get in touch with one of our Buiness Setup Advisors</li>
            <li className="text-[#666666] pb-1 text-[14px] poppins-medium">Prices may vary due to jurisdiction and/or governmental changes in fees</li>
            <li className="text-[#666666] pb-1 text-[14px] poppins-medium">prices do not include service fees</li>
        </ul>

        
       </div>
       
        <div className="flex gap-3 mt-2">
          <button
            onClick={() => handleActivityCount(1)}
            className=" border border-[#016EFF] ms-auto bg-[#016EFF] text-[#fff] h-[40px] w-[125px] rounded-[10px] flex justify-center items-center"
          >
            Done
          </button>
       
        </div>
      </div>
    </div>
    }
    </>
  );
}

export default FinalCard;
