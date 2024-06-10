import {  useState } from "react";
import PlaceHolder from "../../assets/placeholder/placeholder-image.png";
import { CiCircleRemove } from "react-icons/ci";
import { addingBlogAPI, addingInterestAPI } from "../../api";
import { errorToast, successToast } from "../../toast";

function AddLead() {
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState("");
  // --------------------------------------------

  // -----------------------------------------------------
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
  });
  // -----------------------------------------------------

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // -------------------------------------------------

  const removeImage = () => {
    setFormData({ ...formData, preview: "" });
    setImage("");
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      setIsLoading(true);
     


      await addingInterestAPI(formData);

      successToast("Successfully added");
      setFormData({
       name:"",
       email:"",
       number:""
      });

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


  return (
    <form onSubmit={handleSubmit} className="flex flex-wrap">
      <div className="flex-[50%]">
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

        <div className="flex flex-col gap-2 mx-3 mt-3">
          <label
            htmlFor="Number"
            className="sf-medium font-medium text-sm text-[#000000]"
          >
            Number
          </label>
          <input
            disabled={isLoading}
            autoComplete=""
            value={formData.number}
            name="number"
            onChange={handleChange}
            type="tel"
            id="number"
            placeholder="Number"
            title="Number"
            className="border border-[#E4E4E4] py-4 px-5 rounded-[10px] sf-normal font-extralight text-sm text-[#666666]  outline-none"
          />
        </div>


        <div className="flex flex-col gap-2 mx-3 mt-3">
          <label
            htmlFor="email"
            className="sf-medium font-medium text-sm text-[#000000]"
          >
            Email
          </label>
          <input
            disabled={isLoading}
            autoComplete=""
            value={formData.email}
            name="email"
            onChange={handleChange}
            type="email"
            id="email"
            placeholder="Email"
            title="Email"
            className="border border-[#E4E4E4] py-4 px-5 rounded-[10px] sf-normal font-extralight text-sm text-[#666666]  outline-none"
          />
        </div>



        {/* submit */}
        <div className="p-3 poppins-semibold text-lg">
          <button disabled={isLoading} type="submit" className="w-52 h-11 bg-[#016EFF] text-[#fff] hover:bg-[#016EFF] flex justify-center items-center rounded-[4px] cursor-pointer">
            
              {isLoading ? "Loading..." : "Save"}
            
          </button>
      </div>

      </div>
    </form>
  );
}

export default AddLead;
