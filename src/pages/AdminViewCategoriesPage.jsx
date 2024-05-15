import React from "react";
import Heading from "../components/Heading/Heading";
import MiniCard from "../components/MiniCard/MiniCard";
import { deleteCategoryByIdAPI, getCategoriesAPI } from "../api";
import { errorToast } from "../toast";

function AdminViewCategoriesPage() {
  const [data, setData] = React.useState([]);
  const [refresh, setRefresh] = React.useState(true);

  React.useEffect(() => {
    fetchdata();
  }, [refresh]);

  const fetchdata = async () => {
    try {
      const banners = await getCategoriesAPI();
      setData(banners.result);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleDeleteClick = async (id) => {
    const status = window.confirm("Are you want to delete ?");
    if (status) {
      try {
        await deleteCategoryByIdAPI(id);
        setRefresh(!refresh);
      } catch (error) {
        return errorToast(
          error.response?.data?.message || error?.message || "error occur"
        );
      }
    }
  };

  return (
    <div>
      <div className="">
        <Heading title={"Manage Categories"} />
      </div>
      <div className="flex flex-col gap-2 sf-medium font-medium text-2xl">
        {data &&
          data.map((item, index) => {
            return (
              <MiniCard
                key={index}
                index={index + 1}
                id={item._id}
                name={item.name}
                handleDeleteClick={handleDeleteClick}
                editUrl={`/admin/edit-category/${item._id}`}
              />
            );
          })}
      </div>
    </div>
  );
}

export default AdminViewCategoriesPage;
