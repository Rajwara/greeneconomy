import React from "react";
import { Link } from "react-router-dom";
import Banner from "../BannerForAllPages/Banner";
import img1 from "../../../src/images/Carbon-Trading-Banner-1.png";

const CarbonCreditsBanner = () => {
  return (
    <div>
      <Banner
        title="Offset Your Carbon Emissions Today! "
        description="By buying carbon credits, you are not only reducing your emissions but supporting local farmers to reach climate goals.
    "
        buttonText="Read More"
        backgroundImage={img1}
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

export default CarbonCreditsBanner;
