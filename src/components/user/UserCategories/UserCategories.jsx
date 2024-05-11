import React from "react";
import { MAIN_IMAG_URL, getCategoriesAPI } from "../../../api";
import { Link } from "react-router-dom";
import Lazyloading from "../../Lazyloading/Lazyloading";

function UserCategories() {
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
  return (
    <div className="flex flex-wrap gap-[15px] items-center justify-center">
      {data &&
        data.map((item, index) => (
          <Link
            to={`/category/${item?.name?.toLowerCase()}/${item?._id}`}
            className="flex items-center justify-center flex-col"
            key={index}
          >
            <div className=" border-[#C9C9C9] border p-1 rounded-full">
              <Lazyloading
                title={item.name}
                className="bg-[#F7B519] p-2 w-[68px] h-[68px] object-cover rounded-full"
                src={`${MAIN_IMAG_URL}/${item.mainImgaeLink}`}
                alt={item.name}
              />
            </div>
            <p className="text-[14px] sf-normal" title={item.name}>{item.name}</p>
          </Link>
        ))}
    </div>
  );
}

export default UserCategories;
