import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HeroSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      title: "Bursting With Flavour",
      description: "The finest ingredients from land and sea, serving them up Hawaii-style, as fresh and wholesome bowls.",
      productId: 64,
      image: "/assets/images/food.png",
      colorClass: "cl-mint"
    },
    {
      title: "A Bowl Full Of Love!",
      description: "The original inspiration for Ahi Poké came following a road trip up the California coast. Traditional forms are aku and heʻe.",
      productId: 62,
      image: "/assets/images/food-3.png",
      colorClass: "cl-pink"
    },
    {
      title: "Bibimbap - The Ultimate Comfort Food !!",
      description: "More traditional and authentic versions of Bibimbap are made with beef and raw egg yolk along with fresh seasoned vegetables.",
      productId: 61,
      image: "/assets/images/food-2.png",
      colorClass: "cl-blue"
    }
  ];

  // Auto transition slides
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero leaf gray-bg-2 flower relative flex items-center" style={{ minHeight: "650px" }}>
      {/* Background glow layers */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-[#FFA259]/5 rounded-full filter blur-[100px] pointer-events-none animate-glow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00A186]/5 rounded-full filter blur-[120px] pointer-events-none"></div>

      {slides.map((slide, index) => (
        <div
          key={index}
          className={`banner-slide w-full transition-all duration-1000 ${activeSlide === index ? "opacity-100 relative block translate-y-0" : "opacity-0 absolute inset-0 hidden translate-y-10"
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
            className={`w-3.5 h-3.5 rounded-full border-2 border-white transition-all ${activeSlide === i ? "bg-[#FFA259] scale-125 px-15" : "bg-gray-300"
              }`}
            style={{ borderRadius: "20px" }}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
