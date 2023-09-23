import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const divStyle1 = {
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

const AboutBanner=()=> {
  const arr = [
    {
      img: "https://images5.alphacoders.com/436/thumb-1920-436006.jpg",
    },
    { img: "https://wallup.net/wp-content/uploads/2019/09/189778-trees.jpg" },
    {
      img: "https://avatars.mds.yandex.net/i?id=2af24630593478bbdec6d0bf97afecab4b53cd4b-10414208-images-thumbs&n=13",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? arr.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === arr.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const backgroundImageStyle = {
    backgroundImage: `url(${arr[currentIndex].img})`,
    ...divStyle1,
  };
  return (
    <div className="relative ">
      <div
        style={backgroundImageStyle}
        className="bg-black bg-opacity-80 bg-center bg-no-repeat h-[200px] lg:h-[300px] flex justify-center items-center  px-[30px] md:px[60] lg:px-[80px] xl:px-[100px] "
      >
        <div className="text-center">
          <h1 className="text-[24px] md:text-[28px] lg:text-[30px] xl:text-[33px] font-[900] text-white">
            State of the Green Economy with Forestry by 2050
          </h1>
        </div>
      </div>
    </div>

    /*<div className="relative group">
      <div
        style={backgroundImageStyle}
        className=" bg-black bg-opacity-80 bg-center bg-no-repeat h-[500px]"
      >
        <div className=" ">
          <div className=" absolute top-[45%] left-0 pr-[30px]">
            <BsChevronCompactLeft
              className=" text-white hidden group-hover:block"
              size={50}
              onClick={prevSlide}
            ></BsChevronCompactLeft>
          </div>
          <div className=" pt-[230px]  px-[30px] lg:px-[250px] text-center"  >
            <h1 className="text-[33px] font-[900] text-white">
              State of the Green Economy with Forestry by 2050
            </h1>
          </div>
          <div className=" absolute top-[45%] right-0">
            <BsChevronCompactRight
              className=" text-white  hidden group-hover:block right-0"
              size={50}
              onClick={nextSlide}
            ></BsChevronCompactRight>
          </div>
        </div>
      </div>
  </div>*/
  );
}

export default AboutBanner;
