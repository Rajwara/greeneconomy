import React from "react";
import Agro from "../../../src/images/forestasset-role-of-indigenous.png";

const ForestOwnership = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8  flex-col md:flex-row px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] mt-[100px] mb-[50px]">
      <div className="flex flex-col justify-center ">
        {" "}
        <h2 className="text-[#316D69] text-2xl mb-8 md:text-3xl lg:text-4xl leading-10  font-montserrat font-bold">
          Forest Ownership
        </h2>
        <p className="text-[#3c3c3c] text-sm md:text-base lg:text-lg leading-7  font-poppins font-normal">
          Forest ownership is a topic that has been getting more attention in
          recent years. People now see the connection between responsible forest
          management and property rights. The discussion about who should own
          the world’s forests is taking place all over the world.
        </p>
        <h2 className="text-[#316D69] text-2xl mb-8 md:text-3xl lg:text-4xl leading-10 tracking-normal font-montserrat font-bold mt-4">
          Role of Indigenous Groups and{" "}
          <span className="text-[#bab220]">Local Communities </span>
        </h2>
        <div className="text-[#3c3c3c] text-sm md:text-base lg:text-lg leading-7  font-poppins font-normal ">
          <p className="">
            Governments are changing their approach due to international
            agreements and local movements. They have now started to acknowledge
            the land claims of indigenous groups and local communities.
          </p>
          <p className="mt-4">
            These communities often depend on forests for their way of life. The
            conservation movement also values how these groups manage forests,
            which can be even better if ownership shifts from governments to
            local communities.
          </p>
        </div>
      </div>
      <div className="img">
        <img src={Agro} alt="" className="w-full h-full rounded-lg" />
      </div>
    </div>
  );
};

export default ForestOwnership;
