import React from "react";
import background from "../../../src/images/agri-six.jpg";

function AgricultureSix() {
  return (
    <section
      className="relative bg-cover bg-center p-8 font-roboto flex flex-col md:flex-row justify-start items-start px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px]"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="bg-[#BAB220] bg-opacity-50 lg:w-1/2 lg:px-12 rounded-lg p-8 relative">
        <h2 className="mb-4 tracking-normal text-2xl font-montserrat leading-7 font-bold text-white relative z-10">
          Let's transform net-zero carbon footprint together by 2050
        </h2>
        <button className="mt-6 bg-custom6 font-montserrat font-normal text-lg text-white border-2 border-white hover:bg-transparent hover:text-white py-3 px-[25px] rounded-lg shadow-md transition duration-300 transform hover:scale-105 relative z-10">
          Get In Touch
        </button>
      </div>
    </section>
  );
}

export default AgricultureSix;
