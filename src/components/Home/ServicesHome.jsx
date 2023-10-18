import React from "react";

function ServicesHome() {
  return (
    <div>
      <div className="mx-auto  text-center mt-10 md:mt-18  lg:mt-20 px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px]">
        <h6 className="uppercase text-sm md:text-base lg:text-lg text-[#D3CA28] font-bold leading-7 lg:leading-9	font-montserrat	">
          Services
        </h6>
        <h2 className="text-2xl md:text-3xl lg:text-4xl xs:text-start font-montserrat font-bold mb-4 md:mb-6 lg:mb-8 leading-7 lg:leading-10 text-[#316D69]">
          Towards a Sustainable and Smarter Future
        </h2>
        <div className="lg:w-8/12 xs:text-start mx-auto text-sm md:text-base lg:text-lg font-poppins leading-5 lg:leading-7  text-[#3c3c3c]">
          <p className=" ">
            Our aim of crafting a sustainable and smarter future is achievable
            through numerous services that utilize Nature-Based Assets such as
            wind, solar, and anaerobic digestion.
          </p>
          <p className="mt-4">
            <a
              className="text-[#D3CA28] font-bold underline mx-1"
              href="/naturebasedasset"
            >
              {" "}
              Nature-Based Assets{" "}
            </a>{" "}
            such as these give us the ability to tackle climate change and
            reduce dependence on carbon-based energy resources. Therefore it is
            essential that we capitalise on Nature-Based-Assets along with other
            innovative services in order to move towards a sustainable future.
          </p>
        </div>
      </div>
    </div>
  );
}
export default ServicesHome;
