import React from "react";
import img1 from "../../../src/images/agriculture-role-mitigating.png";

function AgricultureThree() {
  return (
    <section className="flex items-center flex-col-reverse lg:flex-row justify-center mt-[80px] px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px]">
      {/* left Column - Heading and Paragraph */}
      <div className="lg:w-1/2 px-8 md:px-10 lg:px-12 my-10 lg:my-0">
        <h2 className=" mb-8 text-[#316D69] font-bold text-2xl md:text-3xl lg:text-4xl  leading-10 font-montserrat">
          Agriculture's Role in Mitigating
          <span className="text-[#bab220]"> Carbon Emissions</span>
        </h2>
        <p className="font-normal text-[#3c3c3c] font-poppins leading-7 text-sm md:text-base lg:text-lg  mb-4">
          Agriculture is instrumental in curbing carbon emissions due to the
          following factors:
        </p>
        <ul className="list-none text-[#3c3c3c] font-normal text-sm md:text-base lg:text-lg list-inside leading-7 mb-6 font-poppins ml-4">
          <li className=" mt-2">
            <span className="text-[#316D69] font-bold">
              1. Carbon Sequestration:
            </span>{" "}
            Through practices like conservation tillage and agroforestry,
            agriculture can sequester carbon in the soil and vegetation.
          </li>
          <li className=" mt-2">
            <span className="text-[#316D69] font-bold">
              2. Efficient Fertilizer Use:
            </span>{" "}
            It has the potential to reduce emissions from fertilizer use by
            applying fertilizers efficiently and minimizing waste.
          </li>
          <li className=" mt-2">
            <span className="text-[#316D69] font-bold">
              {" "}
              3. Land Management:
            </span>{" "}
            Agriculture promotes sustainable land use and management practices
            that alleviate the effects of land use changes on emissions.
          </li>
          <li className="mt-2">
            <span className="text-[#316D69] font-bold">
              {" "}
              4. Dietary Choices:
            </span>{" "}
            A transition toward more plant-based diets can lower emissions
            linked to livestock production.
          </li>
          <li className="mt-2">
            <span className="text-[#316D69] font-bold">
              {" "}
              5. Low-Carbon Food Systems:
            </span>{" "}
            Agriculture contributes to the development of low-carbon,
            sustainable food systems.
          </li>
        </ul>
      </div>
      {/* Right Column - Image */}
      <div className="lg:w-1/2 overflow-hidden rounded-lg shadow-2xl">
        <img
          src={img1}
          alt="Example"
          className="w-full h-full transform hover:scale-105 transition-transform duration-300"
        />
      </div>
    </section>
  );
}

export default AgricultureThree;
