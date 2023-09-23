import React from "react";

import circle from "../../../src/images/circles.png";

const imageStyle = {
  width: "300px",
  height: "300px",
  borderRadius: "50%",
  margin: "10px",
};

const descriptionStyle = {
  textAlign: "center",
  backgroundColor: "#F7F5F2",
  borderRadius: "10px",
  width: "auto",
  padding: "50px",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
};

const textStyle = {
  marginBottom: "0",
};

function ItsBestForCompanies() {
  return (
    <div className="text-[#316D69] mt-10 p-0 flex flex-wrap justify-center sm:p- md:p-8 lg:p-8 px-[30px]  md:px-[60px] lg:px-[80px] xl:px-[100px]">
      <div className="flex flex-col items-center lg:gap-16  md:flex-row md:space-x-4">
        <img
          className="w-24 h-24 md:w-32 md:h-auto"
          style={imageStyle}
          src={circle}
          alt="Circle Img"
        />
        <div className="flex flex-col justify-center mt-5 md:mt-0 mb-8 md:mb-0">
          <div style={descriptionStyle} className="p-[10px] md:p-[25px]">
            <h2 className="text-[#BAB220] text-left font-bold text-lg md:text-xl lg:text-3xl font-montserrat tracking-normal leading-7 mb-2">
              It’s best for companies/
              <span className="text-[#316D69]">organizations with…</span>
            </h2>
            <p
              className="text-sm md:text-base text-left lg:text-lg mb-2 font-poppins font-normal leading-7 text-[#3c3c3c]"
              style={textStyle}
            >
              A large existing customer base of grain growing farmers (average
              farm size above 500 hectares or less).
            </p>
            <p
              className="text-sm md:text-base lg:text-lg text-left mb-2  font-poppins font-normal leading-7 text-[#3c3c3c]"
              style={textStyle}
            >
              Which are looking to strengthen their relationship with existing
              customers and grow customer base.
            </p>
            <p
              className="text-sm md:text-base lg:text-lg text-left mb-2  font-poppins font-normal leading-7 text-[#3c3c3c]"
              style={textStyle}
            >
              Which want to bring new income sources to their customers and
              themselves.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItsBestForCompanies;
