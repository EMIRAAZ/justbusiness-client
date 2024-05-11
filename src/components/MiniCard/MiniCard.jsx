import React from "react";
import { useNavigate } from "react-router-dom";

function MiniCard({ editUrl, deleteUrl, name, index, handleDeleteClick, id }) {
  const navigate = useNavigate();

  const handleEditClick = () => navigate(editUrl);

  return (
    <div className="w-full">
      <div className="flex capitalize justify-between px-6 items-center text-[14px] w-full h-[56px] bg-[#FFE8BC] rounded-[14px]">
        <span>{index}</span>
        <span className="">{name}</span>
        <div className="flex gap-2 text-white justify-center items-center">
          <button
            onClick={() => handleDeleteClick(id)}
            className="cursor-pointer bg-black rounded-[4px] w-[140px] text-[12px] flex justify-center items-center h-[28px]"
          >
            <span>Delete</span>
          </button>
          <button onClick={handleEditClick} className="cursor-pointer bg-[#F29F05] rounded-[4px] w-[140px] text-[12px] flex justify-center items-center h-[28px]">
            <span>Edit</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MiniCard;
