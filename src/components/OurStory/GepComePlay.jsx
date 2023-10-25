import React from "react";
import EffectsofDeforestation from "../../../src/images/ourstory-gepcomeplay.png";
import BulletPointarrow from "../../../src/images/Bullet-Point-arrow.svg";

function GepComePlay() {
  return (
    <div className=" ">
      <div>
        <div className="px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] mt-[30px] lg:[50px] mb-[30px] xl:mb-[50px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-[50px] items-center">
            <div className="container text-white  flex flex-col justify-center  h-full">
              <h2 className="text-left text-2xl md:text-3xl xl:text-4xl leading-7 xl:leading-10  font-montserrat  font-bold text-[#BAB220] pb-0">
                Where does GEP Come into Play?
              </h2>
              <div className="mt-4 md:mt-6 xl:mt-8 flex flex-wrap flex-col font-poppins text-sm md:text-base xl:text-lg  font-normal leading-5 xl:leading-7 text-[#3c3c3c]">
                <div className="flex flex-col">
                  <ul className=" flex flex-col gap-2">
                    <li className="flex gap-3 align-middle">
                      <img
                        className="w-6 h-6"
                        src={BulletPointarrow}
                        alt="location"
                      />
                      <p>
                        A partnership is formed through the{" "}
                        <a
                          className="text-[#D3CA28] font-bold underline"
                          href="https://www.worldbank.org/en/news/feature/2021/05/19/what-you-need-to-know-about-emission-reductions-payment-agreements"
                        >
                          Emission Reduction Purchase Agreement (ERPA)
                        </a>{" "}
                        between GEP and the government agency.
                      </p>
                    </li>

                    <li className="flex gap-3 align-middle">
                      <img
                        className="w-6 h-6 "
                        src={BulletPointarrow}
                        alt="location"
                      />
                      <p>
                        GEP brings in expertise and resources required to
                        implement the project, including strategies to reduce
                        greenhouse gas emissions and carbon emissions.
                      </p>
                    </li>

                    <li className="flex gap-3 align-middle">
                      <img
                        className="w-6 h-6 "
                        src={BulletPointarrow}
                        alt="location"
                      />
                      <p>
                        Then, GEP would identify a suitable project (e.g.
                        renewable energy project, reforestation project) that
                        can generate CO2 credits, leading to the reduction of
                        carbon footprint.
                      </p>
                    </li>

                    <li className="flex gap-3 align-middle">
                      <img
                        className="w-6 h-6 "
                        src={BulletPointarrow}
                        alt="location"
                      />
                      <p>
                        The project is in alignment with{" "}
                        <a
                          className="text-[#D3CA28] font-bold underline"
                          href="https://unfccc.int/process/the-paris-agreement/cooperative-implementation"
                        >
                          Article 6.2{" "}
                        </a>{" "}
                        which requires the emission reductions to be real,
                        permanent, and measurable, making sure that they are
                        credible in the carbon credit market.
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col">
                  <ul className=" flex flex-col gap-2">
                    <li className="flex gap-3 align-middle">
                      <img
                        className="w-6 h-6 "
                        src={BulletPointarrow}
                        alt="location"
                      />
                      <p>
                        Time, budget, and expected outcomes of the projects are
                        developed, ensuring cost-effective carbon credit
                        trading.
                      </p>
                    </li>

                    <li className="flex gap-3 align-middle">
                      <img
                        className="w-6 h-6 "
                        src={BulletPointarrow}
                        alt="location"
                      />
                      <p>
                        Next step would be to apply for certification from a
                        recognized carbon standard such as the Gold Standard.
                      </p>
                    </li>

                    <li className="flex gap-3 align-middle">
                      <img
                        className="w-6 h-6 "
                        src={BulletPointarrow}
                        alt="location"
                      />
                      <p>
                        Under the Article 6.2 of Paris Agreement, the government
                        can sell off their carbon credits to other organizations
                        or governments. These are called ITMOs or
                        Internationally Transferred Mitigation Outcomes. The
                        final step is to auction these off during{" "}
                        <a
                          className="text-[#D3CA28] font-bold underline"
                          href="https://www.cop28.com/"
                        >
                          COP28
                        </a>{" "}
                        in Dubai{" "}
                      </p>
                    </li>

                    <li className="flex gap-3 align-middle">
                      <img
                        className="w-6 h-6 "
                        src={BulletPointarrow}
                        alt="location"
                      />
                      <p>
                        To ensure a successful auction, our field experts have
                        entered into Bilateral Agreements with different
                        companies who’ve expressed their interest in purchasing
                        our ITMOs, leading to an effective carbon credit market.{" "}
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className=" mt-6 md:mt-6 lg:mt-0">
              <img
                className=" rounded-lg w-full h-full lg:h-[900px] xl:h-full"
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

export default GepComePlay;
