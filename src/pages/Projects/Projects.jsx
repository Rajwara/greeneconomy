import React from "react";
import ExploreBanner from "../../components/Projects/ExploreBanner";
import SyntropicFarming from "../../components/Projects/SyntropicFarming";
import ZoomSyntropicExplore from "../../components/Projects/ZoomSyntropicExplore";
import BNativeExplore from "../../components/Projects/BNativeExplore";
import LetNatureNurture from "../../components/Projects/LetNatureNurture";
import CoverTheSoil from "../../components/Projects/CoverTheSoil";
import PlantIntelligentConsortiums from "../../components/Projects/PlantIntelligentConsortiums";
import NativeForestConservationAndFacts from "../../components/Projects/NativeForestConservationAndFacts";
import ProjectsMission from "../../components/Projects/ProjectsMission";

const Projects = () => {
  return (
    <div>
      <ExploreBanner />
      <SyntropicFarming />
      <LetNatureNurture />
      <CoverTheSoil />
      <PlantIntelligentConsortiums />
      <NativeForestConservationAndFacts />
      <ZoomSyntropicExplore />
      <ProjectsMission />
      {/* <BNativeExplore /> */}
    </div>
  );
};

export default Projects;
