import React from "react";
import WMImg2 from "../../../src/images/origination-img.jpg";

function Origination() {
  return (
    <div className="bg-[#F7F5F2]  px-[30px] md:px[60] lg:px-[80px] xl:px-[100px]  relative md:py-[20px] xl:py-[30px] pb-[100px] md:pb-[100px] xl:pb-[120px]">
      <div className=" py-[20px] md:py-[10px] lg:py-[30px]">
        <h3
          className="pb-[20px] text-[#BAB220]  lg:hidden text-center  leading-[30px] 
                 font-[500] text-[18px]"
        >
          Origination{" "}
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-[50px]">
          <div className="  pb-[20px] lg:hidden flex flex-col justify-center items-center h-full">
            <div className=" container flex justify-center items-center">
              <img className="w-full rounded-lg" src={WMImg2} alt="gep"></img>
            </div>
          </div>

          <div
            className="container text-left lg:text-left flex flex-col 
         justify-center  h-full"
          >
            <h3
              className="text-left text-[#BAB220] font-[500] text-[18px]
         pb-[20px] lg:block"
            >
              Origination{" "}
            </h3>
            <p className="text-[14px] md:text-[16px] lg:text-[18px] pb-[20PX]">
              Our team has achieved something remarkable:
            </p>
            <p className="text-[14px] md:text-[16px] lg:text-[18px] pb-[10PX]">
              Green Economy Partnership initiatives are making a real impact in
              Africa, helping project originators capitalize on increasingly
              important revenues from carbon finance sources. We're leading by
              example with our environmental certifications providing
              groundbreaking results for all stakeholders involved!
            </p>
          </div>

          <div className="hidden lg:block ">
            <div className="  relative  container flex flex-col justify-center items-center h-full">
              <img
                className=" rounded-lg"
                src={WMImg2}
                alt="deforestation"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Origination;
