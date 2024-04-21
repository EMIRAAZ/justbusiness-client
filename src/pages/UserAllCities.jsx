import React from "react";
import Header from "../components/user/Header";
import Footer from "../components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
import { getCities } from "../api";
import { useNavigate } from "react-router-dom";

function UserAllCities() {
  const [cities, setCities] = React.useState([]);

  const navigate = useNavigate();

  React.useEffect(() => {
    fetchdata();

    return () => {
      setCities([]);
    };
  }, []);

  const fetchdata = async () => {
    try {
      const cities = await getCities();
      setCities(cities.result);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <div className="mt-2">
        <Header />
      </div>

      {/*  */}
      <section className="mt-[24px] px-5 w-full lg:px-28  xl:mx-auto mb-10">
        <div className="md:grid gap-3 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 max-w-[1300px]">
          {cities.map((item) => {
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
          })}
        </div>

       
      </section>
      {/*  */}

      <Footer />
    </div>
  );
}

export default UserAllCities;
