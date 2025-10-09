import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Packages.css";
import "../pages2/PackageDetails";
import Header from "./Header";
import TajMahalImg from "../images/tajmahal.jpg";
import MunnarImg from "../images/munnar.jpg";
import OotyImg from "../images/ooty.jpg";
import GoldenImg from "../images/golden temble.jpg";
import AmberImg from "../images/amber.jpg";

export default function Packages() {
  const navigate = useNavigate();

  const [packages] = useState([
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
  ]);

  const handleBook = (pkg) => {
    alert(`You selected: ${pkg.title}\nPrice: ${pkg.price}`);
    // Integrate payment API or navigate to Payment page
  };

  const handleView = (pkg) => {
    navigate(`/packages/${pkg.id}`, { state: { pkg } }); // Navigate to PackageDetails
  };

  return (
    <><Header/>
    <div className="packages-container">
      
      <h2>Our Travel Packages</h2>
      <div className="packages-grid">
        {packages.map((pkg) => (
          <div className="package-card" key={pkg.id}>
            <img src={pkg.img} alt={pkg.title} />
            <div className="package-info">
              <h3>{pkg.title}</h3>
              <p>{pkg.duration}</p>
              <p className="price">{pkg.price}</p>
              <div className="package-buttons">
                
                <button className="btn-view" onClick={() => handleView(pkg)}>
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
