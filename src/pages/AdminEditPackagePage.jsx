import React from 'react'
import Heading from '../components/Heading/Heading'
import EditPackage from "../components/Package/EditPackage"

function AdminEditPackagePage() {
  return (
    <div>
        <div>
        <Heading title={"Edit Package"} />
        <EditPackage />
      </div>
    </div>
  )
}

export default AdminEditPackagePage