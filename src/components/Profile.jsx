import Placholder from "../assets/placeholder/placeholder-image.png";
import { useNavigate } from "react-router-dom";
import { errorToast, successToast } from "../toast";
import {
  deleteDeveloperSuccess,
  setError,
  setLoading,
} from "../features/developerSlice";
import { deleteDeveloper } from "../api";
import { useDispatch } from "react-redux";

function Profile({ refresh, setRefresh, item }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDelete = async (id) => {
    if (!id) return errorToast("Id Is Not Provided!");

    try {
      dispatch(setLoading());
      await deleteDeveloper(id);
      dispatch(deleteDeveloperSuccess());
      successToast("Successfully Deleted");
      setRefresh(!refresh);
    } catch (error) {
      if (error.response && error.response.data) {
        dispatch(setError(error.response.data.message));
        errorToast(error.response.data.message);
      } else {
        dispatch(setError("An error occurred during login."));
        errorToast("An error occurred during login.");
      }
    }
  };

  return (
    <div>
      <div className="flex items-center h-screen w-full justify-center">
        <div className="max-w-xs w-[300px]">
          <div className="bg-white shadow-xl rounded-lg py-3">
            <div className="photo-wrapper p-2">
              <img
                className="w-32 h-32 rounded-full mx-auto"
                src={item.mainImgaeLink || Placholder}
                alt={item.developerName}
              />
            </div>
            <div className="p-2 sf-normal">
              <h3 className="text-center sf-normal text-sm text-[#000000] leading-8">
                {item.developerName}
              </h3>
              <table className="text-xs my-3">
                <tbody>
                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">
                      Email
                    </td>
                    <td className="px-2 py-2">{item.email || "-"}</td>
                  </tr>
                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">
                      Phone
                    </td>
                    <td className="px-2 py-2">{item.contactNumber}</td>
                  </tr>
                </tbody>
              </table>
              <div className="text-center my-3 flex justify-evenly">
                <a
                  className="cursor-pointer text-xs  hover:underline font-medium"
                  onClick={() =>
                    navigate(`/admin/edit-developer/${item._id}`, {
                      state: item,
                    })
                  }
                >
                  Edit
                </a>
                <a
                  onClick={() => handleDelete(item._id)}
                  className="cursor-pointer text-xs  hover:underline font-medium"
                >
                  Delete
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
