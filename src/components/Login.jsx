import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { errorToast, successToast } from "../toast";
import { adminLoginAPI } from "../api";
import { ADMIN_ID, ADMIN_TOKEN } from "../api/localstorage-varibles";
import { LOGIED_ADMIN } from "../toast/messages";
import { ADMIN } from "../api/routes-names";
import { MAIL_REQUIRED, PASSWORD_REQUIRED } from "../lib/validation-messages";

function Login() {
  const [visible, setVisible] = React.useState("password");
  const [formdata, setFormdata] = React.useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = React.useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formdata.email) return errorToast(MAIL_REQUIRED);
    if (!formdata.password) return errorToast(PASSWORD_REQUIRED);
    try {
      setIsLoading(true);
      const user = await adminLoginAPI(formdata);
      localStorage.setItem(ADMIN_TOKEN, user?.token);
      localStorage.setItem(ADMIN_ID, user?.result?._id);
      successToast(LOGIED_ADMIN);
      setIsLoading(false);
      navigate(`/${ADMIN}`);
    } catch (error) {
      setIsLoading(false);
      errorToast(error.response.data.message || error.message);
    }
  };

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-2 md:mx-0">
      <div className="sf-medium font-medium text-center mb-10">
        <h1 className="text-[#016EFF] text-5xl ">Welcome Back Admin</h1>
        <p className=" text-sm text-[#666666] mt-1">
          Enter your credentials to access Admin Panel
        </p>
      </div>
      <div className="flex flex-col gap-2 mx-3">
        <label
          htmlFor="email"
          className="sf-medium font-medium text-sm text-[#000000]"
        >
          Email
        </label>
        <input
          disabled={isLoading}
          autoComplete="email"
          name="email"
          onChange={handleChange}
          value={formdata.email}
          type="email"
          id="email"
          placeholder="Enter your email"
          className="border border-[#E4E4E4] py-4 px-5 rounded-[10px] font-extralight sf-normal text-sm text-[#666666]  outline-none"
        />
      </div>
      <div className="relative flex flex-col gap-2 mt-3 mx-3">
        <label
          htmlFor="password"
          className="sf-medium font-medium text-sm text-[#000000]"
        >
          Password
        </label>
        <input
          disabled={isLoading}
          name="password"
          onChange={handleChange}
          value={formdata.password}
          autoComplete="current-password"
          type={visible}
          id="password"
          placeholder="Enter your Password"
          className="border border-[#E4E4E4] py-4 ps-5 pe-16 rounded-[10px] sf-normal text-sm text-[#666666]  outline-none"
        />
        <div className="absolute right-7   top-11">
          {visible === "password" ? (
            <FaEye size={20} onClick={() => setVisible("text")} />
          ) : (
            <FaEyeSlash size={20} onClick={() => setVisible("password")} />
          )}
        </div>
      </div>
      <div className="flex flex-row justify-between gap-2 mt-3 sf-normal font-extralight text-sm text-[#000000] mx-3">
        <div className="flex  items-center gap-2">
          <input required type="checkbox" name="checkbox" id="checkbox" />
          <label htmlFor="checkbox">Remember me</label>
        </div>
        <Link to={"/"}>
          <label htmlFor="password" className="cursor-pointer">
            Forgot Password
          </label>
        </Link>
      </div>
      <div className="mt-8 mx-3">
        <button
          type="submit"
          disabled={isLoading}
          className="rounded-[10px] bg-[#016EFF] sf-bold text-xl text-[#fff] text-center w-full py-6"
        >
          {isLoading ? "Loading..." : "Sign In"}
        </button>
      </div>
    </form>
  );
}

export default Login;
