import React from "react";
import EffectsofDeforestation from "../../../src/images/How-Does-Our-GEP-Carbon.png";
import BulletPointarrow from "../../../src/images/Bullet-Point-arrow.svg";

const GEPCarbonProgram = () => {
  return (
    <div className="relative ">
      <div>
        <div className="px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] mt-[30px]  lg:mt-[50px] mb-[30px] xl:mb-[50px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-[50px] items-center">
            <div className="container text-white  flex flex-col justify-center  h-full">
              <h2 className="text-left text-2xl md:text-3xl xl:text-4xl leading-7 xl:leading-10 font-montserrat  font-bold text-[#BAB220] ">
                How Does GEP Carbon{" "}
                <span className="text-[#3c3c3c]">Program Work?</span>
              </h2>

              <div className="mt-4 md:mt-6 xl:mt-8 font-poppins text-sm md:text-base xl:text-lg leading-5 xl:leading-7  text-[#3c3c3c]">
                <ul className=" flex flex-col gap-2">
                  <div className="	">
                    <li className="flex gap-3 align-middle">
                      <img
                        className="w-6 h-6 "
                        src={BulletPointarrow}
                        alt="location"
                      />
                      <h6 className="uppercase text-[#316D69] leading-7 xl:leading-9 font-bold	font-montserrat">
                        Carbon audit
                      </h6>
                    </li>
                    <li className=" pl-9 ">
                      <p>
                        GEP project managers assess your carbon emissions to get
                        an understanding of your current environmental impact.{" "}
                      </p>
                    </li>
                    <br />
                  </div>
                </ul>
                <ul className=" flex flex-col gap-2">
                  <div className="	">
                    <li className="flex gap-3 align-middle">
                      <img
                        className="w-6 h-6 "
                        src={BulletPointarrow}
                        alt="location"
                      />
                      <h6 className="uppercase leading-7 xl:leading-9 text-[#316D69] font-bold	font-montserrat">
                        Contract & Practice Plan
                      </h6>
                    </li>
                    <li className=" pl-9 ">
                      <p>
                        We establish sustainable practices and agreements to
                        reduce emissions.{" "}
                      </p>
                    </li>
                    <br />
                  </div>
                </ul>
                <ul className=" flex flex-col gap-2">
                  <div className="	">
                    <li className="flex gap-3 align-middle">
                      <img
                        className="w-6 h-6 "
                        src={BulletPointarrow}
                        alt="location"
                      />
                      <h6 className="uppercase leading-7 xl:leading-9 text-[#316D69] font-bold	font-montserrat">
                        Set the baseline and initial soil samples
                      </h6>
                    </li>
                    <li className=" pl-9 ">
                      <p>
                        We measure your starting reference point, and collect
                        soil data for future reference.
                      </p>
                    </li>
                    <br />
                  </div>
                </ul>
                <ul className=" flex flex-col gap-2">
                  <div className="	">
                    <li className="flex gap-3 align-middle">
                      <img
                        className="w-6 h-6 "
                        src={BulletPointarrow}
                        alt="location"
                      />
                      <h6 className="uppercase leading-7 xl:leading-9 text-[#316D69] font-bold	font-montserrat">
                        Selling first year’s pre-certified credits
                      </h6>
                    </li>
                    <li className=" pl-9 ">
                      <p>
                        We help initiate carbon credit sales based on your early
                        efforts.{" "}
                      </p>
                    </li>
                    <br />
                  </div>
                </ul>
                <ul className=" flex flex-col gap-2">
                  <div className="	">
                    <li className="flex gap-3 align-middle">
                      <img
                        className="w-6 h-6 "
                        src={BulletPointarrow}
                        alt="location"
                      />
                      <h6 className="uppercase leading-7 xl:leading-9 text-[#316D69] font-bold	font-montserrat">
                        Implementation and data collection Sustainable icon
                      </h6>
                    </li>
                    <li className=" pl-9 ">
                      <p>We initiate sustainable practices and gather data. </p>
                    </li>
                    <br />
                  </div>
                </ul>
                <ul className=" flex flex-col gap-2">
                  <div className="	">
                    <li className="flex gap-3 align-middle">
                      <img
                        className="w-6 h-6 "
                        src={BulletPointarrow}
                        alt="location"
                      />
                      <h6 className="uppercase leading-7 xl:leading-9 text-[#316D69] font-bold	font-montserrat">
                        Credit verification & issuance in Y5 & Y10
                      </h6>
                    </li>
                    <li className=" pl-9 ">
                      <p>
                        After thorough verification, carbon credits are issued.
                      </p>
                    </li>
                    <br />
                  </div>
                </ul>
                <ul className=" flex flex-col gap-2">
                  <div className="	">
                    <li className="flex gap-3 align-middle">
                      <img
                        className="w-6 h-6 "
                        src={BulletPointarrow}
                        alt="location"
                      />
                      <h6 className="uppercase leading-7 xl:leading-9 text-[#316D69] font-bold	font-montserrat">
                        Selling certified credits
                      </h6>
                    </li>
                    <li className=" pl-9 ">
                      <p>You can then sell certified carbon credits.</p>
                    </li>
                    <br />
                  </div>
                </ul>
              </div>
            </div>

            <div className="">
              <img
                className=" w-full h-full lg:h-[750px] xl:h-[800px] rounded-lg "
                src={EffectsofDeforestation}
                alt="EffectsofDeforestation"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GEPCarbonProgram;
