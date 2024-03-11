import React, { useEffect, useRef, useState } from 'react';
import PlaceHolder from "../assets/placeholder/placeholder-image.png";
import { errorToast, successToast } from '../toast';

function AddBlog() {

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

            {/* Blog title */}
            <div className="flex flex-col gap-2 mx-3">
                <label   htmlFor="blogTitle" className="sf-medium text-sm text-[#000000]">Blog Title</label>
                <input autoComplete="" value={formData.blogTitle} name="blogTitle" onChange={handleChange} type="text" id="blogTitle" placeholder="Discover the Essence of Luxury Living: Your Guide to Dubai Real Estate" title='Blog title' className="border border-[#E4E4E4] py-4 px-5 rounded-[10px] sf-normal text-sm text-[#666666]  outline-none" />
            </div>

            {/* Blog Body */}
            <div className="flex flex-col gap-2 mx-3 mt-3">
                <label   htmlFor="blogBody" className="sf-medium text-sm text-[#000000]">Price (From in AED)</label>
                {/* <input autoComplete="" name="blogBody" value={formData.blogBody} onChange={handleChange} type="text" id="blogBody" placeholder="Dubai" className="border border-[#E4E4E4] py-4 px-5 rounded-[10px] sf-normal text-sm text-[#666666]  outline-none" /> */}
                <textarea name="blogBody"  onChange={handleChange} value={formData.blogBody} id="blogBody" cols="30" rows="20" className="border border-[#E4E4E4] py-4 px-5 rounded-[10px] sf-normal text-sm text-[#666666]  outline-none"
                placeholder='Wake up to the beauty of lush landscapes and elite golf courses, with the majestic Burj Khalifa and Dubai’s skyline painting the perfect morning scene at Parkside Hills. This premier living destination encapsulates the ideal blend of nature’s tranquility and the pulse of city life, fostering a community that values both unity and privacy. With a selection of 1-3 bedroom apartments that align with the luxurious lifestyle of Dubai Hills Estate, Parkside Hills apartments epitomizes smart living infused with elegance. Situated in the picturesque Dubai Hills Estate, Parkside Hills is synonymous with refined living, integrating innovative design with classic sophistication to suit a modern lifestyle. At its core, the community thrives on a plethora of amenities, ranging from top-tier health and education services to leisure, wellness, and shopping conveniences, all within easy reach, ensuring a life marked by luxury and convenience.
                Investors and future residents looking at Parkside Hills apartments for sale near Dubai are presented with an enticing investment opportunity. With Dubai Hills Estate’s high demand and Emaar’s reputation for quality developments, Parkside Hills offers potential for substantial ROI. Its coveted location and Emaar’s renowned quality promise both capital appreciation and lucrative rental yields for years to come.                         '
                ></textarea>

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

export default AddBlog