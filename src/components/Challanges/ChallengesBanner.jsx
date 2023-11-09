import React from "react";
import { Link } from "react-router-dom";
import banner2 from "../../../src/images/Challenges-Banner.jpg";
import Banner from "../BannerForAllPages/Banner";

function ChallengesBanner() {
  return (
    <div>
      <Banner
        backgroundImage={banner2}
        title="Challenges and Solutions"
        description="The experts at GEP help businesses reduce emissions; they identify suitable projects, ensure compliance with Article 6.2 standards, develop project plans, and seek certification from recognized carbon standards.        "
      />
      <Link
        className="relative -top-[80px] md:-top-[90px] lg:-top-[90px] xl:-top-[100px] left-[30px] md:left-[60px] lg:left-[80px] xl:left-[100px] "
        to="/contact-us"
      >
        {" "}
        {/* Use the Link component to create a link */}
        <button className="py-[12px] px-[25px] leading-5 lg:leading-7 text-sm md:text-base lg:text-lg  hover:border-[#F7F5F2] bg-[#EFEDD1] hover:bg-[#F7F5F2] hover:text-[#316D69]  border border-white border-3  rounded-lg text-[#316D69] font-montserrat font-medium ">
          Register Your Interest
        </button>
      </Link>
    </div>
  );
}

export { ChallengesBanner };
