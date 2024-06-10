import React from "react";
import Heading from "../../components/Heading/Heading";
import ManageCard from "../../components/ManageCard/ManageCard";

function AdminManageLead() {
  return (
    <div>
      <div className="">
        <Heading title={"Manage Lead"} />
      </div>
      <div className="flex gap-3 sf-medium font-medium text-2xl">
        {/* <ManageCard title={"Add Lead"} url={"/admin/add-lead"} /> */}
        <ManageCard title={"View Lead"} url={"/admin/view-lead"} />
      </div>
    </div>
  );
}

export default AdminManageLead;
