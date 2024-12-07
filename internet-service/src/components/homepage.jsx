import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="bg-blue-600 text-white sticky top-0 z-50 shadow-md">
        <div className="container mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold">ISP Operations System</h1>
          <nav className="hidden md:flex gap-4">
            <a href="#about" className="hover:underline">About Us</a>
            <a href="#services" className="hover:underline">Services</a>
            <a href="#testimonials" className="hover:underline">Testimonials</a>
            <a href="#contact" className="hover:underline">Contact Us</a>
          </nav>
          <div className="flex gap-4">
            <button className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-100">
              Login
            </button>
            <button className="bg-yellow-500 px-4 py-2 text-white rounded hover:bg-yellow-600">
              Register
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
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
        <section id="about" className="bg-gray-50 py-10 px-6">
          <div className="container mx-auto">
            <h3 className="text-2xl font-bold mb-4">About Us</h3>
            <p className="text-gray-600">
              We provide a cutting-edge operational management system tailored for ISPs to centralize network performance monitoring, customer support, billing, and analytics. Our goal is to enhance operational efficiency, reduce downtime, and improve customer satisfaction.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="bg-white py-10 px-6">
          <div className="container mx-auto">
            <h3 className="text-2xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-4">
              <li>✔ Centralized Network Monitoring</li>
              <li>✔ Customer Support Integration</li>
              <li>✔ Automated Billing & Invoicing</li>
              <li>✔ Real-Time Analytics Dashboard</li>
              <li>✔ Alerts & Notifications</li>
            </ul>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="bg-gray-50 py-10 px-6">
          <div className="container mx-auto">
            <h3 className="text-2xl font-bold mb-4">What Our Clients Say</h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white p-4 rounded shadow">
                <p className="text-gray-600">"The ISP Operations System transformed our processes, making us more efficient and customer-focused."</p>
                <h4 className="font-bold mt-2">- John Doe, ISP Manager</h4>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <p className="text-gray-600">"Thanks to this system, we’ve drastically reduced downtime and improved customer satisfaction."</p>
                <h4 className="font-bold mt-2">- Jane Smith, Support Lead</h4>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <p className="text-gray-600">"A must-have for any ISP looking to streamline operations and boost productivity."</p>
                <h4 className="font-bold mt-2">- Alex Brown, CTO</h4>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section id="contact" className="bg-white py-10 px-6">
          <div className="container mx-auto">
            <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-600 mb-2">Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-2">Your Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-2">Message</label>
                <textarea
                  placeholder="Your message"
                  className="w-full p-2 border border-gray-300 rounded"
                  rows="4"
                ></textarea>
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 ISP Operations System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
