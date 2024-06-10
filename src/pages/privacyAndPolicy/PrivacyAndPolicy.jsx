import React from "react";
import Heading from "../../components/Heading/Heading";
import PrivacyAndPolicy from "../../components/PrivacyAndPolicy";
import NormalHeader from "../../components/Header/NormalHeader";
import Footer from "../../components/Footer/Footer";

function PrivacyAndPolicyPage() {
  return (
    <div className={`650px:mx-[100px] mx-[24px] pt-[24px]`}>
      <NormalHeader />

      {/* -- */}
      <div className="mt-10">
        <PrivacyAndPolicy />
      </div>
      {/* ---- */}
      <div className="mt-[72px]">
        <Footer />
      </div>
    </div>
  );
}

export default PrivacyAndPolicyPage;
