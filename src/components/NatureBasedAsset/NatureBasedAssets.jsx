import React from "react";
import img1 from "../../../src/images/h1.jpg";
import img2 from "../../../src/images/h2.jpg";
import img3 from "../../../src/images/h3.jpg";

const NatureBasedAssets = () => {
  return (
    <div className="  pt-20  gap-16 overflow-hidden relative lg:flex lg:items-center px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px]">
      <div className="w-full py-12">
        <h2 className="text-2xl font-bold tracking-normal leading-7 text-black font-montserrat dark:text-white lg:text-3xl">
          <span className="text-[#316D69] block">Nature based Assets</span>
        </h2>
        <p className="text-lg font-normal mt-4 font-poppins leading-7 text-[#3c3c3c]">
        The planet Earth is witnessing a planetary crisis unfold in real time, and every passing minute demands for a change. When it comes to solving the climate crisis one at a time, nature acts as our great ally, and it’s about time we recognize its value, and make good use of its assets. These assets are all about working with nature instead of against it.       </p>
        <ol className="text-lg font-poppins list-decimal ml-10 mt-8 ">
          <li className="mt-2">Sustainable forestry</li>
          <li className="mt-2">Blue carbon</li>
          < li className="mt-2">Climate smart agriculture </li>
        </ol>
        <div className="lg:mt-0 lg:flex-shrink-0">
          <div className="mt-12 inline-flex rounded-lg shadow">
            <button
              type="button"
              className="py-3 px-[25px] font-montserrat text-lg text-white border-2 border-[#316D69] hover:text-white bg-[#316D69] font-semibold hover:bg-[#BAB220] transition duration-300 rounded-lg"
            >
              Get started
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-8 ">
        <img src={img1} className="w-1/2 rounded-lg" alt="Tree" />
        <div>
          <img src={img2} className="mb-8 rounded-lg" alt="Tree" />
          <img src={img3} className="rounded-lg" alt="Tree" />
        </div>
      </div>
    </div>
  );
};

export default NatureBasedAssets;
