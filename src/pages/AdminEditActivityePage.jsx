import React from 'react'
import Heading from '../components/Heading/Heading'
import EditActivity from '../components/Activity/EditActivity'

function AdminEditActivityePage() {
  return (
    <div>
           <div>
        <Heading title={"Edit Activity"} />
        <EditActivity />
      </div>
    </div>
  )
}

export default AdminEditActivityePage