import { useState } from "react";
import { errorToast, successToast } from "../toast";
import { FaPlus } from "react-icons/fa";
import { addingPackageAPI } from "../api";
function AddPackage() {
  const [isLoading, setIsLoading] = useState(false);
  // --------------------------------------------

  // -----------------------------------------------------
  const [formData, setFormData] = useState({
    title: "",
    price: "",
  });
  const [features, setFeatures] = useState([""]);
  // -----------------------------------------------------

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // -------------------------------------------------

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      setIsLoading(true);
      const data = {
        title: formData.title,
        price: formData.price,
        features: features,
      };

      await addingPackageAPI(data);

      successToast("Successfully added");
      setFormData({
        title: "",
        price: "",
      });
      setFeatures([])
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

  const addFeaturesField = () => {
    const newField = [...features, ""];
    setFeatures(newField);
  };

  const handleFeaturesChange = (value, index) => {
    const newArray = [...features];
    newArray[index] = value;
    setFeatures(newArray);
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-[40%] flex-wrap">
      <div className="flex-1">
        {/* Blog title */}
        <div className="flex flex-col gap-2 mx-3">
          <label
            htmlFor="title"
            className="sf-medium font-medium text-sm text-[#000000]"
          >
            Package Headline
          </label>
          <input
            disabled={isLoading}
            autoComplete=""
            value={formData.title}
            name="title"
            onChange={handleChange}
            type="text"
            id="title"
            placeholder="1 Year"
            title="Blog title"
            className="border border-[#E4E4E4] py-4 px-5 rounded-[10px] sf-normal font-extralight text-sm text-[#666666]  outline-none"
          />
        </div>

        {/* Price */}
        <div className="flex flex-col gap-2 mx-3 mt-3">
          <label
            htmlFor="price"
            className="sf-medium font-medium text-sm text-[#000000]"
          >
            Price
          </label>
          <input
            disabled={isLoading}
            autoComplete=""
            value={formData.price}
            name="price"
            onChange={handleChange}
            type="number"
            id="price"
            placeholder="1100 AED"
            title="Price"
            className="border border-[#E4E4E4] py-4 px-5 rounded-[10px] sf-normal font-extralight text-sm text-[#666666]  outline-none"
          />
        </div>

        <div className="">
          {/* features */}
          <div className="flex flex-col gap-2 mx-3 mt-3">
            <label
              htmlFor="features"
              className="sf-medium font-medium text-sm text-[#000000]"
            >
              Features
            </label>
            {features.map((item, index) => {
              return (
                <input
                  disabled={isLoading}
                  autoComplete=""
                  value={item}
                  name="features"
                  key={index}
                  onChange={(e) => handleFeaturesChange(e.target.value, index)}
                  type="text"
                  id="features"
                  placeholder="Free Visa"
                  title="features"
                  className="border border-[#E4E4E4] py-4 px-5 rounded-[10px] sf-normal font-extralight text-sm text-[#666666]  outline-none"
                />
              );
            })}
          </div>
        </div>
        <div
          onClick={addFeaturesField}
          className="mt-4 ms-4 bg-green-100 border rounded-full p-3 flex justify-center items-center w-fit"
        >
          <FaPlus className="cursor-pointer" size={15} color="#000" />
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

export default AddPackage;
