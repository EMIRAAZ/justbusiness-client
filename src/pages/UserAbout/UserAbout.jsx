import React from "react";
import NormalHeader from "../../components/Header/NormalHeader";
import AboutImage1 from "../../assets/new/about/image-1.jpeg";
import AboutImage2 from "../../assets/new/about/image-2.jpeg";
import {
  TypographyFive,
  TypographyNine,
  TypographyTwentySix,
} from "../../styles";
import Lazyloading from "../../components/Lazyloading/Lazyloading";
import Footer from "../../components/Footer/Footer";

function UserAbout() {
  return (
    <div className={`650px:mx-[100px] mx-[24px] pt-[24px]`}>
      <NormalHeader />

      <div className="w-full flex 800px:flex-row flex-col xl:h-[550px] h-fit gap-3 mt-[50px]">
        <div className="rounded-[20px] flex-1 flex flex-col justify-between items-start 650px:p-[30px] p-[20px] border border-[#E2E2E2]">
          <div className="">

          <h1 className={`1400px:text-[26px] text-[24px] sf-medium leading-[28.64px] text-[#016EFF] 650px:mb-[20px] mb-[12px]`}>
            About Us
          </h1>

          <p className={`650px:text-[40px] 1400px:text-[42px] text-[30px] sf-bold font-bold 650px:leading-[47.73px] leading-[37.73px] text-[#111111]`}>
            Empowering Entrepreneurs: Your Journey with JustBusiness
          </p>
          </div>

          <p className={`650px:text-[18px] 1400px:text-[20px] mt-5 650px:mt-0 text-[15px] sf-normal font-normal leading-[22.81px] text-[#585858]`}>
            Welcome to JustBusiness, your trusted ally in navigating the
            intricate landscape of starting a business in the UAE. With a
            dedicated team of experts and years of industry experience, we
            specialize in providing comprehensive solutions to estimate the
            costs involved in launching your venture. From guiding you through
            legal complexities to offering insights into financial
            considerations, our mission is to empower entrepreneurs like you to
            make informed decisions with confidence. At JustBusiness, we're
            committed to being your partner every step of the way, turning your
            business aspirations into reality.
          </p>
        </div>
        <div className="flex gap-3 flex-col flex-1">
          <div className="flex-1 h-1/2 rounded-[20px] overflow-hidden">
            <Lazyloading
              title={"instagram"}
              src={AboutImage1}
              alt={"instagram"}
              className="h-full w-full rounded-[20px] overflow-hidden  object-cover"
            />
          </div>
          <div className="flex-1 h-1/2 rounded-[20px]">
            <Lazyloading
              title={"instagram"}
              src={AboutImage1}
              alt={"instagram"}
              className="h-full w-full rounded-[20px] overflow-hidden  object-cover"
            />
          </div>
        </div>
      </div>
      <div className="mt-[72px]">
        <Footer />
      </div>
    </div>
  );
}

export default UserAbout;
