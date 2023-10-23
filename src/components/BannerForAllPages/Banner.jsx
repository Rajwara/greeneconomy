import React from "react";

const Banner = ({ title, description, backgroundImage, buttonText }) => {
  const bannerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="relative">
      <div style={bannerStyle}>
        <div className="px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] flex flex-col justify-center text-start	h-[400px]  bg-[#000000] bg-opacity-60 ">
          <h1 className="text-2xl md:text-4xl lg:text-5xl leading-8 lg:leading-tight font-[900] text-[#BAB220] font-montserrat">
            {title}
          </h1>
          <p className="font-poppins leading-5 lg:leading-7 text-sm md:text-base lg:text-lg font-normal text-[#EFEDD1] mt-6">
            {description}
          </p>

          <div className="pt-[20px]">
            <button className="py-[12px] px-[25px] leading-5 lg:leading-7 text-sm md:text-base lg:text-lg  hover:border-[#F7F5F2] bg-[#EFEDD1] hover:bg-[#F7F5F2] hover:text-[#316D69]  border border-white border-3  rounded-lg text-[#316D69] font-montserrat font-medium ">
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
