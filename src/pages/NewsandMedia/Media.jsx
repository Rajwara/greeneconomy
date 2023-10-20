import React from "react";
import MediaBanner from "../../components/NewsandMedia/MediaBanner";
import MediaCoverage from "../../components/NewsandMedia/MediaCoverage";
import ContactFooterUperButton from "../../components/ContactFooterUperComponent/ContactFooterUperButton";
import CardsNews from "../../components/NewsandMedia/CardsNews";

const Media = () => {
  return (
    <div>
      <MediaBanner />
      <MediaCoverage />
      <CardsNews />
      <ContactFooterUperButton />
    </div>
  );
};

export default Media;
