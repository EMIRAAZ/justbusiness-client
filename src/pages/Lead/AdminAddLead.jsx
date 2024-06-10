import React from 'react'
import Heading from '../../components/Heading/Heading'
import AddLead from "../../components/Lead/AddLead.jsx"

function AdminAddLead() {
  return (
    <div>
           <div>
        <Heading title={"Add Lead"} />
        <AddLead />
      </div>
    </div>
  )
}

export default AdminAddLead