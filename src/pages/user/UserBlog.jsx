import React from "react";
import Header from "../../components/user/Header";
import Footer from "../../components/Footer";
import { getBlogs } from "../../api";
import { useNavigate } from "react-router-dom";

function UserBlog() {
  const [blogs, setBlogs] = React.useState([]);
  const navigate = useNavigate()

  React.useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    try {
      const blogs = await getBlogs();
      setBlogs(blogs.result);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>

      <div className="mt-2">
        <Header />
      </div>

      <h1 className="text-center mt-4 sf-medium-600 text-[70px] lg:text-[70px]">Blogs</h1>
      <section className="max-w-[1300px] w-full m-auto">
        <div className="mx-5 flex flex-col justify-center my-4 lg:my-14 items-center md:mx-20 lg:mx-28 ">
          <div className="grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 mt-0  gap-5">
            {blogs &&
              blogs.map((item) => {
                  return (
                    <div 
                      key={item._id}
                      className="border p-4 rounded-[15px] h-fit cursor-text"
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
                      <div className="poppins-medium text-2xl mt-1">
                        <h1 className="text-[25px]  my-4">
                          {item.blogTitle.length > 22
                            ? item.blogTitle.slice(0, 19) + "..."
                            : item.blogTitle}
                        </h1>
                      </div>
                      <div className="break-words poppins-medium text-[15px] text-[#666666] text-left mt-3">
                        <p>
                          {item.blogBody.length > 134
                            ? item.blogBody.slice(0, 134)
                            : item.blogBody}
                        </p>
                      </div>
                      <div className="mt-5 mb-2">
                        <button
                        onClick={()=>navigate(`/blog/${item.blogTitle}/${item._id}`)}
                          type="button"
                          className="bg-white cursor-pointer border border-[#000000] w-full py-2.5 rounded-[5px] text-[10px] font-semibold poppins-semibold"
                        >
                          Keep Reading
                        </button>
                      </div>
                    </div>
                  );
              })}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default UserBlog;
