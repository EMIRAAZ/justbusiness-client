import React from "react";
import { MAIN_IMAG_URL } from "../../api";
import { useNavigate } from "react-router-dom";
import "./blog-description.css";
import Lazyloading from "../Lazyloading/Lazyloading";
function Blog({ item, admin, handleDeleteClick, editUrl, readMoreUrl }) {
  const navigate = useNavigate();

  const handleEditClick = () => navigate(editUrl);
  const handleReadMore = () => navigate(readMoreUrl);

  return (
    <div className="w-full  sm:w-[360px] h-[466] rounded-[15px] border py-[24px] px-[15px]">
      <div className="w-full h-48 rounded-[10px] overflow-hidden">
        <Lazyloading
        title={item.blogTitle}
          src={`${MAIN_IMAG_URL}/${item.mainImgaeLink}`}
          className=" w-full h-full object-cover"
          alt={item.blogTitle}
        />
      </div>
      {!admin && (
        <div className="mt-3">
          <span title={item.categoryName} className="text-[18px] text-[#F7B519] font-bold">
            {item.categoryName || "Events"}
          </span>
        </div>
      )}
      <div className="overflow-hidden w-full poppins-medium text-2xl mt-2">
        <h1
          className={`overflow-hidden w-full whitespace-nowrap  ${
            admin && "text-[#F7B519]"
          }`}
          style={{ textOverflow: "ellipsis" }}
          title={item.blogTitle}
        >
          {item.blogTitle}
        </h1>
      </div>
      <div className="poppins-medium text-[#666666] text-left mt-3 mbb blog-description">
        <p title={item.blogBody}>{item.blogBody}</p>
      </div>
      {admin && (
        <div className=" flex gap-2 mt-6 font-semibold">
          <button
            onClick={handleEditClick}
            className="capitalize text-[10px] flex-1 h-[35px] rounded-[5px] border border-[#F7B519] text-[#000000] bg-[#FFFFFF]"
          >
            Edit
          </button>
          <button
            onClick={() => handleDeleteClick(item._id)}
            className=" capitalize text-[10px]   flex-1 h-[35px] rounded-[5px] border border-[#F7B519]  text-[#000000] bg-[#F7B519]"
          >
            Delete
          </button>
        </div>
      )}

      {!admin && (
        <div className=" flex gap-2 mt-6 font-semibold">
          <button
          title={"Keep Reading"}
            onClick={handleReadMore}
            className="capitalize text-[10px] w-full   flex-1 h-[35px] rounded-[5px] border border-[#F7B519]  text-[#000000] bg-[#F7B519]"
          >
            Keep reading
          </button>
        </div>
      )}
    </div>
  );
}

export default Blog;
