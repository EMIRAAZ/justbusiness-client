import { FaBed } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FaBuilding } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { FaShareAlt } from "react-icons/fa";

// swipper
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import "./index.css"


// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { errorToast, successToast } from "../toast";
import { useDispatch } from "react-redux";
import {
  deletePropertySuccess,
  setError,
  setLoading,
} from "../features/propertiesSlice";
import { deleteProperties } from "../api";

function Cards({ item, refresh, setRefresh }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    if (!id) return errorToast("Id Is Not Provided!");

    try {
      dispatch(setLoading());
      await deleteProperties(id);
      dispatch(deletePropertySuccess());
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
    <div className="max-w-[361px] rounded-[20px] border ">
      <div className="w-full h-[221px] relative overflow-hidden rounded-[20px]">
        <Swiper
          cssMode={true}
          style={{ width: "100%", height: "100%", textAlign: "center" }}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          {item.mainImgaeLink && (
            <SwiperSlide >
              <img
                src={item.mainImgaeLink}
                className="w-full h-full object-cover"
                alt="Placeholder"
              />
            </SwiperSlide>
          )}
          {item.smallImage.map((item) => {
            return (
              <SwiperSlide key={item._id}>
                <img
                  src={item.image}
                  className="w-full h-full object-cover"
                  alt="Placeholder"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className=" absolute w-full flex justify-between  z-30 px-4 top-4 left-0 ">
          <div className="  flex items-center  bg-[#000000] text-[#ffffff]  h-[29px] justify-center gap-3 px-3 py-1 rounded-md ">
            <SlCalender />
            <p className="poppins font-semibold text-[10px]">
              Hand Over Date : {item.handoverDate}
            </p>
          </div>
          <div className="bg-[#ffffff] rounded-md w-8 h-8 flex justify-center items-center">
            <FaShareAlt />
          </div>
        </div>
      </div>
      <div className="px-5 py-3 poppins-medium">
        <div className="text-[#545454] font-normal text-xs  flex justify-between items-center">
          <p>{   item.propertyType && item.propertyType}
          </p>
          <p className="flex gap-2 justify-center items-center">
            <FaBed color="#545454" size={18} />{" "}
            <span className="font-normal text-[10px]">{item.beds}</span>{" "}
          </p>
        </div>
        <div className="poppins-semibold text-[#000000] text-xl mt-3">
          <h1>{ item.propretyHeadline &&  item.propretyHeadline.length > 55 ? String(item.propretyHeadline).toLocaleUpperCase().slice(0,56) + '...' : item.propretyHeadline }</h1>
        </div>
        <div className="poppins-semibold text-[#000000] text-base mt-3">
          <h1 className="font-medium">
            Starting from{" "}
            <span className="font-bold text-xl">{item.price}</span>
          </h1>
        </div>

        <div className="flex items-center gap-1 mt-3">
          <IoLocationSharp size={19} color="#545454" />
          <p className="font-normal poppins text-xs text-[#545454]">
            {" "}
            {item.address}
          </p>
        </div>
        <div className="flex items-center gap-1 mt-3">
          <FaBuilding color="#545454" size={15} />
          <p className="font-semibold text-[10px] poppins">{item.developerName}</p>
        </div>

        <div className="mt-5 mb-2.5 flex gap-2">
          <button
            onClick={() =>
              navigate(`/admin/edit-property/${item._id}`, { state: item })
            }
            className="flex-1 py-2.5 rounded font-semibold text-[10px] bg-[#D2D2D2] text-[#000000]"
          >
            Edit
          </button>
          <button
            className="flex-1 py-2.5 rounded font-semibold text-[10px] bg-[#000000] text-[#ffffff]"
            onClick={() => handleDelete(item._id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
