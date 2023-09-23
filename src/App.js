import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

import AboutUs from "./pages/AboutUs/AboutUs";
import Agriculture from "./pages/Agriculture/Agriculture";
import Anaerobic from "./pages/AnaerobicDigestion/Anaerobic";
import BecomeAPartner from "./pages/BecomeAPartner/BecomeAPartner";
import BlueCarbon from "./pages/BlueCarbon/BlueCarbon";
import BuyCarbonCerdit from "./pages/BuyCarbonCerdits/BuyCarbonCerdit";
import Challenges from "./pages/Challanges/Challanges";
import ContactUs from "./pages/ContactUs/ContactUs";
import ExploreProject from "./pages/ExploreProject/ExploreProject";
import Forestry from "./pages/Forestry/Forestry";
import Media from "./pages/NewsandMedia/Media";
import StartAProject from "./pages/StartAProject/StartAProject";
import WindSolar from "./pages/WindandSolar/WindSolar";
import Home from "./pages/Home/Home";

import Footer from "./components/Footer/Footer";
import ShortFooter from "./components/ShortFooter/ShortFooter";


const App=()=> {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/news-and-media" element={<Media />} />
        <Route path="/challenges" element={<Challenges />} />
        <Route path="/forest" element={<Forestry />} />
        <Route path="/blue-carbon" element={<BlueCarbon />} />
        <Route path="/agriculture" element={<Agriculture/>} />
        <Route path="/wind-and-solar" element={<WindSolar/>} />
        <Route path="/anaerobic-digestion" element={<Anaerobic/>}/>
        <Route path="/explore-projects" element={<ExploreProject/>}/>
        <Route path="/start-a-project" element={<StartAProject/>}/>
        <Route path="/buy-carbon-credits" element={<BuyCarbonCerdit/>}/>
        <Route path="/become-a-partner" element={<BecomeAPartner/>}/>
        <Route path="/contact" element={<ContactUs/>} />

      </Routes>
      <Footer/>
      <ShortFooter/>

    </>
  );
}

export default App;
