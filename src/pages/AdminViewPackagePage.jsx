import React from "react";
import Heading from "../components/Heading/Heading";
import { deletePackageAPI, getPackagesAPI } from "../api";
import { errorToast } from "../toast";
import Cards from "../components/Cards/Cards";

function AdminViewPackagePage() {
  const [data, setData] = React.useState([]);
  const [refresh, setRefresh] = React.useState(true);

  React.useEffect(() => {
    fetchdata();
  }, [refresh]);

  const fetchdata = async () => {
    try {
      const result = await getPackagesAPI();
      setData(result.result);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleDeleteClick = async (id) => {
    const status = window.confirm("Are you want to delete ?");
    if (status) {
      try {
        await deletePackageAPI(id);
        setRefresh(!refresh);
      } catch (error) {
        console.log(error,'error.response?.data?.message')
        return errorToast(
          error.response?.data?.message || error?.message || "error occur"
        );
      }
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
              <Cards
              id={item._id}
              features={item.features}
              price={item.price}
              title={item.title}
              editPackageUrl={`/admin/edit-package/${item._id}`}
              isAdmin={true}
              key={index}
              handleDelete={handleDeleteClick}
              />
              
            );
          })}
      </div>
    </div>
  );
}

export default AdminViewPackagePage;
