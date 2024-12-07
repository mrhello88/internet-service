import React from "react";

const AboutUs = () => {
  return (
    <section id="about" className="bg-blue-100 py-10 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Section */}
        <div>
          <h2 className="text-3xl font-bold text-blue-600 mb-4">About Our ISP Operations System</h2>
          <p className="text-gray-700 mb-6">
            Our ISP Operations System is designed to streamline ISP management by centralizing
            network monitoring, customer support, billing, and analytics. We aim to reduce downtime, 
            improve operational efficiency, and enhance customer satisfaction.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Learn More
          </button>
        </div>

        {/* Right Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-blue-600 mb-4">What We Do</h3>
          <ul className="space-y-4">
            <li className="flex items-center">
              <span className="bg-blue-600 text-white p-2 rounded-full mr-4">
                ✔
              </span>
              <span className="text-gray-700">Centralized Network Monitoring</span>
            </li>
            <li className="flex items-center">
              <span className="bg-blue-600 text-white p-2 rounded-full mr-4">
                ✔
              </span>
              <span className="text-gray-700">Efficient Customer Support</span>
            </li>
            <li className="flex items-center">
              <span className="bg-blue-600 text-white p-2 rounded-full mr-4">
                ✔
              </span>
              <span className="text-gray-700">Billing & Invoicing Automation</span>
            </li>
            <li className="flex items-center">
              <span className="bg-blue-600 text-white p-2 rounded-full mr-4">
                ✔
              </span>
              <span className="text-gray-700">Real-Time Analytics</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
