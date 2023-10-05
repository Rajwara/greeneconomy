import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

// import AboutUs from "./pages/AboutUs/AboutUs";
import OurStory from "./pages/OurStory/OurStory";

import Agriculture from "./pages/Agriculture/Agriculture";
import Anaerobic from "./pages/WasteManagement/WasteManagement";
import BecomeAPartner from "./pages/BecomeAPartner/BecomeAPartner";
import CarbonTrading from "./pages/CarbonTrading/CarbonTrading";
import BuyCarbonCerdit from "./pages/BuyCarbonCerdits/BuyCarbonCerdit";
import Challenges from "./pages/ChallengesAndSolutions/Challenges";
import ContactUs from "./pages/ContactUs/ContactUs";
import Projects from "./pages/Projects/Projects";
import NatureBasedAsset from "./pages/NatureBasedAsset/NatureBasedAsset";
import Media from "./pages/NewsandMedia/Media";
import StartAProject from "./pages/StartAProject/StartAProject";
import RenewableEnergy from "./pages/RenewableEnergy/RenewableEnergy";
import Home from "./pages/Home/Home";

import Footer from "./components/Footer/Footer";
import ShortFooter from "./components/ShortFooter/ShortFooter";
import CarbonCredits from "./pages/CarbonCredits/CarbonCredits";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />{" "}
        <Route path="/our-story" element={<OurStory />} />{" "}
        <Route path="/news-and-media" element={<Media />} />{" "}
        <Route path="/challenges" element={<Challenges />} />{" "}
        <Route path="/naturebasedasset" element={<NatureBasedAsset />} />{" "}
        <Route path="/blue-carbon" element={<CarbonTrading />} />{" "}
        <Route path="/agriculture" element={<Agriculture />} />{" "}
        <Route path="/wind-and-solar" element={<RenewableEnergy />} />{" "}
        <Route path="/anaerobic-digestion" element={<Anaerobic />} />{" "}
        <Route path="/projects" element={<Projects />} />{" "}
        <Route path="/start-a-project" element={<StartAProject />} />{" "}
        <Route path="/carbon-credits" element={<CarbonCredits />} />{" "}
        <Route path="/contact" element={<ContactUs />} />
      </Routes>{" "}
      <Footer />
      <ShortFooter />
    </>
  );
};

export default App;
