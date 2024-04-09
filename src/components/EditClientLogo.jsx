
import React, { useRef, useState } from 'react';
import PlaceHolder from "../assets/placeholder/placeholder-image.png";
import { errorToast, successToast } from '../toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateClientLogo } from '../api';

function EditClientLogo() {

    const {state} = useLocation()
    const navigate = useNavigate()
    // --------------------------------------------
    const uploadImage = useRef(null);
    // --------------------------------------------


    // -----------------------------------------------------
    const [formData,setFormData] = useState({mainImgaeLink:''})
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

    // -------------------------------------------------


    const handleSubmit = async(e)=>{ 
        try {
            e.preventDefault()
            let data = {
                ...formData,
            }
            await updateClientLogo(data);
            successToast('Updated')
            navigate('/admin/view-client')

        }  catch (error) {
            if (error.response && error.response.data) {
              errorToast(error.response.data.message)
            } else {
              errorToast('An error occurred during login.');
            }
          }
    }

    React.useEffect(()=>{
        setFormData({...state})
        
    },[state])
   
    



  return (
    <form onSubmit={handleSubmit} className='flex flex-wrap'>

        <div className="px-4 flex-1">
            <div className="flex gap-3 items-center">
            <div className="w-[300px] h-[150px]  rounded-[20px]">
                    <img src={ formData.mainImgaeLink || PlaceHolder} alt="placeholder" className=' w-full h-full object-contain ' />
                </div>
                <div onClick={uploadImageButton} className="w-48 h-11 bg-[#000000] text-[#ffffff] hover:bg-[#666666] flex justify-center items-center rounded-[4px] cursor-pointer">
                    <span>Select Image </span>
                </div>
                <input  ref={uploadImage} type="file" accept="image/jpg, image/jpeg, image/png" onChange={hanldeUploading} className='hidden' />
            </div>

            <div className="p-3 poppins-semibold text-lg">
              <div className="w-52 h-11 bg-[#000000] text-[#ffffff] hover:bg-[#666666] flex justify-center items-center rounded-[4px] cursor-pointer">
                <button type='submit'>Save</button>
              </div>
            </div>

        </div>

    </form>

  )
}

export default EditClientLogo