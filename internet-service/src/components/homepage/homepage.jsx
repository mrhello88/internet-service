import React from "react";
import Navbar from "../navbar/navbar";
import Footer from "../navbar/footer";
import MainContent from "./maincontent";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  );
};

export default HomePage;
