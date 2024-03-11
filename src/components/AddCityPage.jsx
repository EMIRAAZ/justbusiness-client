import React, { useEffect, useRef, useState } from 'react';
import PlaceHolder from "../assets/placeholder/placeholder-image.png";
import { errorToast, successToast } from '../toast';

function AddCity() {

    // --------------------------------------------
    const uploadImage = useRef(null);
    // --------------------------------------------


    // -----------------------------------------------------
    const [formData,setFormData] = useState({propretyHeadline:'',price:'',beds:'',googleMapLink:'',description:'',mainImgaeLink:'',videoLink:''})
    // -----------------------------------------------------

    //------------------------------------------------------------------
    const uploadImageButton = ()=> uploadImage.current.click();
    // -----------------------------------------------------------------
    

    // -----------------------------------------------
    const hanldeUploading = (e)=>{
        const file = e.target.files
        if(file.length > 0){
            const [selectedFile] = file
            const fileReader = new FileReader();
            fileReader.onload = ()=>{
                const srcData = fileReader.result;
                setFormData({...formData,mainImgaeLink:srcData})
            } 
            fileReader.readAsDataURL(selectedFile) 
        }
    }

    const handleChange = (e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    // -------------------------------------------------

    const handleSubmit = (e)=>{

  
        let data = {
            ...formData,
        }

        console.log(data)
        


        e.preventDefault()
        try {
            successToast('Submit')
        } catch (error) {
            errorToast('error')
        }
    }
   
    



  return (
    <form onSubmit={handleSubmit} className='flex flex-wrap'>
        <div className='flex-1'>

            {/* City Name */}
            <div className="flex flex-col gap-2 mx-3">
                <label   htmlFor="cityName" className="sf-medium text-sm text-[#000000]">Proprety Headline</label>
                <input autoComplete="name" value={formData.cityName} name="cityName" onChange={handleChange} type="text" id="cityName" placeholder="Down Town" title='City Name' className="border border-[#E4E4E4] py-4 px-5 rounded-[10px] sf-normal text-sm text-[#666666]  outline-none" />
            </div>

            {/* Emirate Name */}
            <div className="flex flex-col gap-2 mx-3">
                <label   htmlFor="emirateName" className="sf-medium text-sm text-[#000000]">Price (From in AED)</label>
                <input autoComplete="" name="emirateName" value={formData.emirateName} onChange={handleChange} type="text" id="emirateName" placeholder="Dubai" className="border border-[#E4E4E4] py-4 px-5 rounded-[10px] sf-normal text-sm text-[#666666]  outline-none" />
            </div>
        </div>

        <div className="px-4 flex-1">

            {/*  Main image */}
            <h1 className='mb-3 text-4xl sf-medium'>Media</h1>
            <h2 className='sf-medium text-sm mb-3'>Main Image</h2>
            <div className="flex gap-3 items-center">
                <div className="w-80 h-64  rounded-[20px] overflow-hidden">
                    <img src={ formData.mainImgaeLink || PlaceHolder} alt="placeholder" className='w-full h-full object-cover ' />
                </div>
                <div onClick={uploadImageButton} className="w-48 h-11 bg-[#000000] text-[#ffffff] hover:bg-[#666666] flex justify-center items-center rounded-[4px] cursor-pointer">
                    <span>Select Image </span>
                </div>
                <input ref={uploadImage} type="file" accept="image/jpg, image/jpeg, image/png" onChange={hanldeUploading} className='hidden' />
            </div>


            {/* submit */}

            <div className="p-3 poppins-semibold text-lg">
              <div className="w-52 h-11 bg-[#000000] text-[#ffffff] hover:bg-[#666666] flex justify-center items-center rounded-[4px] cursor-pointer">
                <button type='submit'>Save</button>
              </div>
            </div>

        </div>

    </form>

  )
}

export default AddCity