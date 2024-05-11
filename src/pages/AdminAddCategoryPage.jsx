import React from 'react'
import Heading from '../components/Heading/Heading'
import AddCategory from '../components/admin/category/AddCategory'

function AdminAddCategoryPage() {
  return (
    <div>
        <Heading title={'Add Category'} />
        <AddCategory/>
    </div>
  )
}

export default AdminAddCategoryPage