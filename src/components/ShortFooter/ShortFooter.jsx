import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container-fluid bg-[#BAB220] flex justify-center items-center pt-6 pb-6 px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px]">
        <div className="lg:flex md:flex flex-col sm:flex-row justify-between space-y-4 items-center">
          <div className="left-footer grid-col w-full sm:w-auto text-center flex justify-between items-center">
            <span className="text-white font-normal flex text-center font-poppins text-sm md:text-base lg:text-lg leading-5 lg:leading-7">
              Copyright 2022 , All rights reserved by Green Economy Partnership
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
