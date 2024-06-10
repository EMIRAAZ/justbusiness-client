import { useEffect, useState } from "react";
import { errorToast } from "../../toast";
import { fetchInterestAPI, updateInterestAPI } from "../../api";

function RecentEnquiries({ searchTerm, selectedFilter }) {
  const [properties, setProprties] = useState([]);
  const [status, setStatus] = useState({ status: false, id: "" });
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    fetchdata();
  }, [refresh]);

  const fetchdata = async () => {
    try {
      const response =  await fetchInterestAPI();
      const sortedProperties = response?.result?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      setProprties(sortedProperties);
    } catch (error) {
      if (error.response && error.response.data) {
        errorToast(error.response.data.message);
      } else {
        errorToast("An error occurred during login.");
      }
    }
  };

  const handleStatus = (status, id) => setStatus({ status, id });

  const statusOfEnq = async (status, id) => {
    try {
      await updateInterestAPI({ status, id });
      setStatus({ status: false, id: "" });
      setRefresh(!refresh);
    } catch (error) {
      errorToast(
        error.response.data.message ||
          error.message ||
          "An error occurred during login."
      );
    }
  };
  const filterAndSortProperties = () => {
    const lowerCaseSearchTerm = searchTerm?.toLowerCase();
    let filteredProperties = properties.filter((item) => {
      const searchFields = [
        item._id,
        item.name,
        item.number,
        item.email,
        item.packageName,
        item.status,
      ];

      return searchFields.some(
        (field) => field && field.toLowerCase().includes(lowerCaseSearchTerm)
      );
    });

    if (selectedFilter) {
      switch (selectedFilter) {
        case "closed":
          filteredProperties = filteredProperties.filter(
            (item) => item?.status?.toLocaleString() === "closed"
          );
          break;
        case "all":
          filteredProperties = filteredProperties.filter(
            (item) => true == true
          );
          break;
        case "qualified":
          filteredProperties = filteredProperties.filter(
            (item) => item?.status?.toLocaleString() === "qualified"
          );
          break;
        case "unqualified":
          filteredProperties = filteredProperties.filter(
            (item) => item?.status?.toLocaleString() === "unqualified"
          );
          break;
        case "unchecked":
          filteredProperties = filteredProperties.filter(
            (item) => item?.status?.toLocaleString() === "unchecked"
          );
          break;
        default:
          break;
      }
    }

    return filteredProperties;
  };

  const filteredProperties = filterAndSortProperties();

  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Date(dateString).toLocaleString("en-US", options);
  };

  return (
    <div  className=" md:h-[85vh] overflow-scroll md:overflow-scroll">
      <table className="w-full">
        <thead className="sticky z-40 top-0 bg-white">
          <tr className="">
            <th className="p-3 text-[23px] poppins-semibold">Date</th>
            {/* <th className="p-3 text-[23px] poppins-semibold">ID</th> */}
            <th className="p-3 text-[23px] poppins-semibold">Name</th>
            <th className="p-3 text-[23px] poppins-semibold">Phone</th>
            <th className="p-3 text-[23px] poppins-semibold">Email</th>
            <th className="p-3 text-[23px] poppins-semibold">Package</th>
            <th className="p-3 text-[23px] poppins-semibold">Status</th>
          </tr>
        </thead>
        <tbody className="text-center ">
          {filteredProperties?.map((item) => {
            return (
              <tr key={item._id} className="bg-transparent hover:bg-[#EBEBEB]">
                <td className="p-3 poppins-medium text-[14px]">
                  {formatDate(item.createdAt)}
                </td>
                {/* <td className="p-3 poppins-medium text-[14px] ">{item._id}</td> */}
                <td className="p-3 text-start poppins-medium text-[14px] ">
                  {item?.name}
                </td>
                <td className="p-3 poppins-medium text-[14px] ">
                  {item?.number}
                </td>
                <td className="p-3 poppins-medium text-[14px] ">
                  {item?.email}
                </td>
                <td className="p-3 poppins-medium text-[14px] ">
                  {item?.packageName}
                </td>
                <td className="p-3 poppins-medium relative text-xs ">
                  <div
                    onClick={() => handleStatus(!status.status, item._id)}
                    className={` capitalize 
                    ${
                      item.status === "qualified" &&
                      "bg-blue-600 text-[#fff] hover:bg-blue-700"
                    }
                    ${
                      item.status === "unqualified" &&
                      "bg-red-600 text-[#fff] hover:bg-red-700"
                    }
                    ${
                      item.status === "unchecked" &&
                      "bg-gray-950  text-[#fff] hover:bg-gray-900"
                    }
                    ${
                      item.status === "closed" &&
                      "bg-green-600 text-white hover:bg-green-500"
                    }   w-36 h-7 flex justify-center items-center rounded-[4px] cursor-pointer`}
                  >
                    <span className={`  capitalize `}>
                      {item?.status}
                    </span>
                  </div>

                  {status.status && item._id === status.id && (
                    <div className="absolute border top-14 right-7 z-30 border-black/30  capitalize mt-3 poppins-medium flex flex-col gap-1 bg-white shadow-md rounded-md px-2 py-2 text-xs">
                      <div
                        onClick={() => statusOfEnq("qualified", item._id)}
                        className={`bg-blue-600 text-[#fff] hover:bg-blue-700 w-36 h-7  flex justify-center items-center rounded-[4px] cursor-pointer`}
                      >
                        <span>qualified</span>
                      </div>

                      <div
                        onClick={() => statusOfEnq("unqualified", item._id)}
                        className="w-36 h-7  bg-red-600 text-[#fff] hover:bg-red-700 flex justify-center items-center rounded-[4px] cursor-pointer"
                      >
                        <span>unqualified</span>
                      </div>
                     

                   
                      <div
                        onClick={() => statusOfEnq("closed", item._id)}
                        className="w-36 h-7 bg-green-600 text-[#ffffff] hover:bg-green-500 flex justify-center items-center rounded-[4px] cursor-pointer"
                      >
                        <span>closed</span>
                      </div>
                      <div
                        onClick={() => statusOfEnq("unchecked", item._id)}
                        className="w-36 h-7 bg-black text-[#ffffff] hover:bg-black flex justify-center items-center rounded-[4px] cursor-pointer"
                      >
                        <span>Unchecked</span>
                      </div>
                    </div>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default RecentEnquiries;
