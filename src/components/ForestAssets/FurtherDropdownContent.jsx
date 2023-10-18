// import React, { useState } from "react";

// const FurtherDropdownContent = () => {
//   const [selectedOption1, setSelectedOption1] = useState("");
//   const [selectedOption2, setSelectedOption2] = useState("");
//   const [selectedOption3, setSelectedOption3] = useState("");
//   const [selectedOption4, setSelectedOption4] = useState("");
//   const [selectedOption5, setSelectedOption5] = useState("");
//   const [selectedOption6, setSelectedOption6] = useState("");
//   const [selectedOption7, setSelectedOption7] = useState("");

//   const handleSelect1 = (e) => {
//     setSelectedOption1(e.target.value);
//   };

//   const handleSelect2 = (e) => {
//     setSelectedOption2(e.target.value);
//   };

//   const handleSelect3 = (e) => {
//     setSelectedOption3(e.target.value);
//   };

//   const handleSelect4 = (e) => {
//     setSelectedOption4(e.target.value);
//   };

//   const handleSelect5 = (e) => {
//     setSelectedOption5(e.target.value);
//   };

//   const handleSelect6 = (e) => {
//     setSelectedOption6(e.target.value);
//   };

//   const handleSelect7 = (e) => {
//     setSelectedOption7(e.target.value);
//   };

//   return (
//     <div className=" px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] mt-[100px] mb-[50px]">
//       <div className="text">
//         <h2 className="text-[#316D69] text-xl mb-8 md:text-2xl lg:text-4xl leading-7 tracking-normal font-montserrat font-bold">
//           Forest Ownership
//         </h2>
//       </div>
//       <div className="mb-4">
//         <select
//           className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           value={selectedOption1}
//           onChange={handleSelect1}
//         >
//           <option value="">Select an option</option>
//           <option value="option1">Option 1</option>
//           <option value="option2">Option 2</option>
//           <option value="option3">Option 3</option>
//         </select>
//       </div>
//       <div className="mb-4">
//         <select
//           className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           value={selectedOption2}
//           onChange={handleSelect2}
//         >
//           <option value="">Select an option</option>
//           <option value="option1">Option 1</option>
//           <option value="option2">Option 2</option>
//           <option value="option3">Option 3</option>
//         </select>
//       </div>
//       <div className="mb-4">
//         <select
//           className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           value={selectedOption3}
//           onChange={handleSelect3}
//         >
//           <option value="">Select an option</option>
//           <option value="option1">Option 1</option>
//           <option value="option2">Option 2</option>
//           <option value="option3">Option 3</option>
//         </select>
//       </div>
//       <div className="mb-4">
//         <select
//           className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           value={selectedOption4}
//           onChange={handleSelect4}
//         >
//           <option value="">Select an option</option>
//           <option value="option1">Option 1</option>
//           <option value="option2">Option 2</option>
//           <option value="option3">Option 3</option>
//         </select>
//       </div>
//       <div className="mb-4">
//         <select
//           className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           value={selectedOption5}
//           onChange={handleSelect5}
//         >
//           <option value="">Select an option</option>
//           <option value="option1">Option 1</option>
//           <option value="option2">Option 2</option>
//           <option value="option3">Option 3</option>
//         </select>
//       </div>
//       <div className="mb-4">
//         <select
//           className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           value={selectedOption6}
//           onChange={handleSelect6}
//         >
//           <option value="">Select an option</option>
//           <option value="option1">Option 1</option>
//           <option value="option2">Option 2</option>
//           <option value="option3">Option 3</option>
//         </select>
//       </div>
//       <div className="mb-4">
//         <select
//           className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           value={selectedOption7}
//           onChange={handleSelect7}
//         >
//           <option value="">Select an option</option>
//           <option value="option1">Option 1</option>
//           <option value="option2">Option 2</option>
//           <option value="option3">Option 3</option>
//         </select>
//       </div>

//       {/* Repeat the above code for the remaining dropdowns */}
//     </div>
//   );
// };

// export default FurtherDropdownContent;

import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function FurtherDropdownContent() {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] mt-[30px] md:mt-[50px] lg:mt-[100px] mb-[50px]">
      <Accordion open={open === 1}>
        <AccordionHeader
          className="text-xl md:text-2xl lg:text-3xl text-[#316D69] font-montserrat font-bold leading-7 lg:leading-9"
          onClick={() => handleOpen(1)}
        >
          The Regulated Carbon Market
        </AccordionHeader>
        <AccordionBody>
          <p className="text-[#3c3c3c] text-sm md:text-base lg:text-lg leading-5 lg:leading-7  font-poppins font-normal">
            The regulated carbon market, valued at approximately{" "}
            <a
              href="https://www.forest-trends.org/wp-content/uploads/2018/09/State-of-the-Voluntary-Carbon-Market-2007.pdf"
              className="text-[#D3CA28] font-bold underline"
            >
              {" "}
              US$91 million in 2006
            </a>{" "}
            , is largely dominated by trading EU Allowances within the EU
            Emission Trading Scheme. Notably, the Clean Development Mechanism
            (CDM), operating under the{" "}
            <a
              href="https://unfccc.int/kyoto_protocol"
              className="text-[#D3CA28] font-bold underline"
            >
              Kyoto Protocol
            </a>
            , contributes significantly, amounting to{" "}
            <a
              href="https://unfccc.int/resource/docs/2007/sbsta/eng/misc14.pdf"
              className="text-[#D3CA28] font-bold underline"
            >
              {" "}
              $5 billion in 2007
            </a>
            , particularly for project-based emissions reductions, including
            forestry projects like afforestation and reforestation. However, the
            CDM does not cover emissions reductions from avoided deforestation.
            The Kyoto Protocol imposes caps on the use of carbon credits from
            forestry by{" "}
            <a
              href="https://www.oecd.org/env/cc/listofannexicountries.htm"
              className="text-[#D3CA28] font-bold underline"
            >
              Annex 1
            </a>{" "}
            countries during its first commitment period, limiting imports to{" "}
            <a
              href="https://climate.ec.europa.eu/eu-action/climate-strategies-targets/progress-made-cutting-emissions/kyoto-1st-commitment-period-2008-12_en"
              className="text-[#D3CA28] font-bold underline"
            >
              5%{" "}
            </a>
            of 1990 levels. Consequently, forestry projects have been excluded
            from the initial phase of the European Union's Emissions Trading
            Scheme, which has driven global market growth. Currently, Land Use,
            Land Use Change, and Forestry (LULUCF) projects only make up{" "}
            <a
              href="https://archive.ipcc.ch/pdf/special-reports/spm/srl-en.pdf"
              className="text-[#D3CA28] font-bold underline"
            >
              1%{" "}
            </a>{" "}
            of project-based emission reductions under the Kyoto Protocol.
          </p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2}>
        <AccordionHeader
          className="text-xl md:text-2xl lg:text-3xl text-[#316D69] font-montserrat font-bold leading-7 lg:leading-9"
          onClick={() => handleOpen(2)}
        >
          Voluntary Carbon Market
        </AccordionHeader>
        <AccordionBody>
          <p className="text-[#3c3c3c] text-sm md:text-base lg:text-lg leading-5 lg:leading-7  font-poppins font-normal">
            While the voluntary market is considerably smaller at{" "}
            <a
              href="https://www.washingtonpost.com/business/energy/why-carbon-offsets-dont-do-all-that-they-promise/2020/08/15/4480f11a-deb4-11ea-b4f1-25b762cdbbf4_story.html"
              className="text-[#D3CA28] font-bold underline"
            >
              $100 million
            </a>{" "}
            compared to the regulated market, a larger share of its projects is
            related to forestry. Over time, various methodologies have been
            used, with the voluntary market's flexibility seen as a unique
            asset. However, the increased number of offset providers in the
            voluntary carbon market has raised worries about the environmental
            credibility of certain voluntary carbon offsets.
          </p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3}>
        <AccordionHeader
          className="text-xl md:text-2xl lg:text-3xl text-[#316D69] font-montserrat font-bold leading-7 lg:leading-9"
          onClick={() => handleOpen(3)}
        >
          Costs
        </AccordionHeader>
        <AccordionBody>
          <p className="text-[#3c3c3c] text-sm md:text-base lg:text-lg leading-5 lg:leading-7  font-poppins font-normal">
            Revenue mechanisms for carbon reduction entail upfront costs that
            can be significant for smaller and medium operators aiming to access
            regulated markets. Meeting environmental additionality requirements
            necessitates operators to demonstrate the essential commercial
            nature of generating and selling carbon credits, making the
            associated costs vital. Consequently, projects must reach a
            substantial scale to offset these expenses and meet financial
            requirements.
          </p>
          <p className="text-[#3c3c3c] text-sm md:text-base lg:text-lg leading-5 lg:leading-7 mt-4  font-poppins font-normal">
            Working with us at Green Economy, we acknowledge the potential
            challenges posed by startup costs. Under the Clean Development
            Mechanism (CDM), typical transaction costs for regular-sized
            projects encompass:
          </p>
          <ul className="flex flex-col text-[#3c3c3c] list-disc text-sm md:text-base lg:text-lg leading-5 lg:leading-7 ml-6 mt-4  font-poppins font-normal">
            <li>Project preparation</li>
            <li>Validation</li>
            <li>Registration fees</li>
            <li>Monitoring, verification</li>
            <li>Issuance fees</li>
            <li>Taxes </li>
          </ul>
          <p className="text-[#3c3c3c] text-sm md:text-base lg:text-lg leading-5 lg:leading-7 mt-4  font-poppins font-normal">
            Project-based carbon mechanisms highlight the need to consider
            revenue-generating opportunities early in a project.
          </p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4}>
        <AccordionHeader
          className="text-xl md:text-2xl lg:text-3xl text-[#316D69] font-montserrat font-bold leading-7 lg:leading-9"
          onClick={() => handleOpen(4)}
        >
          Forestry Carbon as an Asset
        </AccordionHeader>
        <AccordionBody>
          <div className="text-[#3c3c3c] text-sm md:text-base lg:text-lg leading-5 lg:leading-7  font-poppins font-normal">
            <p className="">
              The inclusion of forestry-based carbon credits, whether in
              Forest-Backed Bonds or other contexts, depends on the reliability
              and quality of the cash flow they provide.
            </p>
            <p className="mt-2">
              Key factors shaping the market for these credits currently
              include:
            </p>
            <ul className="ml-4 mt-4">
              <li>1. Lack of Permanence:</li>
              <li className="ml-4">
                {" "}
                - The transitory nature of carbon reductions from forestry is a
                concern for potential buyers. To address this, the Clean
                Development Mechanism (CDM) classifies carbon credits as either
                temporary Certified Emission Reductions (tCERs) or long-term
                Certified Emission Reductions (lCER) based on their permanence.
              </li>
              <li className="ml-4">
                {" "}
                - Some voluntary markets, like CCX, employ a "self-insurance"
                approach where projects set aside an additional buffer of
                forestry carbon beyond what's used to back credits. The CCX's
                methodology for forestry projects mandates a{" "}
                <a
                  href="https://www.ice.com/publicdocs/ccx/protocols/CCX_Protocol_Forestry_Sequestration.pdf"
                  className="text-[#D3CA28] font-bold underline"
                >
                  20%
                </a>{" "}
                buffer.
              </li>
            </ul>
            <ul className="ml-4 mt-4">
              <li>2. Third-Party Insurance:</li>
              <li className="ml-4">
                {" "}
                - Insurance options include coverage against income loss from
                carbon credit generation and protection against physical losses
                due to biotic (e.g., pests) and abiotic (e.g., wind, fire)
                factors.
              </li>
              <li className="ml-4">
                {" "}
                - More recent schemes enable projects to safeguard against
                CDM-related institutional risks, such as delays in project
                approval, certification, or issuance.
              </li>
            </ul>
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 5}>
        <AccordionHeader
          className="text-xl md:text-2xl lg:text-3xl text-[#316D69] font-montserrat font-bold leading-7 lg:leading-9"
          onClick={() => handleOpen(5)}
        >
          Leakage
        </AccordionHeader>
        <AccordionBody>
          <p className="text-[#3c3c3c] text-sm md:text-base lg:text-lg leading-5 lg:leading-7  font-poppins font-normal">
            A significant aspect of designing forestry carbon projects is to
            prevent emissions reductions/ avoidance within the project's scope
            from causing emissions to rise elsewhere. Regulated markets address
            this through focused assessments during the project's initial
            design. Voluntary projects, particularly those involving
            afforestation and reforestation, stand to gain from emerging
            standards like CCBA and VCU. When it comes to incorporating avoided
            deforestation in regulated markets, the focus is on utilizing
            national baselines due to challenges in assessing leakage at the
            project level.
          </p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 6}>
        <AccordionHeader
          className="text-xl md:text-2xl lg:text-3xl text-[#316D69] font-montserrat font-bold leading-7 lg:leading-9"
          onClick={() => handleOpen(6)}
        >
          Quality Assurance
        </AccordionHeader>
        <AccordionBody>
          <p className="text-[#3c3c3c] text-sm md:text-base lg:text-lg leading-5 lg:leading-7  font-poppins font-normal">
            Forestry carbon projects have faced extensive scrutiny from NGOs and
            civil society concerning issues like permanence and perceived
            support for less ecologically beneficial industrial plantations
            compared to natural forests.
          </p>
          <p className="text-[#3c3c3c] text-sm md:text-base lg:text-lg leading-5 lg:leading-7  font-poppins font-normal">
            Adhering to best practices in forestry project design can enhance
            credit appeal to buyers, boosting demand and reducing the risk of
            project failure. Potential buyers are willing to pay a premium for
            credits from projects certified to the
            <a
              href="https://www.climate-standards.org/ccb-standards/"
              className="text-[#D3CA28] font-bold underline ml-1"
            >
              Climate and Community Biodiversity Alliance Standard (CCBA).
            </a>{" "}
          </p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 7}>
        <AccordionHeader
          className="text-xl md:text-2xl lg:text-3xl text-[#316D69] font-montserrat font-bold leading-7 lg:leading-9"
          onClick={() => handleOpen(7)}
        >
          Ownership & Transfer
        </AccordionHeader>
        <AccordionBody>
          <p className="text-[#3c3c3c] text-sm md:text-base lg:text-lg leading-5 lg:leading-7  font-poppins font-normal">
            A lack of clearly defined ownership of forestry carbon rights,
            especially concerning local communities, continues to be a
            significant concern for NGOs. Considering that one of the primary
            advantages of forestry carbon, particularly in the voluntary market,
            has been its social and developmental co-benefits, this issue should
            be a point of interest for offset buyers and investors.
          </p>
        </AccordionBody>
      </Accordion>
    </div>
  );
}

export default FurtherDropdownContent;
