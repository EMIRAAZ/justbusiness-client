import React from "react";
import "./index.css";

function FifthCard({ handleActivityCount,userCardInputData,setUserCardInputData }) {


  const handleSubmit = (e)=>{
    e.preventDefault();
    handleActivityCount(6)
  }

  return (
    <div className="h-full w-full bg-transparent flex justify-center items-center">
      <form onSubmit={handleSubmit} className=" 650px:w-[508px] w-full p-[21px] 650px:h-[254px] h-fit rounded-[20px] bg-[#FFFFFF]">
        <h2 className="sf-medium text-[16px] text-[#666666] mb-[15px]">
          Cost Calculator
        </h2>
        <h1 className="sf-bold text-[25px] text-[#016EFF] mb-[15px]">
          Do You Require Office Space
        </h1>
        <div className="radio-buttons-container flex justify-center items-center my-6">
          <div className="radio-button">
            <input
              name="radio-group"
              id="radio2"
              className="radio-button__input"
              type="radio"
              checked={userCardInputData.officeSpace === 'yes'}
              onChange={(e)=>setUserCardInputData({...userCardInputData,officeSpace:e.target.value})}
              value={'yes'}
              required
            />
            <label htmlFor="radio2" className="radio-button__label">
              <span className="radio-button__custom"></span>
              Yes
            </label>
          </div>
          <div className="radio-button">
            <input
              name="radio-group"
              id="radio1"
              className="radio-button__input"
              type="radio"
              checked={userCardInputData.officeSpace === 'no'}
              onChange={(e)=>setUserCardInputData({...userCardInputData,officeSpace:e.target.value})}
              value={'no'}
            />
            <label htmlFor="radio1" className="radio-button__label">
              <span className="radio-button__custom"></span>
              No
            </label>
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => handleActivityCount(4)}
            className="w-full border border-[#FFDE59] bg-[#FFDE59] text-[#000] h-[53px] px-4 rounded-[10px] flex justify-center items-center"
          >
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

export default FifthCard;
