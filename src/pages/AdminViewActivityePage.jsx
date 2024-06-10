import React from 'react'
import Heading from '../components/Heading/Heading'
import ViewActivity from '../components/Activity/ViewActivity'

function AdminViewActivityePage() {
  return (
    <div>
       <div>
        <Heading title={"View Activity"} />
        <ViewActivity />
      </div>
    </div>
  )
}

export default AdminViewActivityePage