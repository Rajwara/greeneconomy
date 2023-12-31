import React from "react";
import Powerof1 from "../../../src/images/The-power-of-renewables-1.png";

const StatsPowerrenewable = () => {
  return (
    <div className="px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px]  mt-[30px] lg:mt-[50px] mb-[30px] xl:mb-[50px]">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 lg:gap-x-[50px] items-center">
        <div className="mb-6 md:mb-6 lg:mb-0">
          <img
            className="h-full lg:h-[320px] xl:h-full w-full rounded-lg"
            src={Powerof1}
            alt="Powerof"
          ></img>
        </div>
        <div className=" text-white  flex flex-col justify-center  ">
          <h2 className=" text-2xl md:text-3xl  mb-2 md:mb-4 xl:mb-6  xl:text-4xl font-bold leading-7 xl:leading-10 font-montserrat text-[#3c3c3c] dark:text-[#3c3c3c]  ">
            The Power of Renewables
          </h2>
          <p className=" text-sm md:text-base xl:text-lg leading-5 xl:leading-7 font-normal font-poppins text-[#3c3c3c] dark:text-[#3c3c3c]">
            The Power of Renewables We have to make the banner the same way it's
            made on this page, it should keep changing this way.
          </p>

          <div>
            <ul className="gap-6   ">
              <li className="mt-2 xl:mt-4 ">
                <div className="flex">
                  <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 border-2 border-[#bab220] mt-1 rounded-full dark:text-green-500 dark:bg-transparent">
                    <svg className="w-4 h-4" viewBox="0 0 20 20" fill="#bab220">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="ml-4 text-sm md:text-base xl:text-lg font-normal font-poppins leading-5 xl:leading-7 text-[#3c3c3c] dark:text-[#3c3c3c]">
                    <p>
                      Solar energy employed the most of any renewable energy
                      source;{" "}
                      <a
                        className="text-[#D3CA28] font-bold underline"
                        href="https://www.zippia.com/advice/renewable-energy-job-creation-statistics/#:~:text=Solar%20energy%20employed%20316%2C675%20people,wind%20energy%2C%20with%20116%2C817%20workers"
                      >
                        316,675
                      </a>{" "}
                      people at the end of 2020.
                    </p>
                  </span>
                </div>
              </li>
              <li className="mt-2 xl:mt-4">
                <div className="flex">
                  <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 border-2 border-[#bab220] mt-1 rounded-full dark:text-green-500 dark:bg-transparent">
                    <svg className="w-4 h-4" viewBox="0 0 20 20" fill="#bab220">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="ml-4 text-sm md:text-base xl:text-lg font-normal font-poppins leading-5 xl:leading-7 text-[#3c3c3c] dark:text-[#3c3c3c]">
                    About{" "}
                    <a
                      className="text-[#D3CA28] font-bold underline"
                      href="https://www.aljazeera.com/news/2022/1/20/interactive-how-much-of-your-countrys-electricity-is-renewable-infographic#:~:text=This%20energy%20is%20needed%20for,solar%20and%20wind%20among%20others"
                    >
                      30%
                    </a>{" "}
                    of the world's electricity comes from renewables, including
                    solar, wind, hydropower, and others.
                  </span>
                </div>
              </li>
              <li className="mt-2 xl:mt-4">
                <div className="flex">
                  <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 border-2 border-[#bab220] mt-1 rounded-full dark:text-green-500 dark:bg-transparent">
                    <svg className="w-4 h-4" viewBox="0 0 20 20" fill="#bab220">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="ml-4 text-sm md:text-base xl:text-lg font-normal font-poppins leading-5 xl:leading-7 text-[#3c3c3c] dark:text-[#3c3c3c]">
                    About{" "}
                    <a
                      className="text-[#D3CA28] font-bold underline"
                      href="https://usafacts.org/earth-day-facts/energy-emissions/#:~:text=2023%20Government%2010%2DK,-View%20Report&text=Energy%20%26%20Emissions%20In%202021%2C%2079,more%20than%20doubled%20since%201980"
                    >
                      79%
                    </a>{" "}
                    of the nation's energy comes from fossil fuels, and{" "}
                    <a
                      href="https://css.umich.edu/publications/factsheets/energy/us-renewable-energy-factsheet#:~:text=About%2079%25%20of%20the%20nation%27s,continued%20this%20trend%20in%202021"
                      className="text-[#D3CA28] font-bold underline"
                    >
                      12.5%{" "}
                    </a>{" "}
                    from renewable sources.
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsPowerrenewable;
