import React from "react";
import Heading from "../components/Heading/Heading";
import AddBlog from "../components/admin/blog/AddBlog";

function AdminAddBlogPage() {
  return (
    <div>
      <div>
        <Heading title={"Add Blog"} />
        <AddBlog />
      </div>
    </div>
  );
}

export default AdminAddBlogPage;
