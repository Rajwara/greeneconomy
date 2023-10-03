import React from 'react'
import EffectsofDeforestation from "../../../src/images/Effects-of-Deforestation.png";
// import bg1 from "../../../src/images/backgroun1.webp";
// import BulletPointarrow from "../../../src/images/Bullet-Point-arrow.svg";
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
        <div className="px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] py-[20px] md:py-[50px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-[50px]">
          <div className="pb-[20px] flex flex-col justify-center items-center h-full">
              <div className=" container flex  items-center">
                <img
                  className=" mx-auto "
                  src={EffectsofDeforestation}
                  alt="EffectsofDeforestation"
                ></img>
              </div>
            </div>
            <div className="container text-white  flex flex-col justify-center  h-full">
              <h2 className="text-left text-4xl  font-montserrat  font-bold text-[#BAB220] pb-6">
              Where does GEP Come into Play? 

              </h2>
              {/* <p className="text-[#3C3C3C] text-base font-normal font-poppins ">
              Here is how deforestation negatively affects us and our surroundings: 
              </p> */}
              <div className="mt-14 font-poppins text-lg text-black">
                <ul className=" flex flex-col gap-2">
                  <div className="	">
                    <li className="flex gap-3 align-middle">
                      <img
                        className="w-6 h-6 "
                        src={BulletPointone}
                        alt="location"
                      />
                      {/* <h6 className="uppercase text-lg text-[#316D69] font-bold	font-montserrat">
                      Climate Change:
                      </h6> */}
                      A partnership is formed through the Framework Emission Reduction Agreement (FERA) between GEP and the government agency. GEP brings in expertise and resources required to implement the project, including strategies to reduce greenhouse gas emissions and carbon emissions. 

                    </li>
                    {/* <li className="font-poppins text-lg pl-8 ">
                      <p>Through deforestation, stored carbon dioxide from trees is released into the atmosphere, increasing greenhouse gasses and global warming. </p>
                    </li> */}
                    <br />
                  </div>
                </ul>
                <ul className=" flex flex-col gap-2">
                  <div className="	">
                    <li className="flex gap-3 align-middle">
                      <img
                        className="w-6 h-6 "
                        src={BulletPointtwo}
                        alt="location"
                      />
                      {/* <h6 className="uppercase text-lg text-[#316D69] font-bold	font-montserrat">
                      Soil Erosion:
                      </h6> */}
                      Then, GEP experts identify a suitable project (e.g. renewable energy project, reforestation project) that can generate CO2 credits, leading to the reduction of carbon footprint. They also ensure that the project is in alignment with Article 6.2 which requires the emission reductions to be real, permanent, and measurable, making sure that they are credible in the carbon credit market.
                    </li>
                    {/* <li className="font-poppins text-lg pl-8 ">
                      <p>Soil erosion is the accelerated removal of topsoil through various agents like rainfall, affecting agricultural productivity. </p>
                    </li> */}
                    <br />
                  </div>
                </ul>
                <ul className=" flex flex-col gap-2">
                  <div className="	">
                    <li className="flex gap-3 align-middle">
                      <img
                        className="w-6 h-6 "
                        src={BulletPointhree}
                        alt="location"
                      />
                      {/* <h6 className="uppercase text-lg text-[#316D69] font-bold	font-montserrat">
                      Ecological Disturbance:
                      </h6> */}
                      Time, budget, and expected outcomes of the projects are developed, ensuring cost-effective carbon credit trading.
                    </li>
                    {/* <li className="font-poppins text-lg pl-8 ">
                      <p>It also disrupts the ecosystems and many species of animals become extinct or lose their natural habitat, which results in the reduction of biodiversity.</p>
                    </li> */}
                    <br />
                  </div>
                </ul>
                <ul className=" flex flex-col gap-2">
                  <div className="	">
                    <li className="flex gap-3 align-middle">
                      <img
                        className="w-6 h-6 "
                        src={BulletPointfour}
                        alt="location"
                      />
                      {/* <h6 className="uppercase text-lg text-[#316D69] font-bold	font-montserrat">
                      Impact on Water Cycle:
                      </h6> */}
                      <p>They apply for certification from a recognized carbon standard such as the Gold Standard.</p>
                    </li>
                    {/* <li className="font-poppins text-lg pl-8 ">
                      <p>Deforestation impacts water cycles, leading to frequent floods, droughts and less available water resources for drinking. </p>
                    </li> */}
                    <br />
                  </div>
                </ul>
                <ul className=" flex flex-col gap-2">
                  <div className="	">
                    <li className="flex gap-3 align-middle">
                      <img
                        className="w-6 h-6 "
                        src={BulletPointfive}
                        alt="location"
                      />
                      {/* <h6 className="uppercase text-lg text-[#316D69] font-bold	font-montserrat">
                      Loss of Carbon Sinks :
                      </h6> */}
                      <p>Under the Article 6.2 of Paris Agreement, the government can sell off their carbon credits to other organizations or governments. These are called ITMOs or internationally Transferred Mitigation Outcomes. The final step is to auction these off during COP28 in Dubai. </p>
                    </li>
                    {/* <li className="font-poppins text-lg pl-8 ">
                      <p>Forests are the most important carbon sinks, deforestation removes their capacity to absorb carbon dioxide from the atmosphere, exacerbating climate change. </p>
                    </li> */}
                    <br />
                  </div>
                </ul>
                <ul className=" flex flex-col gap-2">
                  <div className="	">
                    <li className="flex gap-3 align-middle">
                      <img
                        className="w-6 h-6 "
                        src={BulletPointsix}
                        alt="location"
                      />
                      {/* <h6 className="uppercase text-lg text-[#316D69] font-bold	font-montserrat">
                      Social Impact:
                      </h6> */}
                      <p>To ensure a successful auction, our field experts have entered into Bilateral Agreements with different companies who’ve expressed their interest in purchasing our ITMOs, leading to an effective carbon credit market.</p>
                    </li>
                    {/* <li className="font-poppins text-lg pl-8 ">
                      <p>Deforestation has a direct impact on the local inhabitants, and increased conflicts over natural resources.</p>
                    </li> */}
                    <br />
                  </div>
                </ul>
               
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlueCarbonGepPlay




