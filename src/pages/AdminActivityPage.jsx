import React from 'react'
import Heading from '../components/Heading/Heading'
import ManageCard from '../components/ManageCard/ManageCard'

function AdminActivityPage() {
  return (
    <div>
        <div className="">
        <Heading title={"Manage Activity"} />
      </div>
      <div className="flex gap-3 sf-medium font-medium text-2xl">
        <ManageCard title={"Add Activity"} url={"/admin/add-activity"} />
        <ManageCard title={"View Activity"} url={"/admin/view-activity"} />
      </div>
    </div>
  )
}

export default AdminActivityPage