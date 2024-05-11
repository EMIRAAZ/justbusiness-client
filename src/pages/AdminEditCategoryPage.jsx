import React from "react";
import Heading from "../components/Heading/Heading";
import EditCategory from "../components/admin/category/EditCategory";

function AdminEditCategoryPage() {
  return (
    <div>
      <div className="">
        <Heading title={'Edit Category'} />
      </div>
      <div className="">
        <EditCategory/>
      </div>
    </div>
  );
}

export default AdminEditCategoryPage;
