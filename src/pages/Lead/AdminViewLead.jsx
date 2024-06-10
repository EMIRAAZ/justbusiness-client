import React from 'react'
import Heading from '../../components/Heading/Heading'
import ViewLeade from "../../components/Lead/ViewLeade"

function AdminViewLead() {
  return (
    <div>
           <div>
        <Heading title={"View Lead"} />
        <ViewLeade />
      </div>
    </div>
  )
}

export default AdminViewLead