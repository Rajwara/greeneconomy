import React from "react";
import carbon from "../../../src/images/carbon-credit.jpg";
import bg3 from "../../../src/images/background23.jpg";
const divStyle = {
  backgroundImage: `url(${bg3})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

function HowCarbonOffsetsWork() {
  return (
    <div className="relative">
      <div>
        <div className="px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px]  py-[20px] md:py-[50px] mt-10">
          <div><h2 className="text-4xl mb-10 font-montserrat  font-bold text-[#316D69] text-center">How Carbon Offsets Work
</h2></div>
          

          <div className="grid grid-cols-1 lg:gap-x-[50px] lg:grid-cols-3">
            
          <div className=" text-left  text-[#3C3C3C]  flex flex-col justify-center h-full">
              
              <ol class="list-disc pl-[30px] font-poppins text-lg ">
                <li class="">
                  <p className="text-[14px] md:text-[16px] lg:text-[18px]  leading-[24px] text-left 2xl:pb-[15px]">
                    Carbon offsets are a way for individuals and organizations
                    to reduce their greenhouse gas emissions by investing in
                    projects that remove or reduce carbon dioxide from the
                    atmosphere. These projects can include things like renewable
                    energy, reforestation, and carbon capture and storage.
                  </p>
                </li>
                <li class="">
                  <p className="  leading-[24px] 2xl:pb-[15px]">
                    When an individual or organization purchases a carbon
                    offset, they are essentially paying to have an equivalent
                    amount of carbon dioxide removed from the atmosphere, either
                    through the reduction of emissions or the removal of carbon
                    already in the atmosphere. This is intended to help
                    counterbalance their own emissions and offset their carbon
                    footprint.
                  </p>
                </li>
            
              </ol>
            </div>
            <div className="py-[20px] flex flex-col justify-center items-center h-auto">
              <div className="container">
                <img
                  className="w-full rounded-lg"
                  src={carbon}
                  alt="carbon"
                ></img>
              </div>
            </div>
            <div className=" text-left  text-[#3C3C3C]  flex flex-col justify-center h-full">
             
              <ol class="list-disc pl-[30px]  font-poppins text-lg">
               
                <li class=" font-poppins text-lg  ">
                  <p className=" leading-[24px] 2xl:pb-[15px]">
                    Carbon offset projects are typically verified by third-party
                    organizations to ensure that they meet certain standards and
                    are having a measurable impact on reducing greenhouse gas
                    emissions. Carbon offset credits, also known as carbon
                    credits, are then issued for the reductions in emissions or
                    the removal of carbon from the atmosphere.
                  </p>
                </li>
                <li class=" ">
                  <p className="">
                    There are many carbon offset providers and programs that
                    individuals and organizations can choose from, and the cost
                    of offsets can vary widely depending on the type of project
                    and the amount of carbon dioxide being offset.
                  </p>{" "}
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowCarbonOffsetsWork;
