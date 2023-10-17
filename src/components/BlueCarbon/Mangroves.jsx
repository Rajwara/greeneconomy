import React from "react";
import Mangroves1 from "../../../src/images/bluec-mangroves.png";

const Mangroves = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8  flex-col md:flex-row px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] mt-[100px] mb-[50px]">
      <div className="flex flex-col  justify-center">
        {" "}
        <h2 className="text-[#BAB220] text-2xl mb-8 md:text-3xl lg:text-4xl leading-10  font-montserrat font-bold">
          Mangroves
        </h2>
        <p className="text-[#3c3c3c] text-sm md:text-base lg:text-lg leading-7  font-poppins font-normal ">
          They are a group of salt-tolerant trees and shrubs that live in the
          coastal intertidal zone. Mangroves help people weather the impacts of
          climate change- thanks to their ability to absorb and store carbon
          dioxide. They have the capacity to take way more amount of carbon from
          the atmosphere than any other plant, helping to absorb as much as{" "}
          <a
            className="text-[#D3CA28] font-bold underline"
            href="https://www.google.com/url?q=https://www.sciencedaily.com/releases/2011/04/110404173247.htm&sa=D&source=docs&ust=1697040592192692&usg=AOvVaw2fr2gZ6RIhTPQpwxk6LxZj"
          >
            {" "}
            ten times
          </a>{" "}
          the carbon as a similar-sized patch of a terrestrial plant.
        </p>
        <p className="text-[#3c3c3c] text-sm md:text-base lg:text-lg leading-7  font-poppins font-normal mt-4 ">
          However, mangroves are under threat due to human activities such as
          urbanization, deforestation, coastal development, and aquaculture.
          Therefore, it’s important to conserve them to maintain healthy coastal
          ecosystems and sustain the livelihood of millions of people around the
          world.
        </p>
      </div>
      <div className="img ">
        <img src={Mangroves1} alt="" className="w-full h-full rounded-lg" />
      </div>
    </div>
  );
};

export default Mangroves;
