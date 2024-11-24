import React from "react";
import { Link } from "react-router-dom";
import homeBackground from "./images/bg.jpg";

const Home = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${homeBackground})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex justify-center items-center text-white text-center p-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold mb-4">Welcome to Mbita High School</h1>
          <p className="text-lg mb-6">
            Since 1966, Mbita High School has been a beacon of academic excellence
            and character development. Nestled along the shores of Lake Victoria in
            Homa Bay County, we are a National School with a legacy of
            nurturing leaders and innovators. Our mission is simple: Paddle to Success.
          </p>
          <div className="space-x-4">
            <Link to="/apply-for-admission">
              <button className="px-6 py-2 bg-[#E7AC0B] text-white rounded-md">
                Apply Now
              </button>
            </Link>
            <Link to="/location">
              <button className="px-6 py-2 bg-transparent border-2 border-white text-white rounded-md">
                Location
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
