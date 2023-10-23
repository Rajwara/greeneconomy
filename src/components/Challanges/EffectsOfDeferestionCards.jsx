import React from "react";
import EffectsofDeforestation from "../../../src/images/challenges-effectsofdeforestation.png";
import BulletPointarrow from "../../../src/images/Bullet-Point-arrow.svg";

function EffectsOfDeferestionCards() {
  return (
    <div className="relative ">
      <div>
        <div className="px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] mt-[30px] md:mt-[50px] lg:mt-[50px] mb-[50px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-[50px]">
            <div className="container text-white  flex flex-col justify-center  h-full">
              <h2 className="text-left text-2xl md:text-3xl lg:text-4xl leading-7 lg:leading-10  font-montserrat  font-bold text-[#BAB220] mb-2 md:mb-4 lg:mb-6">
                Effects of Deforestation
              </h2>
              <p className="text-[#3C3C3C] text-sm md:text-base lg:text-lg leading-5 lg:leading-7 font-normal font-poppins ">
                Here is how deforestation negatively affects us and our
                surroundings:
              </p>
              <div className="mt-4 md:mt-6 lg:mt-8 font-poppins text-sm md:text-base lg:text-lg font-normal leading-5 lg:leading-7 text-[#3c3c3c]">
                <ul className=" flex flex-col gap-2">
                  <div className="	">
                    <li className="flex gap-3 align-middle">
                      <img
                        className="w-6 h-6 "
                        src={BulletPointarrow}
                        alt="location"
                      />
                      <h6 className="uppercase leading-7 lg:leading-9  text-[#316D69] font-bold	font-montserrat">
                        Climate Change:
                      </h6>
                    </li>
                    <li className=" pl-9 ">
                      <p>
                        Through deforestation, stored carbon dioxide from trees
                        is released into the atmosphere, increasing greenhouse
                        gasses and global warming.{" "}
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
                      <h6 className="uppercase leading-7 lg:leading-9 text-[#316D69] font-bold	font-montserrat">
                        Soil Erosion:
                      </h6>
                    </li>
                    <li className=" pl-9 ">
                      <p>
                        Soil erosion is the accelerated removal of topsoil
                        through various agents like rainfall, affecting
                        agricultural productivity.{" "}
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
                      <h6 className="uppercase leading-7 lg:leading-9 text-[#316D69] font-bold	font-montserrat">
                        Ecological Disturbance:
                      </h6>
                    </li>
                    <li className=" pl-9 ">
                      <p>
                        It also disrupts the ecosystems and many species of
                        animals become extinct or lose their natural habitat,
                        which results in the reduction of biodiversity.
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
                      <h6 className="uppercase leading-7 lg:leading-9 text-[#316D69] font-bold	font-montserrat">
                        Impact on Water Cycle:
                      </h6>
                    </li>
                    <li className=" pl-9 ">
                      <p>
                        Deforestation impacts water cycles, leading to frequent
                        floods, droughts and less available water resources for
                        drinking.{" "}
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
                      <h6 className="uppercase leading-7 lg:leading-9 text-[#316D69] font-bold	font-montserrat">
                        Loss of Carbon Sinks :
                      </h6>
                    </li>
                    <li className=" pl-9 ">
                      <p>
                        Forests are the most important carbon sinks,
                        deforestation removes their capacity to absorb carbon
                        dioxide from the atmosphere, exacerbating climate
                        change.{" "}
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
                      <h6 className="uppercase leading-7 lg:leading-9 text-[#316D69] font-bold	font-montserrat">
                        Social Impact:
                      </h6>
                    </li>
                    <li className=" pl-9 ">
                      <p>
                        Deforestation has a direct impact on the local
                        inhabitants, and increases conflicts over natural
                        resources.
                      </p>
                    </li>
                    <br />
                  </div>
                </ul>
              </div>
            </div>
            <div className="">
              <img
                className=" h-full w-full rounded-lg"
                src={EffectsofDeforestation}
                alt="EffectsofDeforestation"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EffectsOfDeferestionCards;
