import React from "react";
import Slider from "../../components/Home/Slider";
import AboutusHome from "../../components/Home/AboutusHome";
import ServicesHome from "../../components/Home/ServicesHome";
import AnimatedCard from "../../components/Home/AnimatedCard";
import GovernmentofUganda from "../../components/Home/GovernmentofUganda";
import OurActivateAprroach from "../../components/Home/OurActivateAprroach";
import OurPartner from "../../components/Home/OurPartner";
import Counter from "../../components/Home/Counter";
import ContactFooterUperButton from "../../components/Home/ContactFooterUperButton";
import TabsCustomAnimation from "../../components/Home/TabsCustomAnimation";
import FlowChart from "../../components/Home/FlowChart";

const Home = () => {
  return (
    <div>
      <Slider />
      <Counter />
      <AboutusHome />
      <ServicesHome />
      <AnimatedCard />
      <TabsCustomAnimation />
      <GovernmentofUganda />
      <FlowChart />
      <OurActivateAprroach />
      <OurPartner />
      <ContactFooterUperButton />
    </div>
  );
};

export default Home;
