import { Link } from "react-router-dom";
import { InstagramIcon, thedubaithings } from "../../assets/icons";
import Lazyloading from "../Lazyloading/Lazyloading";

function Header() {
  return (
    <div className="flex justify-center items-center mt-[23px]">
      <div className="bg-[#F7B519] md:w-[96%] w-[93%] flex items-center px-[20px] md:px-[70px] justify-between md:h-[90px] h-[83px] rounded-[10px]">
        <Link className="block" to={'/'}>
          <Lazyloading
            title={"thedubaithings"}
            src={thedubaithings}
            alt={"thedubaithings"}
            className="md:w-[252px] md:h-[34px] w-[176px] h-[24px] object-cover"
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
