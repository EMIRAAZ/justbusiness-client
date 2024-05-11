import React from "react";
import { MAIN_IMAG_URL } from "../../api";
import { useNavigate } from "react-router-dom";
import "./blog-description.css";
import Lazyloading from "../Lazyloading/Lazyloading";
function MobileBlog({ item, admin, handleDeleteClick, editUrl, readMoreUrl }) {
  const navigate = useNavigate();

  const handleEditClick = () => navigate(editUrl);
  const handleReadMore = () => navigate(readMoreUrl);

  return (
    <div className="w-full flex h-[201px]  p-3 gap-3 rounded-[15px] border ">
      <div className="rounded-[10px] overflow-hidden flex-[45%] ">
        <Lazyloading
          title={item.blogTitle}
          src={`${MAIN_IMAG_URL}/${item.mainImgaeLink}`}
          className=" w-full rounded-[10px] h-full object-cover"
          alt={item.blogTitle}
        />
      </div>
      <div className="flex-[55%] flex flex-col justify-between py-3 overflow-hidden rounded-[10px] ">
        <span className=" block text-[18px] text-[#F7B519] poppins-bold">
          {item.categoryName || "Events"}
        </span>

        <h1
          onClick={handleReadMore}
          className={`hover:underline w-full poppins-semibold text-[18px]  `}
          style={{ textOverflow: "ellipsis" }}
        >
          {item.blogTitle}
        </h1>
      </div>
    </div>
  );
}

export default MobileBlog;
