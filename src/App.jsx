import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  LoginPage,
  AdminLayout,
  // user
  UserHomePage,
  UserAllProjectsPage,
  UserViewBlogPage,
  // categories section
  AdminCategorisPage,
  AdminViewCategoriesPage,
  AdminAddCategoryPage,
  AdminEditCategoryPage,
  // blog section
  AdminBlogPage,
  AdminViewBlogsPage,
  AdminAddBlogPage,
  AdminEditBlogPage,
} from "./Routes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin-login" element={<LoginPage />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="categories" element={<AdminCategorisPage />} />
          <Route path="add-category" element={<AdminAddCategoryPage />} />
          <Route path="view-categories" element={<AdminViewCategoriesPage />} />
          <Route path="edit-category/:id" element={<AdminEditCategoryPage />} />
          <Route path="blogs" element={<AdminBlogPage />} />
          <Route path="add-blog" element={<AdminAddBlogPage />} />
          <Route path="view-blogs" element={<AdminViewBlogsPage />} />
          <Route path="edit-blog/:id" element={<AdminEditBlogPage />} />
        </Route>
        {/* user */}
        <Route index element={<UserHomePage />} />
        <Route path="category/:name/:id" element={<UserAllProjectsPage />} />
        <Route path="blog/:id" element={<UserViewBlogPage />} />
      </Routes>
      <Toaster position="top-center" reverseOrder={false} />
    </BrowserRouter>
  );
}

export default App;
