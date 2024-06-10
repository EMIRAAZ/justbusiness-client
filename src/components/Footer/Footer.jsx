import React from "react";
import Lazyloading from "../Lazyloading/Lazyloading";
import Logo from "../../assets/new/logo/blue-p.png";
import Facebook from "../../assets/new/icons/facebook.png";
import Instagram from "../../assets/new/icons/inxtagram.png";
import x from "../../assets/new/icons/x.png";
import LinkedIn from "../../assets/new/icons/linkedin.png";
import { TypographyTwentyFive, TypographyTwentyFour, TypographyTwentyThree } from "../../styles";
import { Link } from "react-router-dom";

function Footer() {
  return (
   <div className="mb-[0px]">
     <div className="650px:h-[200px] h-fit gap-[18px] flex 650px:flex-wrap 650px:flex-row flex-col  justify-between">
      <Lazyloading
        title={"instagram"}
        src={Logo}
        alt={"instagram"}
        className="w-[44px] h-[46px]  object-cover"
      />

      <div className="">
        <p className={`${TypographyTwentyThree} text-[#016EFF] mb-2`}>Navigation</p>
        <ul className={`${TypographyTwentyFour} opacity-80 text-[#0A142F]`}>
          <Link to={'/'}>
          <li>Home</li>
          </Link>
          <Link to={'/about'}>
          <li>About Us</li>
          </Link>
          <Link to={'/blog'}>
          <li>Blogs</li>
          </Link>
        <Link to={'/contact-us'}>
          <li>Contact Us</li>
        </Link>
        </ul>
      </div>

      <div className="">
        <p className={`${TypographyTwentyThree} mb-2 text-[#016EFF]`}>Others</p>
        <ul className={`${TypographyTwentyFour} opacity-80 text-[#0A142F]`}>
          <Link to={'/terms-conditions'}>
          <li>Terms & Conditions</li>
          </Link>
          <Link to={'/privacy-policy'}>
          <li>Privacy & Policy</li>
          </Link>
        </ul>
      </div>

      <div className="">
        <p className={`${TypographyTwentyThree} mb-2 text-[#016EFF]`}>Contact Us</p>
        <ul className={`${TypographyTwentyFour} opacity-80 text-[#0A142F]`}>
          <li>Phone: <span>+971 909502344</span></li>
          <li>Email: : <span>justjdf@gmail.com</span></li>
        </ul>
      </div>


      <div className="">
        <p className={`${TypographyTwentyFive} mb-2  text-[##0A142F]`}>Social</p>
        <div className="flex gap-[28px] mt-[21px] opacity-80 text-[#0A142F]">
        <Lazyloading
        title={"instagram"}
        src={Facebook}
        alt={"instagram"}
        className="w-[30px] h-[30px]  object-cover"
      />
         <Lazyloading
        title={"instagram"}
        src={Instagram}
        alt={"instagram"}
        className="w-[30px] h-[30px]  object-cover"
      />
         <Lazyloading
        title={"instagram"}
        src={x}
        alt={"instagram"}
        className="w-[30px] h-[30px]  object-cover"
      />
         <Lazyloading
        title={"instagram"}
        src={LinkedIn}
        alt={"instagram"}
        className="w-[30px] h-[30px]  object-cover"
      />
        </div>
      </div>

    </div>
    <hr  className={`hidden 650px:block`}/>
    <p className={` ${TypographyTwentyFour} text-center hidden md:block py-4 opacity-80 text-[#0A142F]`}>@ 2021 JustBusiness | All Rights Reserved</p>
   </div>
  );
}

export default Footer;
