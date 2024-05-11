import React from "react";
import Heading from "../components/Heading/Heading";
import { deleteBlogByIdAPI, getBlogsAPI } from "../api";
import MiniCard from "../components/MiniCard/MiniCard";
import Blog from "../components/Blog/Blog";

function AdminViewBlogsPage() {
  const [data, setData] = React.useState([]);
  const [refresh, setRefresh] = React.useState(true);

  React.useEffect(() => {
    fetchdata();
  }, [refresh]);

  const fetchdata = async () => {
    try {
      const result = await getBlogsAPI();
      setData(result.result);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleDeleteClick = async (id) => {
    const status = window.confirm("Are you want to delete ?");
    if (status) {
      await deleteBlogByIdAPI(id);
      setRefresh(!refresh);
    }
  };

  return (
    <div>
      <div className="">
        <Heading title={"Manage Blog"} />
      </div>

      <div className="flex justify-center items-center flex-col flex-wrap sm:flex-row gap-7 sf-medium font-medium text-2xl">
        {data &&
          data.map((item, index) => {
            return (
              <Blog
                key={item._id}
                handleDeleteClick={handleDeleteClick}
                admin={true}
                item={item}
                editUrl={`/admin/edit-blog/${item._id}`}
              />
            );
          })}
      </div>
    </div>
  );
}

export default AdminViewBlogsPage;
