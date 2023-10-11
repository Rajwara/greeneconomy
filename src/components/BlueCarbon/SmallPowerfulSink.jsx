import React from "react";

const SmallPowerfulSink = () => {
  return (
    <div className="flex justify-center gap-8  flex-col md:flex-row px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] mt-[100px] mb-[50px]">
      <div className="flex flex-col text-center items-center ">
        {" "}
        <h2 className="text-[#BAB220] text-xl mb-8 md:text-2xl lg:text-4xl leading-7 tracking-normal font-montserrat font-bold">
          A Small But Powerful Sink
          <span className="text-[#316D69]"> or…Source</span>
        </h2>
        <p className="text-[#3c3c3c] text-sm md:text-base lg:text-lg leading-7  font-poppins font-normal w-4/5">
          The term ‘Blue Carbon’ refers to the carbon that is taken from the
          atmosphere and stored in coastal ecosystems like tidal marshes,
          mangroves, and meadows. Though they (seagrass) cover 0.1% of the
          world’s seafloor, but store{" "}
          <a
            className="text-[#D3CA28] font-bold underline"
            href="https://www.google.com/url?q=https://coast.noaa.gov/states/fast-facts/blue-carbon.html%23:~:text%3D11%2520Percent%2520of%2520Buried%2520Carbon%26text%3DSeagrass%2520meadows%2520account%2520for%2520just,carbon%2520buried%2520in%2520the%2520ocean.&sa=D&source=docs&ust=1697039670388765&usg=AOvVaw19S7RcvepcdAFK8_0ROmsm"
          >
            11%
          </a>{" "}
          of the ocean’s buried carbon. Marine and coastal ecosystems are the
          powerhouses of carbon removal and store up to{" "}
          <a
            className="text-[#D3CA28] font-bold underline"
            href="https://oceanservice.noaa.gov/ecosystems/coastal-blue-carbon/#:~:text=Coastal%20Blue%20Carbon%20Sequestration%20101&text=Coastal%20wetland%20ecosystems%20(salt%20marshes,of%20carbon%20dioxide%20(CO2)."
          >
            5 times
          </a>{" "}
          more carbon per area than tropical forests.
        </p>
      </div>
    </div>
  );
};

export default SmallPowerfulSink;
