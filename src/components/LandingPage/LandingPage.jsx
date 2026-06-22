import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { products } from "../mockData";


const LandingPage = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeShack, setActiveShack] = useState(0);
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -320,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 320,
        behavior: "smooth",
      });
    }
  };


  const slides = [
    {
      title: "Bursting With Flavour",
      description: "The finest ingredients from land and sea, serving them up Hawaii-style, as fresh and wholesome bowls.",
      productId: 50,
      image: "/assets/images/food.png",
      colorClass: "cl-mint"
    },
    {
      title: "A Bowl Full Of Love!",
      description: "The original inspiration for Ahi Poké came following a road trip up the California coast. Traditional forms are aku and heʻe.",
      productId: 52,
      image: "/assets/images/food-3.png",
      colorClass: "cl-pink"
    },
    {
      title: "Bibimbap - The Ultimate Comfort Food !!",
      description: "More traditional and authentic versions of Bibimbap are made with beef and raw egg yolk along with fresh seasoned vegetables.",
      productId: 48,
      image: "/assets/images/food-2.png",
      colorClass: "cl-blue"
    }
  ];

  const shacks = [
    {
      id: 0,
      name: "Lakeshore Hotel Shack",
      tag: "Open 24/7",
      color: "#00A186",
      address: "House: 46, Road: 41, Gulshan 2, Dhaka 1212",
      hotline: "+8801300290494",
      image: "/assets/images/about-4.png",
      hours: "Always Open (24 Hours)",
      feature: "Valet Parking & Dine-in Patio"
    },
    {
      id: 1,
      name: "Chefs Table Courtside",
      tag: "12:00 PM - 10:00 PM",
      color: "#E15C6C",
      address: "Madani Ave, Shatarkul, Dhaka 1212",
      hotline: "+8801300290494",
      image: "/assets/images/gallery-1.png",
      hours: "12:00 PM - 10:00 PM Daily",
      feature: "Kids Play Zone & Outdoors Seating"
    },
    {
      id: 2,
      name: "Banani Lakeside Shack",
      tag: "11:00 AM - 11:00 PM",
      color: "#FFA259",
      address: "House: 82, Road: 11, Block H, Banani, Dhaka 1213",
      hotline: "+8801300290494",
      image: "/assets/images/gallery-2.png",
      hours: "11:00 AM - 11:00 PM Daily",
      feature: "Lakeside View Deck & Brew Bar"
    },
    {
      id: 3,
      name: "Dhanmondi Lake Shack",
      tag: "11:00 AM - 10:30 PM",
      color: "#1494C3",
      address: "House: 35, Road: 27 Old, Dhanmondi, Dhaka 1209",
      hotline: "+8801300290494",
      image: "/assets/images/gallery-3.png",
      hours: "11:00 AM - 10:30 PM Daily",
      feature: "Dine-in Cabin & Bubble Tea Lounge"
    }
  ];

  // Auto transition slides
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  // Popup modal on load
  useEffect(() => {
    const shown = sessionStorage.getItem("kona_popup_shown");
    if (!shown) {
      setTimeout(() => {
        Swal.fire({
          title: "Sign Up for our Newsletter!",
          text: "We’ll be sending you offers and discounts every week",
          input: "email",
          inputPlaceholder: "Enter your email address",
          imageUrl: "/assets/images/popup.jpg",
          imageWidth: 400,
          imageHeight: 250,
          imageAlt: "Newsletter Popup",
          background: "#FFFFFF",
          color: "#000000",
          confirmButtonColor: "#FFA259",
          confirmButtonText: "Signup Now",
          showCloseButton: true,
          customClass: {
            popup: "rounded-3xl shadow-2xl",
            confirmButton: "bttn-mid btn-fill"
          }
        }).then((result) => {
          if (result.value) {
            Swal.fire({
              title: "Welcome aboard!",
              text: "Thank you for subscribing to Kona Cafe updates.",
              icon: "success",
              confirmButtonColor: "#FFA259",
            });
          }
        });
        sessionStorage.setItem("kona_popup_shown", "true");
      }, 2000);
    }
  }, []);

  return (
    <div className="page-wrapper bg-[#F8F8F8] overflow-hidden">
      {/* 1. HERO SLIDER */}
      <div className="hero leaf gray-bg-2 flower relative flex items-center" style={{ minHeight: "650px" }}>
        {/* Background glow layers */}
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-[#FFA259]/5 rounded-full filter blur-[100px] pointer-events-none animate-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00A186]/5 rounded-full filter blur-[120px] pointer-events-none"></div>

        {slides.map((slide, index) => (
          <div
            key={index}
            className={`banner-slide w-full transition-all duration-1000 ${
              activeSlide === index ? "opacity-100 relative block translate-y-0" : "opacity-0 absolute inset-0 hidden translate-y-10"
            }`}
          >
            <section className="banner-area section-padding">
              <div className="container">
                <div className="row items-center">
                  {/* Left Column: text content */}
                  <div className="col-xl-6 col-md-6 order-sm-1 order-2 text-left">
                    <div className="banner animate-slide-up space-y-4">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-[#FFA259]/20 rounded-full bg-white mb-10 shadow-sm">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#FFA259] animate-ping"></span>
                        <span className="text-[10px] uppercase tracking-widest text-[#FFA259] font-bold">
                          Kona Signature Bowls
                        </span>
                      </div>
                      
                      <h1 className="font-playfair font-extrabold leading-tight tracking-wide text-black" style={{ fontSize: "52px" }}>
                        {slide.title}
                      </h1>
                      <p className="mt-15 mb-30 text-[#666] font-light leading-relaxed" style={{ fontSize: "16px", maxWidth: "480px" }}>
                        {slide.description}
                      </p>
                      
                      <div className="pt-10">
                        <Link to={`/product/${slide.productId}`} className="bttn-mid btn-fill">
                          Order now &nbsp; &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: floating food plate */}
                  <div className="col-xl-6 col-md-6 order-sm-2 order-1 text-center flex justify-center relative">
                    <div className="banner relative group">
                      {/* Decorative backdrop circle */}
                      <div className="absolute -inset-4 bg-[#FFA259]/10 rounded-full blur pointer-events-none"></div>
                      
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="img-fluid animate-float relative z-10"
                        style={{ maxHeight: "420px", filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.12))" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        ))}

        {/* Slider Navigation Dots */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-3" style={{ zIndex: 10 }}>
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveSlide(i)}
              className={`w-3.5 h-3.5 rounded-full border-2 border-white transition-all ${
                activeSlide === i ? "bg-[#FFA259] scale-125 px-15" : "bg-gray-300"
              }`}
              style={{ borderRadius: "20px" }}
            ></button>
          ))}
        </div>
      </div>

      {/* 2. ABOUT AREA 1 (Animal Fries & Hotdogs) */}
      <section className="banner-area section-padding bg-white text-left relative" id="about" style={{ height: "auto", minHeight: "auto" }}>
        <div className="container">
          <div className="row items-center">
            <div className="col-xl-6 col-md-6 text-center mb-40 mb-md-0">
              <div className="banner-img relative inline-block group">
                <div className="absolute inset-0 bg-[#00A186]/5 rounded-3xl blur scale-105 pointer-events-none"></div>
                <img
                  src="/assets/images/about.png"
                  alt="Animal Fries and Hot Dogs"
                  className="img-fluid rounded-3xl relative z-10 transform transition-transform duration-700 group-hover:scale-102"
                  style={{ borderRadius: "24px", filter: "drop-shadow(0 15px 30px rgba(0,0,0,0.06))" }}
                />
              </div>
            </div>
            <div className="col-xl-6 col-md-6 pl-xl-50">
              <div className="banner space-y-4">
                <h3 className="cl-mint font-playfair font-extrabold mb-20 leading-tight" style={{ fontSize: "36px" }}>
                  Animal Fries and Hot Dogs: <br />
                  Treat for Everyone
                </h3>
                <p style={{ color: "#666", fontSize: "16px", lineHeight: "1.8em" }} className="font-light">
                  Whether it’s Crunchy or Spicy, there’s a choice for everyone. Our tasty fries & in-house Hawaiian
                  Bun for Hot Dogs make everything better. Grab a bowl of loaded fries topped with caramelized onions
                  and our secret sweet-savory sauce, or pair it with our toasted hot dog bun!
                </p>
                <div className="pt-20">
                  <Link to="/menu" className="bttn-mid btn-fill" style={{ background: "linear-gradient(135deg, #00A186 0%, #00C9B7 100%)", boxShadow: "0 8px 20px rgba(0, 161, 134, 0.2)" }}>
                    Explore Snacks
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2.5. BEST SELLING PRODUCTS CAROUSEL */}
      <section className="py-16 bg-[#F8F8F8] relative" id="best-selling">
        <div className="container relative">
          {/* Header Row */}
          <div className="flex justify-between items-end mb-30 px-4">
            <div className="relative">
              <h2 className="font-playfair font-extrabold text-[#1a1a1a]" style={{ fontSize: "36px", margin: 0 }}>
                Best Selling
              </h2>
              <div className="h-[3px] w-14 bg-[#FFA259] mt-2 rounded"></div>
            </div>
            <Link 
              to="/menu" 
              className="text-sm font-bold uppercase tracking-wider text-[#888] hover:text-[#FFA259] transition-colors"
            >
              View All
            </Link>
          </div>

          {/* Carousel Slider */}
          <div className="relative px-2">
            {/* Left Button */}
            <button 
              onClick={scrollLeft}
              className="absolute -left-2 md:-left-4 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gray-50 text-gray-800 shadow-md border border-gray-100 rounded-full w-11 h-11 flex items-center justify-center transition-all hover:scale-105 active:scale-95"
              style={{ cursor: "pointer" }}
              aria-label="Previous products"
            >
              <i className="fa fa-chevron-left text-xs text-gray-500"></i>
            </button>

            {/* Scroll Container */}
            <div 
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-none py-6 px-2"
            >
              {products
                .filter((product) => product.id >= 61 && product.id <= 68)
                .map((product) => (
                  <div 
                    key={product.id}
                    className="bg-white border border-gray-100 rounded-[28px] shadow-sm hover:shadow-md transition-all duration-300 p-6 flex flex-col items-center justify-between text-center w-[250px] md:w-[270px] flex-shrink-0"
                  >
                    {/* Food Image Circle */}
                    <Link 
                      to={`/product/${product.id}`} 
                      className="w-36 h-36 md:w-40 md:h-40 rounded-full overflow-hidden bg-gray-50 flex items-center justify-center p-2 mb-4 shadow-inner relative group/img"
                      style={{ display: "flex" }}
                    >
                      <img 
                        src={`/erp/images/${product.photo}`} 
                        alt={product.name} 
                        className="w-[90%] h-[90%] object-cover rounded-full transition-transform duration-500 group-hover/img:scale-105"
                      />
                    </Link>
                    
                    {/* Title & Price */}
                    <div className="flex flex-col flex-grow w-full justify-between">
                      <h4 className="font-playfair font-bold text-gray-900 mb-2 text-base md:text-[17px] line-clamp-2 min-h-[46px] hover:text-[#FFA259] transition-colors leading-snug">
                        <Link to={`/product/${product.id}`}>{product.name}</Link>
                      </h4>
                      <p className="text-[#FFA259] font-bold text-lg md:text-xl mt-auto m-0">
                        ৳{product.price}
                      </p>
                    </div>
                  </div>
                ))}
            </div>

            <button 
              onClick={scrollRight}
              className="absolute -right-2 md:-right-4 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gray-50 text-gray-800 shadow-md border border-gray-100 rounded-full w-11 h-11 flex items-center justify-center transition-all hover:scale-105 active:scale-95"
              style={{ cursor: "pointer" }}
              aria-label="Next products"
            >
              <i className="fa fa-chevron-right text-xs text-gray-500"></i>
            </button>
          </div>
        </div>
      </section>

      {/* 3. KONA REVIVES YOU (Floating Card layout with top/bottom margin) */}
      <section 
        className="relative overflow-hidden my-16 md:my-24 mx-4 md:mx-12 lg:mx-20 rounded-[32px] md:rounded-[48px] shadow-md border border-[#FFA259]/10" 
        style={{ backgroundColor: "#FAF2EC", height: "auto", minHeight: "auto" }}
      >
        {/* Floating background decorative leaves */}
        <img
          src="/assets/images/leaf-left.png"
          alt="deco-leaf"
          className="absolute -left-10 top-1/4 w-32 opacity-25 animate-float pointer-events-none"
          style={{ animationDuration: "8s" }}
        />
        <img
          src="/assets/images/leaf-right.png"
          alt="deco-leaf"
          className="absolute -right-10 bottom-1/4 w-32 opacity-25 animate-float pointer-events-none"
          style={{ animationDuration: "10s" }}
        />

        <div className="container py-16 px-6 md:px-16 relative z-10">
          <div className="row items-center">
            {/* Left side description */}
            <div className="col-lg-6 col-md-6 pr-xl-40">
              <div className="banner space-y-6">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#E15C6C] font-extrabold bg-[#E15C6C]/10 px-4 py-2 rounded-full inline-block">
                  Signature Boba & Smoothies
                </span>
                
                <h3 className="cl-pink font-playfair font-extrabold leading-tight mb-15" style={{ fontSize: "40px" }}>
                  Kona Revives You
                </h3>
                <div className="h-1.5 w-16 bg-[#E15C6C] rounded mb-20"></div>
                
                <p style={{ color: "#555", fontSize: "16px", lineHeight: "1.9em" }} className="font-light mb-20">
                  Twitch your day with our freshly blended juice or smoothie. Sweet, tangy and fresh, our juice will
                  give you a lift.
                </p>

                {/* Kona Story Blockquote */}
                <div className="border-l-4 border-[#E15C6C] pl-4 py-1 my-4 italic text-gray-600 font-light text-sm" style={{ lineHeight: "1.6em" }}>
                  “The name “Kona” pays homage to the beans cultivated on the slopes of Hualalai and Mauna Loa volcanoes in the Kona districts of Hawaii.”
                </div>

                {/* Elegant feature list highlights */}
                <div className="features-list grid grid-cols-1 md:grid-cols-2 gap-3 pt-10" style={{ fontSize: "13px" }}>
                  <div className="flex items-center gap-3 bg-white/60 p-3 rounded-xl border border-[#E15C6C]/10 hover:bg-white transition-all shadow-sm">
                    <span className="h-6 w-6 rounded-full bg-[#E15C6C]/10 text-[#E15C6C] flex items-center justify-center font-bold text-xs shrink-0">✓</span>
                    <span className="font-semibold text-black">100% Volcanic Soil Coffee</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/60 p-3 rounded-xl border border-[#E15C6C]/10 hover:bg-white transition-all shadow-sm">
                    <span className="h-6 w-6 rounded-full bg-[#E15C6C]/10 text-[#E15C6C] flex items-center justify-center font-bold text-xs shrink-0">✓</span>
                    <span className="font-semibold text-black">Artisanal Chewy Boba</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/60 p-3 rounded-xl border border-[#E15C6C]/10 hover:bg-white transition-all shadow-sm">
                    <span className="h-6 w-6 rounded-full bg-[#E15C6C]/10 text-[#E15C6C] flex items-center justify-center font-bold text-xs shrink-0">✓</span>
                    <span className="font-semibold text-black">Organic Fresh Fruits</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/60 p-3 rounded-xl border border-[#E15C6C]/10 hover:bg-white transition-all shadow-sm">
                    <span className="h-6 w-6 rounded-full bg-[#E15C6C]/10 text-[#E15C6C] flex items-center justify-center font-bold text-xs shrink-0">✓</span>
                    <span className="font-semibold text-black">Vegan Milk Options</span>
                  </div>
                </div>

                <div className="pt-20">
                  <Link
                    to="/menu"
                    className="bttn-mid btn-fill"
                    style={{
                      background: "linear-gradient(135deg, #E15C6C 0%, #FF8A9A 100%)",
                      boxShadow: "0 8px 25px rgba(225, 92, 108, 0.25)",
                    }}
                  >
                    View Beverages &nbsp; &rarr;
                  </Link>
                </div>
              </div>
            </div>

            {/* Right side image presentation */}
            <div className="col-lg-6 col-md-6 text-center mt-40 mt-md-0 flex justify-center">
              <div className="relative inline-block group">
                {/* Glow backdrop circle */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-[#E15C6C]/20 to-[#FF8A9A]/10 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Image */}
                <img
                  src="/assets/images/about-2.png"
                  alt="Kona Refreshing Drinks"
                  className="img-fluid relative z-10 rounded-[32px] transition-all duration-700 group-hover:scale-105"
                  style={{ maxHeight: "380px", objectFit: "cover", filter: "drop-shadow(0 15px 30px rgba(0,0,0,0.08))" }}
                />

                {/* Floating Boba Label */}
                <div
                  className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md p-3.5 px-4 rounded-2xl shadow-lg border border-gray-100 flex items-center gap-3 z-20 animate-float"
                  style={{ animationDuration: "5s" }}
                >
                  <div className="h-10 w-10 bg-[#E15C6C]/10 rounded-full flex items-center justify-center text-[#E15C6C] text-sm font-bold">
                    <i className="fa fa-glass"></i>
                  </div>
                  <div className="text-left pr-10">
                    <p className="text-[9px] uppercase tracking-wider text-muted font-bold m-0">
                      Handcrafted
                    </p>
                    <p className="text-xs font-bold text-black m-0">
                      Lychee Boba Tea
                    </p>
                  </div>
                </div>

                {/* Floating Top Badge */}
                <div
                  className="absolute -top-4 -right-4 bg-[#E15C6C] text-white p-2.5 px-3 rounded-2xl shadow-lg flex items-center gap-2 z-20 animate-float"
                  style={{ animationDuration: "7s" }}
                >
                  <i className="fa fa-coffee"></i>
                  <span className="text-[10px] uppercase font-bold tracking-wider">Volcanic Coffee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3.5. FEATURED CATEGORIES */}
      <section className="py-20 bg-white relative overflow-hidden" id="categories">
        {/* Subtle top border line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-[#FFA259] rounded-b-full"></div>

        <div className="container">
          {/* Header */}
          <div className="text-center mb-14">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#FFA259] font-extrabold bg-[#FFA259]/10 px-4 py-2 rounded-full inline-block mb-4">
              Explore Our Menu
            </span>
            <h2 className="font-playfair font-extrabold text-[#1a1a1a] mt-3" style={{ fontSize: "38px" }}>
              Featured Categories
            </h2>
            <div className="h-1 w-14 bg-[#FFA259] mx-auto mt-4 rounded"></div>
          </div>

          {/* Category Cards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
            {[
              { id: "poke-bowls", name: "Poke Bowls", icon: "🥗", color: "#00A186", bg: "#00A186", desc: "Fresh Hawaiian bowls", count: "6+ items" },
              { id: "bibimbap", name: "Bibimbap", icon: "🍚", color: "#E15C6C", bg: "#E15C6C", desc: "Korean comfort food", count: "3+ items" },
              { id: "fries-hotdogs", name: "Fries & Hotdogs", icon: "🌭", color: "#FFA259", bg: "#FFA259", desc: "Crispy snacks & dogs", count: "5+ items" },
              { id: "juice-smoothies", name: "Juice & Smoothies", icon: "🧃", color: "#1494C3", bg: "#1494C3", desc: "Fresh blended drinks", count: "4+ items" }
            ].map((cat) => (
              <Link
                to={`/menu?category=${cat.id}`}
                key={cat.id}
                className="group flex flex-col items-center text-center rounded-[28px] p-8 border border-gray-100 hover:border-transparent hover:shadow-xl transition-all duration-400 bg-white hover:-translate-y-1 relative overflow-hidden"
                style={{ cursor: "pointer" }}
              >
                {/* Hover gradient background */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-400 rounded-[28px]"
                  style={{ background: `radial-gradient(circle at 50% 50%, ${cat.bg}, transparent 70%)` }}
                ></div>

                {/* Icon circle */}
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-4xl mb-5 shadow-sm transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${cat.color}15`, border: `2px solid ${cat.color}25` }}
                >
                  {cat.icon}
                </div>

                <h4 className="font-playfair font-bold text-gray-900 text-base md:text-lg mb-1 group-hover:text-[#FFA259] transition-colors">{cat.name}</h4>
                <p className="text-xs text-gray-400 font-light mb-3">{cat.desc}</p>
                <span
                  className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full"
                  style={{ backgroundColor: `${cat.color}15`, color: cat.color }}
                >
                  {cat.count}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3.6. FEATURED PRODUCTS */}
      <section className="py-20 bg-[#F8F8F8] relative" id="featured">
        <div className="container">
          {/* Header */}
          <div className="flex justify-between items-end mb-12 px-4">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#E15C6C] font-extrabold bg-[#E15C6C]/10 px-4 py-2 rounded-full inline-block mb-3">
                Top Picks
              </span>
              <h2 className="font-playfair font-extrabold text-[#1a1a1a] mt-2" style={{ fontSize: "36px", margin: 0 }}>
                Featured Products
              </h2>
              <div className="h-[3px] w-12 bg-[#E15C6C] mt-3 rounded"></div>
            </div>
            <Link to="/menu" className="text-sm font-bold uppercase tracking-wider text-[#888] hover:text-[#E15C6C] transition-colors hidden md:block">
              Browse All →
            </Link>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
            {products.filter(p => [50, 63, 61, 40].includes(p.id)).map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-[24px] overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-400 hover:-translate-y-1 group"
              >
                {/* Product Image */}
                <Link to={`/product/${product.id}`} className="block relative overflow-hidden" style={{ height: "200px" }}>
                  <img
                    src={`/erp/images/${product.photo}`}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                    style={{ objectFit: "cover" }}
                  />
                  {/* Popular badge */}
                  <span className="absolute top-3 left-3 bg-[#FFA259] text-white text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded-full">
                    Popular
                  </span>
                </Link>

                {/* Card Body */}
                <div className="p-5">
                  <h4 className="font-playfair font-bold text-gray-900 text-base mb-1 line-clamp-1 group-hover:text-[#FFA259] transition-colors">
                    {product.name}
                  </h4>
                  <p className="text-xs text-gray-400 mb-4 line-clamp-2 font-light leading-relaxed">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#FFA259] font-extrabold text-lg">৳{product.price}</span>
                    <Link
                      to={`/product/${product.id}`}
                      className="h-9 w-9 rounded-full bg-[#FFA259] text-white flex items-center justify-center hover:bg-[#FF8C3A] transition-colors shadow-sm text-sm"
                    >
                      <i className="fa fa-plus"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 md:hidden">
            <Link to="/menu" className="bttn-mid btn-fill" style={{ background: "linear-gradient(135deg, #E15C6C 0%, #FF8A9A 100%)" }}>
              Browse All Items →
            </Link>
          </div>
        </div>
      </section>

      {/* 3.7. SPECIAL OFFERS */}
      <section className="relative overflow-hidden py-0 my-0" id="offers">
        <div
          className="relative mx-4 md:mx-12 lg:mx-20 rounded-[32px] md:rounded-[48px] overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #FFA259 0%, #FF6B6B 50%, #E15C6C 100%)",
            minHeight: "280px"
          }}
        >
          {/* Decorative circles */}
          <div className="absolute -top-16 -right-16 w-60 h-60 rounded-full bg-white/10 pointer-events-none"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-white/10 pointer-events-none"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full bg-white/5 pointer-events-none"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-10 md:px-16 py-14 gap-8">
            <div className="text-white text-center md:text-left">
              <span className="text-xs uppercase tracking-[0.3em] font-extrabold bg-white/20 px-4 py-1.5 rounded-full inline-block mb-4">
                Limited Time Offer
              </span>
              <h2 className="font-playfair font-extrabold leading-tight mb-3" style={{ fontSize: "40px" }}>
                Get <span className="text-yellow-200">20% OFF</span> Your First Order!
              </h2>
              <p className="text-white/80 font-light text-base max-w-md">
                Use code <strong className="bg-white/20 px-3 py-1 rounded-lg font-extrabold tracking-wider">KONA20</strong> at checkout. Valid for all dine-in and delivery orders this week.
              </p>
            </div>

            {/* CTA */}
            <div className="shrink-0 flex flex-col items-center gap-4">
              <Link
                to="/menu"
                className="bg-white font-extrabold text-[#FFA259] px-10 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95 text-sm tracking-wider uppercase whitespace-nowrap"
              >
                Order Now →
              </Link>
              <p className="text-white/60 text-[10px] font-light">*Terms and conditions apply</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3.8. WHY CHOOSE US */}
      <section className="py-24 bg-white relative" id="why-us">
        <div className="container">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#00A186] font-extrabold bg-[#00A186]/10 px-4 py-2 rounded-full inline-block mb-4">
              Our Promise
            </span>
            <h2 className="font-playfair font-extrabold text-[#1a1a1a] mt-3" style={{ fontSize: "38px" }}>
              Why Choose Kona Cafe?
            </h2>
            <div className="h-1 w-16 bg-[#00A186] mx-auto mt-4 rounded"></div>
          </div>

          {/* Value Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
            {[
              {
                icon: "🌿",
                color: "#00A186",
                title: "100% Fresh Ingredients",
                desc: "We source our produce daily from local farms and trusted seafood suppliers, ensuring every bowl is bursting with nutrients and flavor."
              },
              {
                icon: "⚡",
                color: "#FFA259",
                title: "Fast Delivery",
                desc: "Your order delivered hot and fresh in under 45 minutes. We partner with the best logistics providers to ensure speed and care."
              },
              {
                icon: "🏆",
                color: "#E15C6C",
                title: "Award-Winning Recipes",
                desc: "Our signature dishes have won multiple Best Restaurant awards in Dhaka since 2019, recognized for authentic Hawaiian flavors."
              },
              {
                icon: "💚",
                color: "#1494C3",
                title: "Healthy & Balanced",
                desc: "Low-calorie, high-protein bowls crafted by our in-house nutritionist. We offer vegan, gluten-free, and dairy-free options too."
              }
            ].map((item, i) => (
              <div
                key={i}
                className="group flex flex-col items-center text-center p-8 rounded-[24px] border border-gray-100 hover:border-transparent hover:shadow-lg transition-all duration-400 hover:-translate-y-1"
              >
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl mb-6 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${item.color}12`, border: `2px solid ${item.color}20` }}
                >
                  {item.icon}
                </div>
                <h4 className="font-playfair font-bold text-gray-900 text-lg mb-3">{item.title}</h4>
                <p className="text-sm text-gray-400 font-light leading-relaxed">{item.desc}</p>
                <div className="h-[3px] w-8 mt-5 rounded" style={{ backgroundColor: item.color }}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3.9. CUSTOMER REVIEWS */}
      <section className="py-24 bg-[#F8F8F8] relative overflow-hidden" id="reviews">
        {/* Watermark leaf */}
        <img
          src="/assets/images/leaf.png"
          alt=""
          className="absolute -right-16 top-0 w-48 opacity-5 pointer-events-none"
        />

        <div className="container">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#FFA259] font-extrabold bg-[#FFA259]/10 px-4 py-2 rounded-full inline-block mb-4">
              What Our Guests Say
            </span>
            <h2 className="font-playfair font-extrabold text-[#1a1a1a] mt-3" style={{ fontSize: "38px" }}>
              Customer Reviews
            </h2>
            <div className="h-1 w-14 bg-[#FFA259] mx-auto mt-4 rounded"></div>
          </div>

          {/* Review Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            {[
              {
                name: "Anika Rahman",
                role: "Regular Customer",
                avatar: "AR",
                color: "#00A186",
                rating: 5,
                text: "Honestly the best Poke Bowl in Dhaka! The Hawaiian Bun Hotdog is insane – the sweetness of the bun with the grilled sausage is just perfect. I visit at least twice a week!",
                dish: "Hawaiian Poke Bowl"
              },
              {
                name: "Rafid Hossain",
                role: "Food Blogger",
                avatar: "RH",
                color: "#E15C6C",
                rating: 5,
                text: "I've reviewed over 200 restaurants in Dhaka, and Kona Cafe stands out for its freshness and authenticity. The Lychee Boba Tea is handcrafted perfection. Highly recommended!",
                dish: "Lychee Rose Boba Tea"
              },
              {
                name: "Samia Tasnim",
                role: "Loyal Member",
                avatar: "ST",
                color: "#FFA259",
                rating: 5,
                text: "The Bibimbap here reminds me of my trip to Seoul! The kimchi side, the runny egg, the marinated beef – it's all cooked just right. The Banani shack has great ambiance too.",
                dish: "Korean Bibimbap Bowl"
              }
            ].map((review, i) => (
              <div
                key={i}
                className="bg-white rounded-[24px] p-8 border border-gray-100 hover:shadow-xl transition-all duration-400 hover:-translate-y-1 relative"
              >
                {/* Large quote mark */}
                <span className="absolute top-6 right-8 text-6xl font-serif leading-none opacity-10 select-none" style={{ color: review.color }}>
                  "
                </span>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, s) => (
                    <span key={s} className="text-[#FFA259] text-sm">★</span>
                  ))}
                </div>

                {/* Review text */}
                <p className="text-gray-600 font-light leading-relaxed text-sm mb-6">
                  "{review.text}"
                </p>

                {/* Dish tag */}
                <span
                  className="text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-5 inline-block"
                  style={{ backgroundColor: `${review.color}15`, color: review.color }}
                >
                  Ordered: {review.dish}
                </span>

                {/* Reviewer info */}
                <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-50">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
                    style={{ backgroundColor: review.color }}
                  >
                    {review.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm m-0">{review.name}</p>
                    <p className="text-xs text-gray-400 font-light m-0">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3.10. NEWSLETTER */}
      <section className="py-0 my-0 relative overflow-hidden" id="newsletter">
        <div
          className="relative mx-4 md:mx-12 lg:mx-20 rounded-[32px] md:rounded-[48px] overflow-hidden mb-16"
          style={{
            background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)"
          }}
        >
          {/* Decorative glows */}
          <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-[#FFA259]/15 blur-[80px] pointer-events-none"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-[#00A186]/10 blur-[80px] pointer-events-none"></div>

          <div className="relative z-10 flex flex-col items-center text-center py-16 px-8 md:px-20">
            {/* Icon */}
            <div className="w-14 h-14 rounded-full bg-[#FFA259]/20 border border-[#FFA259]/30 flex items-center justify-center mb-6">
              <i className="fa fa-envelope text-[#FFA259] text-xl"></i>
            </div>

            <span className="text-[10px] uppercase tracking-[0.3em] text-[#FFA259] font-extrabold bg-[#FFA259]/10 px-4 py-2 rounded-full inline-block mb-5">
              Stay Connected
            </span>
            <h2 className="font-playfair font-extrabold text-white mb-4" style={{ fontSize: "36px" }}>
              Subscribe to Our Newsletter
            </h2>
            <p className="text-white/60 font-light text-sm mb-8 max-w-md leading-relaxed">
              Get weekly deals, new menu drops, exclusive event invites, and a <strong className="text-[#FFA259]">15% discount</strong> on your next order – straight to your inbox.
            </p>

            {/* Input form */}
            <form
              className="flex flex-col sm:flex-row gap-3 w-full max-w-lg"
              onSubmit={(e) => {
                e.preventDefault();
                const email = e.target.email.value;
                if (email) {
                  e.target.reset();
                  Swal.fire({
                    title: "You're Subscribed! 🎉",
                    text: "Welcome to the Kona family! Check your inbox for your 15% discount code.",
                    icon: "success",
                    confirmButtonColor: "#FFA259",
                    background: "#fff",
                  });
                }
              }}
            >
              <input
                id="newsletter-email"
                name="email"
                type="email"
                required
                placeholder="Enter your email address..."
                className="flex-1 bg-white/10 border border-white/20 text-white placeholder-white/40 rounded-2xl px-5 py-3.5 text-sm focus:outline-none focus:border-[#FFA259] transition-colors backdrop-blur-sm"
              />
              <button
                type="submit"
                className="bg-[#FFA259] hover:bg-[#FF8C3A] text-white font-bold text-sm px-8 py-3.5 rounded-2xl transition-all hover:scale-105 active:scale-95 shadow-lg whitespace-nowrap"
              >
                Subscribe Now
              </button>
            </form>

            <p className="text-white/30 text-[10px] mt-4 font-light">No spam ever. Unsubscribe anytime with one click.</p>
          </div>
        </div>
      </section>

      {/* 4. FIND OUR SHACKS (Highly Interactive Branch Selector Layout) */}
      <section 
        className="banner-area section-padding bg-white text-left relative overflow-hidden" 
        id="location"
        style={{ height: "auto", minHeight: "auto" }}
      >
        {/* Floating background flower rotating slowly */}
        <img
          src="/assets/images/flower.png"
          alt="deco-flower"
          className="absolute right-10 top-10 w-24 opacity-10 animate-spin pointer-events-none"
          style={{ animationDuration: "40s" }}
        />
        <img src="/assets/images/leaf-bottom.png" alt="deco-leaf" className="absolute left-1/3 -bottom-10 w-32 opacity-20 pointer-events-none" />

        <div className="container relative z-10">
          {/* Header block */}
          <div className="text-center space-y-2 mb-50">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#FFA259] font-extrabold bg-[#FFA259]/10 px-4 py-2 rounded-full inline-block">
              Aloha Gatherings
            </span>
            <h2 className="font-playfair font-extrabold mt-15" style={{ fontSize: "40px" }}>
              Find Our Shacks
            </h2>
            <p className="text-muted text-sm font-light">Select a branch below to view details and concierge numbers.</p>
            <div className="h-1 w-16 bg-[#FFA259] mx-auto mt-10 rounded"></div>
          </div>

          <div className="row items-stretch mt-30">
            {/* Left Column: Branch selector menu */}
            <div className="col-lg-5 mb-40 mb-lg-0 flex flex-col justify-center">
              <div className="flex flex-col gap-3">
                {shacks.map((shack, idx) => {
                  const isActive = activeShack === idx;
                  return (
                    <button
                      key={shack.id}
                      onClick={() => setActiveShack(idx)}
                      className="w-full text-left p-4 px-5 rounded-2xl border transition-all duration-300 flex items-center justify-between group hover:translate-x-1 hover:shadow-md"
                      style={{
                        backgroundColor: isActive ? `${shack.color}0D` : "#ffffff",
                        borderColor: isActive ? shack.color : "rgba(0,0,0,0.06)",
                        borderLeftWidth: isActive ? "6px" : "1px",
                        borderLeftColor: isActive ? shack.color : "rgba(0,0,0,0.06)",
                        boxShadow: isActive ? "0 10px 25px rgba(0,0,0,0.03)" : "none"
                      }}
                    >
                      <div>
                        <h5 
                          className="font-bold mb-1 transition-colors duration-300"
                          style={{ 
                            fontSize: "16px",
                            color: isActive ? shack.color : "#1a1a1a"
                          }}
                        >
                          {shack.name}
                        </h5>
                        <span className="text-xs text-muted font-light">{shack.address.split(", ")[2]}</span>
                      </div>
                      <span 
                        className="h-8 w-8 rounded-full flex items-center justify-center transition-all duration-300"
                        style={{
                          backgroundColor: isActive ? shack.color : "rgba(0,0,0,0.03)",
                          color: isActive ? "#fff" : "#888"
                        }}
                      >
                        &rarr;
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
            
            {/* Right Column: Active branch detailed spotlight card */}
            <div className="col-lg-7 flex items-center">
              <div className="bg-white rounded-[32px] p-6 md:p-8 border border-gray-100 shadow-xl flex flex-col md:flex-row gap-6 items-center w-full min-h-[320px] animate-fade-in">
                {/* Branch Image Showcase */}
                <div className="w-full md:w-1/2 overflow-hidden rounded-2xl relative" style={{ height: "240px" }}>
                  <img
                    src={shacks[activeShack].image}
                    alt={shacks[activeShack].name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <span 
                    className="absolute top-3 left-3 text-[9px] font-bold text-white px-3 py-1 rounded-full uppercase tracking-wider shadow-md"
                    style={{ backgroundColor: shacks[activeShack].color }}
                  >
                    {shacks[activeShack].tag}
                  </span>
                </div>

                {/* Branch Details */}
                <div className="w-full md:w-1/2 text-left space-y-4">
                  <h3 className="font-playfair font-extrabold leading-tight text-black" style={{ fontSize: "24px" }}>
                    {shacks[activeShack].name}
                  </h3>
                  <div className="h-1 w-12 rounded" style={{ backgroundColor: shacks[activeShack].color }}></div>
                  
                  <div className="space-y-3 text-sm font-light text-muted-600">
                    <p className="flex items-start gap-2 m-0">
                      <i className="fa fa-map-marker mt-1 text-[#E15C6C] shrink-0 w-4 text-center"></i>
                      <span>{shacks[activeShack].address}</span>
                    </p>
                    <p className="flex items-center gap-2 m-0">
                      <i className="fa fa-clock-o text-[#00A186] w-4 text-center"></i>
                      <span>{shacks[activeShack].hours}</span>
                    </p>
                    <p className="flex items-center gap-2 text-xs font-semibold text-black m-0">
                      <i className="fa fa-tags text-[#FFA259] w-4 text-center"></i>
                      <span>{shacks[activeShack].feature}</span>
                    </p>
                  </div>

                  <div className="pt-2 flex flex-wrap gap-2">
                    <a
                      href={`tel:${shacks[activeShack].hotline}`}
                      className="bttn-small btn-fill text-xs"
                      style={{ 
                        background: shacks[activeShack].color,
                        boxShadow: `0 8px 15px ${shacks[activeShack].color}25`
                      }}
                    >
                      <i className="fa fa-phone"></i> Call Shack
                    </a>
                    <Link
                      to="/menu"
                      className="bttn-small text-xs bg-gray-100 hover:bg-gray-200 text-black border-none"
                    >
                      View Menu
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
