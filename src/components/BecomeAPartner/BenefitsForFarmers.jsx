import React from "react";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import banner from "../../../src/images/p2i1.png";
import circle from "../../../src/images/circles.png";
import p2i2 from "../../../src/images/p2i1.png";
import p2i3 from "../../../src/images/p2i5.jpg";
import p2i4 from "../../../src/images/p2i3.png";
import p2i5 from "../../../src/images/p2i4.png";

function FarmersBenefits() {
  return (
    <section className="flex justify-center items-center mt-auto lg:mt-10 ml-auto py-10 px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px]">
      <div className="container flex justify-center items-center flex-col md:flex-row w-full max-w-screen-xl mx-auto ">
        <div className="md:w-1/2 ">
          <h2 className=" leading-7 tracking-normal font-montserrat text-[#BAB220] text-3xl font-bold mb-4 text-center xs:text-left md:text-left ">
            What are the benefits for the farmers?
          </h2>
          <ul className=" text-[#316D69] leading-7 font-poppins text-lg list-disc list-inside ">
            <li>Higher quality soils.</li>
            <li>Lower input costs.</li>
            <li>Higher profits in the long term.</li>
            <li>Access to strong community and knowledge.</li>
          </ul>
          <button className="mt-8 text-[#EFEDD1] font-montserrat bg-[#316D69] px-5 py-3 rounded-lg font-semibold hover:bg-[#BAB220] transition duration-300 shadow-lg">
            Get in Touch With Us
          </button>
        </div>
        <div className="md:w-1/2 xs:mt-6 md:mt-0">
          <Carousel
            showArrows={true}
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={3000} // Change the interval as needed
            stopOnHover={true}
          >
            <div>
              <img src={banner} alt="Project " />
              <p className="legend text-[#3c3c3c] text-lg font-normal font-poppins leading-7 ">
                Nature Based Assets
              </p>
            </div>
            <div>
              <img src={circle} alt="Project 2" />
              <p className="legend text-[#3c3c3c] text-lg font-normal font-poppins leading-7">
                Wind and Solar
              </p>
            </div>
            <div>
              <img src={p2i2} alt="Project 3" />
              <p className="legend text-[#3c3c3c] text-lg font-normal font-poppins leading-7">
                Anaerobic Digestion
              </p>
            </div>
            <div>
              <img src={p2i3} alt="Project 4" />
              <p className="legend text-[#3c3c3c] text-lg font-normal font-poppins leading-7">
                Wind and Solar
              </p>
            </div>
            <div>
              <img src={p2i4} alt="Project 5" />
              <p className="legend text-[#3c3c3c] text-lg font-normal font-poppins leading-7">
                Wind and Solar
              </p>
            </div>
            <div>
              <img src={p2i5} alt="Project 6" />
              <p className="legend text-[#3c3c3c] text-lg font-normal font-poppins leading-7">
                Wind and Solar
              </p>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default FarmersBenefits;
