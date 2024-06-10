import React from 'react'
import Heading from '../components/Heading/Heading'
import ManageCard from '../components/ManageCard/ManageCard'

function AdminPackagePage() {
  return (
    <div>
        <div>
      <div className="">
        <Heading title={"Manage Package"} />
      </div>
      <div className="flex gap-3 sf-medium font-medium text-2xl">
        <ManageCard title={"Add Package"} url={"/admin/add-package"} />
        <ManageCard title={"View Package"} url={"/admin/view-package"} />
      </div>
    </div>
    </div>
  )
}

export default AdminPackagePage