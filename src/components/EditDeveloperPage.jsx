import React, { useRef, useState } from 'react';
import PlaceHolder from "../assets/placeholder/placeholder-image.png";
import { errorToast, successToast } from '../toast';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {  editDeveloperSuccess, setError, setLoading } from '../features/developerSlice';
import {  updateDeveloper } from '../api';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function EditDeveloperPage() {

    const {state} = useLocation()
    const dispatch = useDispatch();
    // --------------------------------------------
    const uploadImage = useRef(null);
    // --------------------------------------------


    // -----------------------------------------------------
    const [formData,setFormData] = useState({contactNumber:'',developerName:'',mainImgaeLink:'',email:'',password:""})
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

    const[visible,setVisible] = React.useState('password')

    const handleSubmit = async(e)=>{ 
        try {
            e.preventDefault()
            let data = {
                ...formData,
            }
            dispatch(setLoading());
            await updateDeveloper(data);
            dispatch(editDeveloperSuccess());
            successToast('Updated')

        }  catch (error) {
            if (error.response && error.response.data) {
              dispatch(setError(error.response.data.message));
              errorToast(error.response.data.message)
            } else {
              dispatch(setError('An error occurred during login.'));
              errorToast('An error occurred during login.');
            }
          }
    }

    React.useEffect(()=>{
        setFormData({...state})
        
    },[state])
   
    



  return (
    <form onSubmit={handleSubmit} className='flex flex-wrap'>
        <div className='flex-1'>

             {/* Developer Name */}
             <div className="flex flex-col gap-2 mx-3">
                <label   htmlFor="developerName" className="sf-medium text-sm text-[#000000]">Proprety Headline</label>
                <input autoComplete="name" value={formData.developerName} name="developerName" onChange={handleChange} type="text" id="developerName" placeholder="Name" title='Developer Name' className="border border-[#E4E4E4] py-4 px-5 rounded-[10px] sf-normal text-sm text-[#666666]  outline-none" />
            </div>

            {/* Emirate Mail */}
            <div className="flex flex-col gap-2 mx-3">
                <label   htmlFor="email" className="sf-medium text-sm text-[#000000]">Mail</label>
                <input autoComplete="mobile email" name="email" value={formData.email} onChange={handleChange} type="email" id="email" placeholder="E-Mail ID" className="border border-[#E4E4E4] py-4 px-5 rounded-[10px] sf-normal text-sm text-[#666666]  outline-none" />
            </div>

            {/* Password */}
            <div className="relative flex flex-col gap-2 mt-3 mx-3">
                <label htmlFor="password" className="sf-medium text-sm text-[#000000]">Password</label>
                <input name="password" onChange={handleChange} value={FormData.password} autoComplete="current-password" type={visible} id="password" placeholder="Enter your Password" className="border border-[#E4E4E4] py-4 ps-5 pe-16 rounded-[10px] sf-normal text-sm text-[#666666]  outline-none" />
                <div className="absolute right-7   top-11">
                    {
                        visible === 'password' ? <FaEye size={20} onClick={()=>setVisible('text')} /> : <FaEyeSlash size={20} onClick={()=> setVisible('password')}/>
                    }
                </div>
            </div>

            {/* Contact Number */}
            <div className="flex flex-col gap-2 mt-3 mx-3">
                <label htmlFor="contactNumber" className="sf-medium text-sm text-[#000000]">Contact Number</label>
                <input autoComplete="cc-number" name="contactNumber" value={formData.contactNumber} onChange={handleChange} type="number" id="contactNumber" placeholder="Contact Number" className="border border-[#E4E4E4] py-4 px-5 rounded-[10px] sf-normal text-sm text-[#666666]  outline-none" />
            </div>

        </div>

        <div className="px-4 flex-1">

           {/*  Main image */}
           <h1 className='mb-3 text-4xl sf-medium'>Media</h1>
            <h2 className='sf-medium text-sm mb-3'>Main Image</h2>
            <div className="flex gap-3 items-center">
                <div className="w-14 h-14  rounded-full overflow-hidden">
                    <img src={ formData.mainImgaeLink || PlaceHolder} alt="placeholder" className='w-full h-full object-cover ' />
                </div>
                <div onClick={uploadImageButton} className="w-48 h-11 bg-[#000000] text-[#ffffff] hover:bg-[#666666] flex justify-center items-center rounded-[4px] cursor-pointer">
                    <span>Select Image </span>
                </div>
                <input  ref={uploadImage} type="file" accept="image/jpg, image/jpeg, image/png" onChange={hanldeUploading} className='hidden' />
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

export default EditDeveloperPage