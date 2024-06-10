import "./index.css"
import { useNavigate } from "react-router-dom";
import {
  TypographyEight,
  TypographyEleven,
  TypographyNine,
  TypographyTen,
} from "../../styles";
import Button from "../Button/Button";

function Cards({id,title,price,features,isAdmin = false,handleDelete,editPackageUrl,interested}) {

  const navigate = useNavigate();

  return (
    <div
      className={` w-full md:w-[333px] ${isAdmin ? 'h-fit' : 'h-[486px]'} border-[2px] border-[#E2E2E2] rounded-[20px] flex flex-col justify-start items-center overflow-hidden `}
    >
      <div className="bg-[#016EFF] w-full h-[48px] flex justify-center items-center text-white">
        <h4 className={`${TypographyEight} text-center`}>{title}</h4>
      </div>
      <h1 className={`${TypographyNine} my-[30px] text-[#016EFF]`}>{price}</h1>
      <div className="flex flex-col gap-[20px] justify-center items-center">

        {
        features && features.map((item,index)=>{
        return(
          <p key={index} className={`relative package-lists-features ${TypographyTen} text-[#585858]`}>
          {item}
        </p>
        )
        })
        }
      </div>
      { !isAdmin && <div className="mt-[45px] w-full  px-[30px]">
         <Button
          handleClick={()=>interested(id)}
          value={"Register Now"}
          className={`w-full bg-[#FFDE59] rounded-[5px] ${TypographyEleven} px-[10px] py-[14px]`}
        />
      </div>}

      { isAdmin && <div className="mt-[45px] w-full  px-[30px]">
         <Button
          value={"Edit"}
          handleClick={()=>navigate(editPackageUrl)}
          className={`w-full bg-[#FFDE59] rounded-[5px] ${TypographyEleven} px-[10px] py-[14px]`}
        />
          <Button
          value={"Delete"}
          handleClick={()=>handleDelete(id)}
          className={`w-full bg-[#016EFF]  rounded-[5px] ${TypographyEleven} text-white mt-2 px-[10px] py-[14px]`}
        />
      </div>}
    </div>
  );
}

export default Cards;
