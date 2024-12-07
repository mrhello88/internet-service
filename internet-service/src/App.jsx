// import { useEffect } from "react";
// import { UseInternetService } from "./custom-hook/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage } from "./components/auth/Login/Login";
export const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<p>this is this home page</p>} />
          <Route path="/login" element={<LoginPage/>} />
        </Routes>
      </Router>
    </>
  );
};
 