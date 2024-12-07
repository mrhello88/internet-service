import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white">
      <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* About Section */}
        <div>
          <h3 className="font-bold text-lg mb-2">About Us</h3>
          <p className="text-sm">
            ISP Operations System is dedicated to providing cutting-edge solutions for ISPs to streamline operations, improve efficiency, and enhance customer satisfaction.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-2">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:underline">About Us</a></li>
            <li><a href="#services" className="hover:underline">Services</a></li>
            <li><a href="#testimonials" className="hover:underline">Testimonials</a></li>
            <li><a href="#contact" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-bold text-lg mb-2">Contact</h3>
          <p className="text-sm">
            Email: support@ispoperations.com <br />
            Phone: +1 234 567 890 <br />
            Address: 123 ISP Lane, Tech City
          </p>
        </div>
      </div>
      <div className="bg-blue-700 text-center py-3 text-sm">
        &copy; 2024 ISP Operations System. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
