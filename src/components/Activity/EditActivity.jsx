import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { addingActivity, addingPackageAPI, getActivityByIdAPI, updateActivityAPI } from "../../api";
import { errorToast, successToast } from "../../toast";
import { useNavigate, useParams } from "react-router-dom";
function EditActivity() {
  const [isLoading, setIsLoading] = useState(false);
  // --------------------------------------------

  const {id} = useParams();
  const navigate = useNavigate();
  // -----------------------------------------------------
  const [formData, setFormData] = useState({
    name: "",
    freezone: "",
    mainland:""
  });
  // -----------------------------------------------------

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // -------------------------------------------------

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setIsLoading(true);
      await updateActivityAPI(formData);
      successToast("Successfully added");
      setIsLoading(false);
    } catch (error) {
      errorToast(
        error.response.data.message ||
          error.message ||
          "An error occurred during login."
      );
      setIsLoading(false);
    }
  };


  useEffect(()=>{

    if(!id){
       return navigate('/admin/view-activity')
    }
    if(id){
        fetchdata();
    }
  },[])

  const fetchdata = async () => {
    try {
      const response = await getActivityByIdAPI(id);
      setFormData({...response.result});
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-[40%] flex-wrap">
      <div className="flex-1">
        {/* Name */}
        <div className="flex flex-col gap-2 mx-3">
          <label
            htmlFor="name"
            className="sf-medium font-medium text-sm text-[#000000]"
          >
            Name
          </label>
          <input
            disabled={isLoading}
            autoComplete=""
            value={formData.name}
            name="name"
            onChange={handleChange}
            type="text"
            id="name"
            placeholder="Name"
            title="Name"
            className="border border-[#E4E4E4] py-4 px-5 rounded-[10px] sf-normal font-extralight text-sm text-[#666666]  outline-none"
          />
        </div>

        {/* Free Zone */}
        <div className="flex flex-col gap-2 mx-3 mt-3">
          <label
            htmlFor="freezone"
            className="sf-medium font-medium text-sm text-[#000000]"
          >
            Free Zone
          </label>
          <input
            disabled={isLoading}
            autoComplete=""
            value={formData.freezone}
            name="freezone"
            onChange={handleChange}
            type="number"
            id="freezone"
            placeholder="17,400"
            title="Free Zone"
            className="border border-[#E4E4E4] py-4 px-5 rounded-[10px] sf-normal font-extralight text-sm text-[#666666]  outline-none"
          />
        </div>

         {/* Main Land */}
         <div className="flex flex-col gap-2 mx-3 mt-3">
          <label
            htmlFor="mainland"
            className="sf-medium font-medium text-sm text-[#000000]"
          >
            Main Land
          </label>
          <input
            disabled={isLoading}
            autoComplete=""
            value={formData.mainland}
            name="mainland"
            onChange={handleChange}
            type="number"
            id="mainland"
            placeholder="17,400"
            title="Main Land"
            className="border border-[#E4E4E4] py-4 px-5 rounded-[10px] sf-normal font-extralight text-sm text-[#666666]  outline-none"
          />
        </div>

        {/* submit */}
        <div className="p-3 poppins-semibold text-lg">
          <button
            disabled={isLoading}
            type="submit"
            className="w-52 h-11 bg-[#016EFF] text-[#fff] hover:bg-[#016EFF] flex justify-center items-center rounded-[4px] cursor-pointer"
          >
            {isLoading ? "Loading..." : "Save"}
          </button>
        </div>
      </div>
    </form>
  );
}

export default EditActivity;
