import React, { useEffect, useState } from "react";
import { errorToast } from "../../toast";
import { getActivityAPI } from "../../api";

function SecondCard({handleActivityCount,userCardInputData,setUserCardInputData}) {

  const [activity, setActivity] = useState([]);

  useEffect(() => {
    fetchdata();
  }, []);


  const fetchdata = async () => {
    try {
      const response =  await getActivityAPI();
      const sortedActivities = response?.result?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      setActivity(sortedActivities);
    } catch (error) {
     console.error(error)
    }
  };


  const handleSubmit = (e)=>{
    e.preventDefault();
    handleActivityCount(3)
  }


  return (
    <div className="h-full w-full bg-transparent flex justify-center items-center">
      <form onSubmit={handleSubmit} className=" 650px:w-[508px] w-full p-[21px] 650px:h-[254px] h-fit rounded-[20px] bg-[#FFFFFF]">
        <h2 className="sf-medium text-[16px] text-[#666666] mb-[15px]">
          Cost Calculator
        </h2>
        <h1 className="sf-bold text-[25px] text-[#016EFF] mb-[15px]">
          Select your business activity
        </h1>
        <select
        onChange={(e)=>setUserCardInputData({...userCardInputData,activityID:e.target.value})}
          className="w-full border border-[#E4E4E4] mb-[15px] text-[#666666] h-[53px] px-4 rounded-[10px]"
          name=""
          id=""
          value={userCardInputData.activityID}
          required
        >
          <option value="">Select...</option>
          {
            activity && activity.map((item,index)=>(
              <option key={index} value={item._id}>{item?.name}</option>
            ))
          }
        </select>
        <div className="flex gap-3">
          <button
          onClick={()=>handleActivityCount(1)}
          className="w-full border border-[#FFDE59] bg-[#FFDE59] text-[#000] h-[53px] px-4 rounded-[10px] flex justify-center items-center">
            Close
          </button>
          <button type="submit"  className="w-full border border-[#016EFF] bg-[#016EFF] text-[#fff] h-[53px] px-4 rounded-[10px] flex justify-center items-center">
            Next
          </button>
        </div>
      </form>
    </div>
  );
}

export default SecondCard;
