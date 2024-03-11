import React from 'react'
import City from "../components/City"

function EditCitiesPage() {
  return (
    <div>
      <div className="">
        <div className="sticky top-0 bg-white flex justify-between py-6">
          <h1 className="sf-medium text-5xl">Add City</h1>
        </div>
        <div className=" grid grid-cols-5 h-[83vh] overflow-scroll">
            <City />
            <City />
            <City />
            <City />
            <City />
            <City />
        </div>
      </div>
    </div>
  )
}

export default EditCitiesPage