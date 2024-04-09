import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import {
  LoginPage,
  AdminLayout,
  AdminDashBoard,
  AdminEnquiries,
  ManageProperties,
  AddProperties,
  EditProperties,
  EditProperty,
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
  EditDeveloperPage,

  // users
  UserHome,
  UserAbout,
  UserApartment,
  UserBlog,
  UserTownhouse,
  UserPenthouse,
  UserBlogDetails,
  UserAllProjects,
  UserViewProjects,
  TermsAndConditions,
  PrivacyPolicy,
  OurSellers,
  AddBannerClient,
  AddClient,
  EditBannerClient,
  EditClient,
  ViewBannerClient,
  ViewClient,
  DeveloperLoginPage
} from "./Routes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin-login" element={<LoginPage />} />

        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashBoard />} />
          <Route path="enquiries" element={<AdminEnquiries />} />
          <Route path="manage-properties" element={<ManageProperties />} />
          <Route path="add-properties" element={<AddProperties />} />
          <Route path="edit-properties" element={<EditProperties />} />
          <Route path="edit-property/:id" element={<EditProperty />} />
          <Route path="add-city" element={<AddCityPage />} />
          <Route path="edit-cities" element={<EditCitiesPage />} />
          <Route path="edit-citiy/:id" element={<EditCityPage />} />
          <Route path="manage-blog" element={<ManageBlogPage />} />
          <Route path="add-blog" element={<AddBlogPage />} />
          <Route path="edit-blogs" element={<EditBlogsPage />} />
          <Route path="edit-blog/:id" element={<EditBlogPage />} />
          <Route path="add-banner" element={<AddBannerPage />} />
          <Route path="manage-banner" element={<ManageBannerPage />} />
          <Route path="edit-banner/:id" element={<EditBannerPage />} />
          <Route path="edit-banners" element={<EditBannersPage />} />
          <Route path="edit-developer/:id" element={<EditDeveloperPage />} />
          <Route path="add-developer" element={<AddDeveloperPage />} />
          <Route path="developers" element={<ViewDevelopersPage />} />
          <Route path="developers" element={<ViewDevelopersPage />} />
          <Route path="add-banner-client" element={<AddBannerClient />} />
          <Route path="add-client" element={<AddClient />} />
          <Route path="edit-banner-client/:id" element={<EditBannerClient />} />
          <Route path="edit-client/:id" element={<EditClient />} />
          <Route path="view-banner-client" element={<ViewBannerClient />} />
          <Route path="view-client" element={<ViewClient />} />
        </Route>

        {/* developer */}
        <Route path="/developer-login" element={<DeveloperLoginPage />} />


        {/* user */}
        <Route index element={<UserHome />} />
        <Route path="/about" element={<UserAbout />} />
        <Route path="/blog" element={<UserBlog />} />
        <Route path="/blog/:name/:id" element={<UserBlogDetails />} />
        <Route path="/apartment" element={<UserApartment />} />
        <Route path="/townhouse" element={<UserTownhouse />} />
        <Route path="/penthouse" element={<UserPenthouse />} />
        <Route path="/property-type/:type" element={<UserAllProjects />} />
        <Route path="/property/:name/:id" element={<UserViewProjects />} />
        <Route path="/terms-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/our-sellers" element={<OurSellers />} />
      </Routes>
      <Toaster position="top-center" reverseOrder={false} />
    </BrowserRouter>
  );
}

export default App;
