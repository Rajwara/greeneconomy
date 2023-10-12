import React from "react";
import Mangroves1 from "../../../src/images/agriculture-trac.jpg";

const Seagrasses = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8  flex-col md:flex-row px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] mt-[100px] mb-[50px]">
      <div className="img ">
        <img src={Mangroves1} alt="" className="w-full h-[450px]" />
      </div>
      <div className="flex flex-col  ">
        {" "}
        <h2 className="text-[#BAB220] text-xl mb-8 md:text-2xl lg:text-4xl leading-7 tracking-normal font-montserrat font-bold">
          Seagrasses
        </h2>
        <p className="text-[#3c3c3c] text-sm md:text-base lg:text-lg leading-7  font-poppins font-normal mt-4 ">
          They are found in shallow salty and brackish waters in many parts of
          the world. Seagrasses are underwater plants that evolved from land
          plants and are the world’s only flowering plants that live underwater.
          They provide important habitats for many marine species and play a
          crucial role in carbon sequestration.
        </p>
        <p className="text-[#3c3c3c] text-sm md:text-base lg:text-lg leading-7  font-poppins font-normal ">
          Some of the seagrass species are enhalus, eelgrass, turtle grass, and
          manati grass. Every year, the seagrass population is declining at a
          pace of approximately
          <a
            className="text-[#D3CA28] font-bold underline"
            href="https://www.google.com/url?q=https://earth.org/seagrass-meadows-decline/%23:~:text%3DSeagrass%2520meadows%2520are%2520being%2520lost,overfishing%252C%2520and%2520other%2520anthropogenic%2520factors.&sa=D&source=docs&ust=1697040830023933&usg=AOvVaw3DmaPMfmgkF4AUolsmTm4r"
          >
            {" "}
            7%
          </a>{" "}
          which is equal to losing 2 football fields every hour. It is declining
          due to boat traffic, coastal development, and pollution.
        </p>
      </div>
    </div>
  );
};

export default Seagrasses;