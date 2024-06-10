import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import NormalHeader from "../../components/Header/NormalHeader";
import { getBlogsAPI } from "../../api";
import Blog from "../../components/Blog/Blog";


function UserBlogPage() {

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
      const sortedBlogs = result.result.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
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

  return (
    <div className={`650px:mx-[100px] mx-[24px] pt-[24px]`}>
    <NormalHeader />

    <h1 className={`text-center mt-[47px] text-[70px] leading-[88.37px] sf-medium-600  tracking-[2%] text-[#016EFF]  `}>Blogs</h1>

    <div className="">
    <div className="md:flex flex-wrap flex-col mt-[50px] sm:flex-row gap-[29px] justify-center items-center sf-medium font-medium text-2xl">
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
    </div>

    <div className="mt-[72px]">
      <Footer />
    </div>
  </div>
  );
}

export default UserBlogPage;
