import React from "react";
import img1 from "../../../src/images/wind-solar-icon.png";
import img2 from "../../../src/images/natural-based-assets-icon.png";
import img3 from "../../../src/images/anaerobic_digestion-icon.png";

function AgricultureFifth() {
  return (
    <section className="py-16 bg-gray-100 px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px]">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-off-white  rounded-lg shadow-lg hover:shadow-lg transition duration-300 transform hover:scale-105 flex flex-col items-center p-8">
          <img src={img1} alt="Conservation Tillage" className="mb-4 h-16" />
          <h3 className="text-xl font-semibold font-montserrat tracking-normal leading-7 text-[#3c3c3c]">
            Conservation Tillage
          </h3>
        </div>

        {/* Card 2 */}
        <div className="bg-off-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105 flex flex-col items-center p-8">
          <img src={img2} alt="Cover Cropping" className="mb-4 h-16" />
          <h3 className="text-xl font-semibold font-montserrat tracking-normal leading-7 text-[#3c3c3c]">
            Cover Cropping
          </h3>
        </div>

        {/* Card 3 */}
        <div className="bg-off-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105 flex flex-col items-center p-8">
          <img src={img3} alt="Agricultural Rotation" className="mb-4 h-16" />
          <h3 className="text-xl font-semibold font-montserrat tracking-normal leading-7 text-[#3c3c3c]">
            Agricultural Rotation
          </h3>
        </div>
      </div>
    </section>
  );
}

export default AgricultureFifth;
