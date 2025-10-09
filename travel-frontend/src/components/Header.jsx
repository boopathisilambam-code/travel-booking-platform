import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">TravelBooking</h1>
        <nav className="nav-links">
          <Link to="/">Home</Link>
         
          <Link to="/login">Login</Link>
        </nav>
      </div>
    </header>
  );
}
