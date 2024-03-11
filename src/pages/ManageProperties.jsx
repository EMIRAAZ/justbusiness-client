import React from 'react'
import ManagePropertiesAndCities from "../components/ManagePropertiesAndCities"

function ManageProperties() {
  return (
    <div>
        <div className="">
            <div className="flex justify-between my-6">
                <h1 className="sf-medium text-5xl">Manage Properties</h1>
            </div>
            <ManagePropertiesAndCities />
      </div>
    </div>
  )
}

export default ManageProperties