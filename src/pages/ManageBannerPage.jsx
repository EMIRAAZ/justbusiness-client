import ManageBanner from "../components/ManageBanner";
import ManageBannerClients from "../components/ManageBannerClients";
import ManageClients from "../components/ManageClients.jsx";

function ManageBannerPage() {
  return (
    <div>
      <div className="">
        <div className="flex justify-between my-6">
          <h1 className="sf-medium font-medium text-5xl">Manage Banner</h1>
        </div>
        <div className="mb-2">
          <ManageBanner />
        </div>
        <div className="mb-2">
          <ManageBannerClients />
        </div>
        <ManageClients />
      </div>
    </div>
  );
}

export default ManageBannerPage;
