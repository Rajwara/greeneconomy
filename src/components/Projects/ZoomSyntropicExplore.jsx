import React from "react";
import img1 from "../../../src/images/The-Goal-of-Our-Native-Forest.jpg";

const ZoomSyntropicExplore = () => {
  return (
    <section>
      <div className="container-fluid  px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px]  mx-auto bg-[#f7f5f2]  dark:bg-[#f7f5f2]">
        <div className="flex flex-wrap items-center align-middle pt-[30px]  lg:pt-[50px] pb-[30px] xl:pb-[50px]">
          <div className="w-full lg:w-1/2">
            <div className=" border-b  lg:border-b-0">
              <h2 className=" mb-2 md:mb-4 xl:mb-6  text-2xl md:text-3xl font-bold xl:text-4xl leading-7 xl:leading-10 font-montserrat font-heading text-[#316D69] dark:text-white">
                <p className="text-[#bab220]">
                  <h2>The Goal of Our Native Forest </h2>
                </p>{" "}
                Conservation Project Is to:
              </h2>
            </div>
            <div className=" gap-8 p-4">
              <img
                src={img1}
                className=" rounded-lg h-full w-full"
                alt="Tree"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <ul className="space-y-4 leading-5 xl:leading-7 text-sm md:text-base xl:text-lg text-[#3c3c3c] font-normal font-poppins">
              <li className="flex   ">
                <div className="px-4 ">
                  <span className="flex items-center justify-center w-6 h-6 xl:w-10 xl:h-10 mx-auto   font-bold text-[#bab220] rounded-full  border-2 border-[#BAB220]">
                    1
                  </span>
                </div>

                <p className="  dark:text-[#3c3c3c]">
                  Support people from climate-vulnerable communities.
                </p>
              </li>
              <li className="flex  ">
                <div className="px-4 ">
                  <span className="flex items-center justify-center w-6 h-6 xl:w-10 xl:h-10 mx-auto  font-bold text-[#bab220] rounded-full border-2 border-[#BAB220]">
                    2
                  </span>
                </div>

                <p className="   dark:text-[#3c3c3c]">
                  Ensure that major carbon sinks; mangroves, seagrasses, and
                  tidal marshes are protected.
                </p>
              </li>
              <li className="flex  ">
                <div className="px-4 ">
                  <span className="flex items-center justify-center w-6 h-6 xl:w-10 xl:h-10 mx-auto  font-bold text-[#bab220] rounded-full  border-2 border-[#BAB220]">
                    3
                  </span>
                </div>

                <p className=" dark:text-[#3c3c3c]">
                  Fight deforestation globally.
                </p>
              </li>
              <li className="flex ">
                <div className="px-4 ">
                  <span className="flex items-center justify-center w-6 h-6 xl:w-10 xl:h-10 mx-auto font-bold text-[#bab220] rounded-full  border-2 border-[#BAB220]">
                    4
                  </span>
                </div>

                <p className=" dark:text-[#3c3c3c]">
                  Secure ecosystems that contain irrecoverable carbon.
                </p>
              </li>
              <li className="flex ">
                <div className="px-4 ">
                  <span className="flex items-center justify-center w-6 h-6 xl:w-10 xl:h-10  mx-auto   font-bold text-[#bab220] rounded-full  border-2 border-[#BAB220]">
                    5
                  </span>
                </div>

                <p className=" dark:text-[#3c3c3c]">
                  Help countries evaluate potential of nature to combat climate
                  change.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZoomSyntropicExplore;
