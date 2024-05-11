import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { errorToast, successToast } from "../../../toast/";
import UploadingImage from "../../uploading/UploadingImage";
import { CiCircleRemove } from "react-icons/ci";
import {
  MAIN_IMAG_URL,
  getCategoryByIdAPI,
  updateCategoryByIdAPI,
} from "../../../api";
import PlaceHolder from "../../../assets/placeholder/placeholder-image.png";

function EditCategory() {
  // --------------------------------------------
  const [image, setImage] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  // -----------------------------------------------------
  const [formData, setFormData] = React.useState({
    name: "",
    preview: "",
  });
  // -----------------------------------------------------

  const removeImage = () => {
    setFormData({ ...formData, preview: "" });
    setImage("");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // -------------------------------------------------

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setIsLoading(true);
      const formDataFields = new FormData();
      formDataFields.append("name", formData.name);
      formDataFields.append("_id", formData._id);

      if (image) {
        formDataFields.append("mainImgaeLink", image);
      }
      await updateCategoryByIdAPI(formDataFields);
      successToast("Successfully added");
      setFormData({ name: "", preview: "" });
      setImage("");
      setIsLoading(false);
      navigate("/admin/view-categories");
    } catch (error) {
      errorToast(
        error.response.data.message ||
          error.message ||
          "An error occurred during login."
      );
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!id) {
      return navigate("/admin/view-categories");
    }

    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await getCategoryByIdAPI(id);
      setFormData({ ...response.result });
      setImage(response?.result?.mainImgaeLink);
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
      {/* Category Name */}
      <div className="flex flex-1 flex-col gap-2 mx-3">
        <label
          htmlFor="name"
          className="sf-medium font-medium text-sm text-[#000000]"
        >
          Category Name
        </label>
        <input
          disabled={isLoading}
          autoComplete="name"
          value={formData.name}
          name="name"
          onChange={handleChange}
          type="text"
          id="name"
          placeholder="Category Name"
          title="Category Name"
          className="border border-[#E4E4E4] py-4 px-5 rounded-[10px] font-extralight sf-normal text-sm text-[#666666]  outline-none"
        />
      </div>

      {/*  Main image */}
      <div className="px-4 flex-1 text-[#F7B519]">
        <h1 className="mb-3 text-4xl font-medium sf-medium">Media</h1>
        <h2 className="sf-medium font-medium text-sm mb-3">Main Image</h2>
        <div className="flex gap-3 items-center">
          <div className="border w-80 h-64 flex justify-center items-center relative  rounded-[20px] overflow-hidden">
            <img
              src={
                formData.preview
                  ? formData.preview
                  : image
                  ? `${MAIN_IMAG_URL}/${image}`
                  : PlaceHolder
              }
              alt="placeholder"
              className="w-[168px] h-[168px] object-cover "
            />
            {formData.preview && (
              <span
                onClick={removeImage}
                className=" absolute top-2 left-3  cursor-pointer"
              >
                {" "}
                <CiCircleRemove className="text-red-600 " size={24} />{" "}
              </span>
            )}
          </div>

          <div className="">
            <UploadingImage
              isLoading={isLoading}
              onError={(error) => {
                errorToast(error);
              }}
              previewUrl={(e) => {
                setFormData({ ...formData, preview: e });
              }}
              selectedFile={(file) => setImage(file)}
            />
          </div>
        </div>

        {/* submit */}

        <div className="p-3 poppins-semibold text-lg">
          <button
            disabled={isLoading}
            type="submit"
            className="w-52 h-11 bg-[#F7B519] text-[#000000] hover:bg-[#F7B519] flex justify-center items-center rounded-[4px] cursor-pointer"
          >
            {isLoading ? "loading..." : "Save"}
          </button>
        </div>
      </div>
    </form>
  );
}

export default EditCategory;
