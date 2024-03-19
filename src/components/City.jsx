import { useNavigate } from 'react-router-dom';
import { errorToast, successToast } from '../toast';
import { deleteCitiesSuccess, setLoading } from '../features/citiesSlice';
import { deleteCity } from '../api';
import { useDispatch } from 'react-redux';
import { setError } from '../features/propertiesSlice';

function City({ item, refresh, setRefresh }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleDelete = async (id) => {
        if (!id) return errorToast("Id Is Not Provided!");
    
        try {
          dispatch(setLoading());
          await deleteCity(id);
          dispatch(deleteCitiesSuccess());
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
    <div className='w-52 max-w-52  border pb-3 rounded-[10px] mb-4'>
        <div className="w-52 h-[200px] relative">
            <img src={item.mainImgaeLink} className='object-cover w-full h-full rounded-[10px]' alt="" />
            <div className="absolute top-3 left-3 w-full ">
                <p className='bg-[#666666] text-center poppins-semibold text-[#ffffff] max-w-[78px] w-[78px] py-2 text-[10px] rounded-[40px]'>Dubai</p>
                <h1 className='text-2xl text-[#ffffff]  poppins-semibold'>Marina</h1>
            </div>
        </div>
        <div className="mt-4  flex gap-2 w-full px-2.5">
            <button onClick={()=>navigate(`/admin/edit-citiy/${item._id}`,{ state: item })}  className='flex-1 py-2.5 rounded poppins-semibold text-[10px] bg-[#D2D2D2] text-[#000000]' >Edit</button>
            <button
            onClick={() => handleDelete(item._id)}
             className='flex-1 py-2.5 rounded poppins-semibold text-[10px] bg-[#000000] text-[#ffffff]' >Delete</button>
         </div>
    </div>
  )
}

export default City