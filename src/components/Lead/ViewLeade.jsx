import React, { useState } from 'react'

import SearchAndFilter from "../Lead/SearchAndFilter"
import RecentEnquiries from '../Lead/RecentEnquiries'

function ViewLeade() {

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedFilter, setSelectedFilter] = useState('');
  
  return (
    <div>
         <SearchAndFilter setSearchTerm={setSearchTerm} setSelectedFilter={setSelectedFilter} />
        <RecentEnquiries searchTerm={searchTerm} selectedFilter={selectedFilter} />
    </div>
  )
}

export default ViewLeade