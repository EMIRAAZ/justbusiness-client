import { useEffect, useState } from "react";
import { errorToast } from "../../toast";
import { deleteActivityAPI, fetchEnquiesAPI, fetchInterestAPI, getActivityAPI, updateInterestAPI } from "../../api";
import { Navigate, useNavigate } from "react-router-dom";

function RecentEnquiries({ searchTerm, selectedFilter }) {
  const [activity, setActivity] = useState([]);
  const [status, setStatus] = useState({ status: false, id: "" });
  const [refresh, setRefresh] = useState(false);


  const navigate = useNavigate();
  useEffect(() => {
    fetchdata();
  }, [refresh]);

  const fetchdata = async () => {
    try {
      const response =  await fetchEnquiesAPI();
      const sortedProperties = response?.result?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      setActivity(sortedProperties);
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
    let filteredProperties = activity.filter((item) => {
      const searchFields = [
        item.createdAt,
        item.owners,
        item.visa,
        item.officeSpace,
        item.BusinessName,
        item.website,
        item.name,
        item.email,
        item.number,
      ];

      return searchFields.some(
        (field) => field && field.toLowerCase().includes(lowerCaseSearchTerm)
      );
    });

    // if (selectedFilter) {
    //   switch (selectedFilter) {
    //     case "closed":
    //       filteredProperties = filteredProperties.filter(
    //         (item) => item?.status?.toLocaleString() === "closed"
    //       );
    //       break;
    //     case "all":
    //       filteredProperties = filteredProperties.filter(
    //         (item) => true == true
    //       );
    //       break;
    //     case "qualified":
    //       filteredProperties = filteredProperties.filter(
    //         (item) => item?.status?.toLocaleString() === "qualified"
    //       );
    //       break;
    //     case "unqualified":
    //       filteredProperties = filteredProperties.filter(
    //         (item) => item?.status?.toLocaleString() === "unqualified"
    //       );
    //       break;
    //     case "unchecked":
    //       filteredProperties = filteredProperties.filter(
    //         (item) => item?.status?.toLocaleString() === "unchecked"
    //       );
    //       break;
    //     default:
    //       break;
    //   }
    // }

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


  const handleDeleteClick = async (id) => {
    const status = window.confirm("Are you want to delete ?");
    if (status) {
      try {
        await deleteActivityAPI(id);
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
    <div  className="mb-32 md:h-[85vh] overflow-scroll md:overflow-scroll">
      <table className="w-full">
        <thead className="sticky z-40 top-0 bg-white">
          <tr className="">
            <th className="p-3 text-[23px] poppins-semibold">Date</th>
            {/* <th className="p-3 text-[23px] poppins-semibold">ID</th> */}
            <th className="p-3 text-[23px] poppins-semibold">Q&A</th>
            <th className="p-3 text-[23px] poppins-semibold">Contact Details</th>
            <th className="p-3 text-[23px] poppins-semibold">Status</th>

          </tr>
        </thead>
        <tbody className="text-center">
          {filteredProperties?.map((item) => {
            return (
              <tr key={item._id} className="bg-transparent hover:bg-[#EBEBEB]">
                <td className="p-3 poppins-medium text-[14px]">
                  {formatDate(item.createdAt)}
                </td>
                {/* <td className="p-3 poppins-medium text-[14px] ">{item._id}</td> */}
                <td className="p-3 text-start poppins-medium text-[14px] ">
                  
                  <p>No Of Owners Involved : {item?.owners}</p>
                  <p>Require Visas : {item?.visa}</p>
                  <p>Require Office Space : {item?.officeSpace}</p>
                  <p>Have a Buisness Name in Mind : {item?.BusinessName}</p>
                  <p>Have a Website : {item?.website}</p>
                  
                </td>
                <td className="p-3 poppins-medium text-start text-[14px] ">
                <p>Name : {item?.name}</p>
                <p>Email : {item?.email}</p>
                <p>Phone : {item?.number}</p>

                </td>
                

               
                <td className=" p-3 poppins-medium text-[14px] ">
                  
                  <p className="px-3 py-2 rounded bg-black text-white">
                  Unchecked
                  </p>
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
