import React, { useState } from 'react'
import SearchAndFilter from "./SearchAndFilter"
import RecentEnquiries from "./RecentEnquiries"

function ViewEnquiries() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedFilter, setSelectedFilter] = useState('');
  

  return (
    <div>
           <SearchAndFilter setSearchTerm={setSearchTerm} setSelectedFilter={setSelectedFilter} />
        <RecentEnquiries searchTerm={searchTerm} selectedFilter={selectedFilter} />
    </div>
  )
}

export default ViewEnquiries