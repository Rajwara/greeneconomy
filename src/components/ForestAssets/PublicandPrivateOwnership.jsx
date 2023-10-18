import React from "react";
import Agro from "../../../src/images/forestasset-publicandprivate-ownership.png";

const PublicandPrivateOwnership = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8  flex-col md:flex-row px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] mt-[30px] md:mt-[50px] lg:mt-[100px] mb-[50px]">
      <div className="img">
        <img src={Agro} alt="" className="w-full h-full rounded-lg" />
      </div>
      <div className="flex flex-col justify-center ">
        {" "}
        <h2 className="text-[#316D69] text-2xl mb-4 md:mb-6 lg:mb-8 md:text-3xl lg:text-4xl leading-7 lg:leading-10  font-montserrat font-bold">
          Public and Private <span className="text-[#bab220]"> Ownership</span>
        </h2>
        <p className="text-[#3c3c3c] text-sm md:text-base lg:text-lg leading-5 lg:leading-7  font-poppins font-normal">
          In their detailed analysis,
          <a
            href="https://www.scirp.org/(S(i43dyn45te-exjx455qlt3d2q))/reference/referencespapers.aspx?referenceid=1499085"
            className="text-[#D3CA28] font-bold underline mx-1"
          >
            {" "}
            White and Martin
          </a>{" "}
          focus on 24 of the 30 most forested countries; they differentiate
          between public and private ownership
        </p>
        <div className="text flex flex-col">
          <h6 className="uppercase text-sm md:text-base lg:text-lg text-[#316D69] font-bold leading-7 lg:leading-9	font-montserrat mb-4 mt-4">
            Public ownership:
          </h6>
          <p className="text-[#3c3c3c] text-sm md:text-base lg:text-lg leading-5 lg:leading-7 font-poppins font-normal">
            Includes land owned by governments, either at the regional, central,
            or local level. Some of this land is reserved for local communities,
            but their rights might not be secured. It is a problem because it
            means that they can’t sell the land or benefit from ecosystem
            services. Some countries with this setup are Brazil, the United
            States, India, Thailand, the Philippines, Indonesia, and Zimbabwe.
          </p>
          <h6 className="uppercase text-sm md:text-base lg:text-lg text-[#316D69] font-bold leading-7 lg:leading-9	font-montserrat mb-4 mt-4">
            Private ownership:
          </h6>
          <p className="text-[#3c3c3c] text-sm md:text-base lg:text-lg leading-5 lg:leading-7  font-poppins font-normal">
            Is when people or firms own the land, and this right can't be taken
            away by the government without some form of compensation. This can
            be owned by individuals or firms, as well as local communities or
            indigenous groups.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PublicandPrivateOwnership;
