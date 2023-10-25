import React from "react";
import Card1 from "../../../src/images/thefact1.svg";
import Card2 from "../../../src/images/thefact2.svg";
import Card3 from "../../../src/images/thefact3.svg";
import Grass from "../../../src/images/Rabbit-&-Grass.png";

const NativeForestConservationAndFacts = () => {
  const factdata = [
    {
      id: 1,
      img: Card1,
      number: "",
      smallheading: "",
      description:
        "According to IPBES, 75% of the Earth’s surface has been altered by human activities, including 85% of the wetlands.",
    },
    {
      id: 2,
      img: Card2,
      number: "",
      smallheading: "",
      description:
        "Protecting natural ecosystems could provide 30% of the solution to combat climate change. ",
    },
    {
      id: 3,
      img: Card3,
      number: "",
      smallheading: "",
      description:
        "Tropical forests cover approximately 10% of the Earth’s land mass, but are home to at least half living species. ",
    },
  ];
  return (
    <div className="flex flex-col mt-[30px] lg:mt-[50px] mb-[30px] xl:mb-[50px] text-center items-center px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px]">
      <div className="flex flex-col items-center text-center">
        <h2 className=" text-2xl md:text-3xl font-bold text-center  mb-2 md:mb-4 xl:mb-6  leading-7 xl:leading-10 xl:text-4xl font-montserrat text-[#316D69] dark:text-[#316D69]">
          <span className="text-[#bab220]">B. </span>
          Native Forest Conservation
        </h2>
        <span className="border-2 border-[#3c3c3c] w-[50%] mt-4"> </span>
        <p className="text-sm md:text-base xl:text-lg  mt-2 xl:mt-4 text-[#3c3c3c] font-normal font-poppins leading-5 xl:leading-7 ">
          In the time it takes you to read this sentence, hundreds of trees have
          been cut down.{" "}
        </p>
      </div>
      <div className="flex flex-col mt-2 md:mt-4 xl:mt-6">
        <h2 className=" text-2xl md:text-3xl font-bold text-center    leading-7 xl:leading-10 xl:text-4xl font-montserrat text-[#316D69] dark:text-[#316D69]">
          The Facts{" "}
        </h2>
        <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-4 md:mt-6 xl:mt-8 ">
          {factdata.map((item) => (
            <div
              className="card-inner flex flex-row  border-4 border-[#316D69] rounded-lg p-8 "
              key={item.id}
            >
              <div className="cardtext flex flex-col items-center ">
                <img
                  src={item.img}
                  alt="LetNatureNurture"
                  className="w-[30%] h-[30%]"
                />
                <h4 className="text-lg md:text-xl xl:text-2xl text-[#3c3c3c]  font-montserrat font-semibold leading-7 xl:leading-9 mt-2 xl:mt-4">
                  {item.number}
                </h4>
                <h6 className="uppercase text-sm md:text-base xl:text-lg  text-[#316D69] font-bold leading-7 xl:leading-9	font-montserrat">
                  {item.smallheading}
                </h6>

                <p className="text-sm md:text-base xl:text-lg  mt-2 xl:mt-4 text-[#3c3c3c] font-normal font-poppins leading-5 xl:leading-7">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <img src={Grass} alt="Grass" className="w-full h-full mt-8" />
      </div>
    </div>
  );
};

export default NativeForestConservationAndFacts;
