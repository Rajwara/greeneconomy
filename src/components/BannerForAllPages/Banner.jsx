import React from "react";

const Banner = ({ title, description, backgroundImage, buttonText }) => {
  const bannerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div
      className="relative p-4 text-[#f7f5f2] px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] h-auto flex flex-col align-middle justify-center  lg:h-[380px] "
      style={bannerStyle}
    >
      <h1 className="text-5xl font-bold font-montserrat tracking-normal leading-7 text-[#f7f5f2]">
        {title}
      </h1>
      <p className="mt-6 text-[#f7f5f2] text-xl font-medium font-poppins leading-7">
        {description}
      </p>
      <button className="bg-white text-lg text-[#3c3c3c] mt-8 py-3 font-montserrat px-5 w-[160px] rounded-lg hover:bg-transparent hover:border-2 hover:border-[#f7f5f2] hover:text-[#f7f5f2]">
        {buttonText}
      </button>
    </div>
  );
};

export default Banner;
