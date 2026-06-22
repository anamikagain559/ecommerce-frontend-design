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
        <a href="#" onClick={toggleCart} className="cart-button">
          <i className="fa fa-shopping-cart"></i>
          <span id="totalCartProductsView">{totalCartProducts}</span>
        </a>
      </div>

      {/* Header Area */}
      <header className={`header-area ${isSticky ? "sticky-header" : ""}`}>
        <nav className="navbar navbar-expand-lg main-menu">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img src="/assets/images/logo.png" className="d-inline-block align-top" alt="Kona Cafe Logo" />
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
                <li className="nav-item">
                  <a className="nav-link" href="/#location" onClick={() => setIsNavOpen(false)}>
                    Location/Hours
                  </a>
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

      {/* Slide-out Cart Sidebar (Duplicate from Reference design) */}
      <aside id="sidebar-cart" className={isCartOpen ? "open" : ""}>
        <main>
          <a href="#" onClick={toggleCart} className="close-button">
            <span className="close-icon">X</span>
          </a>
          
          <div className="cart-content-holder mt-40" style={{ padding: "10px", textAlign: "left" }}>
            <h4 className="centered mb-20 font-playfair font-bold">Shopping Bag</h4>
            
            {cart.length === 0 ? (
              <p className="centered text-muted text-sm mt-30">Your bag is empty.</p>
            ) : (
              <div className="sidebar-cart-list" style={{ maxHeight: "400px", overflowY: "auto" }}>
                {cart.map((item) => {
                  const uniqueKey = getCartItemKey(item);
                  return (
                    <div key={uniqueKey} className="row mb-15 pb-15" style={{ borderBottom: "1px solid #ddd", margin: "0px" }}>
                      <div className="col-3 pl-0 pr-0">
                        <img
                          src={`/erp/images/${item.photo}`}
                          alt={item.name}
                          style={{ width: "100%", borderRadius: "8px", objectCover: "cover" }}
                        />
                      </div>
                      <div className="col-7 pr-0" style={{ fontSize: "12px", lineHeight: "1.4em" }}>
                        <h6 style={{ fontSize: "13px", fontWeight: "bold" }} className="mb-1">{item.name}</h6>
                        <p className="text-muted mb-0">{item.selectedSize.name}</p>
                        {item.selectedOption && <p className="text-muted mb-0">Base: {item.selectedOption}</p>}
                        {item.selectedAddons.length > 0 && (
                          <p className="text-muted mb-0" style={{ fontSize: "10px" }}>
                            + {item.selectedAddons.map(a => a.name).join(", ")}
                          </p>
                        )}
                        <p className="mt-1">
                          <strong>{item.quantity}</strong> x ৳{item.price}
                        </p>
                      </div>
                      <div className="col-2 text-right pr-0 flex items-center justify-center">
                        <button
                          onClick={() => removeFromCart(uniqueKey)}
                          style={{ background: "transparent", color: "#E15C6C" }}
                        >
                          <FiTrash2 size={16} />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
            
            {cart.length > 0 && (
              <div className="sidebar-cart-summary mt-20 pt-10" style={{ borderTop: "2px solid #FFA259", fontSize: "13px" }}>
                <div className="flex justify-between font-bold mb-10">
                  <span>Cart Total:</span>
                  <span>৳{subtotal}</span>
                </div>
                <div className="flex justify-between text-muted mb-5 text-xs">
                  <span>Service Charge (10%):</span>
                  <span>৳{serviceCharge}</span>
                </div>
                <div className="flex justify-between text-muted mb-5 text-xs">
                  <span>VAT (5%):</span>
                  <span>৳{vat}</span>
                </div>
                <div className="flex justify-between font-bold mt-10 pt-10" style={{ borderTop: "1px solid #ddd" }}>
                  <span>Grand Total:</span>
                  <span>৳{grandTotal}</span>
                </div>
              </div>
            )}
          </div>

          <div className="action-buttons centered mt-30">
            <button className="bttn-mid btn-fill mr-10" onClick={() => handleCartRedirect("/cart")}>
              Cart
            </button>
            <button className="bttn-mid btn-fill" onClick={() => handleCartRedirect("/checkout")}>
              Checkout
            </button>
          </div>

          <div className="text-center mt-30" style={{ padding: "5px", width: "100%", border: "2px solid #FFA259", borderRadius: "8px" }}>
            <span style={{ fontSize: "10px" }}>**Price Includes 10% Service Charge & 5% VAT</span>
          </div>
        </main>
      </aside>
      
      {/* Curtain behind cart */}
      <div
        id="sidebar-cart-curtain"
        className={isCartOpen ? "open" : ""}
        onClick={() => setIsCartOpen(false)}
      ></div>
    </>
  );
};

export default Navbar;
