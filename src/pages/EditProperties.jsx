import { useEffect, useState } from 'react'
import Cards from "../components/Cards"
import { getProperties } from '../api'
import { errorToast } from '../toast'
import { fetchProperties, setError, setLoading } from '../features/propertiesSlice'
import { useDispatch, useSelector } from 'react-redux';


function EditProperties() {

  const { data } = useSelector((state) => state.property); 


  const dispatch = useDispatch();

  const [refresh,setRefresh] = useState(true);
  

  useEffect(()=>{
    fetchdata()
  },[refresh])

  const fetchdata =async ()=>{
    try {
      dispatch(setLoading());
      const response = await getProperties()
      dispatch(fetchProperties(response));

    } catch (error) {
      if (error.response && error.response.data) {
        dispatch(setError(error.response.data.message));
        errorToast(error.response.data.message)
      } else {
        dispatch(setError('An error occurred during login.'));
        errorToast('An error occurred during login.');
      }
    }
    }
  

  return (

    <div className='grid grid-cols-3 gap-2 flex-wrap'>
        { data && data?.map((item)=> <Cards refresh={refresh} setRefresh={setRefresh} key={item._id} item={item} /> )}
    </div>
  )
}

export default EditProperties