import React from "react";

import p2i3 from "../../../src/images/p2i5.jpg";

const bg2 = {
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5)), url(${p2i3})`,
  backgroundSize: "cover",
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
  /* Any additional styles you want to apply */
};

function PartnerMission() {
  return (
    <div
      style={bg2}
      className="py-12 text-center text-[#f7f5f2] px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px]"
    >
      <h2 className="bg-transparent underline text-2xl text-[#f7f5f2] tracking-normal leading-7 font-bold font-montserrat">
        Mission 2050
      </h2>
      <h3 className="text-xl text-[#f7f5f2] leading-7 font-normal font-poppins pt-4">
        Let's transform net-zero carbon footprint together by 2050
      </h3>
      <button className="mt-10 bg-transparent shadow-2xl font-montserrat text-[#BAB220] border-solid hover:border-[#BAB220] border-2 px-8 py-4 rounded-lg font-semibold hover:text-[#EFEDD1] transition duration-300">
        Register Your Intrest
      </button>
    </div>
  );
}

export default PartnerMission;
