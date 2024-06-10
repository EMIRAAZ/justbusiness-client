import Lazyloading from "../Lazyloading/Lazyloading";
import Logo from "../../assets/new/logo/white-p.png";
import Button from "../Button/Button";
import { Blue, TypographyOne, TypographyTwentyTwo, TypographyTwo, White } from "../../styles";
import { useNavigate } from "react-router-dom";
import {RiMenu2Fill} from "react-icons/ri"
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

function NormalHeader() {

  const navigate = useNavigate();

  const [activeHeader,setActiveHeader] = useState(false);

  const toggleButton = ()=>{
    setActiveHeader(!activeHeader)
  }

  const toggleButtonWithLink = (link)=>{
    setActiveHeader(!activeHeader)
  navigate(link)
  }

  return (
    <div className={`px-[29px] relative rounded-[10px] flex justify-between items-center w-full h-[69px] bg-white`}>
      <h1 onClick={()=>navigate('/')} className={`${TypographyTwentyTwo} text-[#016EFF]`}>#JustBusiness</h1>

      <ul className={`${TypographyOne}  hidden 850px:flex justify-center items-center `}>
        <li onClick={()=>navigate('/')} className="h-full capitalize justify-center items-center flex ps-[30px] gap-[30px]">
          <span className={`block text-black `}>Home</span>
          <span className={`w-[1px] h-[14px]  block bg-black`}></span>
        </li>
        <li onClick={()=>navigate('/about')} className="h-full capitalize justify-center items-center flex ps-[30px] gap-[30px]">
          <span className={`block text-black `}>About</span>
          <span className={`w-[1px] h-[14px]  block bg-black`}></span>
        </li>
        <li onClick={()=>navigate('/blog')} className="h-full capitalize justify-center items-center flex ps-[30px] gap-[30px]">
          <span className={`block text-black `}>Blog</span>
          <span className={`w-[1px] h-[14px]  block bg-black`}></span>
        </li>
        <li onClick={()=>navigate('/contact-us')} className="h-full capitalize justify-center items-center flex ps-[30px] gap-[30px]">
          <span className={`block text-black `}>Contact</span>
          
        </li>
        
        
      </ul>
      <div className="flex 850px:hidden">
        { !activeHeader && <RiMenu2Fill onClick={toggleButton} size={34} color="#016EFF"/>}
        { activeHeader &&<IoCloseOutline onClick={toggleButton} size={34} color="#016EFF"/>}
      </div>


      { activeHeader && <ul className="flex flex-col 850px:hidden py-5 px-4 bg-white text-black border-2 shadow-md scale-105 left-0 w-full h-fit rounded-[10px] absolute top-[80px]">
      <li onClick={(e)=>toggleButtonWithLink('/')} className="py-4  border-b-2 text-[16px] sf-medium leading-[19.09px]">Home</li>
      <li onClick={(e)=>toggleButtonWithLink('/about')} className="py-4 border-b-2  text-[16px] sf-medium leading-[19.09px]">About</li>
      <li onClick={(e)=>toggleButtonWithLink('/blog')} className="py-4 border-b-2  text-[16px] sf-medium leading-[19.09px]">Blog</li>
      <li onClick={(e)=>toggleButtonWithLink('/contact-us')} className="py-4  text-[16px] sf-medium leading-[19.09px]">Contact</li>

      </ul>
}
 
      <Button value={"Cost calculator"} className={`px-[11px]  py-[25px] bg-[#016EFF] w-[162px] h-[43px] rounded-[12px] hidden 850px:flex justify-center items-center text-white ${TypographyTwo}`} />
    </div>
  );
}

export default NormalHeader;
