import React, { useState } from "react";
import "./Donation.css";

const Donation = () => {
  const [amount, setAmount] = useState(""); // custom amount state

  // button click pe input box me value set karega
  const handleDonationClick = (value) => {
    setAmount(value);
  };
  return (
    <section id="donate" className="section">
      <div className="container">
        <h2 className="section_title">Support Our Cause</h2>
        <div className="fade_in">
          <p className="donate_message">
            Your contribution helps us continue our mission of creating positive
            change in communities.
          </p>

          <div className="donate_options">
            <button
              className="donate_btn"
              onClick={() => handleDonationClick(100)}
            >
              ₹100
            </button>
            <button
              className="donate_btn"
              onClick={() => handleDonationClick(500)}
            >
              ₹500
            </button>
            <button
              className="donate_btn"
              onClick={() => handleDonationClick(1000)}
            >
              ₹1000
            </button>
            <button
              className="donate_btn"
              onClick={() => handleDonationClick(2500)}
            >
              ₹2500
            </button>
          </div>

          <div className="custom_amount">
            <input
              type="number"
              id="customAmount"
              placeholder="Enter custom amount"
              min="1"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <button
              className="btn_primary"
              onClick={() => alert(`Thanking You to donate ₹${amount} !!`)}
            >
              Donate Custom Amount
            </button>
          </div>

          <div className="impactBox">
            <h4 className="impactTitle">Your Impact</h4>
            <div className="impactGrid">
              <div className="impactItem">
                <strong className="impactValue">₹100</strong>
                <br />
                <small className="impactText">Feeds 5 people</small>
              </div>
              <div className="impactItem">
                <strong className="impactValue">₹500</strong>
                <br />
                <small className="impactText">Plants 10 trees</small>
              </div>
              <div className="impactItem">
                <strong className="impactValue">₹1000</strong>
                <br />
                <small className="impactText">
                  Provides clothing for a family
                </small>

                <small className="impactText">
                  Provides clothing for a family
                </small>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donation;
