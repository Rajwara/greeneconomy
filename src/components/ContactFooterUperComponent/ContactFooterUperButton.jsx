import React from "react";

const ContactFooterUperButton = ({ title, description, buttontext }) => {
  return (
    <div className="  mx-auto mt-14 mb-14 bg-[#316D69] px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px]">
      <div className="flex flex-wrap justify-between mx-auto grid-cols-2 py-12 ">
        <div className=" text-left">
          <h3 className="font-montserrat text-3xl font-bold text-[#F7F5F2]">
            {title}
          </h3>
          <p className="text-lg mx-auto font-poppins text-[#f7f5f2] font-normal">
            {description}
          </p>
        </div>
        <div className="text-center">
          <button className="capitalize bg-[#BAB220] mt-6 sm:mt-0 md:mt-0 lg:mt-0 text-[#F7F5F2] px-6 py-2 rounded font-montserrat text-lg hover:bg-[#EFEDD1] hover:text-[#316D69]	">
            {buttontext}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactFooterUperButton;
