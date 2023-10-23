import React from "react";
import EffectsofDeforestation from "../../../src/images/BENEFITS-FOR-FARMERS.png";

const BenefitsforFarmers = () => {
  return (
    <div className="relative ">
      <div>
        <div className="px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] pt-0px pb-[50px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-[50px]">
            <div className=" ">
              <img
                className=" w-full h-full rounded-lg "
                src={EffectsofDeforestation}
                alt="EffectsofDeforestation"
              ></img>
            </div>
            <div className=" text-white  flex flex-col  justify-center  h-full mt-4 md:mt-4 lg:mt-0">
              <h2 className="text-left text-2xl md:text-3xl lg:text-4xl  font-montserrat leading-7 lg:leading-10 font-bold text-[#316D69] ">
                Benefits for
                <span className="text-[#3c3c3c]"> Farmers</span>
              </h2>

              <div className="mt-4 md:mt-6 lg:mt-8 font-poppins text-sm md:text-base lg:text-lg font-normal leading-5 lg:leading-7  text-[#3c3c3c]">
                <ul className=" flex flex-col gap-2">
                  <div className="	">
                    <li className="flex gap-3 align-middle">
                      <div className="px-2">
                        <span className="flex items-center justify-center w-8 h-8 mx-auto  font-bold  rounded-full  border-4 border-[#316D69]">
                          1
                        </span>
                      </div>
                      <h6 className="uppercase  text-[#316D69] font-bold leading-7 lg:leading-9	font-montserrat">
                        Higher quality soil:
                      </h6>
                    </li>
                    <li className=" pl-14 ">
                      <p>
                        Improved soil quality results in more productive crops,
                        enhancing overall food production, and agricultural
                        sustainability.
                      </p>
                    </li>
                    <br />
                  </div>
                </ul>
                <ul className=" flex flex-col gap-2">
                  <div className="	">
                    <li className="flex gap-3 align-middle">
                      <div className="px-2">
                        <span className="flex items-center justify-center w-8 h-8 mx-auto font-bold  rounded-full  border-4 border-[#316D69]">
                          2
                        </span>
                      </div>
                      <h6 className="uppercase leading-7 lg:leading-9 text-[#316D69] font-bold	font-montserrat">
                        Lower input costs:
                      </h6>
                    </li>
                    <li className=" pl-14 ">
                      <p>
                        Effective farming practices can reduce the expenses
                        linked with pesticides, water, and fertilizers, lowering
                        the variable costs.
                      </p>
                    </li>
                    <br />
                  </div>
                </ul>
                <ul className=" flex flex-col gap-2">
                  <div className="	">
                    <li className="flex gap-3 align-middle">
                      <div className="px-2">
                        <span className="flex items-center justify-center w-8 h-8 mx-auto  font-bold  rounded-full  border-4 border-[#316D69]">
                          3
                        </span>
                      </div>
                      <h6 className="uppercase leading-7 lg:leading-9 text-[#316D69] font-bold	font-montserrat">
                        Higher profits in the long term:
                      </h6>
                    </li>
                    <li className=" pl-14 ">
                      <p>
                        Investing in sustainable agriculture can provide greater
                        profits over time due to reduced resource depletion, and
                        increased productivity.
                      </p>
                    </li>
                    <br />
                  </div>
                </ul>
                <ul className=" flex flex-col gap-2">
                  <div className="	">
                    <li className="flex gap-3 align-middle">
                      <div className="px-2">
                        <span className="flex items-center justify-center w-8 h-8 mx-auto  font-bold  rounded-full  border-4 border-[#316D69]">
                          4
                        </span>
                      </div>
                      <h6 className="uppercase leading-7 lg:leading-9 text-[#316D69] font-bold	font-montserrat">
                        Access to strong community and knowledge:
                      </h6>
                    </li>
                    <li className=" pl-14 ">
                      <p>
                        Having access to valuable agricultural knowledge and
                        engaging with a supportive farming community can lead to
                        informed decisions.
                      </p>
                    </li>
                    <br />
                  </div>
                </ul>
              </div>
            </div>
            <div className="pb-[20px] lg:hidden flex flex-col  justify-center items-center h-full">
              <div className=" container flex  items-center">
                <img
                  className=" mx-auto "
                  src={EffectsofDeforestation}
                  alt="EffectsofDeforestation"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsforFarmers;
