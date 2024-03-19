import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { 
  LoginPage,
  AdminLayout,
  AdminDashBoard,
  AdminEnquiries,
  ManageProperties,
  AddProperties,
  EditProperties,
  EditProperty ,
  AddCityPage,
  EditCitiesPage, 
  EditCityPage,
  ManageBlogPage,
  AddBlogPage,
  EditBlogsPage,
  EditBlogPage,
  AddBannerPage,
  EditBannerPage,
  ManageBannerPage,
  EditBannersPage,
  AddDeveloperPage,
  ViewDevelopersPage,
  EditDeveloperPage
} from "./Routes";
import { Toaster } from "react-hot-toast";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Navigate to="/admin" />} /> */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/admin" element={<AdminLayout/>}>
          <Route path="dashboard" element={<AdminDashBoard/>}/>
          <Route path="enquiries" element={<AdminEnquiries/>}/>
          <Route path="manage-properties" element={<ManageProperties/>}/>
          <Route path="add-properties" element={<AddProperties/>}/>
          <Route path="edit-properties" element={<EditProperties/>}/>
          <Route path="edit-property/:id" element={<EditProperty/>}/>
          <Route path="add-city" element={<AddCityPage/>}/>
          <Route path="edit-cities" element={<EditCitiesPage/>}/>
          <Route path="edit-citiy/:id" element={<EditCityPage/>}/>
          <Route path="manage-blog" element={<ManageBlogPage/>}/>
          <Route path="add-blog" element={<AddBlogPage/>}/>
          <Route path="edit-blogs" element={<EditBlogsPage/>}/>
          <Route path="edit-blog/:id" element={<EditBlogPage/>}/>
          <Route path="add-banner" element={<AddBannerPage/>}/>
          <Route path="manage-banner" element={<ManageBannerPage/>}/>
          <Route path="edit-banner/:id" element={<EditBannerPage/>}/>
          <Route path="edit-banners" element={<EditBannersPage/>}/>
          <Route path="edit-developer/:id" element={<EditDeveloperPage/>}/>
          <Route path="add-developer" element={<AddDeveloperPage/>}/>
          <Route path="developers" element={<ViewDevelopersPage/>}/>
        </Route>
      </Routes>
      <Toaster position="top-center" reverseOrder={false} />
    </BrowserRouter>
  );
}

export default App;
