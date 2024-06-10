import React from "react";
import { TypographyFive, TypographyFour, TypographySix, TypographyThree } from "../../styles";
import Button from "../../components/Button/Button";

function FirstCard({handleActivityCount}) {
  return (
    <div className="text-white 650px:mt-[180px] xl:h-screen  mt-[206px] 1500px:mt-[260px]">
      <h2
        className={`${TypographyThree} pb-[17px] text-center 650px:text-start`}
      >
        #JustBusiness
      </h2>
      <h1 className={`${TypographyFour} hidden 650px:block pb-[17px]`}>
        Calculate Your Dubai <br /> Business Setup Cost
      </h1>
      <p className={`${TypographyFive} hidden 650px:block pb-[17px]`}>
        How Much Does it Cost To Start a Company in Dubai?
      </p>

      <h1
        className={`${TypographyFour} text-center 650px:text-start block 650px:hidden pb-[17px]`}
      >
        Calculate Your <br /> Dubai Business <br /> Setup Cost
      </h1>

      <Button
        handleClick={()=>handleActivityCount(2)}
        value={`Calculate Now`}
        className={`650px:m-0 m-auto 650px:px-[20px] px-[15px] 650px:py-[30px] py-[20px] ${TypographySix} rounded-[10px] 650px:w-[216px] w-[159px] 650px:h-[72px] h-[54px] bg-[#FFDE59] text-[#000000] flex justify-center items-center`}
      />
    </div>
  );
}

export default FirstCard;
