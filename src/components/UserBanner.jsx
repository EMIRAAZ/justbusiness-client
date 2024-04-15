import React from "react";
import "./index.css";
import { Link, useNavigate } from "react-router-dom";
import { SectionBanner } from "../assets/images";
import "./index.css";
import { errorToast, successToast } from "../toast";
import { setError, setLoading } from "../features/authSlice";
import { deleteBanner } from "../api";
import { deleteBannerSuccess } from "../features/bannerSlice";
import { useDispatch } from "react-redux";

function UserBanner({
  bannerHeadline,
  bannerSubtext,
  buttonText,
  mainImgaeLink,
  _id,
  item,
  role,
  refresh,
  setRefresh
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    if (!id) return errorToast("Id Is Not Provided!");

    try {
      await deleteBanner(id);
      successToast("Successfully Deleted");
      setRefresh(!refresh);
    } catch (error) {
      if (error.response && error.response.data) {
        dispatch(setError(error.response.data.message));
        errorToast(error.response.data.message);
      } else {
        dispatch(setError("An error occurred during login."));
        errorToast("An error occurred during login.");
      }
    }
  };

  return (
    <>
      <div className="flex flex-col-reverse xl:flex-row my-4 bg-black rounded-[20px] h-[520px] xl:h-[223px] w-full overflow-hidden">
        <div className="xl:flex-1 px-10 pt-8 pb-3 h-full   text-white">
          <h1 className="poppins-semibold text-[30px]">
            {bannerHeadline && bannerHeadline.length > 27
              ? bannerHeadline.slice(0, 26) + "..."
              : bannerHeadline}
          </h1>
          <p className="mt-2 text-[14px] md:text-[18px] poppins-medium">
            {bannerSubtext && bannerSubtext.length > 108
              ? bannerSubtext.slice(0, 100) + "..."
              : bannerSubtext}
          </p>
          <button
            onClick={()=>navigate('/property-type/all')}
            className="mt-3 mb-3 poppins-semibold text-[13px] bg-white text-black px-6 py-3 rounded-[10px]"
          >
            {buttonText && buttonText.length > 19
              ? buttonText.slice(0, 19) + "..."
              : buttonText}
          </button>
        </div>
        <div className="w-full xl:flex-1 h-full lg:h-full relative">
          <div className="absolute z-50 h-full w-full xl:block hidden bg-left-from-banner "></div>
          <div className="absolute z-50 h-full w-full xl:hidden block bg-bottom-from-banner "></div>

          <img
            className="w-full h-full object-cover"
            src={mainImgaeLink}
            loading="lazy"
            alt="loading"
          />
        </div>
      </div>

      {role === "admin" && (
        <>
          <div className="mt-4 w-28 h-12 bg-[#000000] text-[#ffffff] hover:bg-[#666666] flex justify-center items-center rounded-[4px] cursor-pointer">
            <span
              onClick={() =>
                navigate(`/admin/edit-banner/${_id}`, { state: item })
              }
              className="poppins-semibold text-lg"
            >
              Edit
            </span>
          </div>
          <div className="mt-4 w-28 h-12 bg-[#000000] text-[#ffffff] hover:bg-[#666666] flex justify-center items-center rounded-[4px] cursor-pointer">
            <span
              onClick={() => {
                const status = confirm('Are you want to delete!')
                if(status){
                  handleDelete(`${_id}`)
                }
              }}
              className="poppins-semibold text-lg"
            >
              Delete
            </span>
          </div>
        </>
      )}
    </>
  );
}

export default UserBanner;
