import Heading from "../components/Heading/Heading";
import ManageCard from "../components/ManageCard/ManageCard";

function AdminCategorisPage() {
  return (
    <div>
      <div className="">
        <Heading title={"Manage Categories"} />
      </div>
      <div className="flex gap-3 sf-medium font-medium text-2xl">
        <ManageCard title={'Add Category'} url={'/admin/add-category'} />
        <ManageCard title={'View Category'} url={'/admin/view-categories'}/>
      </div>
    </div>
  );
}

export default AdminCategorisPage;
