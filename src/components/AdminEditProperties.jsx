import React from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { IoMdAdd, IoMdRemove } from 'react-icons/io';
import PlaceHolder from "../assets/placeholder/placeholder-image.png";
import { errorToast, successToast } from '../toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { editPropertySuccess, setError, setLoading } from '../features/propertiesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getCities, getDevelopers, updateProperties } from '../api';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { fetchCities } from '../features/citiesSlice';
import { fetchDevelopers } from '../features/developerSlice';

function EditProperty() {

    const {state} = useLocation()
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const animatedComponents = makeAnimated();

    const { data } = useSelector((state) => state.city); 
    const { developers } = useSelector((state) => state.developer); 


    // --------------------------------------------
    const uploadImage = React.useRef(null);
    const uploadSmallImage = React.useRef(null);
    const frameOfLocation = React.useRef(null);
    const frameOfVideo = React.useRef(null);
    // --------------------------------------------



    // ------------------------------------------
    const [optionsCities,setOptionsCities] = React.useState(false)
    const [optionsDeveloper,setOptionsDeveloper] = React.useState(false)

    // ------------------------------------------


    // ------------------------------------------------------
    const [dynamicFacilitiesForm,setDynamicFacilitiesForm] = React.useState([{value:''}])
    const [dynamicAreasNearBy,setDynamicAreasNearBy] = React.useState([{value:''}])
    const [dynamicPaymentPlan,setDynamicPaymentPlan] = React.useState([{value:''}])
    // ------------------------------------------------------



    // ---------------------------------------------------
    const [smallImage,setSmallImage] = React.useState([])
    // ---------------------------------------------------


    // -----------------------------------------------------
    const [formData,setFormData] = React.useState({propretyHeadline:'',price:'',beds:'',googleMapLink:'',description:'',handoverDate:'',mainImgaeLink:'',videoLink:'',address:'',propertyType:[]})
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
    
    const options = [
        { value: 'apartment', label: 'Apartment' },
        { value: 'townhouse', label: 'Townhouse' },
        { value: 'penthouse', label: 'Penthouse' }
      ]

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

    const handleSubmit = async(e)=>{

  
        let data = {
            ...formData,
            facilities:[...dynamicFacilitiesForm],
            paymentPlan:[...dynamicPaymentPlan],
            areasNearBy:[...dynamicAreasNearBy],
            smallImage:smallImage

        }
        e.preventDefault()
        try {
            dispatch(setLoading());
            await updateProperties(data);
            dispatch(editPropertySuccess());
            successToast('Successfully Updated')
            navigate('/admin/edit-properties')
        } catch (error) {
            if (error.response && error.response.data) {
                dispatch(setError(error.response.data.message));
                errorToast(error.response.data.message)
              } else {
                dispatch(setError('An error occurred during login.'));
                errorToast('An error occurred during login.');
              }
        }
          
    }

    const handleCity = (name,Id)=>{
        setOptionsCities(!optionsCities)
        setFormData({...formData,cityRef:Id,cityName:name})   
    }
   
    const handlePropertyType = (value)=>{
        const result = value.map((item)=> item.value )
        setFormData({...formData,propertyType:result})   
    }


    const fetchdata =async ()=>{
        try {
          const response_cities = await getCities()
          dispatch(fetchCities(response_cities));
          const response_developers = await getDevelopers()
          dispatch(fetchDevelopers(response_developers));
        } catch (error) {
          if (error.response && error.response.data) {
            dispatch(setError(error.response.data.message));
            errorToast(error.response.data.message)
          } else {
            dispatch(setError('An error occurred during login.'));
            errorToast('An error occurred during login.');
          }
        }
    }

    const handleDevelopers = (name,Id)=>{
        setOptionsDeveloper(!optionsDeveloper)
        setFormData({...formData,developerRef:Id,developerName:name})   
    }

    React.useEffect(()=>{
        setFormData({...state})
        setDynamicAreasNearBy([...state.areasNearBy]);
        setDynamicPaymentPlan([...state.paymentPlan]);
        setDynamicFacilitiesForm([...state.facilities])
        setSmallImage([...state.smallImage]);
        fetchdata();
    },[state])

    const removeSubImage = (indexOf)=>{
        const result = smallImage.filter((i,index)=>index != indexOf)
        setSmallImage(result)
     }
 


  return (
    <form onSubmit={handleSubmit} className='flex flex-wrap'>
        <div className=''>

            {/* Proprety Headline */}
            <div className="flex flex-col gap-2 mx-3">
                <label   htmlFor="propretyHeadline" className="font-medium sf-medium text-sm text-[#000000]">Proprety Headline</label>
                <input autoComplete="" value={formData.propretyHeadline} name="propretyHeadline" onChange={handleChange} type="text" id="propretyHeadline" placeholder="Parkside Hills" className="border border-[#E4E4E4] py-4 px-5 rounded-[10px] sf-normal font-extralight text-sm text-[#666666]  outline-none" />
            </div>

            {/* Price */}
            <div className="flex flex-col gap-2 mx-3">
                <label   htmlFor="price" className="sf-medium font-medium text-sm text-[#000000]">Price (From in AED)</label>
                <input autoComplete="" name="price" value={formData.price} onChange={handleChange} type="text" id="price" placeholder="4M" className="border border-[#E4E4E4] py-4 px-5 rounded-[10px] sf-normal font-extralight text-sm text-[#666666]  outline-none" />
            </div>

            {/* Handover Date */}
            <div className="flex flex-col gap-2 mx-3">
                <label   htmlFor="handoverDate" className="sf-medium  font-medium text-sm text-[#000000]">Handover Date</label>
                <input autoComplete="" defaultValue={formData.handoverDate} name="handoverDate" onChange={handleChange} type="date" id="handoverDate" placeholder="June 2025" className="border border-[#E4E4E4] py-4 px-5 rounded-[10px] sf-normal font-extralight text-sm text-[#666666]  outline-none" />
            </div>

            {/* Beds */}
            <div className="flex flex-col gap-2 mx-3">
                <label   htmlFor="beds" className="sf-medium  font-medium text-sm text-[#000000]">Beds</label>
                <input autoComplete="" name="beds" value={formData.beds} onChange={handleChange} type="text" id="beds" placeholder="1,2,3,Studio" className="border border-[#E4E4E4] py-4 px-5 rounded-[10px] sf-normal font-extralight text-sm text-[#666666]  outline-none" />
            </div>

            {/* Property Type */}
            <div className="flex cursor-pointer py-4 px-5 rounded-[10px] sf-normal font-extralight text-sm text-[#666666]  outline-none">
                <Select name='propertyType' onChange={handlePropertyType} closeMenuOnSelect={false} components={animatedComponents} isMulti options={options} />
            </div>

            {/* Cities */}
            <div className="flex flex-col gap-2 mx-3 relative">
                <label   htmlFor="email" className="sf-medium font-medium text-sm text-[#000000]">Cities</label>
                <div onClick={()=>setOptionsCities(!optionsCities)} className="flex cursor-pointer border w-full border-[#E4E4E4] py-4 px-5 rounded-[10px] sf-normal font-extralight text-sm text-[#666666]  outline-none">
                    <span>{formData.cityName ? formData.cityName : 'Select City' }</span>
                     <span  className='absolute right-5 top-12'>{ optionsCities ? <FaAngleUp /> : <FaAngleDown/>}</span>
                </div>
                    { optionsCities && <div className="z-20 absolute rounded-[10px] top-24 bg-white w-full border p-3">
                    { data && data.map((item,i)=>  <p key={i} onClick={(()=>handleCity(item.cityName,item._id))} className='py-1 cursor-pointer'>{item.cityName}</p> )  }
                </div>}
            </div> 


            {/* Google Map */}
            <div className="flex justify-center items-center">
                <div className="flex flex-col gap-2 mx-3 w-full">
                    <label   htmlFor="googleMapLink" className="sf-medium font-medium text-sm text-[#000000]">Google Map</label>
                    <textarea placeholder='Google Map Embed Link,' onChange={handleChange} value={formData.googleMapLink} name="googleMapLink" id="googleMapLink" cols="30" rows="6" className="border border-[#E4E4E4] py-4 px-5 rounded-[10px] font-extralight sf-normal text-sm text-[#666666]  outline-none" ></textarea>
                </div>
                <div className="">
                    <iframe ref={frameOfLocation} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14185.324610322421!2d75.59100095716197!3d12.100691766322257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4499ba0b48f91%3A0x3e6d558a663dd7a3!2s!5e0!3m2!1sen!2sin!4v1710042486885!5m2!1sen!2sin"  className='border-none w-40 h-40 rounded-full'  allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>

              {/* Address */}
              <div className="flex flex-col gap-2 mx-3">
                <label htmlFor="address" className="sf-medium font-medium text-sm text-[#000000]">Address</label>
                <textarea name="address"  onChange={handleChange}  id="address" cols="30" rows="15" className="border border-[#E4E4E4] py-4 px-5 rounded-[10px] sf-normal font-extralight text-sm text-[#666666]  outline-none" value={formData.address} ></textarea>
            </div>

            {/* Description */}
            <div className="flex flex-col gap-2 mx-3">
                <label htmlFor="description" className="sf-medium font-medium text-sm text-[#000000]">Description</label>
                <textarea name="description"  onChange={handleChange} value={formData.description} id="description" cols="30" rows="15" className="border border-[#E4E4E4] py-4 px-5 rounded-[10px] sf-normal font-extralight text-sm text-[#666666]  outline-none" ></textarea>
            </div>

             {/* Developer */}
             <div className="flex flex-col gap-2 mx-3 relative">
                <label   htmlFor="developerRef" className="sf-medium font-medium text-sm text-[#000000]">Developer</label>
                <div onClick={()=>setOptionsDeveloper(!optionsDeveloper)} className="flex cursor-pointer border w-full border-[#E4E4E4] py-4 px-5 rounded-[10px] sf-normal  font-extralight text-sm text-[#666666]  outline-none">
                    <span>{formData.developerName ? formData.developerName : 'Select Developer' }</span>
                    <span  className='absolute right-5 top-12'>{ optionsDeveloper ? <FaAngleUp /> : <FaAngleDown/>}</span>
                </div>
            { optionsDeveloper && <div className="z-20 absolute rounded-[10px] top-24 bg-white w-full border p-3">
                    { developers && developers.map((item)=>  <p key={item._id} onClick={(()=>handleDevelopers(item.developerName,item._id))} className='py-1 cursor-pointer'>{item.developerName}</p> )  }
                </div>}
            </div>

            {/* Facilities And Amenities */}
            <div className="flex flex-col gap-2 mx-3 relative">
                <label   htmlFor="FacilitiesAndAmenities" className="sf-medium font-medium text-sm text-[#000000]">Facilities And Amenities</label>
                { dynamicFacilitiesForm.map((item,index)=>{
                    return(
                        <div className="w-full flex justify-center items-center gap-2" key={index}>
                            <input key={index} value={item.value} name="FacilitiesAndAmenities"  onChange={(e)=>handleDynamicForm(e,index)} type="text" id="FacilitiesAndAmenities" placeholder="Type here..." className="border w-full border-[#E4E4E4] py-4 px-5 rounded-[10px] sf-normal font-extralight text-sm text-[#666666]  outline-none" />
                            <span onClick={()=>removeDynamicForm('FacilitiesAndAmenities',index)} className='text-white p-3 rounded-full hover:bg-slate-600 cursor-pointer bg-black text-lg block'><IoMdRemove/></span>
                        </div>
                    )
                }) }
                <div onClick={handleDynamicFacilitiesMoreFields}  className="flex cursor-pointer justify-center items-center border w-full border-[#E4E4E4] py-4 px-5 rounded-[10px] sf-normal font-extralight text-sm text-[#666666]  outline-none">
                    <span className='text-black text-lg '><IoMdAdd/></span>
                </div>
            </div>

            {/* Payment Plan */}
            <div className="flex flex-col gap-2 mx-3 relative">
                <label   htmlFor="PaymentPlan" className="sf-medium font-medium text-sm text-[#000000]">Payment Plan</label>
                { dynamicPaymentPlan.map((item,index)=>{
                    return(
                        <div className="w-full flex justify-center items-center gap-2" key={index}>
                            <input key={index} value={item.value} autoComplete="" onChange={(e)=>handleDynamicForm(e,index)} name="PaymentPlan" type="text" id="PaymentPlan" placeholder="Type here..." className=" w-full border border-[#E4E4E4] py-4 px-5 rounded-[10px] sf-normal font-extralight text-sm text-[#666666]  outline-none" />
                            <span onClick={()=>removeDynamicForm('PaymentPlan',index)} className='text-white p-3 rounded-full hover:bg-slate-600 cursor-pointer bg-black text-lg block'><IoMdRemove/></span>
                        </div>
                    )
                }) }
                <div onClick={handleDynamicPaymentPlanMoreFields}  className="flex cursor-pointer justify-center items-center border w-full border-[#E4E4E4] py-4 px-5 rounded-[10px] sf-normal font-extralight text-sm text-[#666666]  outline-none">
                    <span className='text-black text-lg '><IoMdAdd/></span>
                </div>
            </div>


        </div>

        <div className="px-4">

            {/*  Main image */}
            <h1 className='mb-3 text-4xl sf-medium font-medium'>Media</h1>
            <h2 className='sf-medium font-medium text-sm mb-3'>Main Image</h2>
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
                        return (
                            <div className="relative" key={i}>
                                <span onClick={()=>removeSubImage(i)} title='remove' className='cursor-pointer absolute top-2 left-1 text-xs bg-red-600  py-0 px-1 text-center rounded-full text-white'>x</span>
                                <img key={i} src={ image.image || PlaceHolder} alt="placeholder" className='w-20 h-20  rounded-[10px]  object-cover ' />
                            </div>
                        )})
                    }
                     
                </div>
                <div onClick={uploadSmallImageButton} className="w-16 h-11 bg-[#000000] text-[#ffffff] hover:bg-[#666666] flex justify-center items-center rounded-[4px] cursor-pointer">
                    <span> + </span>
                </div>
                <input ref={uploadSmallImage} type="file" accept="image/jpg, image/jpeg, image/png" onChange={hanldeSmallImageUploading} className='hidden' />
            </div>



            {/* Video */}
            <div className="mt-5 flex flex-col gap-2 mx-3">
                <label   htmlFor="videoLink" className="sf-medium font-medium text-sm text-[#000000]">Video Link</label>
                <input autoComplete="" value={formData.videoLink} name="videoLink" onChange={handleChange} type="url" id="videoLink" placeholder="URL - " className="border border-[#E4E4E4] py-4 px-5 rounded-[10px] sf-normal font-extralight text-sm text-[#666666]  outline-none" />
            </div>

            <iframe ref={frameOfVideo} src={formData.videoLink} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='mt-4 w-full h-[300px]'></iframe>   

            {/*  Areas Nearby */}
            <div className="mt-3 lg:mt-20 flex flex-col gap-2 mx-3 relative">
                <label htmlFor="AreasNearby" className="sf-medium font-medium text-sm text-[#000000]">Areas Nearby</label>
                { dynamicAreasNearBy.map((item,index)=>{
                    return(
                        <div className="w-full flex justify-center items-center gap-2" key={index}>
                            <input key={index} autoComplete="" value={item.value} onChange={(e)=>handleDynamicForm(e,index)}  name="AreasNearby"type="text" id="AreasNearby" placeholder="Type here..." className="w-full border border-[#E4E4E4] py-4 px-5 rounded-[10px] sf-normal font-extralight text-sm text-[#666666]  outline-none" />
                            <span onClick={()=>removeDynamicForm('AreasNearby',index)} className='text-white p-3 rounded-full hover:bg-slate-600 cursor-pointer bg-black text-lg block'><IoMdRemove/></span>
                        </div>
                    )
                }) }
                <div onClick={handleDynamicAreasNearByFormMoreFields}  className="flex cursor-pointer justify-center items-center border w-full border-[#E4E4E4] py-4 px-5 rounded-[10px] sf-normal font-extralight text-sm text-[#666666]  outline-none">
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