import React from "react";
import img2 from "../../../src/images/newnursery.jpg";

function StartCordinating() {
  return (
    <section className="bg-white py-16 px-[30px]  md:px-[60px] lg:px-[80px] xl:px-[100px]">
      <h2 className="py-12 mx-10 mb-20 text-center font-montserrat text-6xl font-bold text-[#3c3c3c]  tracking-normal leading-7 relative">
        <span className="bg-clip-text from-[#316D69] to-[#BAB220]">
          Project
        </span>{" "}
        <span className="block text-2xl text-[#BAB220] mt-10"></span>{" "}
        <span className="block text-4xl text-[#316D69] font-montserrat tracking-normal leading-7 mt-2">
          Start a Project
        </span>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#316D69]"></div>
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-1 h-16 bg-[#316D69]"></div>
        <div className="absolute top-1/2 right-0 transform translate-y-1/2 w-1 h-16 bg-[#316D69]"></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#316D69]"></div>
      </h2>
      <div className="container mx-auto flex flex-col gap-8 md:flex-row">
        <div className="md:w-1/2  self-center">
          <h2 className="mb-4 text-[#316D69] text-3xl font-bold font-montserrat leading-7 tracking-normal">
            Coordinating{" "}
            <span className="text-[#BAB220] text-2xl font-bold">with Gep</span>
          </h2>
          <p className="mb-6 text-lg text-[#3c3c3c] font-normal font-poppins leading-7">
            To realize our mission of supporting millions of smallholder
            farmers, we are looking for partners to join forces. Collaborating
            with GEP as a project coordinator is as straightforward as we can
            make it. We're here to help you and the farmers in the community you
            serve, after all. Here's how it works: <br />
            Get in touch with one of our account managers; they'll explain next
            steps and expectations <br />
            Gather information and fill out the required paperwork in our online
            portal; we’re committed to customer due diligence and will provide
            any support you need
            <br />
            Serve as lynchpin between GEP and local smallholder farmers, both to
            direct revenue streams and to facilitate communication <br />
            Pay out farmers (at least 75% of the proceeds of CRU sales) and
            watch as your local community flourishes, from farm to family to
            neighborhood <br />
            Submit annual progress reports and assist us in keeping our data and
            models up to date through reporting and monitoring{" "}
          </p>
        </div>
        <div className="md:w-1/2  self-center">
          <img
            src={img2}
            alt="Right"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default StartCordinating;
