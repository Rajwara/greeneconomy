import React from "react";
import AgricultureBanner from "../../components/Agriculture/AgricultureBaner";
import AgricultureAssets from "../../components/Agriculture/AgricultureAssets";
import AgricultureThird from "../../components/Agriculture/AgricultureThird";
import AgricultureForth from "../../components/Agriculture/AgricultureForth";
import AgricultureFifth from "../../components/Agriculture/AgricultureFifth";
import AgricultureSix from "../../components/Agriculture/AgricultureSix";

const Agriculture = () => {
  return (
    <div>
      <AgricultureBanner />
      <AgricultureAssets />
      <AgricultureThird />
      <AgricultureForth />
      <AgricultureFifth />
      <AgricultureSix />
    </div>
  );
};

export default Agriculture;
