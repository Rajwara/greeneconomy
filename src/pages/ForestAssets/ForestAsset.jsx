import React from "react";
import ForestAssetBanner from "../../components/ForestAssets/ForestAssetBanner";
import ForestAssetsOne from "../../components/ForestAssets/ForestAssetsOne";
import ContactFooterUperButton from "../../components/ContactFooterUperComponent/ContactFooterUperButton";
import ForestOwnership from "../../components/ForestAssets/ForestOwnership";
import PublicandPrivateOwnership from "../../components/ForestAssets/PublicandPrivateOwnership";
import BridgingSustainability from "../../components/ForestAssets/BridgingSustainability";
import DiversePathways from "../../components/ForestAssets/DiversePathways";
import GlobalForestManagement from "../../components/ForestAssets/GlobalForestManagement";
import KeyArrangements from "../../components/ForestAssets/KeyArrangements";
import ConcessionManagement from "../../components/ForestAssets/ConcessionManagement";
import ConservationConcession from "../../components/ForestAssets/ConservationConcession";
import NonTimberForestProducts from "../../components/ForestAssets/NonTimberForestProducts";
import ForestBackedBondsProof from "../../components/ForestAssets/ForestBackedBondsProof";
import FurtherDropdownContent from "../../components/ForestAssets/FurtherDropdownContent";

const ForestAsset = () => {
  return (
    <div>
      <ForestAssetBanner />
      <ForestAssetsOne />
      <ForestOwnership />
      <PublicandPrivateOwnership />
      <BridgingSustainability />
      <DiversePathways />
      <GlobalForestManagement />
      <KeyArrangements />
      <ConcessionManagement />
      <ConservationConcession />
      <NonTimberForestProducts />
      <ForestBackedBondsProof />
      <FurtherDropdownContent />
      <ContactFooterUperButton />
    </div>
  );
};

export default ForestAsset;
