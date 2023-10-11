import React from "react";
import background from "../../../src/images/agriculture-main-banner.jpg";

const AgricultureBanner = () => {
  return (
    <section
      className="relative bg-cover bg-center py-20  px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px]  flex justify-around items-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative z-10 text-center px-10">
        <h1 className="text-2xl xs:text-2xl lg:text-5xl font-bold text-[white] mb-4 ">
          Welcome to Our Oasis
        </h1>
        <p className="text-white text-lg xs:text-[16px] mb-8 font-normal">
          Embark on a journey of discovery and innovation.
        </p>
        <button className="py-3 px-6 bg-transparent border-2 border-white hover:from-blue-400 hover:to-purple-400 text-white rounded-full font-medium tracking-wide transform hover:scale-105 transition duration-300 ease-in-out">
          Get Started
        </button>
      </div>
      {/* <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-10">
        <div className="w-16 h-16 rounded-full bg-white bg-opacity-20 animate-bounce"></div>
      </div> */}
    </section>
  );
};

export default AgricultureBanner;
