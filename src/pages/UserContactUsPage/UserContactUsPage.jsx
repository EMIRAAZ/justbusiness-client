import React from "react";
import NormalHeader from "../../components/Header/NormalHeader";
import Footer from "../../components/Footer/Footer";
import Contact from "../../components/Contact/Contact";

function UserContactUsPage() {
  return (
    <div className={`650px:mx-[100px] mx-[24px] pt-[24px]`}>
      <NormalHeader />

      
            {/* -- */}
            <div className="mt-10">
              <Contact />
            </div>
            {/* ---- */}
      <div className="mt-[72px]">
        <Footer />
      </div>
    </div>
  );
}

export default UserContactUsPage;
