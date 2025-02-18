import { useState } from 'react'
import { FaAngleDown, FaSearch } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa6";

function SearchAndFilter({ setSearchTerm, setSelectedFilter }) {

    // const [filterOptions,setFilterOptions] = useState(false)
    // const [fileActiveName,setFileActiveName] = useState("Filter")

    const handleSearchChange = (e) => {
      setSearchTerm(e.target.value);
  };

//   const handleFilterSelection = (filter) => {
//     setSelectedFilter(filter);
//     setFileActiveName(filter)
//     setFilterOptions(false);
// };

  return (
    <div className='flex justify-between flex-row relative'>
        <div className="flex max-w-[271px] w-[271px] h-[53px] max-h-[53px] font-extralight text-sm sf-normal text-[#666666] justify-center items-center border rounded-[50px] border-[#E4E4E4] bg-[#F7F7F7]">
            <input type="search"  onChange={handleSearchChange} name="" className='bg-transparent outline-none pe-3' id="" placeholder='Search...' />
            <FaSearch color='#666666'/>
        </div>
        {/* <div  onClick={()=>setFilterOptions(!filterOptions)} className="cursor-pointer flex max-w-[271px] w-[175px] h-[53px] max-h-[53px] justify-between px-10 items-center border rounded-[50px] border-[#E4E4E4] bg-[#F7F7F7]">
            <span className='w-[#666666] font-extralight text-sm sf-normal capitalize'>{fileActiveName}</span>
            { filterOptions ? <FaAngleUp /> : <FaAngleDown/>}
        </div> */}
        
        {/* {filterOptions && (
        <div className="bg-white poppins-medium text-[14px] px-2 absolute z-50 right-0 top-16 border py-3 rounded-[10px] border-[#E4E4E4] max-w-48 w-48 text-center">
          <p className='py-2 capitalize cursor-pointer' onClick={() => handleFilterSelection('all')}>All</p>
          <p className='py-2 capitalize cursor-pointer' onClick={() => handleFilterSelection('closed')}>closed</p>
          <p className='py-2 capitalize cursor-pointer' onClick={() => handleFilterSelection('unqualified')}>unqualified</p>
          <p className='py-2 capitalize cursor-pointer' onClick={() => handleFilterSelection('qualified')}>qualified</p>
          <p className='py-2 capitalize cursor-pointer' onClick={() => handleFilterSelection('interested')}>interested</p>
          <p className='py-2 capitalize cursor-pointer' onClick={() => handleFilterSelection('progressive')}>progressive</p>
          <p className='py-2 capitalize cursor-pointer' onClick={() => handleFilterSelection('newlead')}>New Lead</p>
          
        </div>
      )} */}

    </div>
  )
}

export default SearchAndFilter