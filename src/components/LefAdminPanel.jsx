import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/new/logo/white-p.png"

// --------------------REACT-ICONS---------------------------------//
import { FaPeopleGroup, FaRegCircleUser } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";
import { FaBlogger, FaRegBuilding } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { ADMIN_ID, ADMIN_TOKEN } from "../api/localstorage-varibles";
import { ADMIN_LOGIN } from "../api/routes-names";
import { getUserById } from "../api";
import { IoMdAddCircleOutline } from "react-icons/io";
import {LuPackage} from "react-icons/lu"
import {RxActivityLog} from "react-icons/rx"
// --------------------REACT-ICONS---------------------------------//

function LefAdminPanel() {
  const navigate = useNavigate();

  //-------------------------------STATES-----------------------//
  const [style, setStyle] = React.useState("");
  const [toggleView, setToggleView] = React.useState("hidden");
  const [data, setData] = React.useState([]);
  //-------------------------------STATES-----------------------//

  //-------------------------------FUNCTIONS-----------------------//
  const closeSidebar = () => {
    setStyle("-translate-x-96 fixed  opacity-0 transition-all");
    setToggleView("block");
  };
  const openSideBar = () => {
    setStyle("");
    setToggleView("hidden");
  };
  //-------------------------------FUNCTIONS-----------------------//

  const handleLogout = () => {
    localStorage.removeItem(ADMIN_TOKEN);
    localStorage.removeItem(ADMIN_ID);
    navigate(`/${ADMIN_LOGIN}`);
  };

  React.useEffect(() => {
    // fetchdata();

    return () => {
      setData([]);
    };
  }, []);

  const fetchdata = async () => {
    try {
      const response = await getUserById(localStorage.getItem(ADMIN_ID));
      setData(response.result);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div
        className={`${style} z-50 fixed md:overflow-clip overflow-scroll top-1 left-0 ease-out duration-1000 max-w-64 h-[99vh] rounded-e-[50px] bg-[#016EFF] text-[#000000]`}
      >
        <div className="pt-14 px-6">
          <img src={Logo} alt="logo" className="w-44 h-12 object-contain" />
        </div>
        <div className="flex justify-center items-center font-medium sf-medium text-white flex-col">
          <div className="mt-12  ">
            <FaRegCircleUser size={50} />
          </div>
          <h1 className="text-center text-2xl pb-1.5">
            {data?.name || "Admin"}
          </h1>
          <h3
            className=" cursor-pointer flex justify-center text-sm items-center gap-2"
            onClick={handleLogout}
          >
            Logout <MdLogout />
          </h3>
        </div>
        <div className="flex justify-center text-[#000000] sf-medium font-medium pt-10 pb-12 px-4 ">
          <ul>


          <Link to={"/admin/enquiries"}>
              <li className="flex transition-all my-2 duration-150 ease-in-out hover:scale-105  items-center gap-3  hover:text-[#016EFF] bg-transparent hover:bg-white text-white py-3 px-8 rounded-lg">
                {" "}
                <FaPeopleGroup /> Enquiries
              </li>
            </Link>


          <Link to={"/admin/activity"}>
              <li className="flex transition-all my-2 duration-150 ease-in-out hover:scale-105  items-center gap-3  hover:text-[#016EFF] bg-transparent hover:bg-white text-white py-3 px-8 rounded-lg">
                {" "}
                <RxActivityLog /> Manage Activity
              </li>
            </Link>

          <Link to={"/admin/package"}>
              <li className="flex transition-all my-2 duration-150 ease-in-out hover:scale-105  items-center gap-3  hover:text-[#016EFF] bg-transparent hover:bg-white text-white py-3 px-8 rounded-lg">
                {" "}
                <LuPackage /> Manage Package
              </li>
            </Link>


          <Link to={"/admin/blogs"}>
              <li className="flex transition-all my-2 duration-150 ease-in-out hover:scale-105  items-center gap-3  hover:text-[#016EFF] bg-transparent hover:bg-white text-white py-3 px-8 rounded-lg">
                {" "}
                <FaBlogger /> Manage Blogs
              </li>
            </Link>


           

            <Link to={"/admin/lead"}>
              <li className="flex transition-all my-2 duration-150 ease-in-out hover:scale-105  items-center gap-3  hover:text-[#016EFF] bg-transparent hover:bg-white text-white py-3 px-8 rounded-lg">
                {" "}
                <IoMdAddCircleOutline /> Manage Lead
              </li>
            </Link>



            <Link to={"/admin/contact-us"}>
              <li className="flex transition-all my-2 duration-150 ease-in-out hover:scale-105  items-center gap-3  hover:text-[#016EFF] bg-transparent hover:bg-white text-white py-3 px-8 rounded-lg">
                {" "}
                <IoMdAddCircleOutline /> Reach US
              </li>
            </Link>
            
            

            
   
          </ul>
        </div>
        <div
          onClick={closeSidebar}
          className="absolute  lg:hidden right-6 top-4 cursor-pointer border rounded-3xl p-1 "
          title="close"
        >
          <IoCloseOutline size={30} />
        </div>
      </div>
      <div
        onClick={openSideBar}
        title="open"
        className={`${toggleView} absolute left-0-10 top-5 border border-black rounded-3xl p-2 ms-3 hover:bg-black hover:text-white cursor-pointer`}
      >
        <RxHamburgerMenu title="close" size={20} />
      </div>
    </>
  );
}

export default LefAdminPanel;
