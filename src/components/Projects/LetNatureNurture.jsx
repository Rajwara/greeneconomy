import React from "react";
import Img1 from "../../../src/images/grow-dense-rows.png";
import Img2 from "../../../src/images/prune-for-biomass.png";
import Img3 from "../../../src/images/enjoy-rapid-growth.png";
import Grass from "../../../src/images/Rabbit-&-Grass.png";

const LetNatureNurture = () => {
  const carddata = [
    {
      id: 1,
      img: Img1,
      headinglist: "i .",
      headingtext: "Grow dense rows ",
      description:
        "Strategically grow dense rows, fostering a thriving ecosystem ",
    },
    {
      id: 2,
      img: Img2,
      headinglist: "ii .",
      headingtext: "Prune for biomass ",
      description:
        "Expertly prune for optimized biomass production, ensuring environmental stewardship. ",
    },
    {
      id: 3,
      img: Img3,
      headinglist: "iii .",
      headingtext: "Enjoy rapid growth  ",
      description: "Maximize your farming yield and enjoy exponential growth. ",
    },
  ];
  return (
    <div className="main flex flex-col px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] ">
      <div className="flex flex-col  ">
        <div className="">
          <h2 className="uppercase text-2xl md:text-3xl xl:text-4xl text-[#316D69] leading-7 xl:leading-10 font-bold	font-montserrat">
            3 Keys to Syntropic Farming
          </h2>
        </div>
        <div className="flex flex-col items-center mt-4 md:mt-4 xl:mt-4">
          <div className="flex gap-2 text-base md:text-lg xl:text-xl leading-7 xl:leading-10  font-montserrat mb-2 md:mb-4 xl:mb-6 font-bold text-[#3c3c3c] mt-2 ">
            <h2 className=" text-[#bab220]">1.</h2>
            <h2 className=" ">Prune to Stimulate New Growth</h2>
          </div>
        </div>
        <div className="card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 text-center gap-10 py-10 ">
          {carddata.map((item) => (
            <div
              className="card-inner border-4 border-[#316D69] rounded-lg  p-8"
              key={item.id}
            >
              <div className="cardtext flex flex-col items-center ">
                <img
                  src={item.img}
                  alt="LetNatureNurture"
                  className="w-[100%] h-full lg:h-[200px] xl:h-[250px] "
                />
                <div className="flex gap-2 mt-2 lg:mt-4">
                  <h6 className="uppercase text-sm md:text-base xl:text-lg  text-[#bab220] font-bold	font-montserrat leading-7 xl:leading-9 border-b-4 border-[#316D69]">
                    {item.headinglist}
                  </h6>
                  <h6 className="uppercase text-sm md:text-base xl:text-lg  text-[#316D69] font-bold	font-montserrat leading-7 xl:leading-9">
                    {item.headingtext}
                  </h6>
                </div>
                <p className="text-sm md:text-base xl:text-lg  mt-2 xl:mt-4 text-[#3c3c3c] font-normal font-poppins leading-5 xl:leading-7">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <img src={Grass} alt="Grass" className="h-full w-full rounded-lg" />
      </div>
    </div>
  );
};

export default LetNatureNurture;
