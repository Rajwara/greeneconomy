import React, { useState } from "react";
import Logo from "../../../src/images/greenlogo.png";
import { Link, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { GiConsoleController } from "react-icons/gi";

const Navbar = () => {
  const location = useLocation();

  console.log("cccc", location.pathname.slice(1));

  const [activeLink, setActiveLink] = useState(
    location.pathname.slice(1) ? location.pathname.slice(1) : "Home"
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTopLink, setActiveTopLink] = useState("");

  const [dropdowns, setDropdowns] = useState({
    dropdownNavbarLink1: false,
    dropdownNavbarLink2: false,
    dropdownNavbarLink3: false,
    dropdownNavbarLink4: false,
  });

  const handleLinkClick = (linkText) => {
    setActiveLink(linkText);
    // Close the menu when a link is clicked, except for "About Us" and "Services" in mobile view
    if (linkText !== "About Us" && linkText !== "Services") {
      setMenuOpen(false);
    }
    if (linkText !== "About Us") {
      // Change the color of "About Us" when a different link is clicked
      setActiveTopLink("Other");
    }
    if (linkText !== "Services") {
      // Change the color of "Services" when a different link is clicked
      setActiveTopLink("Other");
    }
  };

  const toggleDropdown = (dropdownId) => {
    setDropdowns((prevState) => {
      const updatedDropdowns = { ...prevState };

      // Close all other dropdowns
      for (const key in updatedDropdowns) {
        if (key !== dropdownId) {
          updatedDropdowns[key] = false;
        }
      }

      // Toggle the clicked dropdown
      updatedDropdowns[dropdownId] = !updatedDropdowns[dropdownId];

      return updatedDropdowns;
    });
  };

  // Function to close a specific dropdown
  const closeDropdown = (dropdownId) => {
    setDropdowns((prevState) => ({
      ...prevState,
      [dropdownId]: false,
    }));
  };

  return (
    <nav className="bg-white dark:bg-white sticky w-full z-30 top-0 left-0  ">
      <div className="flex flex-wrap items-center justify-between px-[10px] sm:px-[30px] md:px-[40px] lg:px-[60px] xl:pl-[75px] xl:pr-[100px] mt-2 md:mt-0 mb-0">
        <Link to="/" className="flex items-center">
          <img
            src={Logo}
            className="h-full w-full p-0"
            alt="Green Economy Logo"
          />
        </Link>

        <button
          data-collapse-toggle="navbar-multi-level"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center  text-sm text-[#3c3c3c] rounded-lg md:hidden hover:bg-[white] dark:text-[#3c3c3c] dark:hover:bg-white"
          aria-controls="navbar-multi-level"
          aria-expanded="false"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`w-full md:block md:w-auto sm:pl-[10px] border-t-2  md:border-none ${
            menuOpen ? "" : "hidden" // Show/hide the menu
          }`}
          id="navbar-multi-level"
        >
          <ul className="flex flex-col flex-wrap font-medium p-4 md:p-0 mt-4 rounded-lg bg-white md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-white md:dark:bg-white dark:border-gray-700">
            <li>
              <Link
                exact
                to="/"
                className={`block font-montserrat font-bold text-lg py-2 dark:text-[#3c3c3c] md:dark:hover:text-[#316D69]  pl-3 pr-4 sm:pr-0 ${
                  activeLink === "Home" ? "text-[#316D69]" : "text-[#3c3c3c]"
                } hover:text-[#316D69] rounded `}
                onClick={() => handleLinkClick("Home")}
              >
                Home
              </Link>
            </li>
            <li>
              <button
                id="dropdownNavbarLink1"
                data-dropdown-toggle="dropdownNavbar1"
                className={`flex items-center justify-between w-full py-2 pl-3  pr-4 font-montserrat font-semibold text-base mt-[10px] ${
                  activeTopLink === "About Us"
                    ? "text-[#316D69] font-bold"
                    : "text-[#3c3c3c]"
                } border-b border-gray-100 hover:text-[#316D69] hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#316D69] md:p-0 md:w-auto dark:text-[#3c3c3c] md:dark:hover:text-[#316D69]  dark:border-gray-700 ${
                  dropdowns.dropdownNavbarLink1 ? "" : ""
                }`}
                onClick={() => {
                  toggleDropdown("dropdownNavbarLink1");
                  handleLinkClick("About Us");
                  setActiveTopLink("About Us");
                }}
              >
                About Us
                <svg
                  className="w-2.5 h-2.5 ml-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {/* <!-- Dropdown menu 1 --> */}
              <div
                id="dropdownNavbar1"
                className={`z-20 font-normal absolute bg-white divide-y divide-gray-100 rounded-lg shadow-lg shadow-[#316D69] w-52 ${
                  dropdowns.dropdownNavbarLink1 ? "block" : "hidden"
                }`}
              >
                <ul
                  className="py-2 text-sm "
                  aria-labelledby="dropdownLargeButton1"
                >
                  <li>
                    <Link
                      to="/our-story"
                      className={`block font-montserrat dark:text-[#3c3c3c] md:dark:hover:text-[#316D69]   text-base py-2 pl-3 border-b-2  rounded-none pr-4 sm:pr-0 ${
                        activeLink === "OurStory"
                          ? "text-[#316D69] font-bold"
                          : "text-[#3c3c3c]"
                      } hover:text-[#316D69] rounded `}
                      onClick={() => {
                        handleLinkClick("OurStory");
                        closeDropdown("dropdownNavbarLink1");
                        setActiveTopLink("About Us");
                      }}
                    >
                      Our Story
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/challenges"
                      className={`block font-montserrat dark:text-[#3c3c3c] md:dark:hover:text-[#316D69]   text-base py-2 pl-3 pr-4 sm:pr-0 ${
                        activeLink === "ChallangesAndSolutions"
                          ? "text-[#316D69] font-bold"
                          : "text-[#3c3c3c]"
                      } hover:text-[#316D69] rounded `}
                      onClick={() => {
                        handleLinkClick("ChallangesAndSolutions");
                        closeDropdown("dropdownNavbarLink1");
                        setActiveTopLink("About Us");
                      }}
                    >
                      Challenges & Solutions
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <button
                id="dropdownNavbarLink2"
                data-dropdown-toggle="dropdownNavbar2"
                className={`flex items-center justify-between w-full py-2 pl-3 pr-4 mt-[10px] font-montserrat font-semibold text-base ${
                  activeTopLink === "Services" ||
                  activeLink === "forestry" ||
                  activeLink === "agroforestry" ||
                  activeLink === "forest-assets"
                    ? "text-[#316D69] font-bold"
                    : "text-[#3c3c3c]"
                } border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:text-[#316D69] md:p-0 md:w-auto dark:text-[#3c3c3c] md:dark:hover:text-[#316D69]  dark:border-gray-700 ${
                  dropdowns.dropdownNavbarLink2 ? "" : ""
                }`}
                onClick={() => {
                  toggleDropdown("dropdownNavbarLink2");
                  handleLinkClick("Services");
                  setActiveTopLink("Services");
                }}
              >
                Services
                <svg
                  className="w-2.5 h-2.5 ml-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {/* <!-- Dropdown menu 2 --> */}
              <div
                id="dropdownNavbar2"
                className={`z-20 font-normal absolute bg-white divide-y divide-gray-100 rounded-lg shadow-lg shadow-[#316D69] w-52 dark:bg-white dark:divide-gray-600 ${
                  dropdowns.dropdownNavbarLink2 ? "block" : "hidden"
                }`}
              >
                <ul
                  className="py-2 text-sm "
                  aria-labelledby="dropdownLargeButton2"
                >
                  <li>
                    <Link
                      to="/naturebasedasset"
                      className={`block font-montserrat dark:text-[#3c3c3c] md:dark:hover:text-[#316D69]   text-base py-2 pl-3 border-b-2   rounded-none pr-4 sm:pr-0 ${
                        activeLink === "NatureBasedAssets"
                          ? "text-[#316D69] font-bold"
                          : "text-[#3c3c3c]"
                      } hover:text-[#316D69] rounded `}
                      onClick={() => {
                        handleLinkClick("NatureBasedAssets");
                        closeDropdown("dropdownNavbarLink2");
                        setActiveTopLink("Services");
                      }}
                    >
                      Nature Based Assets
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/forestry"
                      className={`block font-montserrat dark:text-[#3c3c3c] md:dark:hover:text-[#316D69]   text-base py-2 pl-6 pr-4 sm:pr-0 ${
                        activeLink === "Forestry"
                          ? "text-[#316D69] font-bold"
                          : "text-[#3c3c3c]"
                      } hover:text-[#316d69] rounded `}
                      onClick={() => {
                        handleLinkClick("Forestry");
                        closeDropdown("dropdownNavbarLink2");
                        setActiveTopLink("Services");
                      }}
                    >
                      1. Forestry
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/blue-carbon"
                      className={`block font-montserrat dark:text-[#3c3c3c] md:dark:hover:text-[#316D69]   text-base py-2 pl-6 pr-4 sm:pr-0 ${
                        activeLink === "BlueCarbon"
                          ? "text-[#316D69] font-bold"
                          : "text-[#3c3c3c]"
                      } hover:text-[#316D69] rounded `}
                      onClick={() => {
                        handleLinkClick("BlueCarbon");
                        closeDropdown("dropdownNavbarLink2");
                        setActiveTopLink("Services");
                      }}
                    >
                      2. Blue Carbon
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/agriculture"
                      className={`block font-montserrat text-base border-b-2 dark:text-[#3c3c3c] md:dark:hover:text-[#316D69]   rounded-none py-2 pl-6 pr-4 sm:pr-0 ${
                        activeLink === "Agriculture"
                          ? "text-[#316D69] font-bold"
                          : "text-[#3c3c3c]"
                      } hover:text-[#316D69] rounded `}
                      onClick={() => {
                        handleLinkClick("Agriculture");
                        closeDropdown("dropdownNavbarLink2");
                        setActiveTopLink("Services");
                      }}
                    >
                      3. Agriculture
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/wind-and-solar"
                      className={`block font-montserrat border-b-2 dark:text-[#3c3c3c] md:dark:hover:text-[#316D69]   rounded-none  text-base py-2 pl-3 pr-4 sm:pr-0 ${
                        activeLink === "WindandSolar"
                          ? "text-[#316D69] font-bold"
                          : "text-[#3c3c3c]"
                      } hover:text-[#316D69] rounded `}
                      onClick={() => {
                        handleLinkClick("WindandSolar");
                        closeDropdown("dropdownNavbarLink2");
                        setActiveTopLink("Services");
                      }}
                    >
                      Wind and Solar
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/anaerobic-digestion"
                      className={`block font-montserrat border-b-2 dark:text-[#3c3c3c] md:dark:hover:text-[#316D69]   rounded-none  text-base py-2 pl-3 pr-4 sm:pr-0 ${
                        activeLink === "AnaerobicDigestion"
                          ? "text-[#316D69] font-bold"
                          : "text-[#3c3c3c]"
                      } hover:text-[#316D69] rounded `}
                      onClick={() => {
                        handleLinkClick("AnaerobicDigestion");
                        closeDropdown("dropdownNavbarLink2");
                        setActiveTopLink("Services");
                      }}
                    >
                      Anaerobic Digestion
                    </Link>
                  </li>

                  <li className=" pl-3">
                    <Link
                      to="/carbon-trading"
                      className={`block font-montserrat dark:text-[#3c3c3c] md:dark:hover:text-[#316D69]   text-base py-2  pr-4  sm:pr-0 ${
                        activeLink === "CarbonTrading"
                          ? "text-[#316D69] font-bold"
                          : "text-[#3c3c3c]"
                      } hover:text-[#316D69] rounded `}
                      onClick={() => {
                        handleLinkClick("CarbonTrading");
                        closeDropdown("dropdownNavbarLink2");
                        setActiveTopLink("Services");
                      }}
                    >
                      Carbon Trading
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link
                to="/projects"
                className={`block py-2 font-montserrat font-semibold dark:text-[#3c3c3c] md:dark:hover:text-[#316D69]   text-base pl-3 pr-4 sm:pr-0 ${
                  activeLink === "Projects"
                    ? "text-[#316D69] font-bold"
                    : "text-[#3c3c3c]"
                } hover:text-[#316D69] rounded `}
                onClick={() => handleLinkClick("Projects")}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/news-and-media"
                className={`block py-2 font-montserrat font-semibold dark:text-[#3c3c3c] md:dark:hover:text-[#316D69]   text-base pl-3 pr-4 sm:pr-0 ${
                  activeLink === "NewsAndMedia" ||
                  activeLink === "news-and-media" ||
                  activeLink === "mou-uganda" ||
                  activeLink === "uae-project"
                    ? "text-[#316D69] font-bold"
                    : "text-[#3c3c3c]"
                } hover:text-[#316D69] rounded `}
                onClick={() => handleLinkClick("NewsAndMedia")}
              >
                News and Media
              </Link>
            </li>{" "}
            <li className="">
              <Link
                to="/carbon-credits"
                className={`block py-2 font-montserrat font-semibold dark:text-[#3c3c3c] md:dark:hover:text-[#316D69]   text-base -pl-3 sm:pl-0 pr-4 sm:pr-0 ${
                  activeLink === "CarbonCredits"
                    ? "text-[#316D69] font-bold"
                    : "text-[#3c3c3c]"
                } hover:text-[#316D69] rounded `}
                onClick={() => handleLinkClick("CarbonCredits")}
              >
                Carbon Credits
              </Link>
            </li>
            <li>
              <Link
                to="/contact-us"
                className={`block py-2 font-montserrat font-semibold dark:text-[#3c3c3c] md:dark:hover:text-[#316D69]  text-base pl-3 pr-4 sm:pr-0 ${
                  activeLink === "Contact"
                    ? "text-[#316D69] font-bold"
                    : "text-[#3c3c3c]"
                } hover:text-[#316D69] rounded `}
                onClick={() => handleLinkClick("Contact")}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
