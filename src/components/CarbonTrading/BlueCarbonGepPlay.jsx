import React from "react";
import EffectsofDeforestation from "../../../src/images/Where-does-GEP-Come-into-Play.png";
import BulletPointtwo from "../../../src/images/Bullet-Point-two.svg";
import BulletPointone from "../../../src/images/BulletPointone.svg";
import BulletPointhree from "../../../src/images/BulletPointthree.svg";
import BulletPointfour from "../../../src/images/BulletPointfour.svg";
import BulletPointfive from "../../../src/images/BulletPointfive.svg";
import BulletPointsix from "../../../src/images/BulletPointsix.svg";

const BlueCarbonGepPlay = () => {
  return (
    <div className="relative ">
      <div>
        <div className="px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] mt-[30px]  lg:mt-[50px] mb-[30px] xl:mb-[50px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-[50px] items-center">
            <div className="mb-6 md:mb-6 lg:mb-0">
              <img
                className="w-full h-full lg:h-[950px] xl:h-[1000px] rounded-lg "
                src={EffectsofDeforestation}
                alt="EffectsofDeforestation"
              ></img>
            </div>
            <div className="container text-white  flex flex-col justify-center  h-full">
              <h2 className="text-left text-2xl md:text3xl xl:text-4xl  font-montserrat  leading-7 xl:leading-10 font-bold text-[#BAB220]  ">
                Where does GEP Come into Play?
              </h2>
              <div className="mt-4 md:mt-6 xl:mt-8 font-poppins text-sm md:text-base xl:text-lg text-[#3c3c3c] font-normal leading-5 xl:leading-7">
                <ul className=" flex flex-col gap-2">
                  <div className="	">
                    <li className="flex gap-3 align-middle ">
                      <img
                        className="w-6 h-6 mt-1 "
                        src={BulletPointone}
                        alt="location"
                      />
                      <p>
                        A partnership is formed through the{" "}
                        <a
                          className="text-[#BAB220] font-bold underline"
                          href="a.	https://www.worldbank.org/en/news/feature/2021/05/19/what-you-need-to-know-about-emission-reductions-payment-agreements"
                        >
                          Emission Reduction Purchase Agreement (ERPA)
                        </a>{" "}
                        between GEP and the government agency. GEP brings in
                        expertise and resources required to implement the
                        project, including strategies to reduce greenhouse gas
                        emissions and carbon emissions.
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
                        src={BulletPointtwo}
                        alt="location"
                      />
                      Then, GEP experts identify a suitable project (e.g.
                      renewable energy project, reforestation project) that can
                      generate CO2 credits, leading to the reduction of carbon
                      footprint. They also ensure that the project is in
                      alignment with Article 6.2 which requires the emission
                      reductions to be real, permanent, and measurable, making
                      sure that they are credible in the carbon credit market.
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
                      Time, budget, and expected outcomes of the projects are
                      developed, ensuring cost-effective carbon credit trading.
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
                        They apply for certification from a recognized carbon
                        standard such as the Gold Standard.
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
                        Under the{" "}
                        <a
                          className="text-[#BAB220] font-bold underline"
                          href="https://www.undp.org/energy/blog/what-article-6-paris-agreement-and-why-it-important#:~:text=Article%206.2%20outlines%20the%20possibility,sector%20companies%2C%20through%20bilateral%20agreements"
                        >
                          Article 6.2
                        </a>{" "}
                        of Paris Agreement, the government can sell off their
                        carbon credits to other organizations or governments.
                        These are called ITMOs or Internationally Transferred
                        Mitigation Outcomes. The final step is to auction these
                        off during{" "}
                        <a
                          href="https://www.cop28.com/"
                          className="text-[#BAB220] font-bold underline"
                        >
                          COP28
                        </a>{" "}
                        in Dubai.{" "}
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
                        To ensure a successful auction, our field experts have
                        entered into Bilateral Agreements with different
                        companies who’ve expressed their interest in purchasing
                        our ITMOs, leading to an effective carbon credit market.
                      </p>
                    </li>
                    <br />
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlueCarbonGepPlay;
