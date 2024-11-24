import React, { useState, useRef } from "react";
import { BrowserRouter as Router, NavLink, Routes, Route } from "react-router-dom";
import logo from "./images/logo.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownTimeout = useRef(null); // Ref to handle delay for dropdown

  const menuItems = {
    Home: [{ name: "Home", path: "/" }],
    "About Us": [
        { name: "Our History", path: "/our-history" },
      { name: "Students Life", path: "/students-life" },
      { name: "Teachers and Staff", path: "/teachers-staff" },
      { name: "Alumni Community", path: "/alumni-community" },
      { name: "Parents and Families", path: "/parents-families" },
      { name: "Sponsors", path: "/sponsors" },
    ],
    Academics: [
      { name: "Academic Calendar", path: "/academic-calendar" },
      { name: "Events Calendar", path: "/events-calendar" },
      { name: "CBC Transition", path: "/cbc-transition" },
      { name: "Academic Resources", path: "/academic-resources" },
      { name: "Subjects Offered", path: "/subjects-offered" },
      { name: "Library", path: "/library" },
    ],
    Admissions: [
      { name: "Apply for Admission", path: "/apply-for-admission" },
      { name: "Fees", path: "/fees" },
      { name: "Dorms", path: "/dorms" },
      { name: "Transition to CBC", path: "/transition-to-cbc" },
    ],
    Stories: [
      { name: "Tales from the Students", path: "/tales-from-students" },
      { name: "School Magazine", path: "/school-magazine" },
    ],
    News: [
      { name: "Latest News", path: "/news" },
      { name: "School Updates", path: "/school-updates" },
    ],
    "Clubs and Societies": [
      { name: "Debate Club", path: "/debate-club" },
      { name: "Drama Club", path: "/drama-club" },
      { name: "Science Club", path: "/science-club" },
      { name: "Choir", path: "/choir" },
      { name: "Interact", path: "/interact" },
    ],
  };

  const handleMouseEnter = (menu) => {
    if (dropdownTimeout.current) {
      clearTimeout(dropdownTimeout.current);
    }
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300); // 300ms delay before closing
  };

  const handleNavLinkClick = () => {
    setIsMenuOpen(false); // Close menu on navigation
  };

  return (
      <header className="bg-[#200633] text-white fixed top-0 left-0 w-full z-50 shadow-lg">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo and School Info */}
          <div className="flex items-center space-x-4">
            <div className="h-14 w-14 rounded-lg bg-white flex justify-center items-center shadow-lg border-2 border-[#E7AC0B]">
              <img src={logo} alt="School Logo" className="h-10" />
            </div>
            <div className="hidden md:block">
              <h1 className="text-lg md:text-xl font-semibold whitespace-nowrap">
                Mbita High School
              </h1>
              <p className="text-sm md:text-base italic text-[#E7AC0B]">
                Paddle to Success
              </p>
            </div>
          </div>

          {/* Menu Toggle for Mobile */}
          <button
            className="md:hidden text-white focus:outline-none text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? "✖" : "☰"}
          </button>

          {/* Navigation */}
          <nav
            className={`absolute top-16 left-0 w-full bg-gray-800 z-40 transition-transform ${
              isMenuOpen ? "block" : "hidden"
            } md:static md:flex md:w-auto md:bg-transparent md:space-x-8 items-center`}
          >
            <div className="container mx-auto md:flex md:space-x-8">
              {Object.keys(menuItems).map((category) => (
                <div
                  key={category}
                  className="relative group"
                  onMouseEnter={() => handleMouseEnter(category)}
                  onMouseLeave={handleMouseLeave}
                >
                  <span className="block px-4 py-2 md:inline md:px-0 cursor-pointer hover:text-[#E7AC0B]">
                    {category}
                  </span>
                  {activeDropdown === category && (
                    <div className="absolute left-0 mt-2 bg-white text-gray-900 shadow-lg rounded-md w-64 z-10">
                      <ul className="p-2">
                        {menuItems[category].map(({ name, path }) => (
                          <li key={name}>
                            <NavLink
                              to={path}
                              onClick={handleNavLinkClick}
                              className="block px-4 py-2 hover:bg-[#A20515] hover:text-white rounded"
                            >
                              {name}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Search Input */}
            {/* <div className="relative p-4 md:p-0 md:ml-4">
              <input
                type="text"
                placeholder="Search"
                className="bg-white text-gray-900 px-4 py-2 rounded-md placeholder-gray-600 focus:outline-none"
              />
              <span className="absolute right-6 top-2.5 md:right-2 text-gray-400 hover:text-gray-600">
                🔍
              </span>
            </div> */}
          </nav>
        </div>
      </header>

  );
};

export default Header;
