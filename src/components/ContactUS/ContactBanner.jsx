import React from "react";
import banner from "../../../src/images/f3.jpg";
import Banner from "../BannerForAllPages/Banner";

const MainBanner = () => {
  return (
    <>
      <Banner
        title="Welcome to Our Website"
        description="Discover amazing content here!"
        backgroundImage={banner}
        buttonText="Learn More"
        // Replace with your desired button text
      />
    </>
    // <div className="relative h-80 overflow-hidden flex items-center justify-center">
    //   <img
    //     src={banner}
    //     className="absolute object-cover w-full h-full"
    //     alt="Background"
    //   />

    //   <div className="relative flex flex-col items-center justify-between w-full">
    //     <h1
    //       className="flex flex-col items-center text-4xl font-bold text-center text-white mb-6 "
    //       style={{ fontSize: "43px" }}
    //     >
    //       Need help?
    //     </h1>
    //     <h3
    //       className="flex flex-col items-center text-xl leading-10 font-semibold text-center text-white "
    //       style={{ fontSize: "43px" }}
    //     >
    //       Don’t hesitate to contact us for more information
    //       <br /> about Green Economy or services
    //     </h3>
    //   </div>
    // </div>
  );
};

export default MainBanner;
