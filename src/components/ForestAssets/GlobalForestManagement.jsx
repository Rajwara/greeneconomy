import React from "react";

const GlobalForestManagement = () => {
  return (
    <div className=" px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] mt-[100px] mb-[50px]">
      <div className="flex flex-col  text-center items-center">
        {" "}
        <h2 className="text-[#316D69] text-xl mb-8 md:text-2xl lg:text-4xl leading-7 tracking-normal font-montserrat font-bold">
          Global Forest Management{" "}
          <span className="text-[#bab220]"> Breakdown </span>
        </h2>
        <p className="text-[#3c3c3c] text-sm md:text-base lg:text-lg leading-7  font-poppins font-normal w-4/5">
          Approximately,{" "}
          <a
            href="https://www.cifor.org/publications/pdf_files/reports/tenurereport_whoowns.pdf"
            className="text-[#D3CA28] font-bold underline"
          >
            {" "}
            2.8 billion{" "}
          </a>
          hectares fall under government management while{" "}
          <a
            href="https://www.forest-trends.org/wp-content/uploads/imported/tenurereport_whoowns.pdf"
            className="text-[#D3CA28] font-bold underline mr-1"
          >
            246 million hectares 
          </a>
           are owned by indigenous groups and local communities, and{" "}
          <a
            href="https://crsreports.congress.gov/product/pdf/IF/IF12001"
            className="text-[#D3CA28] font-bold underline"
          >
            443 million hectares
          </a>{" "}
          are privately held by individuals and firms. These figures, likely
          underestimations for non-government categories, suggest that around
          77% of the world's forested land is overseen by governments.
        </p>
        <p className="text-[#3c3c3c] text-sm md:text-base lg:text-lg leading-7 mt-4 font-poppins font-normal w-4/5">
          Currently, managed forests account for about
          <a
            href="https://www.google.com/url?q=https://research.wri.org/gfr/forest-extent-indicators/forest-extent%23:~:text%3D(2022)%252C%2520https%253A%252F%252Fdoi,percent%2520are%2520unmanaged%2520natural%2520forests.&sa=D&source=docs&ust=1697121954468244&usg=AOvVaw3M1D4pFM6ng9y2obGc58IF"
            className="text-[#D3CA28] font-bold underline"
          >
            {" "}
            41%
          </a>
          of the total global forested area. Public and private entities have
          undertaken a wide range of management activities, each with diverse
          operational objectives and criteria. These activities include
          everything from industrial plantations that supply major forest
          product corporations to the conservation of natural forests within
          protected areas held by leading NGOs and conservation groups.
        </p>
      </div>
    </div>
  );
};

export default GlobalForestManagement;
