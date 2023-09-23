import React from "react";
import img3 from "../../../src/images/remuneration.jpg";

function StartRemuneration() {
  return (
    <section className="py-16  bg-[#f7f5f2] text-[#f7f5f2] px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px]">
      <div className="container mx-auto flex flex-col md:flex-row-reverse gap-8">
        <div className="md:w-1/2  self-center">
          <h2 className="mb-4 leading-7 tracking-normal font-montserrat text-[#316D69] font-bold text-3xl ">
            Remuneration
          </h2>
          <p className=" text-lg text-[#3c3c3c] font-normal font-poppins leading-7 mb-6">
            Most of the carbon credit sales revenue flows back to you and the
            farmers you represent. We take a fixed 20% to cover our costs. As
            project coordinator, you're entitled to up to 5-10% as well. The
            remaining 70-75 % is paid out to farmers, at least once a year. How
            much a CRU sells for depends on supply and demand, but we'll always
            charge a minimum of €20, to minimize financial risk for the farmers.
          </p>
        </div>
        <div className="md:w-1/2 self-center">
          <img
            src={img3}
            alt="Right"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default StartRemuneration;
