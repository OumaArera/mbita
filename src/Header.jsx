import React, { useState, useRef } from "react";
import { BrowserRouter as Router, NavLink, Routes, Route, useNavigate } from "react-router-dom";
import logo from "./images/logo.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownTimeout = useRef(null); // Ref to handle delay for dropdown
  const navigate = useNavigate(); // For programmatic navigation

  const menuItems = {
    Home: [{ name: "Home", path: "/" }],
    "About Us": [
      { name: "Story of Mbita High School", path: "/our-history" },
      { name: "Students Life", path: "/students-life" },
      { name: "Board of Management", path: "/board-of-management" },
      { name: "Administration", path: "/adminstration" },
      { name: "Alumni Community", path: "/alumni-community" },
      { name: "Parents and Families", path: "/parents-families" },
      { name: "Sponsors", path: "/sponsors" },
    ],
    Academics: [
      { name: "School Performance", path: "/school-performance" },
      { name: "Academic Calendar", path: "/academic-calendar" },
      { name: "Curriculum Assessment", path: "/curriculum-assessment" },
      { name: "Subjects Offered", path: "/subjects-offered" },
      { name: "CBC Transition", path: "/cbc-transition" },
      { name: "Library", path: "/library" },
    ],
    Admissions: [
      { name: "Apply for Admission", path: "/apply-for-admission" },
      { name: "Fees Structure", path: "/fees" },
      { name: "Dormitories", path: "/dorms" },
    ],
    "Media Centre": [
      { name: "Tales from the Students", path: "/tales-from-students" },
      { name: "School Magazine", path: "/school-magazine" },
      { name: "Jobs Vacancy", path: "/jobs-vacancy" },
      { name: "Latest News", path: "/news" },
      { name: "School Updates", path: "/school-updates" },
      { name: "Events Calendar", path: "/events-calendar" },
    ],
    Sports: [
      { name: "Basketball", path: "/basketball" },
      { name: "Football", path: "/football" },
      { name: "Hockey", path: "/hockey" },
      { name: "Athletics", path: "/athletics" },
      { name: "Long Tennis", path: "/long-tennis" },
      { name: "Table Tennis", path: "/table-tennis" },
      { name: "Rugby", path: "/rugby" },
      { name: "Badminton", path: "/badminton" },
      { name: "Handball", path: "/handball" },
      { name: "Volley Ball", path: "/volley-ball" },
      { name: "Chess", path: "/chess" },
    ],
    "Clubs and Societies": [
      { name: "Debate Club", path: "/debate-club" },
      { name: "Drama Club", path: "/drama-club" },
      { name: "Science Club", path: "/science-club" },
      { name: "Maths Club", path: "/maths-club" },
      { name: "Environment Club", path: "/environment-club" },
      { name: "French Club", path: "/french-club" },
      { name: "Writers Club", path: "/writers-club" },
      { name: "Music Club", path: "/music-club" },
      { name: "Community Service", path: "/community-service-club" },
      { name: "Interact", path: "/interact" },
      { name: "Young Catholics Service", path: "/ycs" },
      { name: "Seventh Day Adventist", path: "/sda" },
      { name: "Christian Union", path: "/cu" },
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
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    navigate("/"); // Navigate to the homepage when the logo card is clicked
  };

  return (
    <header className="bg-[#200633] text-white fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Clickable Logo Card */}
        <div
          className="flex items-center space-x-4 cursor-pointer"
          onClick={handleLogoClick}
        >
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
                  <div className="absolute left-0 mt-2 bg-white text-gray-900 shadow-lg rounded-md w-64 z-10 max-h-64 overflow-y-auto">
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
        </nav>
      </div>
    </header>
  );
};

export default Header;
