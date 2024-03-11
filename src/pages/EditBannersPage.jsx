import React from "react";
import EditBanners from "../components/EditBanners.jsx";
import { useNavigate } from "react-router-dom";

function EditBannersPage() {

    const navigate = useNavigate();

  return (
    <div>
      <EditBanners />
      <div className="mt-4 w-28 h-12 bg-[#000000] text-[#ffffff] hover:bg-[#666666] flex justify-center items-center rounded-[4px] cursor-pointer">
        <span onClick={()=>navigate('/admin/edit-banner')} className="poppins-semibold text-lg">Edit</span>
      </div>
    </div>
  );
}

export default EditBannersPage;
