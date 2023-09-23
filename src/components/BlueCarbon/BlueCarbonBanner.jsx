import React from "react";
import backgroundImage from "../../../src/images/bluecarbonbanner.jpg";

const BlueCarbonBanner = () => {
  return (
    <div
      className="bg-cover bg-no-repeat bg-center h-64 "
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Content of your component */}
    </div>
  );
};

export default BlueCarbonBanner;
