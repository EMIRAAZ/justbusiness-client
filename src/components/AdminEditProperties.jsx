import React, { useEffect, useRef, useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { IoMdAdd, IoMdRemove } from 'react-icons/io';
import PlaceHolder from "../assets/placeholder/placeholder-image.png";
import { errorToast, successToast } from '../toast';

function EditProperty() {

    // --------------------------------------------
    const uploadImage = useRef(null);
    const uploadSmallImage = useRef(null);
    const frameOfLocation = useRef(null);
    const frameOfVideo = useRef(null);
    // --------------------------------------------



    // ------------------------------------------
    const [optionsProperties,setOptionsProperties] = useState(false)
    const [optionsCities,setOptionsCities] = useState(false)
    // ------------------------------------------


    // ------------------------------------------------------
    const [dynamicFacilitiesForm,setDynamicFacilitiesForm] = useState([{value:''}])
    const [dynamicAreasNearBy,setDynamicAreasNearBy] = useState([{value:''}])
    const [dynamicPaymentPlan,setDynamicPaymentPlan] = useState([{value:''}])
    // ------------------------------------------------------



    // ---------------------------------------------------
    const [smallImage,setSmallImage] = useState([])
    // ---------------------------------------------------


    // -----------------------------------------------------
    const [formData,setFormData] = useState({propretyHeadline:'',price:'',beds:'',googleMapLink:'',description:'',mainImgaeLink:'',videoLink:''})
    // -----------------------------------------------------


    //---------------------------------------------------------------------------------------------------------------
    const handleDynamicFacilitiesMoreFields = ()=> setDynamicFacilitiesForm([...dynamicFacilitiesForm,{value:''}])
    const handleDynamicPaymentPlanMoreFields = ()=> setDynamicPaymentPlan([...dynamicPaymentPlan,{value:''}])
    const handleDynamicAreasNearByFormMoreFields = ()=> setDynamicAreasNearBy([...dynamicAreasNearBy,{value:''}])
    //---------------------------------------------------------------------------------------------------------------

    //------------------------------------------------------------------
    const uploadImageButton = ()=> uploadImage.current.click();
    const uploadSmallImageButton = ()=> uploadSmallImage.current.click();
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
    const hanldeSmallImageUploading = (e)=>{
        const file = e.target.files
        if(file.length > 0){
            const [selectedFile] = file
            const fileReader = new FileReader();
            fileReader.onload = ()=>{
                const srcData = fileReader.result;
                setSmallImage([...smallImage,{image:srcData}]);
            } 
            fileReader.readAsDataURL(selectedFile)  
        }
    }
    const handleChange = (e)=>{
        if(e.target.name === 'price'){
            setFormData({...formData,[e.target.name]:e.target.value.toUpperCase()})
        }else if(e.target.name === 'googleMapLink'){
            const iframeCode = e.target.value.trim();
            const match = iframeCode.match(/src=["'](.*?)["']/);
            const url = match && match[1] ? match[1] : '';
            frameOfLocation.current.src = url
            setFormData({...formData,[e.target.name]:url})
        }else if(e.target.name === 'indexOf'){
            setDynamicFacilitiesForm([dynamicFacilitiesForm,{value:e.target.value}])
            setFormData({...formData,[e.target.name]:e.target.value})
        }else if(e.target.name === 'videoLink'){
            const iframeCode = e.target.value.trim();
            const match = iframeCode.match(/src=["'](.*?)["']/);
            const url = match && match[1] ? match[1] : '';
            frameOfVideo.current.src = url
            setFormData({...formData,[e.target.name]:url})
        }
        else{
            setFormData({...formData,[e.target.name]:e.target.value})
        }
    }
    const handleDynamicForm = (e,index)=>{
        if(e.target.name === 'FacilitiesAndAmenities'){
            const dynamciStateCopy = [...dynamicFacilitiesForm]
            dynamciStateCopy[index].value = e.target.value;
            setDynamicFacilitiesForm(dynamciStateCopy)
        }else if(e.target.name === 'PaymentPlan'){
            const dynamciStateCopy = [...dynamicPaymentPlan]
            dynamciStateCopy[index].value = e.target.value;
            setDynamicPaymentPlan(dynamciStateCopy)
        }else if(e.target.name === 'AreasNearby'){
            const dynamciStateCopy = [...dynamicAreasNearBy]
            dynamciStateCopy[index].value = e.target.value;
            setDynamicAreasNearBy(dynamciStateCopy)
        }  
    }
    const removeDynamicForm = (name, index) => {
        if (name === 'FacilitiesAndAmenities') {
          const result = dynamicFacilitiesForm.filter((item, i) => i !== index);
          setDynamicFacilitiesForm(result);
        } else if (name === 'PaymentPlan') {
          const result = dynamicPaymentPlan.filter((item, i) => i !== index);
          setDynamicPaymentPlan(result);
        } else if (name === 'AreasNearby') {
          const result = dynamicAreasNearBy.filter((item, i) => i !== index);
          setDynamicAreasNearBy(result);
        }
      };
    // -------------------------------------------------

    const handleSubmit = (e)=>{

  
        let data = {
            ...formData,
            facilities:[...dynamicFacilitiesForm],
            paymentPlan:[...dynamicPaymentPlan],
            areasNearBy:[...dynamicAreasNearBy]
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
        <div className=''>

            {/* Proprety Headline */}
            <div className="flex flex-col gap-2 mx-3">
                <label   htmlFor="propretyHeadline" className="sf-medium text-sm text-[#000000]">Proprety Headline</label>
                <input autoComplete="" value={formData.propretyHeadline} name="propretyHeadline" onChange={handleChange} type="text" id="propretyHeadline" placeholder="Parkside Hills" className="border border-[#E4E4E4] py-4 px-5 rounded-[10px] sf-normal text-sm text-[#666666]  outline-none" />
            </div>

            {/* Price */}
            <div className="flex flex-col gap-2 mx-3">
                <label   htmlFor="price" className="sf-medium text-sm text-[#000000]">Price (From in AED)</label>
                <input autoComplete="" name="price" value={formData.price} onChange={handleChange} type="text" id="price" placeholder="4M" className="border border-[#E4E4E4] py-4 px-5 rounded-[10px] sf-normal text-sm text-[#666666]  outline-none" />
            </div>

            {/* Handover Date */}
            <div className="flex flex-col gap-2 mx-3">
                <label   htmlFor="handoverDate" className="sf-medium text-sm text-[#000000]">Handover Date</label>
                <input autoComplete="" name="handoverDate" onChange={handleChange} type="date" id="handoverDate" placeholder="June 2025" className="border border-[#E4E4E4] py-4 px-5 rounded-[10px] sf-normal text-sm text-[#666666]  outline-none" />
            </div>

            {/* Beds */}
            <div className="flex flex-col gap-2 mx-3">
                <label   htmlFor="beds" className="sf-medium text-sm text-[#000000]">Beds</label>
                <input autoComplete="" name="beds" value={formData.beds} onChange={handleChange} type="text" id="beds" placeholder="1,2,3,Studio" className="border border-[#E4E4E4] py-4 px-5 rounded-[10px] sf-normal text-sm text-[#666666]  outline-none" />
            </div>

            {/*  */}
            <div className="flex flex-col gap-2 mx-3 relative">
                <label   htmlFor="email" className="sf-medium text-sm text-[#000000]">Email</label>
                <div onClick={()=>setOptionsProperties(!optionsProperties)} className="flex cursor-pointer border w-full border-[#E4E4E4] py-4 px-5 rounded-[10px] sf-normal text-sm text-[#666666]  outline-none">
                    <span>Email</span>
                    <span  className='absolute right-5 top-12'>{ optionsProperties ? <FaAngleUp /> : <FaAngleDown/>}</span>
                </div>
            { optionsProperties && <div className="z-20 absolute rounded-[10px] top-24 bg-white w-full border p-3">
                    <p className='py-1 cursor-pointer'>Dubai</p>
                    <p className='py-1 cursor-pointer'>Dubai</p>
                    <p className='py-1 cursor-pointer'>Dubai</p>
                </div>}
            </div>

            {/*  */}
            <div className="flex flex-col gap-2 mx-3 relative">
                <label   htmlFor="email" className="sf-medium text-sm text-[#000000]">Email</label>
                <div onClick={()=>setOptionsCities(!optionsCities)} className="flex cursor-pointer border w-full border-[#E4E4E4] py-4 px-5 rounded-[10px] sf-normal text-sm text-[#666666]  outline-none">
                    {/* <input autoComplete="email"  value={''} name="email" onChange={'handleChange'} type="email" id="email" placeholder="Enter your email" className="border w-full border-[#E4E4E4] py-4 px-5 rounded-[10px] sf-normal text-sm text-[#666666]  outline-none" /> */}
                    <span>Cities</span>
                    <span  className='absolute right-5 top-12'>{ optionsCities ? <FaAngleUp /> : <FaAngleDown/>}</span>
                </div>
            { optionsCities && <div className="z-30 absolute rounded-[10px] top-24 bg-white w-full border p-3">
                    <p className='py-1 cursor-pointer'>Cities</p>
                    <p className='py-1 cursor-pointer'>Cities</p>
                    <p className='py-1 cursor-pointer'>Cities</p>
                </div>}
            </div>

            {/* Google Map */}
            <div className="flex justify-center items-center">
                <div className="flex flex-col gap-2 mx-3 w-full">
                    <label   htmlFor="googleMapLink" className="sf-medium text-sm text-[#000000]">Google Map</label>
                    <textarea placeholder='Google Map Embed Link,' onChange={handleChange} value={formData.googleMapLink} name="googleMapLink" id="googleMapLink" cols="30" rows="6" className="border border-[#E4E4E4] py-4 px-5 rounded-[10px] sf-normal text-sm text-[#666666]  outline-none" ></textarea>
                </div>
                <div className="">
                    <iframe ref={frameOfLocation} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14185.324610322421!2d75.59100095716197!3d12.100691766322257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4499ba0b48f91%3A0x3e6d558a663dd7a3!2s!5e0!3m2!1sen!2sin!4v1710042486885!5m2!1sen!2sin"  className='border-none w-40 h-40 rounded-full'  allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>

            {/* Description */}
            <div className="flex flex-col gap-2 mx-3">
                <label htmlFor="description" className="sf-medium text-sm text-[#000000]">Description</label>
                <textarea name="description"  onChange={handleChange} value={formData.description} id="description" cols="30" rows="15" className="border border-[#E4E4E4] py-4 px-5 rounded-[10px] sf-normal text-sm text-[#666666]  outline-none" ></textarea>
            </div>

            {/* Facilities And Amenities */}
            <div className="flex flex-col gap-2 mx-3 relative">
                <label   htmlFor="FacilitiesAndAmenities" className="sf-medium text-sm text-[#000000]">Facilities And Amenities</label>
                { dynamicFacilitiesForm.map((item,index)=>{
                    return(
                        <div className="w-full flex justify-center items-center gap-2" key={index}>
                            <input key={index} value={item.value} name="FacilitiesAndAmenities"  onChange={(e)=>handleDynamicForm(e,index)} type="text" id="FacilitiesAndAmenities" placeholder="Type here..." className="border w-full border-[#E4E4E4] py-4 px-5 rounded-[10px] sf-normal text-sm text-[#666666]  outline-none" />
                            <span onClick={()=>removeDynamicForm('FacilitiesAndAmenities',index)} className='text-white p-3 rounded-full hover:bg-slate-600 cursor-pointer bg-black text-lg block'><IoMdRemove/></span>
                        </div>
                    )
                }) }
                <div onClick={handleDynamicFacilitiesMoreFields}  className="flex cursor-pointer justify-center items-center border w-full border-[#E4E4E4] py-4 px-5 rounded-[10px] sf-normal text-sm text-[#666666]  outline-none">
                    <span className='text-black text-lg '><IoMdAdd/></span>
                </div>
            </div>

            {/* Payment Plan */}
            <div className="flex flex-col gap-2 mx-3 relative">
                <label   htmlFor="PaymentPlan" className="sf-medium text-sm text-[#000000]">Payment Plan</label>
                { dynamicPaymentPlan.map((item,index)=>{
                    return(
                        <div className="w-full flex justify-center items-center gap-2" key={index}>
                            <input key={index} value={item.value} autoComplete="" onChange={(e)=>handleDynamicForm(e,index)} name="PaymentPlan" type="text" id="PaymentPlan" placeholder="Type here..." className=" w-full border border-[#E4E4E4] py-4 px-5 rounded-[10px] sf-normal text-sm text-[#666666]  outline-none" />
                            <span onClick={()=>removeDynamicForm('PaymentPlan',index)} className='text-white p-3 rounded-full hover:bg-slate-600 cursor-pointer bg-black text-lg block'><IoMdRemove/></span>
                        </div>
                    )
                }) }
                <div onClick={handleDynamicPaymentPlanMoreFields}  className="flex cursor-pointer justify-center items-center border w-full border-[#E4E4E4] py-4 px-5 rounded-[10px] sf-normal text-sm text-[#666666]  outline-none">
                    <span className='text-black text-lg '><IoMdAdd/></span>
                </div>
            </div>


        </div>

        <div className="px-4">

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


            {/* small image */}
            <div className="mt-6 flex items-center gap-3">
                <div className="flex gap-2  max-w-md flex-wrap">
                    {
                        smallImage.map((image,i)=>{
                        return <img key={i} src={ image.image || PlaceHolder} alt="placeholder" className='w-20 h-20  rounded-[10px]  object-cover ' />})
                    }
                </div>
                <div onClick={uploadSmallImageButton} className="w-16 h-11 bg-[#000000] text-[#ffffff] hover:bg-[#666666] flex justify-center items-center rounded-[4px] cursor-pointer">
                    <span> + </span>
                </div>
                <input ref={uploadSmallImage} type="file" accept="image/jpg, image/jpeg, image/png" onChange={hanldeSmallImageUploading} className='hidden' />
            </div>



            {/* Video */}
            <div className="mt-5 flex flex-col gap-2 mx-3">
                <label   htmlFor="videoLink" className="sf-medium text-sm text-[#000000]">Video Link</label>
                <input autoComplete="" value={formData.videoLink} name="videoLink" onChange={handleChange} type="url" id="videoLink" placeholder="URL - " className="border border-[#E4E4E4] py-4 px-5 rounded-[10px] sf-normal text-sm text-[#666666]  outline-none" />
            </div>

            <iframe ref={frameOfVideo} src={formData.videoLink} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='mt-4 w-full h-[300px]'></iframe>   

            {/*  Areas Nearby */}
            <div className="mt-3 lg:mt-20 flex flex-col gap-2 mx-3 relative">
                <label htmlFor="AreasNearby" className="sf-medium text-sm text-[#000000]">Areas Nearby</label>
                { dynamicAreasNearBy.map((item,index)=>{
                    return(
                        <div className="w-full flex justify-center items-center gap-2" key={index}>
                            <input key={index} autoComplete="" value={item.value} onChange={(e)=>handleDynamicForm(e,index)}  name="AreasNearby"type="text" id="AreasNearby" placeholder="Type here..." className="w-full border border-[#E4E4E4] py-4 px-5 rounded-[10px] sf-normal text-sm text-[#666666]  outline-none" />
                            <span onClick={()=>removeDynamicForm('AreasNearby',index)} className='text-white p-3 rounded-full hover:bg-slate-600 cursor-pointer bg-black text-lg block'><IoMdRemove/></span>
                        </div>
                    )
                }) }
                <div onClick={handleDynamicAreasNearByFormMoreFields}  className="flex cursor-pointer justify-center items-center border w-full border-[#E4E4E4] py-4 px-5 rounded-[10px] sf-normal text-sm text-[#666666]  outline-none">
                    <span className='text-black text-lg '><IoMdAdd/></span>
                </div>
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

export default EditProperty