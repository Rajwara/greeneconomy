import React from "react";
import AgricultureBanner from "../../components/Agriculture/AgricultureBaner";
import AgricultureAssets from "../../components/Agriculture/AgricultureAssets";
import AgricultureOne from "../../components/Agriculture/AgricultureOne";
import AgricultureTwo from "../../components/Agriculture/AgricultureTwo";
import AgricultureThree from "../../components/Agriculture/AgricultureThree";
import ContactFooterUperButton from "../../components/ContactFooterUperComponent/ContactFooterUperButton";

const Agriculture = () => {
  return (
    <div>
      <AgricultureBanner />
      <AgricultureOne />
      <AgricultureTwo />
      <AgricultureThree />
      <AgricultureAssets />
      <ContactFooterUperButton />
    </div>
  );
};

export default Agriculture;
