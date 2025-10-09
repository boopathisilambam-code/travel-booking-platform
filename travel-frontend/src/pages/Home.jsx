import "./Home.css";
import Header from "../components/Header";
import TajMahalImg from "../images/tajmahal.jpg";
import MunnarImg from "../images/munnar.jpg";
import OotyImg from "../images/ooty.jpg";
import GoldenImg from "../images/golden temble.jpg";
import AmberImg from "../images/amber.jpg";


export default function Home() {
  return (
    <div className="home-container">
     
     <Header />
      {/* Hero Section */}
      <div className="images">
      <section className="hero">
        <div className="hero-content">
          <h1>Explore the World with Us 🌍</h1>
          <p>Book flights, hotels, and holiday packages with secure payments</p>
          <a href="/packages" className="btn-primary">Start Booking</a>
        </div>
      </section>
      </div>

      {/* Search Section */}
      <section className="search-section">
        <form className="search-form">
          <input type="text" placeholder="Where to?" />
          <input type="date" />
          <select>
            <option>1 Guest</option>
            <option>2 Guests</option>
            <option>3 Guests</option>
            <option>4+ Guests</option>
          </select>
          <button type="submit">Search</button>
        </form>
      </section>

      {/* Featured Packages */}
      <section className="packages-section">
        <h2>Featured Travel Packages</h2>
        <div className="packages-grid">
          {/* Card 1 */}
          <div className="package-card">
            <img src={OotyImg} alt="Ooty" />
            <div className="package-info">
              <h3>Ooty</h3>
              <p>3 Nights, 4 Days – ₹12,000</p>
              <button>Book Now</button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="package-card">
            <img src={MunnarImg} alt="Munnar" />
            <div className="package-info">
              <h3>Munnar </h3>
              <p>5 Nights, 6 Days – ₹20,000</p>
              <button>Book Now</button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="package-card">
            <img src={TajMahalImg} alt="TajMahal" />
            <div className="package-info">
              <h3>TajMahal</h3>
              <p>4 Nights, 5 Days – ₹50,000</p>
              <button>Book Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 TravelBooking. All rights reserved.</p>
      </footer>
    </div>
  );
}
