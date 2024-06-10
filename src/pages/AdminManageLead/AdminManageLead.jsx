import React from "react";
import Heading from "../../components/Heading/Heading";
import AddLead from "../../components/Leade/AddLead";

function AdminManageLead() {
  return (
    <div>
        <div>
        <Heading title={"Add Blog"} />
        <AddLead />
      </div>
    </div>
  );
}

export default AdminManageLead;
