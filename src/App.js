import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import OurStory from "./pages/OurStory/OurStory";
import WasteManagement from "./pages/WasteManagement/WasteManagement";
import CarbonTrading from "./pages/CarbonTrading/CarbonTrading";
import Challenges from "./pages/ChallengesAndSolutions/Challenges";
import ContactUs from "./pages/ContactUs/ContactUs";
import Projects from "./pages/Projects/Projects";
import NatureBasedAsset from "./pages/NatureBasedAsset/NatureBasedAsset";
import Media from "./pages/NewsandMedia/Media";
import RenewableEnergy from "./pages/RenewableEnergy/RenewableEnergy";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import ShortFooter from "./components/ShortFooter/ShortFooter";
import CarbonCredits from "./pages/CarbonCredits/CarbonCredits";
import ScrollToTop from "./components/ScrollForTop/ScrollForTop";
import AnaerobicDigestion from "./pages/AnaerobicDigestion/AnaerobicDigestion";
import Agriculture from './pages/Agriculture/Agriculture';
import BlueCarbon from "./pages/BlueCarbon/BlueCarbon";
import Forestry from "./pages/Forestry/Forestry";
import Agroforestry from "./pages/Agroforestry/Agroforestry";
import ForestAsset from "./pages/ForestAssets/ForestAsset";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/news-and-media" element={<Media />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/naturebasedasset" element={<NatureBasedAsset />} />
          <Route path="/carbon-trading" element={<CarbonTrading />} />
          <Route path="/renewable-energy" element={<RenewableEnergy />} />
          <Route path="/waste-management" element={<WasteManagement />} />
          <Route path="/agriculture" element={<Agriculture />} />
          <Route path="/forestry" element={<Forestry />} />
          <Route path="/agroforestry" element={<Agroforestry />} />
          <Route path="/forest-assets" element={<ForestAsset />} />
          <Route path="/blue-carbon" element={<BlueCarbon />} />
          <Route path="/anaerobic-digestion" element={<AnaerobicDigestion />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/carbon-credits" element={<CarbonCredits />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </Router>
      <Footer />
      <ShortFooter />
    </>
  );
};

export default App;
