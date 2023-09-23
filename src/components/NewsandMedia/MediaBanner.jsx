import React from "react";
import backgroundImage from "../../../src/images/mediabanner.jpg";

const MediaBanner = () => {
  return (
    <div
      className="bg-cover bg-no-repeat bg-center h-80  px-[30px] md:px-[60px] text-start flex  font-roboto lg:px-[80px] xl:px-[100px] "
      style={{ backgroundImage: `url(${backgroundImage})` }}
    ></div>
  );
};

export default MediaBanner;
