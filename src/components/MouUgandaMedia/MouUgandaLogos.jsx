import React from "react";
import logo1 from "../../../src/images/news-logo-1.jpg";
import logo2 from "../../../src/images/news-logo-2.jpg";
import logo3 from "../../../src/images/news-logo-3.jpg";
import logo4 from "../../../src/images/news-logo-4.jpg";
import logo5 from "../../../src/images/news-logo-5.jpg";
import logo6 from "../../../src/images/news-logo-6.jpg";
import logo7 from "../../../src/images/news-logo-7.jpg";
import logo8 from "../../../src/images/news-logo-8.jpg";
import logo9 from "../../../src/images/news-logo-9.jpg";
import logo10 from "../../../src/images/news-logo-10.jpg";
import logo11 from "../../../src/images/news-logo-11.jpg";
import logo12 from "../../../src/images/news-logo-12.jpg";
import logo13 from "../../../src/images/news-logo-13.jpg";
import logo14 from "../../../src/images/news-logo-14.jpg";
import logo15 from "../../../src/images/news-logo-15.jpg";

const MouUgandaLogos = () => {
  const data = [
    {
      id: 1,
      logo: logo1,
    },
    {
      id: 2,
      logo: logo2,
    },
    {
      id: 3,
      logo: logo3,
    },
    {
      id: 4,
      logo: logo4,
    },
    {
      id: 5,
      logo: logo5,
    },
    {
      id: 6,
      logo: logo6,
    },
    {
      id: 7,
      logo: logo7,
    },
    {
      id: 8,
      logo: logo8,
    },
    {
      id: 9,
      logo: logo9,
    },
    {
      id: 10,
      logo: logo10,
    },
    {
      id: 11,
      logo: logo11,
    },
    {
      id: 12,
      logo: logo12,
    },
    {
      id: 13,
      logo: logo13,
    },
    {
      id: 14,
      logo: logo14,
    },
    {
      id: 15,
      logo: logo15,
    },
  ];
  return (
    <div className="px-[30px]  md:px-[60px] lg:px-[80px] xl:px-[100px]  mt-[30px] md:mt-[50px] lg:mt-[100px] mb-[100px]">
      <div className="logo grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 justify-center items-center m-auto">
        {data.map((item) => (
          <div
            className="inner hover:shadow-lg hover:shadow-[#316D69] flex items-center align-middle justify-center "
            key={item.id}
          >
            <img src={item.logo} alt="logos" className="h-[100%] w-[50%]" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MouUgandaLogos;
