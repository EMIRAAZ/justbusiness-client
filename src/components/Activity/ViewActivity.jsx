import SearchAndFilter from "../Activity/SearchAndFilter"
import RecentEnquiries from '../Activity/RecentEnquiries'
import { useState } from "react";


function ViewActivity() {

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedFilter, setSelectedFilter] = useState('');
  
  return (
    <div>
        <SearchAndFilter setSearchTerm={setSearchTerm} setSelectedFilter={setSelectedFilter} />
        <RecentEnquiries searchTerm={searchTerm} selectedFilter={selectedFilter} />
    </div>
  )
}

export default ViewActivity