import React from "react";
import Header from "../components/Header/Header";
import UserCategories from "../components/user/UserCategories/UserCategories";
import { getBlogsAPI } from "../api";
import Blog from "../components/Blog/Blog";
import MobileBlog from "../components/Blog/MobileBlog";
import Footer from "../components/Footer/Footer";
import { Helmet } from "react-helmet";
import Loader from "../components/Loader/Loader";
function UserHomePage() {
  const [data, setData] = React.useState([]);
  const [refresh, setRefresh] = React.useState(true);
  const [isLoading, setLoading] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [itemsPerPage] = React.useState(12); // Number of items to display per page

  React.useEffect(() => {
    setLoading(true);
    fetchdata();
  }, [refresh]);

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
      const sortedBlogs = result.result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      setData(sortedBlogs);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };

  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Calculate the starting index and ending index of items to display for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, data.length);

  const currentData = data.slice(startIndex, endIndex);

  const seo_description = "thedubaithings blog  page is here";
  const seo_title = "thedubaithings";
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

          <section className="md:mx-[100px] mx-[20px]">
            {/* categories */}
            <div className="md:mt-[50px] mt-[30px]">
              <UserCategories />
            </div>
            <div className="hidden md:flex flex-wrap flex-col mt-[50px] sm:flex-row gap-7 sf-medium font-medium text-2xl">
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

            <div className="flex mt-[24px] gap-5 flex-col md:hidden">
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

export default UserHomePage;
