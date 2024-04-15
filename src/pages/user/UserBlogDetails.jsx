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
      <Header />
      <section className="max-w-[1300px] w-full m-auto">
        <div className="mx-5 flex flex-col justify-center my-4 lg:my-14 items-center md:mx-20 lg:mx-28 ">
          <div className="flex flex-col lg:flex-row">
            <div className="flex-[70%] lg:px-5">
              <BlogBody item={blog}/>
            </div>
            <div className="flex-[30%]">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 mt-0  gap-5">
                {blogs &&
                  blogs.map((item, index) => {
                    // const name =  item.blogTitle.replace(/-/g, ' ');
                    // console.log(name);
                    if (index < 3) {
                      return (
                        <div
                        
                          key={item._id}
                          className="border p-4 rounded-[15px] h-fit cursor-pointer"
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
                            onClick={()=>navigate(`/blog/${item.blogTitle}/${item._id}`)}
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





const BlogBody = ({item})=>{
  return(
    <div className="">
        <img src={item.mainImgaeLink} className="rounded-[20px] w-full h-[514px] max-w-[749px] object-cover " alt="" />
        <h1 className="poppins-semibold text-[30px] lg:leading-tight lg:text-[40px] my-4">{item.blogTitle}</h1>
        { item.date && <p className='text-[10px] sf-medium lg:text-[20px] text-[#666666]'>{new Date(item.date).toDateString()}</p>}

        <p className="sf-medium my-5 text-[14px] lg:text-[15px]  text-[#666666]">{item.blogBody}</p>
    </div>
  )
}