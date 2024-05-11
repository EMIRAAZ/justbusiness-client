import { IoMdAdd } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function ManageCard({ url, title }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(url)}
      className="flex h-20 lg:h-16  items-center  flex-1 justify-between px-6 rounded-[10px] bg-[#F7B519] text-[#000000] cursor-pointer"
    >
      <span className="capitalize">{title}</span>
      <span>
        <IoMdAdd />
      </span>
    </div>
  );
}

export default ManageCard;
