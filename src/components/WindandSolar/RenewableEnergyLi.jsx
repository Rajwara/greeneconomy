import React from "react";
import RenewableEnergy from "../../../src/images/What-is-Renewable-Energy.png";
import BulletPointtwo from "../../../src/images/Bullet-Point-two.svg";
import BulletPointone from "../../../src/images/BulletPointone.svg";
import BulletPointhree from "../../../src/images/BulletPointthree.svg";
import BulletPointfour from "../../../src/images/BulletPointfour.svg";
import BulletPointfive from "../../../src/images/BulletPointfive.svg";
import BulletPointsix from "../../../src/images/BulletPointsix.svg";

const RenewableEnergyLi = () => {
  return (
    <div className="px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px]  mt-[30px] md:mt-[50px] lg:mt-[50px] mb-[50px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-[50px] ">
        <div className="">
          <img
            className="h-full w-full rounded-lg"
            src={RenewableEnergy}
            alt="EffectsofDeforestation"
          ></img>
        </div>
        <div className=" text-white  flex flex-col justify-center  ">
          <h2 className=" text-left text-[#316D69] font-montserrat mt-6 md:mt-6 lg:mt-0  leading-7 lg:leading-10  mb-2 md:mb-4 lg:mb-6  text-2xl md:text-3xl lg:text-4xl font-bold">
            What <span className="text-[#BAB220]">is Renewable Energy ?</span>
          </h2>
          <p className="text-[#3C3C3C] text-sm md:text-base lg:text-lg leading-5 lg:leading-7 font-normal font-poppins ">
            In GEP’s pursuit of a sustainable energy future, wind generators,
            and solar panels are playing a crucial role. They offer a prominent
            solution to combat climate change. GEP embraces solar and wind
            energy as cost-effective renewable energy resources. According to
            the latest report by the{" "}
            <a
              href="https://www.irena.org/"
              className="text-[#D3CA28] font-bold underline"
            >
              International Renewable Energy Agency
            </a>{" "}
            (IREA), unsubsidized renewable energy is now the cheapest source to
            generate energy. These renewable resources are also gaining momentum
            because:
          </p>
          <div className="mt-2 md:mt-4 lg:mt-6 font-poppins text-sm md:text-base lg:text-lg leading-5 lg:leading-7 text-[#3c3c3c]">
            <ul className=" flex flex-col gap-2">
              <div className="	">
                <li className="flex gap-3 align-middle">
                  <img
                    className="w-6 h-6 mt-1"
                    src={BulletPointone}
                    alt="location"
                  />
                  <p>
                    {" "}
                    Wind power will never run out. Due to this governments are
                    investing in such renewable energy sources, as{" "}
                    <a
                      className="text-[#D3CA28] font-bold underline"
                      href="https://www.edfenergy.com/energywise/renewable-energy-sources#:~:text=Renewable%20energy%20sources%20make%20up,to%20reach%2030%25%20by%202024."
                    >
                      26%
                    </a>{" "}
                    of the electricity is being made by these clean energy
                    sources.
                  </p>
                </li>

                <br />
              </div>
            </ul>
            <ul className=" flex flex-col gap-2">
              <div className="	">
                <li className="flex gap-3 align-middle">
                  <img
                    className="w-6 h-6 mt-1 "
                    src={BulletPointtwo}
                    alt="location"
                  />
                  <p>
                    {" "}
                    No emission of greenhouse gasses as wind turbines do not
                    require fossil fuels to work, energy is produced with no
                    harmful impact to the environment.{" "}
                  </p>
                </li>
                <br />
              </div>
            </ul>
            <ul className=" flex flex-col gap-2">
              <div className="	">
                <li className="flex gap-3 align-middle">
                  <img
                    className="w-6 h-6 mt-1"
                    src={BulletPointhree}
                    alt="location"
                  />
                  <p>
                    {" "}
                    Offshore wind turbines are energy efficient and can generate{" "}
                    <a
                      className="text-[#D3CA28] font-bold underline"
                      href="https://www.power-and-beyond.com/wind-power-could-meet-entire-worlds-electricity-needs-18-times-over-a-899359/#:~:text=Worldwide%2C%20offshore%20wind%20has%20the,to%20the%20International%20Energy%20Agency"
                    >
                      18 times
                    </a>{" "}
                    more wind energy than the current demand.
                  </p>
                </li>
                <br />
              </div>
            </ul>
            <ul className=" flex flex-col gap-2">
              <div className="	">
                <li className="flex gap-3 align-middle">
                  <img
                    className="w-6 h-6 mt-1"
                    src={BulletPointfour}
                    alt="location"
                  />

                  <p>
                    Solar panels allow the individuals and communities to
                    generate their electricity independently, without relying on
                    centralized grids.
                  </p>
                </li>
                <br />
              </div>
            </ul>
            <ul className=" flex flex-col gap-2">
              <div className="	">
                <li className="flex gap-3 align-middle">
                  <img
                    className="w-6 h-6 mt-1"
                    src={BulletPointfive}
                    alt="location"
                  />

                  <p>
                    Solar panels are cost-effective and require no or little
                    maintenance.{" "}
                  </p>
                </li>

                <br />
              </div>
            </ul>
            <ul className=" flex flex-col gap-2">
              <div className="	">
                <li className="flex gap-3 align-middle">
                  <img
                    className="w-6 h-6 mt-1"
                    src={BulletPointsix}
                    alt="location"
                  />

                  <p>
                    The power generated by solar panels is eco-friendly, as no
                    carbon emissions or pollution is produced.
                  </p>
                </li>

                <br />
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenewableEnergyLi;
