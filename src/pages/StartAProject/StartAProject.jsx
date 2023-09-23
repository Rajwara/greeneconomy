import React from "react";
import StartBanner from "../../components/StartAProject/StartBanner";
import StartCordinating from "../../components/StartAProject/StartCoordinating";
import StartRemuneration from "../../components/StartAProject/StartRemuneration";
import StartCertification from "../../components/StartAProject/StartCertification";
import StartChecklist from "../../components/StartAProject/StartChecklist";
import StartListings from "../../components/StartAProject/StartListings";

const StartAProject = () => {
  return (
    <div>
      <StartBanner />
      <StartCordinating />
      <StartRemuneration />
      <StartCertification />
      <StartChecklist />
      <StartListings />
    </div>
  );
};

export default StartAProject;
