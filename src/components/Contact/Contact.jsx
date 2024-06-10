import React, { useRef, useState } from "react";
import Button from "../Button/Button";
import "./index.css";
import {
  TypographyEight,
  TypographyFifteen,
  TypographyOne,
  TypographySeventeen,
  TypographyThree,
  TypographyTwenty,
  TypographyTwentyOne,
  TypographyTwentyTwo,
} from "../../styles";
import { CiPhone } from "react-icons/ci";
import { errorToast, successToast } from "../../toast";
import { contactUsAPI } from "../../api";

function Contact() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const secondRegisterNumberRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!name) return errorToast("Name is required");
      if (!email) return errorToast("Mail is required");
      if (name.length < 3)
        return errorToast("Minimum three chracters mustbe entered");
      if (!number) return errorToast("Mobile number is required");
      if (number.length > 20)
        return errorToast("Mobile number is no morethan 20");
      if (number.length < 10) return errorToast("10 digits required");
      if (!message) return errorToast("Message is required");
      if (message.length < 3)
        return errorToast("Message minimum three chracters mustbe entered");

      let data = {
        message,
        name,
        email,
        number,
      };
      await contactUsAPI(data);

      setMessage("");
      setName("");
      setEmail("");
      setNumber("");
      successToast("Successfully Submited");
      secondRegisterNumberRef.current.value = "";
    } catch (error) {
      errorToast(
        error.response.data.message ||
          error.message ||
          "An error occurred during login."
      );
    }
  };

  const validateNumber = (e) => {
    const regex = /^\+\d{1,3}\d{1,16}$/;
    console.log(regex.test(e));

    if (!regex.test(e)) {
      // Display a validation error or handle invalid input
      console.error("Invalid phone number format.");
    } else {
      setNumber(e);
    }
  };

  return (
    <div className="text-white h-fit 650px:h-[500px]  contact rounded-[20px] overflow-hidden">
      <div className="contact-overlap flex flex-col 650px:flex-row px-[24px] 650px:px-[50px] py-[24px] 650px:py-[50px] w-full h-full">
        <div className="650px:w-1/2 flex justify-between flex-col">
          <h2 className={`${TypographyTwentyOne}`}>Hey There</h2>
          <div className="">
            <h1
              className={`contact-main-title text-[30px] font-bold 650px:text-[41px] sf-medium-600 leading-[35.8px] 650px:leading-[48.93px] mb-[6px]`}
            >
              We&apos;d Love To Hear From
            </h1>
            <h1
              className={`${TypographyTwentyTwo} mb-[6px] 650px:mb-[12px] text-[#016EFF]`}
            >
              You
            </h1>
            <p className={`${TypographyTwenty} mb-[14px]`}>
              Want to know more About our Services? <br /> Send us a message and
              we’ll respond as soon as possible
            </p>
          </div>
          <div className="w-[190px] hidden 650px:block">
            <div className="text-white gap-2 flex items-center justify-center">
              <CiPhone color="#fff" fill="#fff" size={28} className="" />
              <label htmlFor="" className="font-bold text-[16px] sf-bold">
                +971 930459345 45
              </label>
            </div>
            <div className=" mt-2 text-white gap-2 flex items-center justify-center">
              <CiPhone color="#fff" fill="#fff" size={28} className="" />
              <label htmlFor="" className="font-bold text-[16px] sf-bold">
                +971 930459345 45
              </label>
            </div>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="form-bg 650px:w-1/2 text-[#000000] 650px:h-[403px] p-[25px] rounded-[20px] w-[100%]"
        >
          <h1 className={`${TypographyTwentyTwo}  text-[#000000]`}>Reach Us</h1>
          <div
            className={`flex w-full gap-[12px]  poppins-medium text-[15px] leading-[22.5px]`}
          >
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className=" w-1/2 placeholder:text-black bg-transparent border-b-2 outline-none py-3 px-3 border-black"
              placeholder="Name"
              required
            />

            <input
              type="tel"
              pattern="^\+\d{1,3}\d{1,16}$"
              maxLength="20"
              ref={secondRegisterNumberRef}
              onChange={(e) => validateNumber(e.target.value)}
              title="Please enter a valid mobile number with country code. E.g., +1234567890. Maximum length: 20 characters."
              className=" w-1/2 placeholder:text-black bg-transparent border-b-2 outline-none py-3 px-3 border-black"
              placeholder="Number"
              required
            />
          </div>
          <div
            className={`mt-[5px] flex w-full gap-[12px]  poppins-medium text-[15px] leading-[22.5px]`}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className=" w-full placeholder:text-black bg-transparent border-b-2 outline-none py-3 px-3 border-black"
              placeholder="Email"
              required
            />
          </div>

          <div
            className={`mt-[5px] flex w-full gap-[12px]  poppins-medium text-[15px] leading-[22.5px]`}
          >
            <textarea
              name=""
              className="650px:h-[150px] w-full placeholder:text-black bg-transparent border-b-2 outline-none py-3 px-3 border-black"
              id=""
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              cols="30"
              rows="5"
              required
            ></textarea>
          </div>
          <Button
            type="submit"
            value={"Message"}
            className={`${TypographyFifteen} mt-[24px] w-[103px] h-[37px] rounded-[5px] bg-[#FFDE59]`}
          />
        </form>
      </div>
    </div>
  );
}

export default Contact;
