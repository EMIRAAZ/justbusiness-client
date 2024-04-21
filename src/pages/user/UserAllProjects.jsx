import React from "react";
import Header from "../../components/user/Header";
import Footer from "../../components/Footer";
import { Link, useNavigate, useParams } from "react-router-dom";
import { addingEnquiry, getProperties } from "../../api";
import PropertiesCard from "../../components/user/PropertiesCard";
import { CloseSVG } from "../../assets/icons";
import { errorToast } from "../../toast";
import Lazyloading from "../../components/Lazyloading/Lazyloading";
import { SuccessLabel } from "../../assets/images";

function UserAllProjects() {
  const [properties, setProperties] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [itemsPerPage] = React.useState(9); // Number of items to display per page
  const navigate = useNavigate();
  const { type, id: idOfPropertyType } = useParams();
  const [developerId, setDeveloperId] = React.useState("");
  const [modal, setModal] = React.useState(false);
  const [successCLoseModal, setSuccessCLoseModal] = React.useState(false);
  const [id, setId] = React.useState("");
  const [number, setNumber] = React.useState("");
  const [name, setName] = React.useState("");

  React.useEffect(() => {
    if (type === "all") {
      fetchData(``);
    } else {
      fetchData(`propertyType=${type}&propertyTypeId=${idOfPropertyType}`);
    }
  }, [type, navigate]); // Fetch data only once when component mounts

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      if (!name) return errorToast("Name is required");
      if (name.length < 3)
        return errorToast("Minimum three chracters mustbe entered");
      if (!number) return errorToast("Mobile number is required");
      if (number.length > 10)
        return errorToast("Mobile number is no morethan 10");
      if (number.length < 10) return errorToast("10 digits required");

      let data = {
        name,
        number,
        propertyId: id,
        developerId,
      };

      await addingEnquiry(data);

      setName("");
      setNumber("");
      setModal(false);
      setSuccessCLoseModal(true);
    } catch (error) {
      console.log(error.message);
    }
  };

  const fetchData = async (type) => {
    try {
      const propertiesData = await getProperties(type);
      setProperties(propertiesData.result);
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

  const closeRegister = () => {
    setModal(false);
    setSuccessCLoseModal(false);
    setId("");
  };

  const handleRegister = (id, deveId) => {
    setDeveloperId(deveId);
    setModal(true);
    setSuccessCLoseModal(false);
    setId(id);
  };

  const totalPages = Math.ceil(properties.length / itemsPerPage);

  // Calculate the starting index and ending index of items to display for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, properties.length);

  const currentProperties = properties.slice(startIndex, endIndex);

  return (
    <div>
      <div className="mt-2">
        <Header />
      </div>
      <h1 className="capitalize text-center mt-4 sf-medium-600 text-[35px] sm:text-[70px]">
        {type === "all" ? "All Projects" : type}
      </h1>
      <section className="max-w-[1300px] w-full m-auto">
        <div className="mx-5 flex flex-col justify-center my-4 lg:my-14 items-center md:mx-20 lg:mx-28 ">
          <div className="grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 mt-0  gap-5">
            {currentProperties.map((item, index) => (
              <p key={index}>
                <PropertiesCard
                  navigate={navigate}
                  handleRegister={handleRegister}
                  key={item?._id}
                  item={item}
                />
              </p>
            ))}
          </div>
          <div className="mt-4">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className="mx-2 py-2 px-4 rounded bg-gray-300"
            >
              Previous
            </button>
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index + 1}
                onClick={() => setCurrentPage(index + 1)}
                className={`mx-2 py-2 px-4 rounded ${
                  currentPage === index + 1
                    ? "bg-black text-white"
                    : "bg-gray-300"
                }`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className="mx-2 py-2 px-4 rounded bg-gray-300"
            >
              Next
            </button>
          </div>
        </div>
      </section>

      {modal && (
        <div
          className="w-full h-screen z-50 fixed top-0  flex justify-center items-center left-0"
          style={{ background: "rgba(0,0,0,0.9" }}
        >
          <form
            onSubmit={handleSubmit}
            className="rounded-[20px] py-7 max-w-[820px] w-[90%] lg:w-full   h-auto flex flex-col  bg-white px-8 "
          >
            <div className="justify-between w-ful flex text-[30px] mb-4 sf-medium ">
              <p>Register Your Interest</p>
              <p>
                {" "}
                <img
                  onClick={closeRegister}
                  src={CloseSVG}
                  alt="loading"
                  loading="lazy"
                  className="w-6 h-6 cursor-pointer"
                />{" "}
              </p>
            </div>
            <input
              type="text"
              name={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="mb-1 outline-none w-[100%] py-4 px-5  appearance-none border border-[#E4E4E4] text-xs poppins rounded-[10px]"
            />
            <input
              type="number"
              name={number}
              onChange={(e) => setNumber(e.target.value)}
              placeholder="Phone"
              className="outline-none w-[100%] py-4 px-5  appearance-none border border-[#E4E4E4] text-xs poppins rounded-[10px]"
            />
            <input
              type="submit"
              value={"Submit"}
              className="outline-none w-[100%] py-4 px-5  appearance-none border bg-black text-white mt-2 text-xs poppins cursor-pointer rounded-[10px]"
            />
          </form>
        </div>
      )}

      {successCLoseModal && (
        <div
          className="w-full h-screen z-50 fixed top-0  flex justify-center items-center left-0"
          style={{ background: "rgba(0,0,0,0.9" }}
        >
          <div className="relative rounded-[20px] py-7 max-w-[820px] w-[90%] lg:w-full   h-auto flex flex-col  bg-white px-8  justify-center items-center ">
            <Lazyloading
              alt={"loading"}
              src={SuccessLabel}
              className={"w-[100px] object-contain"}
            />
            <p>
              {/* <img onClick={closeRegister} src={CloseSVG} alt="loading" loading="lazy" className="w-6 h-6" />  */}
              <div className="" onClick={() => setSuccessCLoseModal(false)}>
                <Lazyloading
                  className={"w-6 h-6 absolute cursor-pointer right-8 top-6"}
                  src={CloseSVG}
                  alt={"loading"}
                />
              </div>
            </p>
            <h1 className="text-[30px] poppins-semibold mt-4 ">
              Your Interest has Been Registered
            </h1>
            <h2 className="text-[18px]  poppins-medium mt-4">
              Our team will contact you shortly
            </h2>
          </div>
          {/* <form onSubmit={handleSubmit} >
              <div className="justify-between w-ful flex text-[30px] mb-4 sf-medium ">
                <p>Register Your Interest</p>
                
              </div>
              <input type="text" name={name} onChange={(e)=>setName(e.target.value)} placeholder="Name" className="mb-1 outline-none w-[100%] py-4 px-5  appearance-none border border-[#E4E4E4] text-xs poppins rounded-[10px]" />
              <input type="number" name={number} onChange={(e)=>setNumber(e.target.value)} placeholder="Phone" className="outline-none w-[100%] py-4 px-5  appearance-none border border-[#E4E4E4] text-xs poppins rounded-[10px]" />
              <input type="submit"  value={'Submit'} className="outline-none w-[100%] py-4 px-5  appearance-none border bg-black text-white mt-2 text-xs poppins rounded-[10px]" />
            </form> */}
        </div>
      )}

      <Footer />
    </div>
  );
}

export default UserAllProjects;
