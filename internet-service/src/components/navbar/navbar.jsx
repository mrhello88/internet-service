import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Company Name */}
        <h1 className="text-2xl font-bold">ISP Operations System</h1>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-4">
          <a href="#about" className="hover:underline">About Us</a>
          <a href="#services" className="hover:underline">Services</a>
          <a href="#testimonials" className="hover:underline">Testimonials</a>
          <a href="#contact" className="hover:underline">Contact Us</a>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-100">
            Login
          </button>
          <button className="bg-yellow-500 px-4 py-2 rounded text-white hover:bg-yellow-600">
            Register
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden bg-white text-blue-600 px-3 py-2 rounded hover:bg-blue-100">
          
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
