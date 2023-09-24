import React, { useState } from "react";
import Logo from "../../../src/images/greenlogo.png";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");

  const [dropdowns, setDropdowns] = useState({
    dropdownNavbarLink1: false,
    dropdownNavbarLink2: false,
    dropdownNavbarLink3: false,
    dropdownNavbarLink4: false,
  });

  const handleLinkClick = (linkText) => {
    setActiveLink(linkText);
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

  return (
    <nav className="bg-white dark:bg-gray-900 sticky w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="flex flex-wrap items-center justify-between px-[10px] sm:px-[30px] md:px-[40px] lg:px-[60px] xl:px-[78px]">
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
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-multi-level"
          aria-expanded="false"
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
          className="w-full md:block md:w-auto sm:pl-[10px]"
          id="navbar-multi-level"
        >
          <ul className="flex flex-col flex-wrap font-medium p-4 md:p-0 mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <NavLink
                exact
                to="/"
                className={`block font-montserrat font-bold text-lg py-2 pl-3 pr-4 sm:pr-0 ${
                  activeLink === "Home" ? "text-[#316D69]" : "text-[#3c3c3c]"
                } hover:text-[#316D69] rounded `}
                onClick={() => handleLinkClick("Home")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <button
                id="dropdownNavbarLink1"
                data-dropdown-toggle="dropdownNavbar1"
                className={`flex items-center justify-between w-full py-2 pl-3  pr-4 font-montserrat font-semibold text-base mt-[10px] text-[#3c3c3c] hover:text-[#316D69] border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#316D69] md:p-0 md:w-auto dark:text-[#f7f5f2] md:dark:hover:text-[#316D69] dark:focus:text-[#f7f5f2] dark:border-gray-700 ${
                  dropdowns.dropdownNavbarLink1 ? "" : ""
                }`}
                onClick={() => toggleDropdown("dropdownNavbarLink1")}
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
                className={`z-20 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 ${
                  dropdowns.dropdownNavbarLink1 ? "block" : "hidden"
                }`}
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton1"
                >
                  <li>
                    <NavLink
                      to="/our-story"
                      className={`block font-montserrat  text-base py-2 pl-3 pr-4 sm:pr-0 ${
                        activeLink === "OurStory"
                          ? "text-[#316D69] font-bold"
                          : "text-[#3c3c3c]"
                      } hover:text-[#316D69] rounded `}
                      onClick={() => handleLinkClick("OurStory")}
                    >
                      Our Story
                    </NavLink>
                  </li>
                  <li>
                    <Link
                      to="/challenges"
                      className={`block font-montserrat  text-base py-2 pl-3 pr-4 sm:pr-0 ${
                        activeLink === "ChallangesAndSolutions"
                          ? "text-[#316D69] font-bold"
                          : "text-[#3c3c3c]"
                      } hover:text-[#316D69] rounded `}
                      onClick={() => handleLinkClick("ChallangesAndSolutions")}
                    >
                      Challenges & Solutions
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            {/* <li>
              <NavLink
                to="/challenges"
                className={`block py-2 font-montserrat font-semibold  text-base pl-3 pr-4 sm:pr-0 ${
                  activeLink === "Challenges"
                    ? "text-[#316D69] font-bold"
                    : "text-[#3c3c3c]"
                } hover:text-[#316D69] rounded `}
                onClick={() => handleLinkClick("Challenges")}
              >
                Challenges
              </NavLink>
            </li> */}
            <li>
              <button
                id="dropdownNavbarLink2"
                data-dropdown-toggle="dropdownNavbar2"
                className={`flex items-center justify-between w-full py-2 pl-3 pr-4 mt-[10px] font-montserrat font-semibold text-base text-[#3c3c3c] border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:text-[#316D69] md:p-0 md:w-auto dark:text-white md:dark:hover:text-[#316D69] dark:focus:text-[#f7f5f2] dark:border-gray-700 ${
                  dropdowns.dropdownNavbarLink2 ? "" : ""
                }`}
                onClick={() => toggleDropdown("dropdownNavbarLink2")}
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
                className={`z-20 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-52 dark:bg-gray-700 dark:divide-gray-600 ${
                  dropdowns.dropdownNavbarLink2 ? "block" : "hidden"
                }`}
              >
                <ul
                  className="py-2 text-sm text-[#3c3c3c] dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton2"
                >

                      <li className=" pl-4">
                    
                    <Link
                      to="/blue-carbon"
                      className={`block font-montserrat  text-base py-2  pr-4 sm:pr-0 ${
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
                      to="/forest"
                      className={`block font-montserrat  text-base py-2 pl-3 pr-4 sm:pr-0 ${
                        activeLink === "NatureBasedAssets"
                          ? "text-[#316D69] font-bold"
                          : "text-[#3c3c3c]"
                      } hover:text-[#316D69] rounded `}
                      onClick={() => handleLinkClick("NatureBasedAssets")}
                    >
                      Nature Based Assets
                    </Link>
                  </li>
                  {/* <li className="flex flex-row pl-4">
                    <p className="text-[#3c3c3c] font-montserrat font-medium text-base pt-2">
                      1.
                    </p>
                    <Link
                      to="/forest"
                      className={`block font-montserrat  text-base py-2 pl-3 pr-4 sm:pr-0 ${
                        activeLink === "Forest"
                          ? "text-[#316D69] font-bold"
                          : "text-[#3c3c3c]"
                      } hover:text-[#316D69] rounded `}
                      onClick={() => handleLinkClick("Forest")}
                    >
                      Forest
                    </Link>
                  </li> */}
{/*               
                  <li className="flex flex-row pl-4">
                    <p className="text-[#3c3c3c] font-montserrat font-medium text-base pt-2">
                      3.
                    </p>
                    <Link
                      to="/agriculture"
                      className={`block font-montserrat  text-base py-2 pl-3 pr-4 sm:pr-0 ${
                        activeLink === "Agriculture"
                          ? "text-[#316D69] font-bold"
                          : "text-[#3c3c3c]"
                      } hover:text-[#316D69] rounded `}
                      onClick={() => handleLinkClick("Agriculture")}
                    >
                      Agriculture
                    </Link>
                  </li> */}
                  <li>
                    <Link
                      to="/wind-and-solar"
                      className={`block font-montserrat  text-base py-2 pl-3 pr-4 sm:pr-0 ${
                        activeLink === "WindandSolar"
                          ? "text-[#316D69] font-bold"
                          : "text-[#3c3c3c]"
                      } hover:text-[#316D69] rounded `}
                      onClick={() => handleLinkClick("WindandSolar")}
                    >
                     Renewable Energy
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/anaerobic-digestion"
                      className={`block font-montserrat  text-base py-2 pl-3 pr-4 sm:pr-0 ${
                        activeLink === "AnaerobicDigestion"
                          ? "text-[#316D69] font-bold"
                          : "text-[#3c3c3c]"
                      } hover:text-[#316D69] rounded `}
                      onClick={() => handleLinkClick("AnaerobicDigestion")}
                    >
                      Waste Management
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <button
                id="dropdownNavbarLink3"
                data-dropdown-toggle="dropdownNavbar3"
                className={`flex items-center justify-between w-full py-2 pl-3 pr-4 mt-[10px] font-montserrat font-semibold text-base text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:text-[#316D69] md:p-0 md:w-auto dark:text-white md:dark:hover:text-[#316D69] dark:focus:text-[#f7f5f2] dark:border-gray-700 ${
                  dropdowns.dropdownNavbarLink3 ? "" : ""
                }`}
                onClick={() => toggleDropdown("dropdownNavbarLink3")}
              >
                Projects
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
              {/* <!-- Dropdown menu 3 --> */}
              <div
                id="dropdownNavbar3"
                className={`z-20 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 ${
                  dropdowns.dropdownNavbarLink3 ? "block" : "hidden"
                }`}
              >
                <ul
                  className="py-2 text-sm text-[#3c3c3c] dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton3"
                >
                  <li>
                    <Link
                      to="/explore-projects"
                      className={`block font-montserrat  text-base py-2 pl-3 pr-4 sm:pr-0 ${
                        activeLink === "ExploreProject"
                          ? "text-[#316D69] font-bold"
                          : "text-[#3c3c3c]"
                      } hover:text-[#316D69] rounded `}
                      onClick={() => handleLinkClick("ExploreProject")}
                    >
                      Explore Projects
                    </Link>
                  </li>

                  <li>
                    <NavLink
                      to="/start-a-project"
                      className={`block font-montserrat  text-base py-2 pl-3 pr-4 sm:pr-0 ${
                        activeLink === "StartaProject"
                          ? "text-[#316D69] font-bold"
                          : "text-[#3c3c3c]"
                      } hover:text-[#316D69] rounded `}
                      onClick={() => handleLinkClick("StartaProject")}
                    >
                      Start a Project
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>

              <li>
              <NavLink
                to="/news-and-media"
                className={`block py-2 font-montserrat font-semibold  text-base pl-3 pr-4 sm:pr-0 ${
                  activeLink === "NewsAndMedia"
                    ? "text-[#316D69] font-bold"
                    : "text-[#3c3c3c]"
                } hover:text-[#316D69] rounded `}
                onClick={() => handleLinkClick("NewsAndMedia")}
              >
                News and Media
              </NavLink>
            </li>
            <li>
              <button
                id="dropdownNavbarLink4"
                data-dropdown-toggle="dropdownNavbar4"
                className={`flex items-center justify-between  w-full py-2 pl-3 md:-ml-[20px] lg:ml-0 pr-4 mt-[10px] font-montserrat font-semibold text-base text-[#3c3c3c] border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#316D69] md:p-0 md:w-auto dark:text-white md:dark:hover:text-[#3c3c3c] dark:focus:text-[#f7f5f2] dark:border-gray-700 ${
                  dropdowns.dropdownNavbarLink4 ? "" : ""
                }`}
                onClick={() => toggleDropdown("dropdownNavbarLink4")}
              >
                Buy Credits
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
              {/* <!-- Dropdown menu 4 --> */}
              <div
                id="dropdownNavbar4"
                className={`z-20 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-48 dark:bg-gray-700 dark:divide-gray-600 ${
                  dropdowns.dropdownNavbarLink4 ? "block" : "hidden"
                }`}
              >
                <ul
                  className="py-2 text-sm text-[#3c3c3c] dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton4"
                >
                  <li>
                    <Link
                      to="/buy-carbon-credits"
                      className={`block font-montserrat  text-base py-2 pl-3 pr-4 sm:pr-0 ${
                        activeLink === "BuyCarbonCredit"
                          ? "text-[#316D69] font-bold"
                          : "text-[#3c3c3c]"
                      } hover:text-[#316D69] rounded `}
                      onClick={() => handleLinkClick("BuyCarbonCredit")}
                    >
                      Buy Carbon Credits
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/become-a-partner"
                      className={`block font-montserrat  text-base py-2 pl-3 pr-4 sm:pr-0 ${
                        activeLink === "BecomeaPartner"
                          ? "text-[#316D69] font-bold"
                          : "text-[#3c3c3c]"
                      } hover:text-[#316D69] rounded `}
                      onClick={() => handleLinkClick("BecomeaPartner")}
                    >
                      Become a Partner
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={`block py-2 font-montserrat font-semibold text-base pl-3 pr-4 sm:pr-0 ${
                  activeLink === "Contact"
                    ? "text-[#316D69] font-bold"
                    : "text-[#3c3c3c]"
                } hover:text-[#316D69] rounded `}
                onClick={() => handleLinkClick("Contact")}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
