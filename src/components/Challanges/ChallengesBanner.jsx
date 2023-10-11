import React from "react";
import banner2 from "../../../src/images/Challenges-Banner.jpg";
import Banner from "../BannerForAllPages/Banner";

function ChallengesBanner() {
  return (
    <div>
      <Banner
        backgroundImage={banner2}
        title="Challenges and Solutions"
        description="The experts at GEP help businesses reduce emissions; they identify suitable projects, ensure compliance with Article 6.2 standards, develop project plans, and seek certification from recognized carbon standards.        "
        buttonText="Register Your Interest"
      />
    </div>
  );
}

export { ChallengesBanner };
