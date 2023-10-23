import React from "react";
import img1 from "../../../src/images/agriculture-role-mitigating.png";

function AgricultureThree() {
  return (
    <div className="px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px]  mt-[30px] md:mt-[50px] lg:mt-[50px] mb-[50px]">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 lg:gap-x-[50px] ">
        <div className=" text-white  flex flex-col justify-center  ">
          <h2 className="  mb-2 md:mb-4 lg:mb-6  text-[#316D69] font-bold text-2xl md:text-3xl lg:text-4xl  leading-7 lg:leading-10 font-montserrat">
            Agriculture's Role in Mitigating
            <span className="text-[#bab220]"> Carbon Emissions</span>
          </h2>
          <p className="font-normal text-[#3c3c3c] font-poppins leading-5 lg:leading-7 text-sm md:text-base lg:text-lg  ">
            Agriculture is instrumental in curbing carbon emissions due to the
            following factors:
          </p>
          <ul className="list-none text-[#3c3c3c] font-normal text-sm md:text-base lg:text-lg list-inside leading-5 lg:leading-7  font-poppins ml-4">
            <li className=" mt-2 lg:mt-4 mb-2 md:mb-4 lg:mb-4">
              <span className="text-[#316D69] font-bold">
                1. Carbon Sequestration:
              </span>{" "}
              Through practices like conservation tillage and agroforestry,
              agriculture can sequester carbon in the soil and vegetation.
            </li>
            <li className=" mt-2 mb-2 md:mb-4 lg:mb-4">
              <span className="text-[#316D69] font-bold">
                2. Efficient Fertilizer Use:
              </span>{" "}
              It has the potential to reduce emissions from fertilizer use by
              applying fertilizers efficiently and minimizing waste.
            </li>
            <li className=" mt-2 mb-2 md:mb-4 lg:mb-4">
              <span className="text-[#316D69] font-bold">
                {" "}
                3. Land Management:
              </span>{" "}
              Agriculture promotes sustainable land use and management practices
              that alleviate the effects of land use changes on emissions.
            </li>
            <li className="mt-2 mb-2 md:mb-4 lg:mb-4">
              <span className="text-[#316D69] font-bold">
                {" "}
                4. Dietary Choices:
              </span>{" "}
              A transition toward more plant-based diets can lower emissions
              linked to livestock production.
            </li>
            <li className="mt-2 ">
              <span className="text-[#316D69] font-bold">
                {" "}
                5. Low-Carbon Food Systems:
              </span>{" "}
              Agriculture contributes to the development of low-carbon,
              sustainable food systems.
            </li>
          </ul>
        </div>
        <div className="">
          <img className="h-full w-full rounded-lg" src={img1} alt=""></img>
        </div>
      </div>
    </div>
  );
}

export default AgricultureThree;
