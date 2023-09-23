import React from "react";
import img5 from "../../images/checklist.jpg";

function StartChecklist() {
  return (
    <section className=" py-16 text-white  px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px]">
      <div className="container mx-auto flex gap-10 flex-col md:flex-row-reverse">
        <div className="md:w-1/2  self-center">
          <h2 className="leading-7 tracking-normal text-[#BAB220] font-montserrat text-3xl font-bold  mb-4 ">
            Checklist
          </h2>
          <p className=" text-lg text-[#3c3c3c] font-normal font-poppins leading-7 mb-6">
            We work with organizations which have a trustworthy relationship
            with smallholder farmers. Organizations that believe in the benefits
            of Agro forestry, are committed to venture into an innovative
            project in the voluntary carbon market, and have the capacity to
            partner with the GEP program. Therefore, we ask our partners to meet
            several conditions.
          </p>
          <ul className="list-disc  text-lg text-[#3c3c3c] font-normal font-poppins leading-7">
            <li>
              Presence of legal right to sell Carbon Removal Units (no
              restricting governmental policy)
            </li>
            <li>
              The project includes new Agro forestry and/or existing Agro
              forestry with a maximum of 5 years since trees were planted
            </li>
            <li>2.000+ ha potential project scale</li>
            <li>
              No deforestation took place in the project area in the last 5
              years
            </li>
            <li>
              No carbon credits are being sold currently from the project, or
              CO2 (to be) sequestered is not yet monetized
            </li>
            <li>
              The area cultivated by each farmer is between 0.1 and 10 hectares
            </li>

            <li>
              There is local engagement and organizational capacity to undertake
              the project for a minimum of 20 years 
            </li>
            <li>Every farmer has proof of formal or informal land tenure</li>
          </ul>
        </div>
        <div className="md:w-1/2  self-center">
          <img
            src={img5}
            alt="Right"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default StartChecklist;
