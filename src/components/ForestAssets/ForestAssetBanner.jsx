import React from "react";
import { Link } from "react-router-dom";
import background from "../../../src/images/forestassets-banner.png";
import Banner from "../BannerForAllPages/Banner";

const ForestAssetBanner = () => {
  return (
    <div>
      <Banner
        backgroundImage={background}
        title="Forest Assets"
        description="Unlocking the hidden wealth of earth’s 30% land coverage; Forest assets and carbon offsets- A dream or reality?  "
      />
      <Link
        className="relative -top-[80px] md:-top-[90px] lg:-top-[90px] xl:-top-[100px] left-[30px] md:left-[60px] lg:left-[80px] xl:left-[100px] "
        to="/contact-us"
      >
        {" "}
        {/* Use the Link component to create a link */}
        <button className="py-[12px] px-[25px] leading-5 lg:leading-7 text-sm md:text-base lg:text-lg  hover:border-[#F7F5F2] bg-[#EFEDD1] hover:bg-[#F7F5F2] hover:text-[#316D69]  border border-white border-3  rounded-lg text-[#316D69] font-montserrat font-medium ">
          Contact Us
        </button>
      </Link>
    </div>
  );
};

export default ForestAssetBanner;
