import React from "react";

const ConcessionManagement = () => {
  return (
    <div className=" px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] mt-[30px] md:mt-[50px] lg:mt-[50px] mb-[50px]">
      <div className="flex flex-col  text-center items-center">
        {" "}
        <h2 className="text-[#316D69] text-2xl mb-2 md:mb-4 lg:mb-6 md:text-3xl lg:text-4xl leading-7 lg:leading-10  font-montserrat font-bold">
          Concession
          <span className="text-[#bab220]"> Management </span>
        </h2>
        <p className="text-[#3c3c3c] text-sm md:text-base lg:text-lg leading-5 lg:leading-7 font-poppins font-normal lg:w-4/5">
          Governments own most of the forests, but authority and access rights
          are often granted to large-scale private forestry companies through
          logging concessions. In exchange for royalties and various fees, these
          firms gain the privilege of managing sizable forest tracts. In the
          analysis carried out by
          <a
            href="https://www.scirp.org/(S(i43dyn45te-exjx455qlt3d2q))/reference/referencespapers.aspx?referenceid=1499085"
            className="text-[#D3CA28] font-bold underline mx-1"
          >
            White and Martin
          </a>
          , data from 16 countries indicated that approximately 400 million
          hectares were allocated to concessions. In most cases, the profits or
          government revenues generated from forest concessions were not
          effectively reinvested. In situations involving heavily indebted,
          vertically integrated multinational concessionaires, tax revenues
          remained low, with profits primarily benefiting shareholders in
          foreign countries. Consequently, this model of forest resource
          ownership and utilization has exhibited poor performance compared to
          smaller to medium-sized forest enterprises in countries like Guinea
          and Ghana, as reported by
          <a
            href="https://citeseerx.ist.psu.edu/viewdoc/download;jsessionid=C1D86E06EFD5A2356EEE68533ADBF30F?doi=10.1.1.515.3706&rep=rep1&type=pdf"
            className="text-[#D3CA28] font-bold underline ml-1"
          >
            Mendes and Macqueen in 2006.
          </a>
        </p>
      </div>
    </div>
  );
};

export default ConcessionManagement;
