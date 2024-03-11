import React from "react";
import Enquiries from "../components/Enquiries";
import RecentEnquiries from "../components/RecentEnquiries";

function AdminDashBoard() {
  return (
    <div className="w-full">
      <div className="">
        <Enquiries />
      </div>
      <div className="h-11">
        <div className="flex justify-between my-6">
          <h1 className="sf-medium text-5xl">Recent Enquiries</h1>
          {/* <div className="flex flex-col gap-2 mx-3 min-w-xl">
            <input autoComplete="email" name="email" onChange={'handleChange'} type="email" id="email" placeholder="Search..." className="border border-[#E4E4E4] py-4 px-5 rounded-[10px] sf-normal text-sm text-[#666666]  outline-none" />
          </div> */}
        </div>
        <RecentEnquiries />
      </div>
    </div>
  );
}

export default AdminDashBoard;
