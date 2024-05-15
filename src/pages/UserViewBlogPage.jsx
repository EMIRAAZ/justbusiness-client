import React from "react";
import { Helmet } from "react-helmet";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { MAIN_IMAG_URL, getBlogsAPI } from "../api";
import Lazyloading from "../components/Lazyloading/Lazyloading";
import Blog from "../components/Blog/Blog";
import { useParams } from "react-router-dom";
import MobileBlog from "../components/Blog/MobileBlog";
import Loader from "../components/Loader/Loader";

function UserViewBlogPage() {
  const [data, setData] = React.useState([]);
  const [blog, setBlog] = React.useState({});
  const [isLoading, setLoading] = React.useState(false);
  const [refresh, setRefresh] = React.useState(true);
  const { id } = useParams();

  React.useEffect(() => {
    setLoading(true);
    fetchdata();
    window.scrollTo({
      top: 6,
      left: 0,
      behavior: "smooth",
    });
  }, [refresh, id]);

  const fetchdata = async () => {
    try {
        setLoading(true);
      const result = await getBlogsAPI();
      const isMatch = result?.result?.find((item) => item._id === id);
      const isFiltered = result?.result?.filter((item) => item._id !== id);
      const sortedBlogs = isFiltered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      setData(sortedBlogs);
      if (isMatch) {
        setBlog(isMatch);
      }
      setLoading(false);
    } catch (error) {
        setLoading(false);  
      console.log(error.message);
    }
  };

  const seo_description = blog?.blogBody ;
  const seo_title = blog?.blogTitle;
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

{ isLoading ? <Loader/> : <>
    <Header />

<section className="lg:mx-[100px] lg:flex-row flex-col mt-[20px] lg:mt-[40px] mb-[100px] gap-9 flex mx-[20px]">
  <div className="lg:flex-[65%]  flex-1 flex flex-col ">
    <div className="lg:h-[514px] w-full h-[322px]  rounded-[20px] overflow-hidden">
      <Lazyloading
        title={blog?.blogTitle}
        src={`${MAIN_IMAG_URL}/${blog?.mainImgaeLink}`}
        alt={blog?.blogTitle}
        className="rounded-[20px] w-full h-full object-cover"
      />
    </div>
    <div className="mt-4 mb-0 ">
      <span
        title={blog?.categoryName}
        className="lg:text-[32px] text-[20px] text-[#F7B519] sf-bold"
      >
        {blog?.categoryName || "Events"}
      </span>
    </div>
    <div className="overflow-hidden   mt-2">
      <h1
        className={`sf-bold lg:text-[40px] text-[30px] leading-[38px] lg:leading-[50px]`}
        style={{ textOverflow: "ellipsis" }}
        title={blog?.blogTitle}
      >
        {blog?.blogTitle}
      </h1>
    </div>
    {/* <div className="mt-3">
      <span
        title={
          blog?.date &&
          new Date(blog?.date).getDate() +
            " - " +
            new Date(blog?.date).getDay() +
            " - " +
            new Date(blog?.date).getFullYear()
        }
        className="lg:text-[20px] text-[14px] text-[#F7B519] sf-bold"
      >
        {`Date : ${
          blog?.date &&
          new Date(blog?.date).getDate() +
            " - " +
            new Date(blog?.date).getDay() +
            " - " +
            new Date(blog?.date).getFullYear()
        }`}
      </span>
    </div> */}
    <div className="poppins-medium text-[#666666] text-left mt-3 lg:text-[15px] text-[14px]">
      <p className="whitespace-pre-line" title={blog?.blogBody}>{blog?.blogBody}</p>
    </div>
  </div>
  <div className="flex-[35%]  flex flex-col justify-start ">
    <div className="hidden md:flex flex-wrap justify-start flex-col sm:flex-row gap-7 sf-medium font-medium text-2xl">
      {data &&
        data.map((item, index) => {
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

    <div className="gap-5 mt-[24px] flex flex-col md:hidden sf-medium font-medium text-2xl">
      {data &&
        data.map((item, index) => {
          if (index < 3) {
            return (
              <MobileBlog
                readMoreUrl={`/blog/${item._id}`}
                key={item._id}
                admin={false}
                item={item}
              />
            );
          }
        })}
    </div>
  </div>
</section>

<Footer />

</>}
    </div>
  );
}

export default UserViewBlogPage;
