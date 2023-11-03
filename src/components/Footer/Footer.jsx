import React from "react";
import Footerlogo from "../../../src/images/greenlogo.png";
import Facebook from "../../../src/images/Fb-icon.svg";
import Twitter from "../../../src/images/X-icon.svg";
import LinkedIn from "../../../src/images/Linkedin-icon.svg";
import Location from "../../../src/images/Locationf.svg";
import Email from "../../../src/images/Emailf.svg";

const mainfooter = () => {
  return (
    <div className="main-footer">
      <div className="container-fluid flex bg-[#ffffff] justify-between lg:py-16 pb-4 pt-4  lg:pb-6 px-[30px] md:px-[60px] lg:px-[70px] xl:px-[80px] ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-2  lg:space-y-28 space-y-24 flex-wrap lg:gap-6 row-footer sm:pb-6 pb-6">
          <div className="grid-cols-3 space-y-4 f-line2 lg:ml-4">
            <a href="/">
              {" "}
              <img className="-ml-5" src={Footerlogo} alt="footerlogo" />
            </a>
            <p className="text-[#3C3C3C] text-sm md:text-base lg:text-lg font-poppins font-normal leading-5 lg:leading-7">
              Our mission is to lead the way in developing and restoring
              forestry for carbon capture and ecosystem services, creating a
              greener and cleaner world for future generations.
            </p>
            <ul className=" flex gap-4">
              <li className="flex space-y-2">
                <img
                  className="w-8 h-8  rounded-full hover:scale-110 transition duration-700 ease-in-out"
                  src={Facebook}
                  alt="facebook"
                />
              </li>
              <li className="flex space-y-2">
                <img
                  className="w-8 h-8  rounded-full hover:scale-110 transition duration-700 ease-in-out"
                  src={Twitter}
                  alt="twitter"
                />
              </li>
              <li className="flex space-y-2">
                <img
                  className="w-8- h-8  rounded-full hover:scale-110 transition duration-700 ease-in-out"
                  src={LinkedIn}
                  alt="linkedin"
                />
              </li>
            </ul>
          </div>
          <div className="grid-cols-3 space-y-4 f-line2 sm:pl-16 md:pl-28 lg:mt-0 lg:pl-16">
            <h4 className="text-[#BAB220] font-bold font-roboto w-fit text-lg md:text-xl lg:text-2xl leading-7 lg:leading-9 -mt-20">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2 text-sm md:text-base lg:text-lg font-medium font-montserrat leading-5 lg:leading-7 text-[#3C3C3C]">
              <a href="/">
                {" "}
                <li className=" ">Home</li>
              </a>
              <a href="/our-story">
                {" "}
                <li className="">About</li>
              </a>
              <a href="/projects">
                <li className="">Projects</li>
              </a>
              <a href="/challenges">
                {" "}
                <li className="">Challenges</li>
              </a>
              <a href="/contact-us">
                {" "}
                <li className="">Contact</li>
              </a>
            </ul>
          </div>

          <div className="grid-cols-3 space-y-4 f-line2   lg:mt-0 lg:pl-4">
            <h4 className="text-[#BAB220] font-bold font-roboto w-fit text-lg md:text-xl  leading-7 lg:leading-9 lg:text-2xl -mt-20">
              Services
            </h4>
            <ul className="flex flex-col gap-2 text-[#3C3C3C] text-sm md:text-base lg:text-lg  font-medium font-montserrat leading-5 lg:leading-7">
              <a href="/wind-and-solar">
                {" "}
                <li className="  ">Wind and Solar</li>
              </a>
              <a href="/agriculture">
                {" "}
                <li className="">Agriculture</li>
              </a>
              <a href="/forestry">
                {" "}
                <li className="">Forestry</li>
              </a>
              <a href="/blue-carbon">
                {" "}
                <li className="">Blue Carbon</li>
              </a>
              <a href="/anaerobic-digestion">
                {" "}
                <li className="">Anaerobic Digestion</li>
              </a>
            </ul>
          </div>

          <div className="grid-cols-3 space-y-4 f-line4 mt-6 lg:mt-0 sm:pl-16 md:pl-28 lg:pl-0">
            {/* ... Content for the third column */}
            <ul className=" flex flex-col gap-4 lg:-mt-8">
              <div className="flex gap-3 align-middle	">
                <img className="w-6 h-6 " src={Email} alt="location" />
                <p className="text-[#3C3C3C] text-sm md:text-base lg:text-lg font-normal font-poppins leading-5 lg:leading-7">
                  info@greeneconomy.ae
                </p>
              </div>
              <div className="flex gap-3">
                <img className="w-6 h-6   " src={Location} alt="location" />
                <p className="text-[#3C3C3C] text-sm md:text-base lg:text-lg font-normal font-poppins leading-5 lg:leading-7">
                  Unit 19319-001, Dubai Silicon Oasis, DDP, Building A2, Dubai,
                  UAE
                </p>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default mainfooter;
