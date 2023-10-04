import React from "react";
import Slider from "../../components/Home/Slider";
import AboutusHome from "../../components/Home/AboutusHome";
import ChallengesHome from "../../components/Home/ChallengesHome";
import ServicesHome from "../../components/Home/ServicesHome";
import AnimatedCard from "../../components/Home/AnimatedCard";
import SolutionsHome from "../../components/Home/SolutionsHome";
import GovernmentofUganda from "../../components/Home/GovernmentofUganda";
import OurActivateAprroach from "../../components/Home/OurActivateAprroach";
import OurPartner from "../../components/Home/OurPartner";
import Counter from "../../components/Home/Counter";
import ContactButton from "../../components/ContactFooterUperComponent/ContactFooterUperButton";
import TabsCustomAnimation from "../../components/Home/TabsCustomAnimation";
// import ContactButton from "../../components/Home/ContactButton";

const Home = () => {
  return (
    <div>
      <Slider />
      <Counter />
      <AboutusHome />
      <ServicesHome />
      <AnimatedCard />
      <ChallengesHome />
      <SolutionsHome />
      <TabsCustomAnimation/>
      <GovernmentofUganda />
      <ContactButton />
      <OurActivateAprroach />
      <OurPartner />
    </div>
  );
};

export default Home;
