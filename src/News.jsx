import React from "react";
import { Link } from "react-router-dom";
import logo from './images/logo.jpg'

const News = () => {
  const newsItems = [
    {
      title: "Mbita High School Wins National Debate Championship",
      date: "October 10, 2024",
      link: "/news/mbita-debate-victory",
      image: logo
    },
    {
      title: "New Sports Complex Opened",
      date: "September 5, 2024",
      link: "/news/new-sports-complex",
      image: logo
    },
    {
      title: "Alumni Meet Up: A Day of Celebration",
      date: "August 20, 2024",
      link: "/news/alumni-meetup",
      image: logo
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <div key={item.title} className="bg-gray-100 p-4 rounded-md shadow-lg">
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{item.date}</p>
              <Link to={item.link} className="text-[#E7AC0B] hover:text-[#A20515]">
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
