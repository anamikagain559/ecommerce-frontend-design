import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      {/* Footer Area */}
      <footer className="footer-area section-padding-2">
        <div className="container">
          <div className="row">
            {/* Column 1: Locations */}
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 text-left">
              <div className="footer-widget mr-4">
                <div className="footer-logo mb-20">
                  <a href="/">
                    <img src="/assets/images/logo.png" alt="Kona Logo" />
                  </a>
                </div>
                <p style={{ fontSize: "14px" }} className="mb-10">
                  Lakeshore Hotel (Open 24/7)
                  <br />
                  House: 46, Road: 41, Gulshan 2, Dhaka 1212
                </p>
                <p style={{ fontSize: "14px" }} className="mb-20">
                  Chefs Table Courtside (12:00 - 22:00)
                  <br />
                  Madani Ave, Dhaka 1212
                </p>
                <h3 className="cl-primary font-bold" style={{ fontSize: "18px" }}>
                  Hotline: +8801300290494
                </h3>
              </div>
            </div>

            {/* Column 2: Information */}
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 text-left">
              <div className="footer-widget footer-nav">
                <h3>Information</h3>
                <ul>
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <Link to="/menu">Product Information</Link>
                  </li>
                  <li>
                    <Link to="/about">Legal Information</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Column 3: Customer Service */}
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 text-left">
              <div className="footer-widget footer-nav">
                <h3>Customer Service</h3>
                <ul>
                  <li>
                    <a href="/#location">Contact Us</a>
                  </li>
                  <li>
                    <Link to="/menu">Site Map</Link>
                  </li>
                  <li>
                    <a href="mailto:concierge@konacafebd.com">Webmail</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Column 4: Payment Partners */}
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 text-left">
              <div className="footer-widget footer-nav">
                <h3>Payment Methods</h3>
                <img
                  src="/assets/images/payment.png"
                  alt="Accepted Payment Methods (SSLCommerz, Visa, MasterCard, BKash, Rocket)"
                  style={{ width: "100%", maxWidth: "250px", marginTop: "10px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* /Footer Area */}

      {/* Copyright */}
      <div className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 text-left">
              <div className="copy-text">
                <p>&copy; Kona Cafe {new Date().getFullYear()}. All rights reserved</p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 text-right">
              <div className="social">
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer">
                  <i className="fa fa-instagram"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer">
                  <i className="fa fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
