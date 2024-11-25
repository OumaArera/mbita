import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import homeBackground from "./images/bg.jpg";
import News from './News'

const Home = () => {
  const currentYear = new Date().getFullYear();

  // Quick Facts Data
  const quickFacts = [
    {
      title: "Years Old",
      value: currentYear - 1966,
      description: "Proudly educating future leaders since 1966.",
    },
    {
      title: "University Transition",
      value: 95,
      description: "A stellar record of students transitioning to universities.",
      isPercentage: true,
    },
    {
      title: "Student Population",
      value: 1500,
      description: "A diverse community of 1,500 students thriving together.",
    },
    {
      title: "Alumni Community",
      value: 20000,
      description: "Over 20,000 accomplished alumni around the globe.",
    },
    {
      title: "Academic Excellence & Leadership",
      value: 100,
      description: "100% commitment to nurturing academic and leadership talent.",
      isPercentage: true,
    },
    {
      title: "Talent Nurturing",
      value: 100,
      description: "Supporting talent development at 100% capacity.",
      isPercentage: true,
    },
  ];

  // State for quick facts counter
  const [counters, setCounters] = useState(
    quickFacts.map(() => 0) // Initialize counters to 0
  );

  // Effect for animating counters
  useEffect(() => {
    const intervals = quickFacts.map((fact, index) => {
      const increment = Math.max(1, Math.ceil(fact.value / 100)); // Ensure at least an increment of 1
      return setInterval(() => {
        setCounters((prev) => {
          const newCounters = [...prev];
          if (newCounters[index] + increment >= fact.value) {
            // Set directly to target if next increment overshoots
            newCounters[index] = fact.value;
          } else {
            newCounters[index] += increment;
          }
          return newCounters;
        });
      }, 20); // Update every 20ms
    });
  
    return () => intervals.forEach((interval) => clearInterval(interval)); // Cleanup intervals
  }, [quickFacts]);
  

  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${homeBackground})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex justify-center items-center text-white text-center p-8">
          <div className="max-w-3xl">
            {/* Responsive Heading */}
            <h1 className="text-5xl font-extrabold mb-4 tracking-tight">
              <span className="hidden sm:inline">Welcome to </span>
              Mbita High School
            </h1>

            {/* Buttons */}
            <div className="flex justify-center space-x-4">
              <Link to="/apply-for-admission">
                <button className="px-8 py-3 h-14 bg-[#E7AC0B] hover:bg-[#d69908] text-white text-lg rounded-md shadow-lg flex items-center justify-center">
                  Apply Today
                </button>
              </Link>
              <Link to="/location">
                <button className="px-8 py-3 h-14 border-2 border-white text-white text-lg rounded-md shadow-lg hover:bg-white hover:text-black flex items-center justify-center">
                  Location
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>


      {/* Why Join Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-8">Why Join Mbita High School?</h2>
          <p className="text-lg md:text-xl mb-12 leading-relaxed">
          <p className="text-lg md:text-xl mb-6 leading-relaxed">
              Since 1966, Mbita High School has been a beacon of academic excellence and
              character nurturing. Nestled along the shores of Lake Victoria in Homa Bay
              County, we are a National School with a legacy of nurturing leaders and
              innovators.
            </p>
            We offer a holistic education experience that combines
            academic excellence, talent nurturing, and leadership development in a serene
            environment.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Academic Excellence</h3>
              <p className="text-lg">
                Our curriculum ensures students excel in academics and achieve their
                career aspirations.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Leadership Development</h3>
              <p className="text-lg">
                We nurture future leaders with strong character and moral values.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Talent Nurturing</h3>
              <p className="text-lg">
                Our school provides ample opportunities for students to discover and
                develop their unique talents.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Facts Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-8">Quick Facts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {quickFacts.map((fact, index) => (
              <div
                key={index}
                className="bg-gray-100 p-8 rounded-lg shadow-md hover:shadow-lg"
              >
                <h3
                  className="text-5xl font-extrabold mb-4"
                  style={{ color: "#A20515" }}
                >
                  {counters[index]}
                  {fact.isPercentage && "%"}
                  {(fact.title === "Alumni Community" || fact.title === "Student Population") && "+"}
                </h3>
                <h4 className="text-2xl font-bold mb-4">{fact.title}</h4>
                <p className="text-lg">{fact.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        {/* Other sections */}
        <News />
      </div>
    </div>
  );
};

export default Home;
