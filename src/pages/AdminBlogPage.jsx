import React from "react";
import Heading from "../components/Heading/Heading";
import ManageCard from "../components/ManageCard/ManageCard";

function AdminBlogPage() {
  return (
    <div>
      <div className="">
        <Heading title={"Manage Blog"} />
      </div>
      <div className="flex gap-3 sf-medium font-medium text-2xl">
        <ManageCard title={"Add Blog"} url={"/admin/add-blog"} />
        <ManageCard title={"View Blog"} url={"/admin/view-blogs"} />
      </div>
    </div>
  );
}

export default AdminBlogPage;
