import React from "react";
import AboutUs from "./aboutus";
import Testimonials from "./testimonials";

const MainContent = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-blue-100 text-center p-10">
        <h2 className="text-3xl font-bold mb-4">Welcome to ISP Operations System</h2>
        <p className="text-lg mb-6">
          Streamlining ISP operations with a unified management system for enhanced efficiency and customer satisfaction.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          Learn More
        </button>
      </section>

      {/* About Us Section */}
      <AboutUs />

      {/* Testimonials Section */}
      <Testimonials />
    </main>
  );
};

export default MainContent;
