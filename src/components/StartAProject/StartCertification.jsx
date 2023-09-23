import React from "react";
import img4 from "../../images/certificate.jpg";

function StartCertification() {
  return (
    <section className="bg-white py-16 px-[30px] md:px-[60px] font-roboto lg:px-[80px] xl:px-[100px]">
      <div className="container mx-auto flex flex-col md:flex-row">
        <div className="md:w-1/2  self-center pr-8">
          <h2 className="mb-4 leading-7 tracking-normal font-montserrat text-[#BAB220] text-3xl font-bold">
            Certification
          </h2>
          <p className="mb-6  text-lg text-[#3c3c3c] font-normal font-poppins leading-7">
            In order to ensure we're a good fit for one another, we have set up
            a certification process in conjunction with VERIFIED CARBON STANDARD
            GOLD STANDARD. This proprietary protocol keeps the certification
            process accessible, transparent and reduces the costs and lead times
            of certification significantly.
          </p>
        </div>
        <div className="md:w-1/2  self-center">
          <img
            src={img4}
            alt="Right"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default StartCertification;
