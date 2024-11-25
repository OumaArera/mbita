import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./images/logo.jpg";

const News = () => {
  const newsItems = [
    {
      title: "Mbita High School Wins National Debate Championship",
      date: "October 10, 2024",
      link: "/news/mbita-debate-victory",
      image: logo,
    },
    {
      title: "New Sports Complex Opened",
      date: "September 5, 2024",
      link: "/news/new-sports-complex",
      image: logo,
    },
    {
      title: "Alumni Meet Up: A Day of Celebration",
      date: "August 20, 2024",
      link: "/news/alumni-meetup",
      image: logo,
    },
    {
      title: "Mbita High School Hosts Science Fair",
      date: "July 15, 2024",
      link: "/news/science-fair",
      image: logo,
    },
    {
      title: "Students Excel in National Exams",
      date: "June 10, 2024",
      link: "/news/national-exams-success",
      image: logo,
    },
    {
      title: "Celebrating 10 Years of Sports Excellence",
      date: "May 5, 2024",
      link: "/news/sports-decade",
      image: logo,
    },
    // Add more news items as needed
  ];

  const itemsPerPage = 3;
  const totalPages = Math.ceil(newsItems.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate items to display based on the current page
  const currentItems = newsItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Pagination Handlers
  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentItems.map((item) => (
            <div key={item.title} className="bg-gray-100 p-4 rounded-md shadow-lg">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{item.date}</p>
              <Link
                to={item.link}
                className="text-[#E7AC0B] hover:text-[#A20515] font-medium"
              >
                Read More
              </Link>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center mt-8 space-x-4">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className={`px-4 py-2 border-2 border-[#A20515] text-[#A20515] rounded-md ${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-[#A20515] hover:text-white"
            }`}
          >
            &#8592; Previous
          </button>

          {/* Page Numbers */}
          <div className="flex space-x-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => goToPage(index + 1)}
                className={`px-3 py-2 rounded-md ${
                  currentPage === index + 1
                    ? "bg-[#A20515] text-white"
                    : "border-2 border-gray-300 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 border-2 border-[#A20515] text-[#A20515] rounded-md ${
              currentPage === totalPages
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-[#A20515] hover:text-white"
            }`}
          >
            Next &#8594;
          </button>
        </div>
      </div>
    </section>
  );
};

export default News;
