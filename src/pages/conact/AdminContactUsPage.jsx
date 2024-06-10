import React from "react";
import Heading from "../../components/Heading/Heading";
import ManageCard from "../../components/ManageCard/ManageCard";

function AdminContactUsPage() {
  return (
    <div>
      <div className="">
        <Heading title={"Manage Reach US"} />
      </div>
      <div className="flex gap-3 sf-medium font-medium text-2xl">
        {/* <ManageCard title={"Add Lead"} url={"/admin/add-lead"} /> */}
        <ManageCard title={"View Reach"} url={"/admin/view-contact-us"} />
      </div>
    </div>
  );
}

export default AdminContactUsPage;
