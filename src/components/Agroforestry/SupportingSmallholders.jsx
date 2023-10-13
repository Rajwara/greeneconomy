import React from "react";
import Mangroves1 from "../../../src/images/agriculture-trac.jpg";

const SupportingSmallholders = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8  flex-col md:flex-row px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] mt-[100px] mb-[50px]">
      <div className="img ">
        <img src={Mangroves1} alt="" className="w-full h-[450px]" />
      </div>
      <div className="flex flex-col  justify-center">
        {" "}
        <h2 className="text-[#BAB220] text-xl mb-8 md:text-2xl lg:text-4xl leading-7 tracking-normal font-montserrat font-bold">
          Supporting Smallholders with Agroforestry in the Carbon Market
        </h2>
        <p className="text-[#3c3c3c] text-sm md:text-base lg:text-lg leading-7  font-poppins font-normal mt-4 ">
          By measuring and certifying the sequestered carbon in a low-cost
          manner, GEP enables smallholders to access the voluntary market and
          empowers them to establish an extra source of income by receiving
          compensation for sequestering additional carbon on their land. Through
          financial incentives, we encourage them to engage in agroforestry
          where the trees they plant on their land capture excess carbon.
        </p>
        {/* <p className="text-[#3c3c3c] text-sm md:text-base lg:text-lg leading-7  font-poppins font-normal ">
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
        </p> */}
      </div>
    </div>
  );
};

export default SupportingSmallholders;
