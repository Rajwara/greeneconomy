import React from "react";

import banner from "../../../src/images/anaerobic-main-bnr.jpg";

const componentStyle = {
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 2.9), rgba(0, 0, 0, 0.5)), url(${banner})`,
  backgroundSize: "cover",
  backgroundPosition: "relative",
  backgroundRepeat: "no-repeat",
  /* Any additional styles you want to apply */
};

const mediaQuery320 = `@media (max-width: 320px) {
    background-size: 50% auto;
  }`;

function AnaerobicBanner() {
  return (
    <header
      style={componentStyle}
      className="bg-[#F7F5F2] px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] text-[#EFEDD1] py-16"
    >
      <div className="container mx-auto text-center">
        <h1 className="text-4xl xs:text-2xl md:text-5xl tracking-widest text-[#316D69] mb-6">
          Anaerobic Digestion
        </h1>
        <p className="text-lg md:text-xl max-w-xl mx-auto">
          Anaerobic Digestion is a sustainable process that breaks down organic
          matter to create energy-rich biogas, vastly reducing the amount of
          waste sent to landfill. It's an efficient and eco-friendly way for
          individuals and companies alike to reduce their environmental
          footprint!
        </p>
        <button className="mt-10 bg-transparent shadow-2xl text-[#BAB220] border-solid hover:border-[#BAB220] border-2 px-[25px] py-[12px] rounded-lg font-semibold hover:text-[#EFEDD1] transition duration-300">
          Learn More
        </button>
        <style>{mediaQuery320}</style>
      </div>
    </header>
  );
}

export default AnaerobicBanner;
