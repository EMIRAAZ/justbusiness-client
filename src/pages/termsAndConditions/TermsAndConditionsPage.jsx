import React from "react";
import Heading from "../../components/Heading/Heading";
import TermsAndConditions from "../../components/TermsAndCondition"
import NormalHeader from "../../components/Header/NormalHeader";
import Footer from "../../components/Footer/Footer";

function TermsAndConditionsPage() {
  return (
    <div className={`650px:mx-[100px] mx-[24px] pt-[24px]`}>
    <NormalHeader />

    
          {/* -- */}
          <div className="mt-10">
            <TermsAndConditions />
          </div>
          {/* ---- */}
    <div className="mt-[72px]">
      <Footer />
    </div>
  </div>
  );
}

export default TermsAndConditionsPage;
