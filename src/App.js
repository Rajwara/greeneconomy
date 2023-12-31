import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import OurStory from "./pages/OurStory/OurStory";
import CarbonTrading from "./pages/CarbonTrading/CarbonTrading";
import Challenges from "./pages/ChallengesAndSolutions/Challenges";
import ContactUs from "./pages/ContactUs/ContactUs";
import Projects from "./pages/Projects/Projects";
import NatureBasedAsset from "./pages/NatureBasedAsset/NatureBasedAsset";
import Media from "./pages/NewsandMedia/Media";
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
import Page404 from "./pages/Page404/Page404";
import WindandSolar from "./pages/WindandSolar/WindandSolar";
import MouUganda from './pages/MouUgandaMedia/MouUgandaMedia';
import UAEProject from './pages/UAEProject/UAEProject';


const App = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />{" "}
        <Route exact path="/our-story" element={<OurStory />} />{" "}
        <Route exact path="/news-and-media" element={<Media />} />
        <Route exact path="/mou-uganda" element={<MouUganda />} />
        <Route exact path="/uae-project" element={<UAEProject />} />
        <Route exact path="/challenges" element={<Challenges />} />{" "}
        <Route exact path="/naturebasedasset" element={<NatureBasedAsset />} />{" "}
        <Route exact path="/carbon-trading" element={<CarbonTrading />} />{" "}
        <Route exact path="/wind-and-solar" element={<WindandSolar />} />{" "}
        <Route exact path="/agriculture" element={<Agriculture />} />
        <Route exact path="/forestry" element={<Forestry />} />
        <Route exact path="/agroforestry" element={<Agroforestry />} />
        <Route exact path="/forest-assets" element={<ForestAsset />} />
        <Route exact path="/blue-carbon" element={<BlueCarbon />} />
        <Route exact path="/anaerobic-digestion" element={<AnaerobicDigestion />} />
        <Route exact path="/projects" element={<Projects />} />{" "}
        <Route exact path="/carbon-credits" element={<CarbonCredits />} />{" "}
        <Route exact path="/contact-us" element={<ContactUs />} />
        <Route exact path="*" element={<Page404 />} />


      </Routes > {" "}
      < Footer />
      <ShortFooter />
    </>
  );
};

export default App;