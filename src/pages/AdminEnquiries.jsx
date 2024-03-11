import React from 'react'
import Counts from "../components/Counts"
import SearchAndFilter from "../components/SearchAndFilter"
import RecentEnquiries from '../components/RecentEnquiries'

function AdminEnquiries() {
  return (
    <div className='my-7'>
        <Counts/>
        <SearchAndFilter/>
        <RecentEnquiries />
    </div>
  )
}

export default AdminEnquiries