import React from "react";
import banner from "../../../src/images/f2.jpg";
import Banner from "../BannerForAllPages/Banner";

const ForestryBanner = () => {
  return (
   <>
   <Banner 
   title="State of Green-Economy"
   description="Our planet is suffering from a climate crisis, and demands immediate action. Luckily, nature offers a powerful ally in this fight, with assets like sustainable forestry, blue carbon, and climate-smart agriculture. GEP embraces open climate investments, aiming for zero emissions by 2050. Through sustainable forest management and collaboration, our experts create new income streams while reducing carbon emissions. Join us in the shared goal of a greener future."
   backgroundImage={banner}
   buttonText="Plant a Tree"
   
   />
   </>
  );
};

export default ForestryBanner;
