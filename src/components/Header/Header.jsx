import { Link } from "react-router-dom";
import { InstagramIcon, mobile_thedubaithings_icon, thedubaithings } from "../../assets/icons";
import Lazyloading from "../Lazyloading/Lazyloading";

function Header() {
  return (
    <div className="flex justify-center items-center mt-[23px]">
      <div className="bg-[#F7B519] md:w-[96%] w-[93%] flex items-center px-[20px] md:px-[70px] justify-between md:h-[90px] h-[83px] rounded-[20px] md:rounded-[10px]">
        <Link className="block" to={'/'}>
          <Lazyloading
            title={"thedubaithings"}
            src={thedubaithings}
            alt={"thedubaithings"}
            className="hidden md:block w-[252px] h-full object-contain"
          />
            <Lazyloading
            title={"thedubaithings"}
            src={mobile_thedubaithings_icon}
            alt={"thedubaithings"}
            className="block md:hidden w-full h-full object-contain"
          />
        </Link>
        <Lazyloading
          title={"instagram"}
          src={InstagramIcon}
          alt={"instagram"}
          className="h-[29px] w-[29px] md:w-[46px] md:h-[46px]  object-cover"
        />
      </div>
    </div>
  );
}

export default Header;
