import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/user/Header";
import { getBlogById, getBlogs } from "../../api";
import { useNavigate, useParams } from "react-router-dom";

function UserBlogDetails() {
  const [blogs, setBlogs] = React.useState([]);
  const [blog, setBlog] = React.useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!id) {
      navigate("/blog");
    }
    fetchdata();
  }, [navigate]);

  const fetchdata = async () => {
    try {
      const blogs = await getBlogs();
      setBlogs(blogs.result);
      const blog = await getBlogById(id);
      setBlog(blog.result);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <div className="mt-2">
        <Header />
      </div>
      <section className="  mt-[24px]  px-[24px] w-full lg:px-[80px]">
        <div className="">
          <div className="block lg:flex w-full lg:gap-3  ">
            <div className="flex-none lg:flex-[70%] lg:w-[749px] ">
              <BlogBody item={blog} />
            </div>
            <div className="flex-[30%] lg:w-[847px]">
              <div className="mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 mt-0  gap-5">
                {blogs &&
                  blogs.map((item, index) => {
                    // const name =  item.blogTitle.replace(/-/g, ' ');
                    // console.log(name);
                    if (index < 3) {
                      return (
                        <div
                          key={item._id}
                          className="p-5 border rounded-[15px] h-fit cursor-pointer"
                        >
                          <div
                            className="rounded-[10px] overflow-hidden h-[220px]"
                            key={item._id}
                          >
                            <img
                              src={item.mainImgaeLink}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="poppins-medium text-2xl  mt-1">
                            <h1 className="text-[25px] my-3">
                              {item.blogTitle.length > 19
                                ? item.blogTitle.slice(0, 19) + "..."
                                : item.blogTitle}
                            </h1>
                          </div>
                          <div className="break-words poppins-medium text-sm text-[#666666] text-left mt-3">
                            <p>
                              {item.blogBody.length > 131
                                ? item.blogBody.slice(0, 131)
                                : item.blogBody}
                            </p>
                          </div>
                          <div className="mt-4 mb-2">
                            <button
                              onClick={() =>
                                navigate(`/blog/${item.blogTitle}/${item._id}`)
                              }
                              type="button"
                              className="bg-white border border-[#000000] w-full py-3 rounded-[5px] text-[10px] font-semibold poppins-semibold"
                            >
                              Keep Reading
                            </button>
                          </div>
                        </div>
                      );
                    }
                  })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default UserBlogDetails;

const BlogBody = ({ item }) => {
  return (
    <div className="">
      <img
        src={item.mainImgaeLink}
        className="rounded-[20px] w-full h-[322px] md:h-[514px] xl:w-full  object-cover "
        alt=""
      />
      <h1 className="poppins-semibold text-[30px] lg:leading-tight lg:text-[40px] mb-4 mt-6">
        {item.blogTitle}
      </h1>
      {item.date && (
        <p className="text-[10px] sf-medium lg:text-[20px] text-[#666666]">
          {new Date(item.date).toDateString()}
        </p>
      )}

      <p className="sf-medium break-words my-5 text-[14px] lg:text-[15px]  text-[#666666]">
        {item.blogBody}
      </p>
    </div>
  );
};
