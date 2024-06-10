import React from "react";
import Heading from "../../components/Heading/Heading";
import ViewContact from "../../components/Contact/ViewContact"

function AdminViewContactUsPage() {
  return (
    <div>
      <Heading title={"View Activity"} />
      <ViewContact />
    </div>
  );
}

export default AdminViewContactUsPage;
