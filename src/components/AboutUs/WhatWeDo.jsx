import React from "react";
import bg1 from "../../../src/images/what-we-do-image-bg.jpg";
import img1 from "../../../src/images/what-we-do-image.jpg";
const divStyle1 = {
  backgroundImage: `url(${bg1})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};
function WhatWeDo() {
  return (
    <div className="relative">
      <div style={divStyle1}>
        <div className="mt-[20px] py-[30px]  px-[30px] md:px[60] lg:px-[80px] xl:px-[100px]  ">
          <h3
            className="pb-[15px] text-[#BAB220] md:pb-[30px] lg:hidden text-center leading-[30px]  font-[500] 
                     lg:font-[700]  text-[18px]"
          >
            What We Do ?
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[50px]">
            <div className=" flex flex-col justify-center items-center h-full">
              <div className="py-[20px]  container flex  justify-center">
                <img
                  className="md:h-[350px] lg:h-full md:w-full rounded-lg"
                  src={img1}
                  alt=""
                ></img>
              </div>
            </div>

            <div className="container  pr-[10px] text-white  flex flex-col   h-full">
              <h3 className=" leading-[30px] text-[#BAB220] font-[500] text-[18px] pb-[20px]  lg:block">
                What We Do ?
              </h3>
              <p className="text-[14px] md:text-[16px] lg:text-[18px] pb-[10px]">
                At Green Economy Partnership, We create partnerships that pave
                the way for a well-defined (PPP) Public, Private partnership
                that facilitates and implements methodologies to monetize
                Nature-Based Assets (NBA). Advising, creating, and implementing
                sustainable infrastructure while determining commercial and
                technical components. We are setting the standard for engineered
                carbon removal methods in the voluntary carbon industry, and we
                are calling on global citizens to join us in reversing climate
                change.
              </p>

              <p className="text-[14px] md:text-[16px] lg:text-[18px]  pb-[10px]">
                Our main goal is to reduce carbon levels throughout the world.
                To do this, we need to work together and take action. This means
                committing to the Paris Agreement offsets, which will help but
                will not be enough on their own.
              </p>
              <p className="text-[14px] md:text-[16px] lg:text-[18px]  pb-[10px]">
                We have identified a range of Carbon Dioxide Removal (CDR)
                suppliers from various industries, such as forestry management,
                agriculture, biochar production and direct air capture
                technology companies. Through our partnerships with these
                suppliers, we can provide businesses with offsetting
                opportunities that align with their net-zero strategy as
                outlined by The Oxford Principles for Net Zero Aligned Carbon
                Offsetting.
              </p>
              <p className="text-[14px] md:text-[16px] lg:text-[18px]">
                We also offer consulting services in order to help businesses
                identify areas of potential emissions reduction and select
                appropriate CDRs that match their individual needs. This helps
                them to better understand their emissions profile and decide how
                best to reduce it through truly effective means.
              </p>
              <p className="text-[14px] md:text-[16px] lg:text-[18px]">
                At Green Economy Partnership, we believe that sustainable
                development requires team work – both between organisations
                within the industry itself, but also globally between civil
                society actors in a wide range of economic activities. By
                working together towards achievable goals, we can create a
                lasting impact on our environment while also stimulating
                economic growth through green initiatives that benefit us all!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;
