import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useCart } from "../Provider/CartProvider";
import { FiTrash2 } from "react-icons/fi";

const Navbar = () => {
  const { cart, removeFromCart, getCartItemKey, subtotal, serviceCharge, vat, grandTotal } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const navigate = useNavigate();

  const totalCartProducts = cart.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleCart = (e) => {
    e.preventDefault();
    setIsCartOpen(!isCartOpen);
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleCartRedirect = (path) => {
    setIsCartOpen(false);
    navigate(path);
  };

  return (
    <>
      {/* Floating Cart Button (Top Right as in PHP site) */}
      <div className="global-cart-btn" style={{ zIndex: 1040 }}>
        <a href="/cart" className="cart-button">
          <i className="fa fa-shopping-cart"></i>
          <span id="totalCartProductsView">{totalCartProducts}</span>
        </a>
      </div>

      {/* Header Area */}
      <header className={`header-area ${isSticky ? "sticky-header" : ""}`}>
        <nav className="navbar navbar-expand-lg main-menu">
          <div className="container">
            <Link className="navbar-brand" to="/">
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

            <button
              className={`navbar-toggler ${isNavOpen ? "" : "collapsed"}`}
              type="button"
              onClick={toggleNav}
              aria-controls="navbarSupportedContent"
              aria-expanded={isNavOpen}
              aria-label="Toggle navigation"
            >
              <span className="menu-toggle"></span>
            </button>

            <div className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`} id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <NavLink className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`} to="/" onClick={() => setIsNavOpen(false)}>
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`} to="/about" onClick={() => setIsNavOpen(false)}>
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`} to="/menu" onClick={() => setIsNavOpen(false)}>
                    Menu
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`} to="/events" onClick={() => setIsNavOpen(false)}>
                    Events
                  </NavLink>
                </li>

              </ul>
              <div className="header-btn justify-content-end">
                <Link to="/menu" className="bttn-mid btn-emt login-button">
                  Order Online
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>

    </>
  );
};

export default Navbar;
