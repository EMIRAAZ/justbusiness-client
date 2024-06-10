import React from "react";
import { MAIN_IMAG_URL } from "../../api";
import { useNavigate } from "react-router-dom";
import "./blog-description.css";
import Lazyloading from "../Lazyloading/Lazyloading";
import { TypographySeventeen, TypographySixteen, TypographyTwelve } from "../../styles";
function Blog({ item, admin, handleDeleteClick, editUrl, readMoreUrl }) {
  const navigate = useNavigate();

  const handleEditClick = () => navigate(editUrl);
  const handleReadMore = () => navigate(readMoreUrl);

  return (
    <div className="w-full mb-4 md:mt-0  sm:w-[360px] 1500px:w-[370px] h-[402] rounded-[15px] border py-[24px] px-[15px]">
      <div className="w-full h-[182px] rounded-[10px] overflow-hidden">
        <Lazyloading
        title={item.blogTitle}
          src={`${MAIN_IMAG_URL}/${item.mainImgaeLink}`}
          className=" w-full h-full object-cover"
          alt={item.blogTitle}
        />
      </div>
     
      <div className="overflow-hidden w-full mt-[18px]">
        <h1
          onClick={handleReadMore}
          className={`overflow-hidden w-full ${TypographySixteen} line-clamp-2 text-[#016EFF]`}
          title={item.blogTitle}
        >
          {item.blogTitle}
        </h1>
      </div>
      <div className={`poppins-medium text-[#666666]  ${TypographyTwelve} text-left mt-[18px] mbb blog-description`}>
        <p title={item.blogBody}>{item.blogBody}</p>
      </div>
      {admin && (
        <div className=" flex gap-2 mt-6 font-semibold">
          <button
            onClick={handleEditClick}
            className="capitalize text-[10px] flex-1 h-[35px] rounded-[5px] border border-[#016EFF] text-[#000000] bg-[#FFFFFF]"
          >
            Edit
          </button>
          <button
            onClick={() => handleDeleteClick(item._id)}
            className=" capitalize text-[10px]   flex-1 h-[35px] rounded-[5px] border border-[#016EFF]  text-white bg-[#016EFF]"
          >
            Delete
          </button>
        </div>
      )}

      {/* {!admin && (
        <div className=" flex gap-2 mt-6 font-semibold">
          <button
          title={"Keep Reading"}
            onClick={handleReadMore}
            className="capitalize text-[10px] w-full   flex-1 h-[35px] rounded-[5px] border border-[#016EFF]  text-[#000000] bg-[#016EFF]"
          >
            Keep reading
          </button>
        </div>
      )} */}
    </div>
  );
}

export default Blog;
