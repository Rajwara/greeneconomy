import React from "react";

const ClimateFriendlyInvestment = () => {
  return (
    <div className="flex flex-col flex-wrap bg-[#F7F5F2]  justify-center text-center px-[30px] md:px-[60px] font-roboto lg:px-[80px] xl:px-[100px] pt-[50px] pb-[100px]">
      <div className="flex flex-col">
        <h2 className="mb-4 md:mb-6 lg:mb-8  text-[#316D69] font-montserrat text-2xl md:text-3xl lg:text-4xl font-bold leading-7 lg:leading-10 ">
          <span className="text-[#BAB220]">Climate-Friendly </span> Investment
        </h2>
        <div className="text-[#3C3C3C] text-sm md:text-base lg:text-lg font-normal font-poppins leading-5 lg:leading-7">
          <p className="">
            In{" "}
            <a
              href="https://www.imf.org/en/Blogs/Articles/2022/06/30/greenhouse-emissions-rise-to-record-erasing-drop-during-pandemic#:~:text=The%20latest%20data%20from%20the,Dashboard%20provides%20a%20worrying%20picture.&text=Emissions%20of%20carbon%20dioxide%20and,mobility%20and%20hampered%20economic%20activity"
              className="text-[#BAB220] underline font-bold"
            >
              2020
            </a>
            , global greenhouse gas emissions increased, but in the last decade
            a golden climate mitigation opportunity has been gaining
            international recognition. Protecting the “Blue Carbon” in coastal
            and ocean ecosystems will play a key role in protecting the climate.
            Therefore, The Green Economy Partnership has taken an initiative to
            protect blue carbon.
          </p>

          <p className="mt-4">
            This initiative is in compliance with Article 6.2 of the Paris
            Agreement named, Internationally Transferred Mitigation Outcomes
            (ITMOs). GEP helps governments or organizations generate revenues
            from the selling of ITMOs. These ITMOs are then sold through an
            auction held during COP. The revenue generated also helps to fund
            other climate mitigation projects, thus reaching the carbon emission
            reduction target under the Paris Agreement.
          </p>
          <p className="mt-4">
            The coastal ecosystems are vital for mitigating climate change
            through carbon sequestration. By harnessing the power of Blue
            Carbon, GEP experts are also enriching the marine ecosystems. With
            <a
              href="https://verra.org/"
              className="text-[#BAB220] underline font-bold ml-1"
            >
              VERRA
            </a>
            - Verified Carbon Standard, they ensure that the efforts to harness
            the power of Blue Carbon is transparent and measurable.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClimateFriendlyInvestment;
