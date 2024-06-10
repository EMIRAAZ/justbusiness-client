import React from "react";
import Heading from "../components/Heading/Heading";
import AddPackage from "../components/AddPackage"

function AdminAddPackagePage() {
  return (
    <div>
      <div>
        <Heading title={"Add Package"} />
        <AddPackage />
      </div>
    </div>
  );
}

export default AdminAddPackagePage;
