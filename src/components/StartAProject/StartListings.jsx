import React, { useEffect } from "react";

function StartListings() {
  // useEffect(() => {
  //   AOS.init();
  // }, []);

  const items = [
    {
      title: "Planting trees",
      description:
        "An example of our methodology in practice can be found in Colombia. The first farmers joined with an agro forestry combination of Robusta coffee intercropped with shade, banana, avocado, and mango trees. Farmers plant tree species that are native or naturalized, and draw on local and expert knowledge for Agro forestry designs.          ",
    },
    {
      title: "Collect farmer and plot data",
      description:
        "Our local project coordinator kicks things off: collecting details like field coordinates, land ownership and farmer consent forms from the participating smallholders and uploading them to the GEP portal.",
    },
    {
      title: "Ground truth",
      description:
        "Ground truth data is collected to have accurate models for remote measurement at scale. With the help of data collectors, we then define sample plots, measure trees per subplot, and measure average biomass. We use LiDAR and satellite data to complement this information.",
    },
    {
      title: "Models in place",
      description:
        "We train our models on basis of the sample lot based on ground truth and LiDAR. We check if deforestation has taken place in the previous five years and measure the delta of biomass growth over the last year.",
    },
    {
      title: "CRUs calculated",
      description:
        "Based on our certified methodology and framework, we correct the biomass delta of every plot for adjustment factors like leakage and calculate the tonnes of CO2 that the plot has sequestered, hence the number of CRUs can be created.",
    },
    {
      title: "Farmer payout",
      description:
        "To close the loop, after the CRUs have been sold, 75% flows back to the farmer.",
    },
    // Add more items as needed
  ];

  return (
    <section
      className="bg-white my-10  px-[30px]  md:px-[60px] lg:px-[80px] xl:px-[100px] text-black"
      data-aos="fade-up"
    >
      <h2 className="py-12 lg:mb-10 text-center font-bold leading-[30px] tracking-normal font-montserrat lg:leading-[60px] xl:leading-[80px]  xs:font-[900] xs:text-[25px] md:text-[30px] text-[#3c3c3c] relative">
        <span className="bg-clip-text from-[#316D69] to-[#BAB220]">
          Discover
        </span>{" "}
        <span className="block text-2xl text-[#BAB220]">Our</span>{" "}
        <span className="block md:text-4xl xs:text-2xl text-[#316D69] mt-2">
          Exquisite Collection
        </span>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#316D69]"></div>
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-1 h-16 bg-[#316D69]"></div>
        <div className="absolute top-1/2 right-0 transform translate-y-1/2 w-1 h-16 bg-[#316D69]"></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#316D69]"></div>
      </h2>
      <div className="grid xl:gap-8 md:grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-3">
        {items.map((item, index) => (
          <div
            key={index}
            className="rounded-lg mx-2 xs:my-4 sm:my-0 xs:mx-7 md:!mx-4 md:mt-8 shadow-lg overflow-hidden bg-gradient-to-r from-[#316D69] to-[#BAB220] animate__animated animate__fadeIn hover:shadow-2xl transform hover:scale-105 transition"
          >
            <div className="p-6 md:p-8 lg:p-10">
              <div className="flex  mb-4 items-start">
                <span className="text-2xl text-[#f7f5f2] font-semibold mr-2">
                  {index + 1}.
                </span>
                <h3 className=" text-[#f7f5f2] leading-[30px] font-montserrat tracking-normal lg:leading-[33px] xl:leading-[35px]  xs:font-[900] xs:text-[25px] md:text-[30px] font-semibold">
                  {item.title}
                </h3>
              </div>
              <p className="text-[#f7f5f2]  text-lg  font-normal font-poppins  leading-7">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StartListings;
