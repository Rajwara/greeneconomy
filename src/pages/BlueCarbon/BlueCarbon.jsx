import React from "react";
import BlueCarbonBanner from "../../components/BlueCarbon/BlueCarbonBanner";
import SmallPowerfulSink from "../../components/BlueCarbon/SmallPowerfulSink";
import Mangroves from "../../components/BlueCarbon/Mangroves";
import Seagrasses from "../../components/BlueCarbon/Seagrasses";
import TidalMarshes from "../../components/BlueCarbon/TidalMarshes";
import ContactFooterUperButton from "../../components/ContactFooterUperComponent/ContactFooterUperButton";

const BlueCarbon = () => {
  return (
    <div>
      <BlueCarbonBanner />
      <SmallPowerfulSink />
      <Mangroves />
      <Seagrasses />
      <TidalMarshes />
      <ContactFooterUperButton />
    </div>
  );
};

export default BlueCarbon;
