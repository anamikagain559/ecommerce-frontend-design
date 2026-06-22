import React from "react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <footer
      className="footer-area relative overflow-hidden bg-white py-12 border-t border-gray-100 text-center flex flex-col items-center justify-center"
      style={{ minHeight: "280px" }}
    >
      {/* Background Watermark Theme Decorations */}
      {/* Left Corner: Faded Leaf Cluster */}
      <img
        src="/assets/images/leaf-left.png"
        alt="deco-leaf"
        className="absolute left-0 bottom-0 h-56 md:h-72 opacity-[0.45] pointer-events-none select-none"
        style={{ transform: "rotate(-10deg) translate(-20px, 20px)" }}
      />

      {/* Right Corner: Faded Leaf + Flower Cluster */}
      <div
        className="absolute right-0 bottom-0 pointer-events-none select-none"
        style={{ transform: "translate(20px, 20px)" }}
      >
        <img
          src="/assets/images/leaf-right.png"
          alt="deco-leaf"
          className="h-56 md:h-72 opacity-[0.40] block"
          style={{ transform: "rotate(10deg)" }}
        />
        <img
          src="/assets/images/flower.png"
          alt="deco-flower"
          className="absolute right-12 bottom-12 h-28 md:h-36 opacity-[0.55] animate-spin"
          style={{ animationDuration: "60s" }}
        />
      </div>

      <div className="container relative z-10 flex flex-col items-center space-y-6">
        {/* 1. Center Brand Logo */}
        <div className="footer-logo mb-2 transition-transform duration-300 hover:scale-105 inline-block">
          <Link className="navbar-brand hover:opacity-80 transition-opacity" to="/">
            <svg
              width="200"
              height="60"
              viewBox="0 0 240 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="d-inline-block align-top"
            >
              {/* Icon Area */}
              <g transform="translate(10, 15)">
                {/* Sun / Orange Accent representing Hawaiian vibe */}
                <circle cx="25" cy="25" r="18" fill="#FFA259" opacity="0.9" />

                {/* Leaf / Coffee Bean representing freshness and coffee */}
                <path
                  d="M15 45 C5 25 25 5 45 15 C55 35 35 55 15 45 Z"
                  fill="#00A186"
                  opacity="0.9"
                />
                {/* Inner curve of the leaf/bean */}
                <path
                  d="M20 38 Q30 25 40 22"
                  stroke="#FFFFFF"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </g>

              {/* Text Area */}
              <text
                x="75"
                y="42"
                fontFamily="'Playfair Display', serif"
                fontSize="28"
                fontWeight="800"
                fill="#1a1a1a"
              >
                Cove
              </text>
              <text
                x="78"
                y="62"
                fontFamily="sans-serif"
                fontSize="12"
                fontWeight="700"
                letterSpacing="0.3em"
                fill="#00A186"
              >
                CAFE
              </text>
            </svg>
          </Link>
        </div>

        {/* 2. Horizontal Centered Navigation Links */}
        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 py-1">
          <Link
            to="/"
            className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 ${isActive("/")
              ? "bg-[#FFA259] text-white shadow-sm"
              : "text-gray-600 hover:text-[#FFA259] hover:bg-gray-50"
              }`}
          >
            Home
          </Link>
          <Link
            to="/menu"
            className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 ${isActive("/menu")
              ? "bg-[#FFA259] text-white shadow-sm"
              : "text-gray-600 hover:text-[#FFA259] hover:bg-gray-50"
              }`}
          >
            Features Products
          </Link>
          <Link
            to="/about"
            className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 ${isActive("/about")
              ? "bg-[#FFA259] text-white shadow-sm"
              : "text-gray-600 hover:text-[#FFA259] hover:bg-gray-50"
              }`}
          >
            About Us
          </Link>
          <Link
            to="/events"
            className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 ${isActive("/events")
              ? "bg-[#FFA259] text-white shadow-sm"
              : "text-gray-600 hover:text-[#FFA259] hover:bg-gray-50"
              }`}
          >
            Testimonials
          </Link>
          <Link
            to="/about"
            className="px-4 py-1.5 rounded-full text-sm font-semibold text-gray-600 hover:text-[#FFA259] hover:bg-gray-50 transition-all duration-300"
          >
            Blog
          </Link>
        </div>

        {/* 3. Centered Social Media Buttons */}
        <div className="flex justify-center gap-3.5 pt-1">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="h-9 w-9 rounded-full bg-[#00A186] text-white flex items-center justify-center hover:scale-110 hover:bg-[#FFA259] transition-all duration-300 shadow-sm"
          >
            <i className="fa fa-twitter" style={{ fontSize: "14px" }}></i>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="h-9 w-9 rounded-full bg-[#00A186] text-white flex items-center justify-center hover:scale-110 hover:bg-[#FFA259] transition-all duration-300 shadow-sm"
          >
            <i className="fa fa-facebook" style={{ fontSize: "14px" }}></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="h-9 w-9 rounded-full bg-[#00A186] text-white flex items-center justify-center hover:scale-110 hover:bg-[#FFA259] transition-all duration-300 shadow-sm"
          >
            <i className="fa fa-instagram" style={{ fontSize: "14px" }}></i>
          </a>
        </div>

        {/* 4. Centered Copyright */}
        <div className="pt-4 border-t border-gray-100 w-full max-w-lg">
          <p className="m-0 text-xs text-gray-400 font-light tracking-wide">
            All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
