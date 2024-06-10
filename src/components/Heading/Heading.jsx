import React from "react";

function Heading({ title }) {
  return (
    <div className="sticky top-0 bg-white flex justify-between py-6">
      <h1 className={`sf-medium font-medium text-5xl text-[#000000]`}>
        {title}
      </h1>
    </div>
  );
}

export default Heading;
