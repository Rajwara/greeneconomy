import React from "react";
import banner1 from "../../../src/images/wind-mill-banner.jpg";
import Banner from "../BannerForAllPages/Banner";
function SolarBanner() {
  return (
  <>
  <Banner
  title="Renewable Energy"
  description="In our pursuit of sustainability, wind generators and solar panels play pivotal roles in combating climate change. GEP encourages cost-effective renewable energy. According to the International Renewable Energy Agency (IREA), unsubsidized renewables are the most economical energy source today. GEP supports wind and solar energy incentives within local communities, helping you contribute to a sustainable future. Our initiatives empower local communities, ensuring a sustainable, cost-efficient, and greener future."
  backgroundImage={banner1}
  buttonText="Contact Us"
   />
  </>
  );
}

export default SolarBanner;
