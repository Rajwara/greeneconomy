import React from "react";
import carbon from "../../../src/images/HowCarbonOffsetsWorkgif.gif";
import bg3 from "../../../src/images/background23.jpg";

const divStyle = {
  backgroundImage: `url(${bg3})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

function HowCarbonOffsetsWork() {
  return (
    <div className="">
      <div>
        <div className="px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px]  mt-[30px] lg:mt-[50px] mb-[30px] xl:mb-[50px]">
          <div>
            <h2 className="text-2xl md:text-3xl xl:text-4xl leading-7 xl:leading-10 mb-2 md:mb-4 xl:mb-6 font-montserrat  font-bold text-[#316D69] text-center">
              How Carbon Offsets Work
            </h2>
            <div className="text-sm md:text-base xl:text-lg  leading-5 xl:leading-7 text-center 2xl:pb-[15px] lg:pl-[30px] font-poppins xl:w-4/5 mx-auto ">
              <p>
                Carbon offsetting means that businesses and individuals extract
                the same amount of carbon from the atmosphere that they produce,
                thus, balancing carbon emissions. All businesses and individuals
                emit carbon into the atmosphere; things like airplanes, running
                a home or a business and car fumes are all contributors. With
                all the excess carbon dioxide being released into the
                atmosphere, the effects of climate change have escalated.{" "}
              </p>
              <p className="mt-2 xl:mt-4">
                Carbon offsetting is where businesses contribute money to
                counteract the carbons they emit. This money is used to reduce
                the carbon in the atmosphere around the world. Nonetheless, some
                of these carbon emissions remain unavoidable, yet they can be
                offset.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:gap-x-[50px] lg:grid-cols-2 xl:grid-cols-2 gap-2 ">
            <div className=" text-left font-poppins text-sm md:text-base xl:text-lg leading-5 xl:leading-7  text-[#3C3C3C]  flex flex-col justify-center h-full grid-cols-8">
              <h6 className="uppercase text-sm md:text-base xl:text-lg text-[#316D69] font-bold leading-7 xl:leading-9	font-montserrat pb-4">
                Now, how do these carbon offset projects work?
              </h6>
              <p className=" pl-[30px]  ">
                When an organization buys carbon credit, they compensate for
                their own emissions or offset their carbon footprint. By buying
                a carbon offset, they are actually paying to have equivalent
                amount of carbon dioxide removed from the atmosphere either :
              </p>
              <ol class="list-disc pl-[30px] ">
                <li class="mt-2 xl:mt-4  ">
                  <p className=" ">
                    Through removal of carbon dioxide that is already present in
                    the atmosphere
                  </p>
                </li>
                <li class=" ">
                  <p className="">Or through carbon emissions</p>{" "}
                </li>
              </ol>
              <p className=" mt-2 xl:mt-4 pl-[30px]">
                A third-party organization ensures that carbon offset projects
                align with the standards of the{" "}
                <a
                  className="text-[#D3CA28] font-bold underline mx-1"
                  href="https://unfccc.int/process/the-paris-agreement/cooperative-implementation"
                >
                  Article 6.2
                </a>{" "}
                of the Paris Agreement. Carbon credits are then issued. The cost
                of carbon offset varies with the type of the project and the
                amount of carbon dioxide that has to be offset.
              </p>
            </div>
            <div className="">
              <img
                className=" rounded-lg h-[90%]  lg:w-[100%] xl:w-[90%] "
                src={carbon}
                alt="carbon"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowCarbonOffsetsWork;
