import React from "react";
import Agro from "../../../src/images/Family-farm.jpeg";

const ForestBackedBondsProof = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-8  flex-col md:flex-row px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] mt-[100px] mb-[50px]">
      <div className="flex flex-col  forestbackedbondsproof">
        {" "}
        <h2 className="text-[#316D69] text-xl mb-8 md:text-2xl lg:text-4xl leading-7 tracking-normal font-montserrat font-bold">
          Forest-Backed Bonds Proof of Concept Study by Forum for the{" "}
          <span className="text-[#bab220]"> Future & EnviroMarket</span>
        </h2>
        <p className="text-[#3c3c3c] text-sm md:text-base lg:text-lg leading-7  font-poppins font-normal">
          According to the <a className="text-[#bab220] underline" href="https://press.un.org/en/2007/envdev937.doc.htm">2007 UN report</a> on sustainable bioenergy, even
          biofuels produced under "sustainable" practices could have adverse
          effects if they replace primary forests. This replacement may lead to
          substantial carbon releases from the soil and forest biomass, negating
          any benefits from biofuels for decades.
        </p>
        <p className="mt-4 text-[#3c3c3c] text-sm md:text-base lg:text-lg leading-7  font-poppins font-normal">
          While the greatest demand for biofuels is concentrated in
          industrialized countries, the most significant production potential
          exists in tropical countries (such as South America, sub-Saharan
          Africa, and East Asia), along with countries characterized by
          relatively low population density, like Canada and Russia. The
          biofuels industry remains heavily reliant on government subsidies in
          many countries, which has served to mitigate market price
          fluctuations.
        </p>
      </div>
      <div className="carbon">
        <h2 className="text-[#316D69] text-xl mb-8 md:text-2xl lg:text-4xl leading-7 tracking-normal font-montserrat font-bold">
          Carbon
        </h2>
        <p className="text-[#3c3c3c] text-sm md:text-base lg:text-lg leading-7  font-poppins font-normal">
          Due to the challenges of climate change, markets have started working
          toward the reduction of carbon dioxide emissions. Forestry initiatives
          contribute to carbon reductions in two fundamental ways.
        </p>
        <ul className="flex flex-col text-[#3c3c3c] list-disc text-sm md:text-base lg:text-lg leading-7 ml-10 mt-4  font-poppins font-normal">
          <li>
            Firstly, by planting and nurturing new trees to absorb and sequester
            carbon from the atmosphere.{" "}
          </li>
          <li>
            Secondly, by implementing measures to curb or halt deforestation.{" "}
          </li>
        </ul>
        <p className="text-[#3c3c3c] text-sm md:text-base lg:text-lg leading-7 mt-4 font-poppins font-normal">
          Given the prevalence of natural forests across the globe, which far
          outnumber man-made plantations, addressing ongoing deforestation has
          been recognized as a significant source of global carbon dioxide
          emissions.
        </p>
      </div>
      <div className="challengesfacedbycarbonreductionmarket">
        <h2 className="text-[#316D69] text-xl mb-8 md:text-2xl lg:text-4xl leading-7 tracking-normal font-montserrat font-bold">
          Challenges Faced by Carbon{" "}
          <span className="text-[#bab220]"> Reduction Market </span>
        </h2>
        <p className="text-[#3c3c3c] text-sm md:text-base lg:text-lg leading-7  font-poppins font-normal">
          Nonetheless, the creation of a carbon reduction market rooted in
          forestry faces notable challenges, primarily stemming from issues
          related to:
        </p>
        <ul className="flex flex-col text-[#3c3c3c] list-disc text-sm md:text-base lg:text-lg leading-7 ml-10 mt-4  font-poppins font-normal">
          <li>Permanence</li>
          <li>Leakage</li>
          <li>Concerns regarding quality and ownership</li>
        </ul>
        <p className="text-[#3c3c3c] text-sm md:text-base lg:text-lg leading-7 mt-4  font-poppins font-normal">
          Carbon stored in forests is dynamic and not constant, forestry carbon
          projects must rigorously adhere to comprehensive methodologies to
          ensure the environmental integrity of the carbon credits they
          generate. The diverse array of social and local environmental
          benefits, while of great interest to a considerable proportion of
          potential buyers, introduces additional complexities in terms of
          measurement and monitoring of their impacts.
        </p>
      </div>
      <div className="carboncreditmarkets">
        <h2 className="text-[#316D69] text-xl mb-8 md:text-2xl lg:text-4xl leading-7 tracking-normal font-montserrat font-bold">
          Carbon Credit
          <span className="text-[#bab220]"> Markets </span>
        </h2>
        <p className="text-[#3c3c3c] text-sm md:text-base lg:text-lg leading-7  font-poppins font-normal">
          Forestry carbon credits are both generated and traded in two distinct
          markets:
        </p>
        <ul className="flex flex-col text-[#3c3c3c] list-none text-sm md:text-base lg:text-lg leading-7 ml-6 mt-4  font-poppins font-normal">
          <li>
            1. The regulated carbon market, where rules and standards are set
            and enforced by legal authorities, and buyers are obliged to meet
            binding compliance targets{" "}
          </li>
          <li>
            2. And the voluntary markets, where projects are conducted in
            accordance with independently established standards, and buyers
            primarily engage to demonstrate corporate social responsibility
            (CSR) and safeguard or enhance their brand reputation.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ForestBackedBondsProof;
