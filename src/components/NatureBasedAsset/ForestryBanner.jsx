import React from "react";
import { Link } from "react-router-dom";
import banner from "../../../src/images/f2.jpg";
import Banner from "../BannerForAllPages/Banner";

const ForestryBanner = () => {
  return (
    <div>
      <Banner
        title="State of Green-Economy"
        description="Assets like sustainable forestry, blue carbon, and climate-smart agriculture are power allies in the fight against climate change. Our experts help you reduce your carbon footprint through sustainable forest management."
        backgroundImage={banner}
        buttonText="Plant a Tree"
      />
      <Link
        className="relative -top-[80px] md:-top-[90px] lg:-top-[90px] xl:-top-[100px] left-[30px] md:left-[60px] lg:left-[80px] xl:left-[100px] "
        to="/contact-us"
      >
        {" "}
        {/* Use the Link component to create a link */}
        <button className="py-[12px] px-[25px] leading-5 lg:leading-7 text-sm md:text-base lg:text-lg  hover:border-[#F7F5F2] bg-[#EFEDD1] hover:bg-[#F7F5F2] hover:text-[#316D69]  border border-white border-3  rounded-lg text-[#316D69] font-montserrat font-medium ">
          Plant a Tree
        </button>
      </Link>
    </div>
  );
};

export default ForestryBanner;
