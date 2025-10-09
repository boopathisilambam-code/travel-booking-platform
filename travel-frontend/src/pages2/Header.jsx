import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">TravelBooking</h1>
        <nav className="nav-links">
          <Link to="/home">Home</Link>
          <Link to="/packages">Packages</Link>
          
        </nav>
      </div>
    </header>
  );
}
