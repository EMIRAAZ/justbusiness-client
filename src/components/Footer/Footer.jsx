import React from 'react'

function Footer() {
  return (
    <div className='md:h-[68px] flex mt-[24px]  justify-center items-center h-[55px] bg-[#F7B519]'>
        <h1 className='md:text-[15px] text-[12px] flex gap-1 sf-normal'>
            <span className='block' title='@' >&#64;</span>
            <span className='block' title={new Date().getFullYear()} >{new Date().getFullYear()}</span>
            <span className='block' title='thedubaithings' >thedubaithings</span>
            <span className='block'title='All Rights Reserved' >All Rights Reserved</span>
        </h1>
    </div>
  )
}

export default Footer