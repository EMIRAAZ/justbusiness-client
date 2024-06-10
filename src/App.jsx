import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  LoginPage,
  AdminLayout,
  UserContactUsPage,
  // user
  UserHomePage,
  UserViewBlogPage,
  UserAbout,
  UserBlogPage,

  // manage lead
  AdminManageLead,
  AdminAddLead,
  AdminViewLead,

  // package
  AdminPackagePage,
  AdminAddPackagePage,
  AdminViewPackagePage,
  AdminEditPackagePage,
  // activities
  AdminActivityPage,
  AdminAddActivityePage,
  AdminViewActivityePage,
  AdminEditActivityePage,
  // blog section
  AdminBlogPage,
  AdminViewBlogsPage,
  AdminAddBlogPage,
  AdminEditBlogPage,

  // enquiries
  AdminEnquiriesPage,

  //contact-us
  AdminContactUsPage,
  AdminViewContactUsPage,


  // 
  TermsAndConditions,
  PrivacyAndPolicy,

} from "./Routes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin-login" element={<LoginPage />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="package" element={<AdminPackagePage />} />
          <Route path="add-package" element={<AdminAddPackagePage />} />
          <Route path="view-package" element={<AdminViewPackagePage />} />
          <Route path="edit-package/:id" element={<AdminEditPackagePage />} />
          

          {/* activity */}
          <Route path="activity" element={<AdminActivityPage />} />
          <Route path="add-activity" element={<AdminAddActivityePage />} />
          <Route path="view-activity" element={<AdminViewActivityePage />} />
          <Route path="edit-activity/:id" element={<AdminEditActivityePage />} />
          {/*  */}
          <Route path="blogs" element={<AdminBlogPage />} />
          <Route path="add-blog" element={<AdminAddBlogPage />} />
          <Route path="view-blogs" element={<AdminViewBlogsPage />} />
          <Route path="edit-blog/:id" element={<AdminEditBlogPage />} />

          {/* leader */}
          <Route path="lead" element={<AdminManageLead/>} />
          <Route path="add-lead" element={<AdminAddLead/>} />
          <Route path="view-lead" element={<AdminViewLead/>} />
          

          {/* enquiries */}
          <Route path="enquiries" element={<AdminEnquiriesPage />} />

          {/* contact-us */}
          <Route path="contact-us" element={<AdminContactUsPage />} />
          <Route path="view-contact-us" element={<AdminViewContactUsPage />} />
          

        </Route>
        {/* user */}
        <Route index element={<UserHomePage />} />
        <Route path="about" element={<UserAbout />} />
        <Route path="blog/:id" element={<UserViewBlogPage />} />
        <Route path="blog" element={<UserBlogPage />} />
        <Route path="contact-us" element={<UserContactUsPage />} />
        <Route path="viewcontact-us" element={<UserContactUsPage />} />
        <Route path="terms-conditions" element={<TermsAndConditions />} />
        <Route path="privacy-policy" element={<PrivacyAndPolicy />} />
      </Routes>
      <Toaster position="top-center" reverseOrder={false} />
    </BrowserRouter>
  );
}

export default App;
