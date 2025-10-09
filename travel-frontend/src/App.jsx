import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Home2 from "./pages2/Home2";
import Packages from "./pages2/Packages";
import PackageDetails from "./pages2/PackageDetails";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

export default function App() {
  return (
    <Router>
      <div className="app-container">
       

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
             <Route path="/packages" element={<Packages />} />
            <Route path="/packages/:id" element={<PackageDetails />} />
             <Route path="/home" element={<Home2 />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
