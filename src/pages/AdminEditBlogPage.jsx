import React from "react";
import Heading from "../components/Heading/Heading";
import EditBlog from "../components/admin/blog/EditBlog";

function AdminEditBlogPage() {
  return (
    <div>
      <div className="">
        <Heading title={"Edit Blog"} />
      </div>
      <div className="">
        <EditBlog />
      </div>
    </div>
  );
}

export default AdminEditBlogPage;
