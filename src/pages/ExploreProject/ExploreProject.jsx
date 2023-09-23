import React from "react";
import ExploreBanner from "../../components/ExploreProjects/ExploreBanner";
import TwoMainStrategiesExplore from "../../components/ExploreProjects/TwoMainStrategiesExplore";
import ZoomSyntropicExplore from "../../components/ExploreProjects/ZoomSyntropicExplore";
import BNativeExplore from "../../components/ExploreProjects/BNativeExplore";

const ExploreProject = () => {
  return (
    <div>
      <ExploreBanner />
      <TwoMainStrategiesExplore />
      <ZoomSyntropicExplore />
      <BNativeExplore />
    </div>
  );
};

export default ExploreProject;
