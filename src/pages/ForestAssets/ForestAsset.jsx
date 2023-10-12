import React from "react";
import ForestAssetBanner from "../../components/ForestAssets/ForestAssetBanner";
import ForestAssetsOne from "../../components/ForestAssets/ForestAssetsOne";
import ContactFooterUperButton from "../../components/ContactFooterUperComponent/ContactFooterUperButton";
import ForestOwnership from "../../components/ForestAssets/ForestOwnership";
// import RoleofIndigenous from "../../components/ForestAssets/RoleofIndigenous";
import PublicandPrivateOwnership from "../../components/ForestAssets/PublicandPrivateOwnership";
import BridgingSustainability from "../../components/ForestAssets/BridgingSustainability";
import DiversePathways from "../../components/ForestAssets/DiversePathways";
// import CuttingEdgeApproaches from "../../components/ForestAssets/CuttingEdgeApproaches";
import GlobalForestManagement from "../../components/ForestAssets/GlobalForestManagement";
import KeyArrangements from "../../components/ForestAssets/KeyArrangements";
import ConcessionManagement from "../../components/ForestAssets/ConcessionManagement";
import ConservationConcession from "../../components/ForestAssets/ConservationConcession";
import NonTimberForestProducts from "../../components/ForestAssets/NonTimberForestProducts";

const ForestAsset = () => {
  return (
    <div>
      <ForestAssetBanner />
      <ForestAssetsOne />
      <ForestOwnership />
      {/* <RoleofIndigenous /> */}
      <PublicandPrivateOwnership />
      <BridgingSustainability />
      <DiversePathways />
      {/* <CuttingEdgeApproaches /> */}
      <GlobalForestManagement />
      <KeyArrangements />
      <ConcessionManagement />
      <ConservationConcession />
      <NonTimberForestProducts />
      <ContactFooterUperButton />
    </div>
  );
};

export default ForestAsset;
