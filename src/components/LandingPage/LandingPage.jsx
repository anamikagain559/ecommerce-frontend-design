import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const LandingPage = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeShack, setActiveShack] = useState(0);

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
