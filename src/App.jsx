// App.js
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import WhySentinel from "./Components/WhySentinel";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import PracticeBruh from "./Components/PracticeBruh";
import Positions from "./Components/Positions";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="">
      <Router /*basename="/Sentinel-Shield"*/>
        <ConditionalNavbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/whysentinel" element={<WhySentinel />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/practicebruh" element={<PracticeBruh />} />
          <Route path="/positions" element={<Positions />} />
        </Routes>
      </Router>
    </div>
  );
}

// This component renders the Navbar only on specified paths
function ConditionalNavbar() {
  const location = useLocation();

  // Define routes where the Navbar should be displayed
  const navbarRoutes = ["/", "/whysentinel", "/aboutus", "/contactus"];

  // Check if the current path matches any of the navbarRoutes
  return navbarRoutes.includes(location.pathname) ? <Navbar /> : null;
}

export default App;
