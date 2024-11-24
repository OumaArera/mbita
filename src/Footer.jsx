import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // Social Media Icons
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai"; // Contact Icons

const Footer = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    phone: "",
    message: "",
  });

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted with values:", formValues);
    setIsFormOpen(false); // Close the form after submission
  };

  return (
    <footer className="bg-[#200633] text-white py-8 mt-8">
      <div className="container mx-auto px-4">
        {/* Contact Us Section */}
        <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1 sm:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="flex items-center mb-2">
              <AiOutlineMail className="mr-2" />{" "}
              <a href="mailto:mbitahigh@gmail.com" className="underline">
                mbitahigh@gmail.com
              </a>
            </p>
            <p className="flex items-center mb-4">
              <AiOutlinePhone className="mr-2" />{" "}
              <a href="tel:+254748800714" className="underline">
                +254748800714
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
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
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
                onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded-md mb-4"
                placeholder="Email"
                required
              />
              <label className="block mb-2 text-black">Phone</label>
              <input
                type="tel"
                value={formValues.phone}
                onChange={(e) => setFormValues({ ...formValues, phone: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded-md mb-4"
                placeholder="+257 48800714"
                required
              />
              <label className="block mb-2 text-black">Message</label>
              <textarea
                value={formValues.message}
                onChange={(e) => setFormValues({ ...formValues, message: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded-md mb-4"
                placeholder="Message here..."
                rows="4"
                required
              />
              <button type="submit" className="bg-[#E7AC0B] text-black py-2 px-4 rounded-md hover:bg-yellow-500">
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

        {/* Google Maps Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Our Location</h2>
          <iframe
            width="100%"
            height="300"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31715.26256510091!2d34.712127!3d-0.370846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1824c7429b299533%3A0x91c60caaeea64ea1!2sMbita%20High%20School!5e0!3m2!1sen!2ske!4v1667779309397!5m2!1sen!2ske"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Quick Links Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
          <ul>
            <li>
              <NavLink to="/" className="block mb-2 hover:text-yellow-500">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="block mb-2 hover:text-yellow-500">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/news" className="block mb-2 hover:text-yellow-500">
                News
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="block mb-2 hover:text-yellow-500">
                Contact Us
              </NavLink>
            </li>
            {/* Add other links */}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
