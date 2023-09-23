import React from "react";
import img1 from "../../../src/images/start-project-2.jpg";

function StartBanner() {
  const componentStyle = {
    backgroundImage: `url(${img1})`,
    backgroundSize: "cover", // Adjust as needed
    backgroundPosition: "center center", // Adjust as needed
    backgroundRepeat: "no-repeat",
    /* Any additional styles you want to apply */
  };

  return (
    <div className="bg-gray-100 font-sans">
      {/* Banner */}
      <section
        style={componentStyle}
        className="bg-gradient-to-r from-teal-500 to-blue-500 text-white py-20"
      >
        <div className="container mx-auto text-center">
          <h1 className="mb-6 text-6xl xs:text-[35px] md:text-[50px] xs:font-[800] font-extrabold text-center text-white tracking-tight">
            <span className="relative z-10 text-[white] transition-all duration-300 hover:text-[#FFD700]">
              Empower
            </span>{" "}
            <span className="relative z-10 text-[white] transition-all duration-300 hover:text-[#FFD700]">
              farmers
            </span>{" "}
            <span className="relative z-10 text-[white] transition-all duration-300 hover:text-[#FFD700]">
              now
            </span>
            <div className="mt-2 bg-gradient-to-r from-[#BAB220] to-[#316D69] h-1 w-20 mx-auto transition-all duration-300 hover:from-[#316D69] hover:to-[#FFD700]"></div>
          </h1>{" "}
          <a
            href="#"
            className="mt-8 inline-flex items-center bg-white text-black border-white px-[25px] py-3 rounded-lg bg-[white] hover:bg-[#BAB220] transform transition-transform duration-300 hover:scale-105 hover:shadow-md border-2 hover:border-black"
          >
            <svg
              className="w-5 h-5 mr-2 fill-current text-black"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M13 16.13V3.87a2 2 0 00-2-2L9 2a2 2 0 00-2 2v12.13a2 2 0 002 2h2a2 2 0 002-2v-.13a2 2 0 00-2-2zm1.73-.73a13.91 13.91 0 01-3.46 2.42 2.24 2.24 0 01-.74.13 2 2 0 01-1.47-.67l-.81-.82a13.4 13.4 0 01-2.55-3.16 13.91 13.91 0 01-2.42-3.46 2.13 2.13 0 01-.13-.74 2 2 0 01.67-1.47l.82-.81a13.4 13.4 0 013.16-2.55A13.91 13.91 0 0113 3.87a2.13 2.13 0 01.74.13 2 2 0 011.47.67l.81.82a13.4 13.4 0 012.55 3.16 13.91 13.91 0 012.42 3.46 2 2 0 01.13.74 2.07 2.07 0 01-.67 1.47l-.82.81a13.4 13.4 0 01-3.16 2.55z" />
            </svg>
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}

export default StartBanner;
