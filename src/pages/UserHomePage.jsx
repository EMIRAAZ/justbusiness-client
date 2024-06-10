import React, { useRef, useState } from "react";
import Header from "../components/Header/Header";
import { addingInterestAPI, getBlogsAPI, getPackagesAPI } from "../api";
import Blog from "../components/Blog/Blog";
import MobileBlog from "../components/Blog/MobileBlog";
import Footer from "../components/Footer/Footer";
import { Helmet } from "react-helmet";
import Loader from "../components/Loader/Loader";
import UserHomeLandingPage from "../components/UserHomeLandingPage/UserHomeLandingPage.jsx";
import Button from "../components/Button/Button.jsx";
import {
  TypographyFive,
  TypographyFour,
  TypographyFourteen,
  TypographySeven,
  TypographySix,
  TypographyThirteen,
  TypographyThree,
  TypographyTwelve,
} from "../styles/index.js";
import Cards from "../components/Cards/Cards";
import Contact from "../components/Contact/Contact";
import { IoCloseOutline } from "react-icons/io5";
import { errorToast } from "../toast/index.js";
import FirstCard from "./LandingPageCards/FirstCard";
import SecondCard from "./LandingPageCards/SecondCard";
import ThirdCard from ".//LandingPageCards/ThirdCard";
import FourthCard from "./LandingPageCards/FourthCard.jsx";
import FifthCard from "./LandingPageCards/FifthCard.jsx";
import SevenCard from "./LandingPageCards/SevenCard.jsx";
import SixthCard from "./LandingPageCards/SixthCard.jsx";
import ContactCArd from "./LandingPageCards/ContactCard.jsx";
import FinalCard from "./LandingPageCards/FinalCard.jsx";
function UserHomePage() {
  const [data, setData] = React.useState([]);
  const [refresh, setRefresh] = React.useState(true);
  const [isLoading, setLoading] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [itemsPerPage] = React.useState(12); // Number of items to display per page
  const [interestPoppup, setInterestPoppup] = React.useState(false); // Number of items to display per page
  const [interestPoppupID, setInterestPoppupID] = useState("");
  const [userCardInputData, setUserCardInputData] = useState({
    activityID: "",
    owners: "",
    visa: "",
    officeSpace: "",
    BusinessName: "",
    website: "",
    name: "",
    number: "",
    email: "",
  });
  const registerNumberRef = useRef(null);
  const [packagesState,setPackagesState] = useState([])

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [successToast, setSuccssToast] = useState(false);
  const [indexPageCardCount, setIndexPageCardCount] = useState(1);

  React.useEffect(() => {
    setLoading(true);
    fetchdata();
  }, [refresh]);

  const validateNumber = (e) => {
    const value = e.target.value;
    const regex = /^\+\d{1,3}\d{1,16}$/;
    if (!regex.test(value)) {
      // Display a validation error or handle invalid input
      console.error("Invalid phone number format.");
    } else {
      setNumber(value);
    }
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      if (!name) return errorToast("Name is required");
      if (!email) return errorToast("Mail is required");
      if (name.length < 3)
        return errorToast("Minimum three chracters mustbe entered");
      if (!number) return errorToast("Mobile number is required");
      if (number.length > 20)
        return errorToast("Mobile number is no morethan 20");
      if (number.length < 10) return errorToast("10 digits required");

      let data = {
        name,
        email,
        number,
        pacakgeID: interestPoppupID,
      };

      await addingInterestAPI(data);

      setName("");
      setNumber("");
      setEmail("");
      setInterestPoppupID("");

      setInterestPoppup(false);

      setSuccssToast(true);
      registerNumberRef.current.value = "";
    } catch (error) {
      console.log(error.message);
    }
  };

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const fetchdata = async () => {
    try {
      setLoading(true);
      const result = await getBlogsAPI();
      const sortedBlogs = result.result.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      setData(sortedBlogs);
      const get_package = await getPackagesAPI();
      setPackagesState(get_package.result);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };

  const closeSuccessPoppup = () => {
    setSuccssToast(false);
  };

  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Calculate the starting index and ending index of items to display for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, data.length);

  const currentData = data.slice(startIndex, endIndex);

  const seo_description = "thedubaithings blog  page is here";
  const seo_title = "thedubaithings";
  const seo_site_url = window.location.href;

  const openInterestPoppup = (id) => {
    setInterestPoppup(true);
    setInterestPoppupID(id);
  };

  const handleActivityCount = (e) => {
    setIndexPageCardCount(e);
  };

  const closeInterestPoppup = () => setInterestPoppup(false);

  return (
    <div>
      <Helmet>
        <title>{seo_title}</title>
        <meta name="description" content={seo_description} />
        <meta property="og:title" content={seo_title} />
        <meta property="og:description" content={seo_description} />
        <meta property="og:image" content={seo_description} />
        <meta property="og:url" content={seo_site_url} />
        <meta property="og:type" content="website" />
      </Helmet>

      {isLoading ? (
        <Loader />
      ) : (
        <>
          {/* <Header /> */}

          <UserHomeLandingPage>
            <Header />
            {indexPageCardCount === 1 && (
              <FirstCard handleActivityCount={handleActivityCount} />
            )}
            {indexPageCardCount === 2 && (
              <SecondCard
                userCardInputData={userCardInputData}
                setUserCardInputData={setUserCardInputData}
                handleActivityCount={handleActivityCount}
              />
            )}
            {indexPageCardCount === 3 && (
              <ThirdCard
                userCardInputData={userCardInputData}
                setUserCardInputData={setUserCardInputData}
                handleActivityCount={handleActivityCount}
              />
            )}
            {indexPageCardCount === 4 && (
              <FourthCard
                userCardInputData={userCardInputData}
                setUserCardInputData={setUserCardInputData}
                handleActivityCount={handleActivityCount}
              />
            )}
            {indexPageCardCount === 5 && (
              <FifthCard
                userCardInputData={userCardInputData}
                setUserCardInputData={setUserCardInputData}
                handleActivityCount={handleActivityCount}
              />
            )}
            {indexPageCardCount === 6 && (
              <SixthCard
                userCardInputData={userCardInputData}
                setUserCardInputData={setUserCardInputData}
                handleActivityCount={handleActivityCount}
              />
            )}
            {indexPageCardCount === 7 && (
              <SevenCard
                userCardInputData={userCardInputData}
                setUserCardInputData={setUserCardInputData}
                handleActivityCount={handleActivityCount}
              />
            )}
            {indexPageCardCount === 8 && (
              <ContactCArd
                userCardInputData={userCardInputData}
                setUserCardInputData={setUserCardInputData}
                handleActivityCount={handleActivityCount}
              />
            )}
            {indexPageCardCount === 9 && (
              <FinalCard
                userCardInputData={userCardInputData}
                setUserCardInputData={setUserCardInputData}
                handleActivityCount={handleActivityCount}
              />
            )}
          </UserHomeLandingPage>

          <section className={`650px:mx-[100px] mx-[24px]`}>
            <div className="">
              <h1
                className={`mt-[30px] mb-[40px] md:mt-[50px] md:mb-[50px] text-center ${TypographySeven} text-[#016EFF]`}
              >
                Special Offers
              </h1>

              <div className="mx-1 gap-[28px] flex 650px:flex-row flex-col justify-center items-center">
                {packagesState &&
                  packagesState.map((item, index) => {
                    return (
                      <Cards
                        interested={(e) => openInterestPoppup(e)}
                        id={item._id}
                        features={item.features}
                        price={item.price}
                        title={item.title}
                        key={index}
                      />
                    );
                  })}
              </div>
            </div>

            <div className="mt-[30px] 650px:mt-[121px] ">
              <div className="flex justify-between items-center">
                <div className="">
                  <p className={`${TypographyFourteen} text-[#666666]`}>
                    Blogs:
                  </p>
                  <h1
                    className={`650px:text-[50px] text-[30px] sf-medium-600 650px:leading-[63.12px] leading-[45.45px] tracking-[0px] 650px:tracking-[2%] text-[#016EFF]`}
                  >
                    Insights & Innovations
                  </h1>
                </div>
                <div className="650px:block hidden">
                  <Button
                    value={"View All Blogs"}
                    className={`${TypographyTwelve} w-[155px] h-[53px] flex justify-center items-center rounded-[6px] bg-[#FFDE59]`}
                  />
                </div>
              </div>
            </div>

            {/* blog */}

            <div className="md:flex flex-wrap flex-col mt-[18px] md:mt-[50px] sm:flex-row gap-[29px] justify-center items-center sf-medium font-medium text-2xl">
              {currentData &&
                currentData.map((item, index) => {
                  if (index < 3) {
                    return (
                      <Blog
                        readMoreUrl={`/blog/${item._id}`}
                        key={item._id}
                        admin={false}
                        item={item}
                      />
                    );
                  }
                })}
            </div>

            {/* blog */}

            {/* -- */}
            <div className="my-10">
              <Contact />
            </div>
            {/* ---- */}

            {/* footer */}
            <div className=" 650px:mt-[100px] h-fit  mt-[50px]">
              <Footer />
            </div>
            {/* footer */}
          </section>

          {/* poppup interst menu */}
          {interestPoppup && (
            <div className="bg-[#ffffffab]  ps flex justify-center items-center w-full h-screen fixed z-40 top-0 left-0 bottom-0 right-0">
              <form
                onSubmit={handleSubmit}
                className="md:w-[821px] w-[95%] py-[33px] md:px-[36px] px-[25px] rounded-[20px] h-fit md:h-[366px] bg-[#F7F7F7] "
              >
                <div className="flex justify-between items-start">
                  <h1 className="md:mb-[13px] mb-[6px] md:text-[30px] text-[24px] font-bold sf-bold text-[#016EFF]">
                    Register Your Interest
                  </h1>
                  <IoCloseOutline
                    className="cursor-pointer"
                    onClick={closeInterestPoppup}
                    size={37}
                  />
                </div>
                <input
                  type="text"
                  required
                  className="border text-[12px] poppins-medium text-[#666666] rounded-[10px] px-3 py-4 mt-2 outline-none w-full bg-[#F7F7F7] border-[#E4E4E4]"
                  name={name}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                />
                <input
                  type="tel"
                  pattern="^\+\d{1,3}\d{1,16}$"
                  maxLength="20"
                  placeholder="Number"
                  required
                  ref={registerNumberRef}
                  title="Please enter a valid mobile number with country code. E.g., +1234567890. Maximum length: 20 characters."
                  onChange={validateNumber}
                  className="border text-[12px] poppins-medium text-[#666666] rounded-[10px] px-3 py-4 mt-2 outline-none w-full bg-[#F7F7F7] border-[#E4E4E4]"
                />
                <input
                  required
                  type="email"
                  name={email}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="border text-[12px] poppins-medium text-[#666666] rounded-[10px] px-3 py-4 mt-2 outline-none w-full bg-[#F7F7F7] border-[#E4E4E4]"
                />
                <Button
                  type="submit"
                  className={`w-full py-4 mt-3 bg-[#FFDE59] text-black text-[12px] poppins-medium flex justify-center items-center rounded-[10px]`}
                  value={"Submit"}
                />
              </form>
            </div>
          )}
          {/*  */}

          {/* success toast */}
          {successToast && (
            <div className="fixed top-0 bg-[#ffffffab] left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen">
              <div className="md:w-[821px] w-[95%] bg-[#F7F7F7] relative h-fit md:h-[300px] border py-[45px]  border-[#D2D2D2] rounded-[20px] flex flex-col justify-center items-center">
                <IoCloseOutline
                  className="cursor-pointer absolute top-6 right-6"
                  onClick={closeSuccessPoppup}
                  size={37}
                />
                <img
                  src="../../src/assets/icons/tick.svg"
                  alt="success label"
                  className="w-[109] mb-[22px] h-[109] object-contain"
                />
                <p className="sf-bold md:text-[30px] text-[20px] text-[#000000]  mb-[10px] text-center md:mb-[22px]">
                  Your Interest has Been Registered
                </p>
                <p className="md:text-[18px] sf-medium text-[13px]">
                  Our team will contact you shortly
                </p>
              </div>
            </div>
          )}
          {/* success toast */}
        </>
      )}
    </div>
  );
}

export default UserHomePage;
