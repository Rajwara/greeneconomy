import React from "react";

import p2i2 from "../../../src/images/p2i2.png";

function BenefitsForPartner() {
  return (
    <section className="relative py-16 mt-0 md:mt-10  px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px]">
      <div className="container mx-auto text-center ">
        <h2 className="text-3xl font-bold font-montserrat tracking-normal leading-7  text-[#BAB220] mb-6">
          What are the benefits for the Partner?
        </h2>
        <div className="relative">
          <img
            src={p2i2}
            alt="Animated"
            className="mx-auto w-auto transition-transform transform hover:scale-110"
          />
        </div>
        <ul className="list-disc ml-4 xl:ml-28 text-lg font-poppins leading-7 text-[#316D69] text-left md:text-left list-inside mt-5 md:mt-7">
          <li>
            <span className="text-[#BAB220] font-bold">
              Complimentary revenue stream –{" "}
            </span>{" "}
            Increase revenue from your current customer base.
          </li>
          <li>
            <span className="text-[#BAB220] font-bold">
              Additional value to your clients –{" "}
            </span>{" "}
            Very few companies provide carbon opportunities to farmers. Be among
            the first.
          </li>
          <li>
            <span className="text-[#BAB220] font-bold">
              Grow your market share –{" "}
            </span>{" "}
            Grow your market share by attracting new customers to your core
            products & services.
          </li>
        </ul>
      </div>
    </section>
  );
}

export default BenefitsForPartner;
