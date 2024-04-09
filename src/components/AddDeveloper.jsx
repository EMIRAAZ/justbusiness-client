import React, { useRef, useState } from 'react';
import PlaceHolder from "../assets/placeholder/placeholder-image.png";
import { errorToast, successToast } from '../toast';
import { addingDeveloper } from '../api';
import { setError, setLoading } from '../features/citiesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { addDeveloperSuccess } from '../features/developerSlice';

function AddDevelopers() {

    const dispatch = useDispatch();
    const { isLoading } = useSelector((state) => state.developer); 

    const[visible,setVisible] = React.useState('password')
    // --------------------------------------------
    const uploadImage = useRef(null);
    // --------------------------------------------

    // -----------------------------------------------------
    const [formData,setFormData] = useState({developerName:'',contactNumber:'',email:'',password:'',mainImgaeLink:''})
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

    const handleSubmit = async(e)=>{
        
        try {
            e.preventDefault()
            let data = {
                ...formData,
            }
            dispatch(setLoading());
            await addingDeveloper(data);
            dispatch(addDeveloperSuccess());
            successToast('Successfully added')
            setFormData({contactNumber:'',developerName:'',email:"",mainImgaeLink:"",password:""})
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
   
    



  return (
    <form onSubmit={handleSubmit} className='flex flex-wrap'>
        <div className='flex-1'>

            {/* Developer Name */}
            <div className="flex flex-col gap-2 mx-3">
                <label   htmlFor="developerName" className="font-medium sf-medium text-sm text-[#000000]">Developer Name</label>
                <input disabled={isLoading} autoComplete="name" value={formData.developerName} name="developerName" onChange={handleChange} type="text" id="developerName" placeholder="Name" title='Developer Name' className="border border-[#E4E4E4] py-4 px-5 rounded-[10px] sf-normal font-extralight text-sm text-[#666666]  outline-none" />
            </div>

            {/* Developer Mail */}
            <div className="flex flex-col gap-2 mx-3">
                <label   htmlFor="email" className="sf-medium font-medium text-sm text-[#000000]">Developer Mail</label>
                <input disabled={isLoading} autoComplete="mobile email" name="email" value={formData.email} onChange={handleChange} type="email" id="email" placeholder="E-Mail ID" className="border border-[#E4E4E4] py-4 px-5 rounded-[10px] sf-normal  font-extralight text-sm text-[#666666]  outline-none" />
            </div>

            {/* Password */}
            <div className="relative flex flex-col gap-2 mt-3 mx-3">
                <label htmlFor="password" className="sf-medium font-medium text-sm text-[#000000]">Password</label>
                <input disabled={isLoading} name="password" onChange={handleChange} value={FormData.password} autoComplete="current-password" type={visible} id="password" placeholder="Enter your Password" className="border border-[#E4E4E4] py-4 ps-5 pe-16 rounded-[10px] sf-normal font-extralight text-sm text-[#666666]  outline-none" />
                <div className="absolute right-7   top-11">
                    {
                        visible === 'password' ? <FaEye size={20} onClick={()=>setVisible('text')} /> : <FaEyeSlash size={20} onClick={()=> setVisible('password')}/>
                    }
                </div>
            </div>

            {/* Contact Number */}
            <div className="flex flex-col gap-2 mt-3 mx-3">
                <label htmlFor="contactNumber" className="sf-medium font-medium text-sm text-[#000000]">Contact Number</label>
                <input disabled={isLoading} autoComplete="cc-number" name="contactNumber" value={formData.contactNumber} onChange={handleChange} type="number" id="contactNumber" placeholder="Contact Number" className="border border-[#E4E4E4] py-4 px-5 rounded-[10px] sf-normal font-extralight text-sm text-[#666666]  outline-none" />
            </div>
        </div>

        <div className="px-4 flex-1">

            {/*  Main image */}
            <h1 className='mb-3 text-4xl font-medium sf-medium'>Media</h1>
            <h2 className='sf-medium font-medium text-sm mb-3'>Main Image</h2>
            <div className="flex gap-3 items-center">
                <div className="w-14 h-14  rounded-full overflow-hidden">
                    <img src={ formData.mainImgaeLink || PlaceHolder} alt="placeholder" className='w-full h-full object-cover ' />
                </div>
                <div onClick={uploadImageButton} className="w-48 h-11 bg-[#000000] text-[#ffffff] hover:bg-[#666666] flex justify-center items-center rounded-[4px] cursor-pointer">
                    <span>Select Image </span>
                </div>
                <input disabled={isLoading} ref={uploadImage} type="file" accept="image/jpg, image/jpeg, image/png" onChange={hanldeUploading} className='hidden' />
            </div>


            {/* submit */}

            <div className="p-3 poppins-semibold text-lg">
              <div className="w-52 h-11 bg-[#000000] text-[#ffffff] hover:bg-[#666666] flex justify-center items-center rounded-[4px] cursor-pointer">
                <button disabled={isLoading} type='submit'>Save</button>
              </div>
            </div>

        </div>

    </form>

  )
}

export default AddDevelopers