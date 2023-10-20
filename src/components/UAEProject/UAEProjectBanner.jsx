import React from "react";
import backgroundImage from "../../../src/images/News-and-Media-CoverageBanner.jpg";

const UAEProjectBanner = () => {
  const bannerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div className="relative">
      <div style={bannerStyle} className="h-[380px]  w-full"></div>
    </div>
  );
};

export default UAEProjectBanner;
