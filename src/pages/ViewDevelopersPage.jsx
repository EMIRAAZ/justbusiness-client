import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { errorToast } from '../toast';
import { setError, setLoading } from '../features/blogSlice.js';
import { getDevelopers } from '../api/';
import { fetchDevelopers } from '../features/developerSlice.js';
import Profile from "../components/Profile.jsx"

function ViewDevelopersPage() {

  const dispatch = useDispatch();
  const { developers } = useSelector((state) => state.developer); 
  const [refresh,setRefresh] = React.useState(true);

  React.useEffect(()=>{
    fetchdata()
  },[refresh])

  const fetchdata =async ()=>{
    try {
      dispatch(setLoading());
      const response = await getDevelopers()
      dispatch(fetchDevelopers(response));

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
    <div className='grid grid-cols-3'>
        {developers && developers.map((item)=> <Profile refresh={refresh} setRefresh={setRefresh} key={item._id} item={item} /> )}
    </div>
  )
}

export default ViewDevelopersPage