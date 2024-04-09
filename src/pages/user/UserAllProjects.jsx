import React from "react";
import Header from "../../components/user/Header";
import Footer from "../../components/Footer";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getProperties } from "../../api";
import PropertiesCard from "../../components/user/PropertiesCard";

function UserAllProjects() {
  const [properties, setProperties] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [itemsPerPage] = React.useState(9); // Number of items to display per page
  const navigate = useNavigate();
  const { type } = useParams();

  React.useEffect(() => {

    if(type === 'townhouse'){
      fetchData('propertyType=townhouse');
    }else if(type === 'apartment'){
      fetchData('propertyType=apartment');
    }else if(type === 'penthouse'){
      fetchData('propertyType=penthouse');
    }else if(type === 'villa'){
      fetchData('propertyType=villa');
    }else{
      fetchData();
    }
    

  }, [type]); // Fetch data only once when component mounts

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

  const totalPages = Math.ceil(properties.length / itemsPerPage);

  // Calculate the starting index and ending index of items to display for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, properties.length);

  const currentProperties = properties.slice(startIndex, endIndex);

  return (
    <div>
      <Header />
      <h1 className="text-center mt-4 sf-medium-600 text-[35px] sm:text-[70px]">
      { type === 'apartment' && 'Apartments'}
      { type === 'all' && 'All Projects'}
      { type === 'penthouse' && 'Penthouse'}
      { type === 'townhouse' && 'Townhouse'}
      { type === 'villa' && 'Villa'}

      </h1>
      <section className="max-w-[1300px] w-full m-auto">
        <div className="mx-5 flex flex-col justify-center my-4 lg:my-14 items-center md:mx-20 lg:mx-28 ">
          <div className="grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 mt-0  gap-5">
            {currentProperties.map((item, index) => (
              <Link
                to={`/property/${item.propretyHeadline}/${item._id}`}
                key={index}
              >
                <PropertiesCard key={item?._id} item={item} />
              </Link>
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
                  currentPage === index + 1 ? "bg-black text-white" : "bg-gray-300"
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
      <Footer />
    </div>
  );
}

export default UserAllProjects;
