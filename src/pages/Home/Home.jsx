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
import ContactFooterUperButton from "../../components/Home/ContactFooterUperButton";
import TabsCustomAnimation from "../../components/Home/TabsCustomAnimation";
import FlowChart from "../../components/Home/FlowChart";
// import ContactButton from "../../components/Home/ContactButton";

const Home = () => {
  return (
    <div>
      <Slider />
      <Counter />
      <AboutusHome />
      <ServicesHome />
      <AnimatedCard />
      {/* <ChallengesHome /> */}
      {/* <SolutionsHome /> */}
      
      <TabsCustomAnimation/>
      <GovernmentofUganda />
      <FlowChart/>

      <OurActivateAprroach />
      <OurPartner />
      <ContactFooterUperButton />

    </div>
  );
};

export default Home;
