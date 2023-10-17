import React from "react";
import Mangroves1 from "../../../src/images/agro-financial.png";

const FinancialCoBenefits = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8  flex-col md:flex-row px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] mt-[100px] mb-[100px]">
      <div className="flex flex-col justify-center ">
        {" "}
        <h2 className="text-[#316D69] text-2xl mb-8 md:text-3xl lg:text-4xl leading-10 tracking-normal font-montserrat font-bold">
          Financial
          <span className="text-[#bab220]"> Co-Benefits </span>
        </h2>
        <p className="text-[#3c3c3c] text-sm md:text-base lg:text-lg leading-7  font-poppins font-normal mt-4 ">
          The financial advantages extend to all facets of life, aligning with
          the United Nation’s Sustainable Development Goals, and that’s what we
          refer to as co-benefits.
        </p>
      </div>

      <div className="img ">
        <img src={Mangroves1} alt="" className="w-full h-full rounded-lg" />
      </div>
    </div>
  );
};

export default FinancialCoBenefits;
