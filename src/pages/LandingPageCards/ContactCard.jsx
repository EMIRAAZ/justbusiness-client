import React from "react";
import "./index.css";
import { errorToast, successToast } from "../../toast";
import { addingEnquiry } from "../../api";

function ContactCArd({ handleActivityCount,userCardInputData,setUserCardInputData }) {

  const handleSubmit = async(e)=>{
    e.preventDefault();
    const value = userCardInputData.number;
    if (!value) return errorToast("Mobile number is required");
    if (value.length > 20){
      return errorToast("Mobile number is no morethan 20");
    }
    if (value.length < 10) return errorToast("10 digits required");

    try {
      await addingEnquiry(userCardInputData)
      handleActivityCount(9)
      
      successToast("Successfully Complited");
    } catch (error) {
      errorToast(
        error.response.data.message ||
          error.message ||
          "An error occurred during login."
      );
    }

  }



  // const handleNumber = (e)=>{
  //   const value = e.target.value;
  //   const regex = /^\+\d{1,3}\d{1,16}$/;
  //   if (!regex.test(value)) {
  //     // Display a validation error or handle invalid input
  //     console.error("Invalid phone number format.");
  //   } else {
  //     setUserCardInputData({...userCardInputData,number:value})
  //   }
  // }

  return (
    <div className="h-full w-full bg-transparent flex justify-center items-center">
      <form onSubmit={handleSubmit} className=" 650px:w-[508px] w-full p-[21px] 650px:h-fit h-fit rounded-[20px] bg-[#FFFFFF]">
        <h2 className="sf-medium text-[16px] text-[#666666] mb-[15px]">
          Cost Calculator
        </h2>
        <h1 className="sf-bold text-[25px] text-[#016EFF] mb-[15px]">
            Enter your Contact Details
        </h1>
          
        <div className="">
          <label htmlFor="name" className="text-[14px] poppins-medium  text-[#666666]">Name</label>
        <input
          className="w-full border mt-2 outline-none border-[#E4E4E4]  text-[#666666] h-[53px] px-4 rounded-[10px]"
          name="name"
          onChange={(e)=>setUserCardInputData({...userCardInputData,name:e.target.value})}
          value={userCardInputData.name}
          id="name"
          type="text"
          placeholder="Name"
          required
        />
        </div>

        <div className="">
          <label htmlFor="" className="text-[14px] poppins-medium text-[#666666]">Number</label>
        <input
          className="w-full mt-2 border outline-none border-[#E4E4E4] mb-[15px] text-[#666666] h-[53px] px-4 rounded-[10px]"
          name="number"
          id="number"
          onChange={(e)=>setUserCardInputData({...userCardInputData,number:e.target.value})}

          // onChange={(e)=>handleNumber(e.target.value)}
          value={userCardInputData.number}
          type="number"
          required
          placeholder="Mobile No."
        />
        </div>

        <div className="">
          <label htmlFor="" className="text-[14px] poppins-medium text-[#666666]">Email</label>
        <input
          className="w-full border outline-none border-[#E4E4E4] mb-5 text-[#666666] h-[53px] px-4 rounded-[10px]"
          name="email"
          id="email"
          required
          onChange={(e)=>setUserCardInputData({...userCardInputData,email:e.target.value})}
          value={userCardInputData.email}
          type="email"
          placeholder="Mail ID"
        />
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => handleActivityCount(7)}
            className="w-full border border-[#FFDE59] bg-[#FFDE59] text-[#000] h-[53px] px-4 rounded-[10px] flex justify-center items-center"
          >
            Previous
          </button>
          <button
            type="submit"
            className="w-full border border-[#016EFF] bg-[#016EFF] text-[#fff] h-[53px] px-4 rounded-[10px] flex justify-center items-center"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactCArd;
