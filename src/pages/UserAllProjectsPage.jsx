import React from "react";
import Header from "../components/Header/Header";
import { getBlogsAPI } from "../api";
import Blog from "../components/Blog/Blog";
import MobileBlog from "../components/Blog/MobileBlog";
import Footer from "../components/Footer/Footer";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader/Loader";
function UserAllProjectsPage() {
  const [data, setData] = React.useState([]);
  const [refresh, setRefresh] = React.useState(true);
  const { name, id } = useParams();
  const [isLoading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    fetchdata();
    window.scrollTo({
      top: 6,
      left: 0,
      behavior: "smooth",
    });
  }, [refresh]);

  const fetchdata = async () => {
    try {
      setLoading(true);
      const result = await getBlogsAPI();
      const isFiltered = result?.result?.filter(
        (item) => item.categoryId === id
      );
      setData(isFiltered);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };

  const [currentPage, setCurrentPage] = React.useState(1);
  const [itemsPerPage] = React.useState(12); // Number of items to display per page

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Calculate the starting index and ending index of items to display for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, data.length);

  const currentData = data.slice(startIndex, endIndex);

  const seo_description = "thedubaithings categories page";
  const seo_title = name.toUpperCase();
  const seo_site_url = "thedubaithings.com";

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
          <Header />

          <section className="md:mx-[100px] mx-[24px]">
            <div className="flex justify-center items-center mt-[30px]">
              <h1
                title={name.toUpperCase()}
                className="text-[60px] sf-bold capitalize"
              >
                {name}
              </h1>
            </div>
            <div className="hidden md:flex flex-col mt-[50px] sm:flex-row gap-7 sf-medium font-medium text-2xl">
              {currentData &&
                currentData.map((item, index) => {
                  return (
                    <Blog
                      readMoreUrl={`/blog/${item._id}`}
                      key={item._id}
                      admin={false}
                      item={item}
                    />
                  );
                })}
            </div>

            <div className="mt-[24px] gap-5 flex flex-col md:hidden poppins-semibold text-2xl">
              {currentData &&
                currentData.map((item, index) => {
                  return (
                    <MobileBlog
                      readMoreUrl={`/blog/${item._id}`}
                      key={item._id}
                      admin={false}
                      item={item}
                    />
                  );
                })}
            </div>

            <div className="mt-10 mb-14 flex justify-center items-center">
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className="mx-2 cursor-pointer py-2 px-4 rounded text-[#F7B519] border border-[#F7B519] bg-transparent"
              >
                Previous
              </button>
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index + 1}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`mx-2 py-2 px-4 rounded ${
                    currentPage === index + 1
                      ? "bg-[#F7B519] text-black"
                      : "bg-transparent text-[#F7B519] border border-[#F7B519]"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
              <button
                onClick={nextPage}
                disabled={currentPage === totalPages}
                className="mx-2 py-2 px-4 rounded text-[#F7B519] border cursor-pointer border-[#F7B519] bg-transparent"
              >
                Next
              </button>
            </div>
          </section>

          <Footer />
        </>
      )}
    </div>
  );
}

export default UserAllProjectsPage;
