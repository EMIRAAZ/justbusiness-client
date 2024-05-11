import { useEffect } from "react";
import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";
import { ADMIN_ID, ADMIN_TOKEN } from "../api/localstorage-varibles";

function AdminLayout() {
  const navigate = useNavigate();

  useEffect(() => {
    if (
      !(localStorage.getItem(ADMIN_ID) && localStorage.getItem(ADMIN_TOKEN))
    ) {
      navigate("/admin-login");
    }
  }, [navigate]);

  return (
    <div className="">
      <Layout />
    </div>
  );
}

export default AdminLayout;
