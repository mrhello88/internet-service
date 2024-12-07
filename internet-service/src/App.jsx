// import { useEffect } from "react";
// import { UseInternetService } from "./custom-hook/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage } from "./components/auth/Login/Login";
import HomePage from "./components/homepage/homepage";
export const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/login" element={<LoginPage/>} />
        </Routes>
      </Router>
    </>
  );
};
 