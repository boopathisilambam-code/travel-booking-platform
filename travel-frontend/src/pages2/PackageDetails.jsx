import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./PackageDetails.css";
import Header from "./Header";

export default function PackageDetails() {
  const location = useLocation();
  const navigate = useNavigate();

  const pkg = location.state?.pkg;      // Package details
  const date = location.state?.date;    // Selected date
  const guests = location.state?.guests; // Selected number of guests

  useEffect(() => {
    if (!pkg || !window.google) return;

    // Google Pay TEST environment
    const paymentsClient = new window.google.payments.api.PaymentsClient({ environment: "TEST" });
    const tokenizationSpec = {
      type: "PAYMENT_GATEWAY",
      parameters: {
        gateway: "example",
        gatewayMerchantId: "exampleGatewayMerchantId",
      },
    };

    const cardPaymentMethod = {
      type: "CARD",
      parameters: {
        allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
        allowedCardNetworks: ["VISA", "MASTERCARD", "AMEX"],
      },
      tokenizationSpecification: tokenizationSpec,
    };

    const paymentDataRequest = {
      apiVersion: 2,
      apiVersionMinor: 0,
      allowedPaymentMethods: [cardPaymentMethod],
      merchantInfo: { merchantName: "Travel Booking App" },
      transactionInfo: {
        totalPriceStatus: "FINAL",
        totalPrice: Number(pkg.price.replace(/[^\d.]/g, "")).toFixed(2),
        currencyCode: "INR",
      },
    };

    const button = paymentsClient.createButton({
      onClick: () => {
        paymentsClient.loadPaymentData(paymentDataRequest)
          .then(paymentData => {
            alert("Payment simulated (TEST). Token:\n" +
              paymentData.paymentMethodData.tokenizationData.token);
            navigate("/confirmation", { state: { pkg, date, guests, orderId: "TEST-" + Date.now() } });
          })
          .catch(err => console.error("Payment failed:", err));
      }
    });

    const container = document.getElementById("gpay-button");
    if (container) {
      container.innerHTML = "";
      container.appendChild(button);
    }
  }, [pkg, navigate]);

  if (!pkg) {
    return (
      <div>
        <h2>Package not found</h2>
        <button onClick={() => navigate("/")}>Back to Home</button>
      </div>
    );
  }

  return (
    <div className="pd-container">
      <Header />
      <button className="pd-btn-back" onClick={() => navigate("/home")}>
        &larr; Back to Home
      </button>
      <div className="pd-card">
        <img src={pkg.img} alt={pkg.title} className="pd-img" />
        <div className="pd-info">
          <h2 className="pd-title">{pkg.title}</h2>
          <p className="pd-duration">{pkg.duration}</p>
          <p className="pd-price">{pkg.price}</p>
          <p className="pd-description">{pkg.description}</p>

          {date && <p className="pd-date"><strong>Date:</strong> {date}</p>}
          {guests && <p className="pd-guests"><strong>Guests:</strong> {guests}</p>}

          {pkg.reviews && pkg.reviews.length > 0 && (
            <div className="pd-reviews-section">
              <h3>Reviews</h3>
              <ul className="pd-reviews">
                {pkg.reviews.map((r, i) => (
                  <li key={i} className="pd-review-item">
                    <strong>{r.user}:</strong> {r.comment}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Google Pay Button */}
          <div id="gpay-button" className="pd-btn-book"></div>
        </div>
      </div>
    </div>
  );
}
