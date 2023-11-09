import React from "react";
import { Link } from "react-router-dom";
import background from "../../../src/images/agroforestry-banner.png";
import Banner from "../BannerForAllPages/Banner";

const AgroforestryBanner = () => {
  return (
    <>
      <Banner
        backgroundImage={background}
        title="Agroforestry"
        description="Where trees and crops unite for a greener tomorrow!  "
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
    </>
  );
};

export default AgroforestryBanner;
