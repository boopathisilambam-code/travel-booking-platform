import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import Header from "./Header";
import TajMahalImg from "../images/tajmahal.jpg";
import MunnarImg from "../images/munnar.jpg";
import OotyImg from "../images/ooty.jpg";
import GoldenImg from "../images/golden temble.jpg";
import AmberImg from "../images/amber.jpg";

export default function Home2() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [filteredPackages, setFilteredPackages] = useState([]);
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("1 Guest");

  const packagesList = [
      {
           id: 1,
           title: "Amber Palace",
           duration: "3 Nights, 4 Days",
           price: "₹12,000",
           img: AmberImg,
           description: "Enjoy the sun, sand, and sea at Goa's beautiful beaches.",
           reviews: [
             { user: "Alice", comment: "Amazing experience!" },
             { user: "Bob", comment: "Loved the beach activities." },
           ],
         },
         {
           id: 2,
           title: "Golden temble",
           duration: "5 Nights, 6 Days",
           price: "₹20,000",
           img: GoldenImg,
           description: "Trek the majestic Himalayas and experience adventure.",
           reviews: [
             { user: "Charlie", comment: "A thrilling trip!" },
             { user: "David", comment: "Breathtaking views!" },
           ],
         },
         {
           id: 3,
           title: "Munnar",
           duration: "4 Nights, 5 Days",
           price: "₹50,000",
           img: MunnarImg,
           description: "Explore the romantic city of Paris with guided tours.",
           reviews: [
             { user: "Eva", comment: "Loved the Eiffel Tower!" },
             { user: "Frank", comment: "Amazing cuisine and sights." },
           ],
         },
          {
           id: 4,
           title: "Ooty",
           duration: "4 Nights, 5 Days",
           price: "₹50,000",
           img: OotyImg,
           description: "Explore the romantic city of Paris with guided tours.",
           reviews: [
             { user: "Eva", comment: "Loved the Eiffel Tower!" },
             { user: "Frank", comment: "Amazing cuisine and sights." },
           ],
         },
          {
           id: 5,
           title: "Taj Mahal",
           duration: "4 Nights, 5 Days",
           price: "₹50,000",
           img: TajMahalImg,
           description: "Explore the romantic city of Paris with guided tours.",
           reviews: [
             { user: "Eva", comment: "Loved the Eiffel Tower!" },
             { user: "Frank", comment: "Amazing cuisine and sights." },
           ],
         },

  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) setFilteredPackages(packagesList);
    else
      setFilteredPackages(
        packagesList.filter((pkg) =>
          pkg.title.toLowerCase().includes(query.toLowerCase())
        )
      );
  };

  const handleView = (pkg) => {
    navigate(`/packages/${pkg.id}`, {
      state: { pkg, date, guests },
    });
  };

  return (
    <div className="home-container">
      <Header />

      {/* Hero Section */}
      <div className="images">
      <section className="hero">
        <div className="hero-content">
          <h1>Explore the World with Us 🌍</h1>
          <p>Book flights, hotels, and holiday packages with secure payments</p>
          <a href="/packages" className="btn-primary">
            Start Booking
          </a>
        </div>
      </section>
      </div>

      {/* Search Section */}
      <section className="search-section">
        <form className="search-form" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Where to?"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <select value={guests} onChange={(e) => setGuests(e.target.value)}>
            <option>1 Guest</option>
            <option>2 Guests</option>
            <option>3 Guests</option>
            <option>4+ Guests</option>
          </select>
          <button type="submit">Search</button>
        </form>
      </section>

      {/* Featured / Search Results */}
      <section className="packages-section">
        <h2>
          {filteredPackages.length > 0 ? "Search Results" : "Featured Travel Packages"}
        </h2>
        <div className="packages-grid">
          {(filteredPackages.length > 0 ? filteredPackages : packagesList).map(
            (pkg) => (
              <div className="package-card" key={pkg.id}>
                <img src={pkg.img} alt={pkg.title} />
                <div className="package-info">
                  <h3>{pkg.title}</h3>
                  <p>
                    {pkg.duration} – {pkg.price}
                  </p>
                  <button onClick={() => handleView(pkg)}>Book Now</button>
                </div>
              </div>
            )
          )}
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 TravelBooking. All rights reserved.</p>
      </footer>
    </div>
  );
}
