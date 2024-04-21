import React from "react";
import Header from "../../components/user/Header";
import HomeIndex from "../../components/user/HomeIndex.jsx";

import Brands from "../../components/user/Brands.jsx";
import PropertiesCard from "../../components/user/PropertiesCard.jsx";
import { addingEnquiry, getBanners, getBlogs, getCities, getProperties } from "../../api";
import { NavLink, useNavigate } from "react-router-dom";
import PropertyType from "../../components/user/PropertyType.jsx";
import {CloseSVG } from "../../assets/icons"
import UserBanner from "../../components/UserBanner.jsx";

import {SuccessLabel} from "../../assets/images/index.js"
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./index.css";
// import required modules
import { Pagination } from "swiper/modules";
import Footer from "../../components/Footer.jsx";
import { errorToast } from "../../toast/index.js";
import Lazyloading from "../../components/Lazyloading/Lazyloading.jsx";

function UserHome() {
  const [properties, setProperties] = React.useState([]);
  const [banners, setBanners] = React.useState([]);
  const [cities, setCities] = React.useState([]);
  const [blogs, setBlogs] = React.useState([]);
  const [modal, setModal] = React.useState(false);
  const [number, setNumber] = React.useState('');
  const [name, setName] = React.useState('');
  const [id, setId] = React.useState('');
  const [developerId, setDeveloperId] = React.useState('');
  const navigate = useNavigate();
  const [successCLoseModal,setSuccessCLoseModal] = React.useState(false)

  React.useEffect(() => {
    fetchdata();

   

    return()=>{
      setSuccessCLoseModal(false)
      setDeveloperId('')
      setId('')
      setName('')
      setNumber('')
      setCities([])
      setBlogs([])
      setBanners([])
      setProperties([])
      setModal(false)
    }
  }, []);

  const fetchdata = async () => {
    try {
      const response = await getProperties();
      setProperties(response.result);
      const banners = await getBanners();
      setBanners(banners.result);
      const cities = await getCities();
      setCities(cities.result);
      const blogs = await getBlogs();
      setBlogs(blogs.result);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleRegister = (id,deveId)=>{
    setDeveloperId(deveId)
    setModal(true)
    setSuccessCLoseModal(false)
    setId(id)
  }
  const closeRegister = ()=>{
    setModal(false)
    setSuccessCLoseModal(false)
    setId('')
  }

  const handleSubmit = async(e)=>{
        
    try {
        e.preventDefault()

        if(!name) return errorToast('Name is required')
        if(name.length < 3 ) return errorToast('Minimum three chracters mustbe entered')
        if(!number) return errorToast('Mobile number is required')
        if(number.length > 10 ) return errorToast('Mobile number is no morethan 10')
        if(number.length < 10 ) return errorToast('10 digits required')

        let data = {
          name,
          number,
          propertyId:id,
          developerId
      }
     
        await addingEnquiry(data);
     
        setName('')
        setNumber('')
        setModal(false)
        setSuccessCLoseModal(true)

    }  catch (error) {
        console.log(error.message);
      }
}
  return (
    <div className="">
      <HomeIndex>
        <Header />
        <div className="px-5 text-center lg:text-start lg:ps-20 pt-40 lg:pt-36">
          <h1 className=" text-[37px]  font-bold poppins lg:text-6xl text-white lg:leading-tight">
            Discover Off Plan Properties in <br />
            Dubai and Other Emirates.
          </h1>

          <Brands />

          <button onClick={()=>navigate('/our-sellers')}  className=" mt-8 border border-white bg-transparent  rounded-[7px] text-white px-[18px] py-[12px] poppins text-[14px] leading-5 ">
            Know More Sellers
          </button>
        </div>
      </HomeIndex>

      <div className="mx-5 flex flex-col justify-center items-center md:mx-20 lg:mx-28 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-7 my-10 max-w-[1300px]">
          {properties &&
            properties.map((item, index) => {
              if (index < 9) {
                return <PropertiesCard navigate={navigate} handleRegister={handleRegister} key={item?._id} item={item} />;
              }
            })}
        </div>

      { modal &&  <div className="w-full h-screen z-50 fixed top-0  flex justify-center items-center left-0" style={{background:"rgba(0,0,0,0.9"}}>
            <form onSubmit={handleSubmit} className="rounded-[20px] py-7 max-w-[820px] w-[90%] lg:w-full   h-auto flex flex-col  bg-white px-8 ">
              <div className="justify-between w-ful flex text-[30px] mb-4 sf-medium ">
                <p>Register Your Interest</p>
                <p> <img onClick={closeRegister} src={CloseSVG} alt="loading" loading="lazy" className="w-6 h-6" /> </p>
              </div>
              <input type="text" name={name} onChange={(e)=>setName(e.target.value)} placeholder="Name" className="mb-1 outline-none w-[100%] py-4 px-5  appearance-none border border-[#E4E4E4] text-xs poppins rounded-[10px]" />
              <input type="number" name={number} onChange={(e)=>setNumber(e.target.value)} placeholder="Phone" className="outline-none w-[100%] py-4 px-5  appearance-none border border-[#E4E4E4] text-xs poppins rounded-[10px]" />
              <input type="submit"  value={'Submit'} className="outline-none w-[100%] py-4 px-5  appearance-none border bg-black text-white mt-2 text-xs poppins rounded-[10px]" />
            </form>
        </div>}

        { successCLoseModal && <div className="w-full h-screen z-50 fixed top-0  flex justify-center items-center left-0" style={{background:"rgba(0,0,0,0.9"}}>
           <div className="relative rounded-[20px] py-7 max-w-[820px] w-[90%] lg:w-full   h-auto flex flex-col  bg-white px-8  justify-center items-center " >
             <Lazyloading alt={'loading'} src={SuccessLabel} className={'w-[100px] object-contain'}  />
             <p>
               {/* <img onClick={closeRegister} src={CloseSVG} alt="loading" loading="lazy" className="w-6 h-6" />  */}
               <div className="" onClick={()=>setSuccessCLoseModal(false)}>
                    <Lazyloading  className={'w-6 h-6 absolute right-8 top-6'} src={CloseSVG} alt={'loading'} />
               </div>
               </p>
             <h1 className="text-[30px] poppins-semibold mt-4 ">Your Interest has Been Registered</h1>
             <h2 className="text-[18px]  poppins-medium mt-4">Our team will contact you shortly</h2>
           </div>
            {/* <form onSubmit={handleSubmit} >
              <div className="justify-between w-ful flex text-[30px] mb-4 sf-medium ">
                <p>Register Your Interest</p>
                
              </div>
              <input type="text" name={name} onChange={(e)=>setName(e.target.value)} placeholder="Name" className="mb-1 outline-none w-[100%] py-4 px-5  appearance-none border border-[#E4E4E4] text-xs poppins rounded-[10px]" />
              <input type="number" name={number} onChange={(e)=>setNumber(e.target.value)} placeholder="Phone" className="outline-none w-[100%] py-4 px-5  appearance-none border border-[#E4E4E4] text-xs poppins rounded-[10px]" />
              <input type="submit"  value={'Submit'} className="outline-none w-[100%] py-4 px-5  appearance-none border bg-black text-white mt-2 text-xs poppins rounded-[10px]" />
            </form> */}
        </div>}

        <div className="">
          <div className="m-auto text-[15px] poppins-semibold px-6 py-3 rounded-[10px] bg-[#0D1117] w-fit text-white">
            <NavLink to={`/property-type/all/all`}>
              <h1>View All</h1>
            </NavLink>
          </div>
        </div>

        {/* property type */}

        <div className="my-10 w-full max-w-[1300px]">
          <PropertyType  />
        </div>

        {/* ------------- */}

        {/* banner */}
        <div className="w-full max-w-[1300px] my-8 mt-7">
          {banners &&
            banners.map((item) => {
              return <UserBanner key={item._id} {...item} />;
            })}
        </div>

        {/*  */}
        <section className="w-full max-w-[1300px]">
          <div className="sf-medium-600 flex items-center justify-between w-full">
            <h1 className="flex  flex-col leading-tight mb-3 ">
              <span className=" text-[20px] lg:text-[50px] text-[#666666]">
                Explore city based
              </span>{" "}
              <span className="text-[40px] lg:text-[70px]">Projects</span>
            </h1>
            <button onClick={()=>navigate('/all-cities')} className="hidden sm:block px-4 py-3  bg-black text-white rounded-[10px] poppins-semibold">
              View All Cities
            </button>
          </div>
          <div className="hidden  md:grid gap-3 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 max-w-[1300px]">
            {cities.map((item,index) => {
              if(index < 10){

              return (
                <div className="border rounded-[10px]" key={item._id}>
                  <div className="relative rounded-[10px] overflow-hidden  h-[200px]">
                    <img
                      src={item.mainImgaeLink}
                      alt="loading"
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                    <div className="bg-gradient-to-b from-black to-black absolute top-0 w-full h-full opacity-20 z-20"></div>
                    <div className="px-3 py-3 absolute top-0 w-full h-full z-30">
                      <span className="block text-white w-fit bg-[#666666] text-[10px] rounded-[40px] px-3 py-2">
                        {item.emirateName}
                      </span>
                      <p className="poppins-semibold text-[24px] text-white ">
                        {item.cityName}
                      </p>
                    </div>
                  </div>
                  <p className="py-4 px-5 text-[15px] poppins-medium">
                    {" "}
                    {item?.count} New Projects for Sale{" "}
                  </p>
                </div>
              );

            }

            })}
          </div>

          {/* when open mobile */}

          <div className="rounded-[10px] overflow-hidden block sm:hidden w-full h-[300px]">
            <Swiper
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className=""
              style={{ width: "100%" }}
            >
              {cities &&
                cities.map((item) => {
                  return (
                    <SwiperSlide key={item._id} className="">
                      <div className="h-[280px] rounded-[10px] border-[#D2D2D2] border">
                        <img
                          src={item.mainImgaeLink}
                          alt="loading"
                          loading="lazy"
                          className="w-full h-[200px] rounded-[10px] object-cover"
                        />
                        <p className="px-3 pt-4">84 New Propreties for Sale </p>
                      </div>
                    </SwiperSlide>
                  );
                })}
            </Swiper>
          </div>

          <div className="mb-10 flex sm:hidden justify-center">
            <button onClick={()=>navigate('/all-cities')} className="bg-black px-5 py-5 poppins-semibold text-[14px] rounded-[10px] text-white">
              View All Cities
            </button>
          </div>

          {/*  */}
        </section>
        {/*  */}

        {/* blogs */}
        <section className="max-w-[1300px] w-full mt-14">
          <div className=" sf-medium-600 flex items-center justify-between ">
            <h1 className="flex flex-col leading-tight ">
              <span className=" text-[20px] lg:text-[50px] text-[#666666]">
                Blogs:
              </span>{" "}
              <span className="text-[40px] lg:text-[70px]">
                Read more, Learn More
              </span>
            </h1>
            <button onClick={()=>navigate(`/blog`)} className="hidden sm:block px-4 py-3  bg-black text-white rounded-[10px] poppins-semibold">
              View All BLogs
            </button>
          </div>

          {/* mapping */}

          <div className="grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 mt-4  gap-5">
            {blogs &&
              blogs.map((item,index) => {

                if(index < 3) {

                return (
                 <div key={item._id}  className="border p-4 rounded-[15px] h-fit">
                      <div className="rounded-[10px] overflow-hidden h-[220px]" key={item._id}>
                        <img src={item.mainImgaeLink} className="w-full h-full object-cover" />
                      </div>
                      <div className="poppins-medium text-2xl">
                        <h1 className="text-[25px] pt-4">{item.blogTitle.length > 21 ? item.blogTitle.slice(0,21)+'...' : item.blogTitle }</h1>

                      </div>
                      <div className="break-words poppins-medium text-sm text-[#666666] text-left mt-3">
                        <p>{item.blogBody.length > 134 ? item.blogBody.slice(0,150)+"..." : item.blogBody }</p>
                      </div>
                      <div className="my-4">
                        <button type="button" className="bg-white border border-[#000000] w-full py-3 rounded-[5px] text-[10px] font-semibold poppins-semibold" onClick={()=>navigate(`/blog/${item.blogTitle}/${item._id}`)}>Keep Reading</button>
                      </div>
                 </div>
                 
                );
              }

              })}
              <div className="mt-4 mb-10 flex justify-center">
              <button onClick={()=>navigate('/blog')} className="block sm:hidden px-6 py-4  bg-black text-white rounded-[10px] w-fit poppins-semibold">
              View All Blogs
            </button>
              </div>
          </div>

          {/*  */}
        </section>

        {/* blogs */}


        {/* footer */}
      </div>
        <Footer/>
    </div>
  );
}

export default UserHome;
