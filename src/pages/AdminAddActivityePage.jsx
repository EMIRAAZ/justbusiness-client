import React from 'react'
import Heading from '../components/Heading/Heading'
import AddActivity from "../components/Activity/AddActivity.jsx"

function AdminAddActivityePage() {
  return (
    <div>
        <div>
        <Heading title={"Add Activity"} />
        <AddActivity />
      </div>
    </div>
  )
}

export default AdminAddActivityePage