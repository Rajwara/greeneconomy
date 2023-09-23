import React from "react";
import EffectsofDeforestation from "../../../src/images/Effects-of-Deforestation.png";
import bg1 from "../../../src/images/backgroun1.webp";
import BulletPointarrow from "../../../src/images/Bullet-Point-arrow.svg";
import BulletPointtwo from "../../../src/images/Bullet-Point-two.svg";



const divStyle = {
  backgroundImage: `url(${bg1})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover", // You can adjust this property as needed
};

function EffectsOfDeferestionCards() {
  return (
    <div className="relative ">
      <div>
        <div className="px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] py-[20px] md:py-[50px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-[50px]">
            <div className="container text-white  flex flex-col justify-center  h-full">
              <h2 className="text-left text-4xl  font-montserrat  font-bold text-[#BAB220] pb-6">
                Effects of Deforestation
              </h2>
              <p className="text-[#3C3C3C] text-base font-normal font-poppins ">
                Deforestation can have a variety of negative effects on the
                environment, including:
              </p>
              <div className="mt-14 font-poppins text-lg text-black">
                <ul className=" flex flex-col gap-2">
                  <div className="	">
                    <li className="flex gap-3 align-middle">
                      <img
                        className="w-6 h-6 "
                        src={BulletPointarrow}
                        alt="location"
                      />
                      <h6 className="uppercase text-lg text-[#316D69] font-bold	font-montserrat">
                        Loss of biodiversity:
                      </h6>
                    </li>
                    <li className="font-poppins text-lg pl-8 ">
                      <p>Forests are home to a wide variety of plant and animal species, and deforestation can lead to the loss of many of these species.</p>
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
                      <h6 className="uppercase text-lg text-[#316D69] font-bold	font-montserrat">
                      Climate change:
                      </h6>
                    </li>
                    <li className="font-poppins text-lg pl-8 ">
                      <p>Trees absorb carbon dioxide from the atmosphere and store it as carbon in their biomass. When they are cut down and burned, the carbon is released into the atmosphere, contributing to global warming.</p>
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
                      <h6 className="uppercase text-lg text-[#316D69] font-bold	font-montserrat">
                      Soil erosion:
                      </h6>
                    </li>
                    <li className="font-poppins text-lg pl-8 ">
                      <p>Trees help to hold soil in place and prevent erosion. Without them, soil can be washed away by rain, leading to loss of fertile land and making it difficult for new vegetation to grow.</p>
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
                      <h6 className="uppercase text-lg text-[#316D69] font-bold	font-montserrat">
                      Changes in water cycle:
                      </h6>
                    </li>
                    <li className="font-poppins text-lg pl-8 ">
                      <p>Forests play a crucial role in regulating the water cycle. They help to maintain the balance of water in the ecosystem by absorbing and releasing water. Deforestation can lead to changes in the water cycle, causing droughts or floods in some areas. </p>
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
                      <h6 className="uppercase text-lg text-[#316D69] font-bold	font-montserrat">
                      Loss of livelihoods:
                      </h6>
                    </li>
                    <li className="font-poppins text-lg pl-8 ">
                      <p> Many people rely on forests for their livelihoods, whether through hunting, gathering, or farming. Deforestation can destroy these livelihoods and force people to move to urban areas in search of work.</p>
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
                      <h6 className="uppercase text-lg text-[#316D69] font-bold	font-montserrat">
                      Social impacts:
                      </h6>
                    </li>
                    <li className="font-poppins text-lg pl-8 ">
                      <p>Deforestation can lead to displacement of local communities, loss of traditional ways of life, and increase in conflicts over resources.</p>
                    </li>
                    <br />
                  </div>
                </ul>
               
              </div>
            </div>
            <div className="pb-[20px] flex flex-col justify-center items-center h-full">
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
}

export default EffectsOfDeferestionCards;
