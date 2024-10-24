import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import WhySentinel from "./Components/WhySentinel";
import AboutUs from "./Components/AboutUs";
import Dashboard from "./Pages/Dashboard";
import ContactUs from "./Components/ContactUs";
import Navbar from "./Components/Navbar";
import DashboardSelector from "./Components/DashboardSelector";
function App() {
  function NavbarSelector() {
    const location = useLocation();

    if (location.pathname.startsWith("/dashboard")) {
      return <DashboardSelector />;
    }

    return <Navbar />;
  }
  return (
    <div className="bg-black px-10">
      <Router>
        <NavbarSelector />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/whysentinel" element={<WhySentinel />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
