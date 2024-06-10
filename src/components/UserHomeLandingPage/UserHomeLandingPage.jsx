import "./index.css";
import React from "react";

function UserHomeLandingPage({ children }) {
  return (
    <div className="w-full min-h-screen overflow-hidden home-index">
      <div className="banner-overlap w-full h-screen 650px:px-[100px] px-[24px] pt-[26px]">{children}</div>
    </div>
  );
}

export default UserHomeLandingPage;
