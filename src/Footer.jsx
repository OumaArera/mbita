import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai"; 
import MapWithDirections from "./MapWithDirections";

const Footer = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    phone: "",
    message: "",
  });
  const currentYear = new Date().getFullYear();

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with values:", formValues);
    setIsFormOpen(false);
  };

  return (
    <footer className="bg-[#200633] text-white pt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <p className="flex items-center mb-2">
              <AiOutlineMail className="mr-2" />
              <a href="mailto:mbitahigh@gmail.com" className="underline">
                mbitahigh@gmail.com
              </a>
            </p>
            <p className="flex items-center mb-4">
              <AiOutlinePhone className="mr-2" />
              <a href="tel:+254748800714" className="underline">
                059 22042 / +254 700 448644
              </a>
            </p>
            <p className="flex items-center mb-4">
              <FaEnvelope className="mr-2" />
              <a href="tel:+254748800714" className="underline">
                P.O. BOX 81-40305 MBITA
              </a>
            </p>
            <p className="flex items-center mb-4">
              <FaMapMarkerAlt className="mr-2" />
              <a href="tel:+254748800714" className="underline">
                Mbita Town
              </a>
            </p>
            <button
              onClick={() => setIsFormOpen(true)}
              className="bg-[#E7AC0B] text-black py-2 px-4 rounded-md hover:bg-yellow-500"
            >
              Contact Us
            </button>
          </div>

          {/* Social Media Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Follow Us</h2>
            <div className="flex space-x-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-500"
              >
                <FaFacebook size={30} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-500"
              >
                <FaTwitter size={30} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-500"
              >
                <FaInstagram size={30} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-500"
              >
                <FaLinkedin size={30} />
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <NavLink to="/our-history" className="hover:text-yellow-500">
                  Story of Mbita High School
                </NavLink>
              </li>
              <li>
                <NavLink to="/apply-for-admission" className="hover:text-yellow-500">
                  Apply for Admission
                </NavLink>
              </li>
              <li>
                <NavLink to="/school-performance" className="hover:text-yellow-500">
                  School Performance
                </NavLink>
              </li>
              <li>
                <NavLink to="/students-life" className="hover:text-yellow-500">
                  Students Life
                </NavLink>
              </li>
              <li>
                <NavLink to="/board-of-management" className="hover:text-yellow-500">
                  Board of Management
                </NavLink>
              </li>
              <li>
                <NavLink to="/adminstration" className="hover:text-yellow-500">
                  Administration
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Google Maps Section */}
          {/* Google Maps Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Our Location</h2>
            <div className="rounded-md overflow-hidden" style={{ height: "200px" }}>
              <MapWithDirections />
            </div>
          </div>

        </div>

        {/* Overlay Form (Initially Hidden) */}
        {isFormOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
            <form
              onSubmit={handleFormSubmit}
              className="bg-white p-8 rounded-md shadow-lg w-full sm:w-96"
            >
              <h3 className="text-2xl font-bold mb-4 text-black">Contact Form</h3>
              <label className="block mb-2 text-black">Email</label>
              <input 
                type="email"
                value={formValues.email}
                onChange={(e) =>
                  setFormValues({ ...formValues, email: e.target.value })
                }
                className="w-full p-2 border text-black border-gray-300 rounded-md mb-4"
                placeholder="Email"
                required
              />
              <label className="block mb-2 text-black">Phone</label>
              <input
                type="tel"
                value={formValues.phone}
                onChange={(e) =>
                  setFormValues({ ...formValues, phone: e.target.value })
                }
                className="w-full p-2 text-black border border-gray-300 rounded-md mb-4"
                placeholder="+257 48800714"
                required
              />
              <label className="block mb-2 text-black">Message</label>
              <textarea
                value={formValues.message}
                onChange={(e) =>
                  setFormValues({ ...formValues, message: e.target.value })
                }
                className="w-full text-black p-2 border border-gray-300 rounded-md mb-4"
                placeholder="Message here..."
                rows="4"
                required
              />
              <button
                type="submit"
                className="bg-[#E7AC0B] text-black py-2 px-4 rounded-md hover:bg-yellow-500"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={() => setIsFormOpen(false)}
                className="text-red-500 mt-4 block w-full text-center"
              >
                Close
              </button>
            </form>
          </div>
        )}

        {/* Footer Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
          <p>
            &copy; {currentYear} Mbita High School. All rights reserved. Designed by{" "}
            <span className="font-bold text-yellow-500">Team X. Contact: +254 748 800714</span>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
