import React from "react";
import Heading from "../../components/Heading/Heading";
import ViewEnquiries from "../../components/enquiries/ViewEnquiries";

function AdminEnquiriesPage() {
  return (
    <div>
      <Heading title={"View Enquiries"} />
      <ViewEnquiries />
    </div>
  );
}

export default AdminEnquiriesPage;
