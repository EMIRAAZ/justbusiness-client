import React from "react";

function ThirdCard({handleActivityCount,userCardInputData,setUserCardInputData}) {


  const handleSubmit = (e)=>{
    e.preventDefault();
    handleActivityCount(4)
  }


  return (
    <div className="h-full w-full bg-transparent flex justify-center items-center">
      <form onSubmit={handleSubmit} className=" 650px:w-[508px] w-full p-[21px] 650px:h-[254px] h-fit rounded-[20px] bg-[#FFFFFF]">
        <h2 className="sf-medium text-[16px] text-[#666666] mb-[15px]">
          Cost Calculator
        </h2>
        <h1 className="sf-bold text-[25px] text-[#016EFF] mb-[15px]">
          How Many Owners Will be Involved
        </h1>
        <input
          className="w-full border outline-none border-[#E4E4E4] mb-[15px] text-[#666666] h-[53px] px-4 rounded-[10px]"
          name="owners"
          onChange={(e)=>setUserCardInputData({...userCardInputData,owners:e.target.value})}
          id="owners"
          type="number"
          required
          value={userCardInputData.owners}
          placeholder="Your Answer..."
        />
          
        <div className="flex gap-3">
          <button 
          onClick={() => handleActivityCount(2)}
          className="w-full border border-[#FFDE59] bg-[#FFDE59] text-[#000] h-[53px] px-4 rounded-[10px] flex justify-center items-center">
            Previous
          </button>
          <button
            type="submit"
            className="w-full border border-[#016EFF] bg-[#016EFF] text-[#fff] h-[53px] px-4 rounded-[10px] flex justify-center items-center"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}

export default ThirdCard;
