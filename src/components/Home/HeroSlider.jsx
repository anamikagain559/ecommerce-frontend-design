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
      colorClass: "from-[#FFA259] to-[#FF6B6B]",
      accentColor: "#FFA259"
    },
    {
      title: "A Bowl Full Of Love!",
      description: "The original inspiration for Ahi Poké came following a road trip up the California coast. Traditional forms are aku and heʻe.",
      productId: 62,
      image: "/assets/images/food-3.png",
      colorClass: "from-[#E15C6C] to-[#FF8A9A]",
      accentColor: "#E15C6C"
    },
    {
      title: "The Ultimate Comfort Food !!",
      description: "More traditional and authentic versions of Bibimbap are made with beef and raw egg yolk along with fresh seasoned vegetables.",
      productId: 61,
      image: "/assets/images/food-2.png",
      colorClass: "from-[#00A186] to-[#00C9B7]",
      accentColor: "#00A186"
    }
  ];

  // Auto transition slides
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex items-center overflow-hidden bg-gradient-to-br from-[#F8F9FA] to-[#EBEFF5]" style={{ minHeight: "750px" }}>
      {/* Dynamic Background Glow layers */}
      <div 
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full filter blur-[120px] opacity-20 pointer-events-none transition-all duration-1000 ease-in-out mix-blend-multiply"
        style={{ backgroundColor: slides[activeSlide].accentColor, transform: "translate(20%, -20%)" }}
      ></div>
      <div 
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full filter blur-[100px] opacity-20 pointer-events-none transition-all duration-1000 ease-in-out mix-blend-multiply"
        style={{ backgroundColor: slides[(activeSlide + 1) % slides.length].accentColor, transform: "translate(-20%, 20%)" }}
      ></div>
      
      {/* subtle grid overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMCwwLDAsMC4wNSkiLz48L3N2Zz4=')] opacity-50"></div>

      {slides.map((slide, index) => (
        <div
          key={index}
          className={`w-full absolute inset-0 flex items-center transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            activeSlide === index 
              ? "opacity-100 z-10 translate-y-0 scale-100" 
              : "opacity-0 z-0 translate-y-8 scale-[0.98] pointer-events-none"
          }`}
        >
          <div className="container relative z-10 mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Column: text content */}
              <div className="order-2 lg:order-1 text-center lg:text-left mt-8 lg:mt-0">
                <div className="space-y-6 max-w-xl mx-auto lg:mx-0">
                  <div className="inline-flex items-center gap-2 px-4 py-2 border border-white/40 rounded-full bg-white/60 backdrop-blur-md shadow-sm mb-4">
                    <span className="h-3 w-3 rounded-full animate-pulse" style={{ backgroundColor: slide.accentColor }}></span>
                    <span className="text-xs uppercase tracking-[0.2em] font-bold text-gray-700">
                      Signature Edition
                    </span>
                  </div>

                  <h1 className="font-playfair font-extrabold leading-tight tracking-wide text-black" style={{ fontSize: "52px" }}>
                    <span className={`text-transparent bg-clip-text bg-gradient-to-r ${slide.colorClass}`}>
                      {slide.title.split(' ')[0]}
                    </span>
                    <br />
                    {slide.title.substring(slide.title.indexOf(' ') + 1)}
                  </h1>
                  
                  <p className="mt-15 mb-30 text-[#666] font-light leading-relaxed" style={{ fontSize: "16px", maxWidth: "480px" }}>
                    {slide.description}
                  </p>

                  <div className="pt-6 flex items-center justify-center gap-4">
                    <Link 
                      to={`/product/${slide.productId}`} 
                      className="px-8 py-4 rounded-full text-white font-bold tracking-wider uppercase text-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                      style={{ background: `linear-gradient(135deg, ${slide.accentColor} 0%, #333 200%)` }}
                    >
                      Taste Now &nbsp; &rarr;
                    </Link>
                    <Link
                      to="/menu"
                      className="px-8 py-4 rounded-full text-gray-700 font-bold tracking-wider uppercase text-sm border-2 border-gray-300 hover:border-gray-800 hover:text-gray-900 transition-all duration-300"
                    >
                      View Menu
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right Column: floating food plate */}
              <div className="order-1 lg:order-2 flex justify-center relative">
                <div className="relative group w-full max-w-lg">
                  {/* Decorative backdrop circle */}
                  <div className="absolute inset-0 rounded-full blur-[80px] opacity-40 mix-blend-multiply" style={{ backgroundColor: slide.accentColor }}></div>
                  <div className="absolute inset-8 rounded-full border-2 border-dashed border-gray-300/50 animate-[spin_20s_linear_infinite]"></div>
                  
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="relative z-10 w-full max-w-[420px] aspect-square object-cover rounded-full drop-shadow-2xl animate-float mx-auto border-4 border-white/20 shadow-2xl"
                    style={{ filter: "drop-shadow(0 30px 40px rgba(0,0,0,0.15))" }}
                  />
                  
                  {/* Floating price or badge */}
                  <div className="absolute bottom-10 right-10 z-20 bg-white/90 backdrop-blur rounded-2xl p-4 shadow-xl transform rotate-3 animate-[bounce_4s_ease-in-out_infinite]">
                    <div className="text-sm font-bold text-gray-500 uppercase tracking-wider">Starting at</div>
                    <div className="text-2xl font-extrabold" style={{ color: slide.accentColor }}>৳499</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      ))}

      {/* Slider Navigation Dots */}
      <div className="absolute bottom-12 left-0 right-0 flex justify-center gap-4 z-20">
        {slides.map((slide, i) => (
          <button
            key={i}
            onClick={() => setActiveSlide(i)}
            className={`transition-all duration-500 rounded-full h-3 ${
              activeSlide === i 
                ? "w-12" 
                : "w-3 bg-gray-300 hover:bg-gray-400"
            }`}
            style={{ 
              backgroundColor: activeSlide === i ? slide.accentColor : undefined,
              boxShadow: activeSlide === i ? `0 0 10px ${slide.accentColor}80` : 'none'
            }}
            aria-label={`Go to slide ${i + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
