import React, { useState } from "react";

const CustomerReviews = () => {
  const [activeReview, setActiveReview] = useState(2);

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="reviews">
      {/* Subtle bg decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-32 w-72 h-72 rounded-full bg-[#FFA259]/5" />
        <div className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-[#00A186]/5" />
      </div>

      <div className="container relative z-10">
     
        <div className="relative w-full pt-20 mt-4">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-full max-w-lg mx-auto text-center z-0 pointer-events-none px-4">
            {/* Decorative Coffee Beans */}
            <div className="absolute -top-10 left-0 md:-left-8 opacity-80 hidden sm:block">
              <svg width="60" height="60" viewBox="0 0 100 100" fill="none" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round">
                <path d="M25,45 C15,35 25,15 40,25 C45,30 40,50 25,45 Z" />
                <path d="M22,33 C28,30 32,38 38,35" strokeDasharray="2 2" />
                <path d="M50,25 C42,18 52,5 62,12 C66,16 62,30 50,25 Z" />
                <path d="M48,16 C53,14 56,20 60,18" strokeDasharray="2 2" />
              </svg>
            </div>

            <span className="font-playfair italic font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-[#00A186] to-[#00C9B7]">
              Testimonials
            </span>

            {/* Main Heading */}
            <h2 className="font-sans font-extrabold text-[#1a1a1a] tracking-tight leading-tight m-0" style={{ fontSize: "clamp(28px, 4vw, 42px)" }}>
              What Clients Say<br />About Our Coffee
            </h2>
          </div>

          {/* Arc Photos Carousel Component */}
          {(() => {
            const clients = [
              {
                name: "Anika Rahman",
                photo: "https://i.ibb.co.com/v3kFpzP/person-2.jpg",
                text: "I've tried many different types of coffee over the years, but this particular brand has truly captivated my senses. From the moment I opened the bag, the aroma was unlike anything I'd experienced before!"
              },
              {
                name: "Fatima Khan",
                photo: "https://i.ibb.co.com/YkPLB5S/pexels-andrewpersonaltraining-733500.jpg",
                text: "The Lychee Rose Boba Tea is absolutely divine — floral, sweet, and perfectly balanced. I come here every weekend just for that drink alone. The vibe and ambiance is amazing too!"
              },
              {
                name: "Sarah Thompson",
                photo: "https://i.ibb.co.com/C9wCwvc/person-1.jpg",
                text: "I've tried many different types of coffee over the years, but this particular brand has truly captivated my senses. From the moment I opened the bag, the rich aroma was unlike anything I'd experienced before!"
              },
              {
                name: "James Lee",
                photo: "https://i.ibb.co.com/r3LbDdn/pexels-hannah-nelson-390257-1065084.jpg",
                text: "The Korean Bibimbap Bowl is authentic and incredibly fresh. It reminds me of eating in Seoul — every ingredient is perfectly seasoned and balanced. Absolutely the best in Dhaka!"
              },
              {
                name: "Marcus Chen",
                photo: "https://i.ibb.co.com/D7m5m7x/person-6.jpg",
                text: "Kona Cafe is my go-to spot for remote work. Great WiFi, incredible Volcanic Latte, and the Tropical Salmon Poke Bowl keeps me fueled for hours. Absolutely love this place!"
              }
            ];
            const total = clients.length;
            const prev = () => setActiveReview((p) => (p - 1 + total) % total);
            const next = () => setActiveReview((p) => (p + 1) % total);

            const arcConfigs = [
              { size: 220, translateY: 0, opacity: 1, zIndex: 10, shadow: "0 20px 40px rgba(0,0,0,0.12)" }, // Center
              { size: 140, translateY: -90, opacity: 0.90, zIndex: 8, shadow: "0 10px 25px rgba(0,0,0,0.08)" }, // Inner Sides
              { size: 90, translateY: -180, opacity: 0.70, zIndex: 6, shadow: "0 5px 15px rgba(0,0,0,0.05)" },  // Outer Edges (Starts at heading level)
            ];

            const getConfig = (idx) => {
              const dist = Math.abs(idx - activeReview);
              const d = Math.min(dist, total - dist);
              return arcConfigs[Math.min(d, arcConfigs.length - 1)];
            };

            return (
              <>
            
                <div
                  className="flex items-end justify-center mb-10 relative z-10 pointer-events-auto"
                  style={{ gap: "clamp(1.5rem, 4vw, 4.5rem)", minHeight: "300px", overflow: "visible" }}
                >
                  {clients.map((client, idx) => {
                    const cfg = getConfig(idx);
                    return (
                      <button
                        key={idx}
                        onClick={() => setActiveReview(idx)}
                        className="relative rounded-full overflow-hidden shrink-0 focus:outline-none cursor-pointer"
                        style={{
                          width: `${cfg.size}px`,
                          height: `${cfg.size}px`,
                          minWidth: `${cfg.size}px`,
                          opacity: cfg.opacity,
                          zIndex: cfg.zIndex,
                          transform: `translateY(${cfg.translateY}px)`,
                          boxShadow: cfg.shadow,
                          border: "4px solid #fff",
                          transition: "all 0.6s cubic-bezier(0.25, 1, 0.5, 1)",
                        }}
                      >
                        <img
                          src={client.photo}
                          alt={client.name}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    );
                  })}
                </div>

                {/* Active review text content */}
                <div className="text-center max-w-2xl mx-auto px-4 mt-2">
                  <h4 className="font-bold text-[#1a1a1a] text-lg tracking-wide mb-3">
                    {clients[activeReview].name}
                  </h4>
                  <p className="text-gray-400 font-normal leading-relaxed text-sm max-w-xl mx-auto">
                    {clients[activeReview].text}
                  </p>

                  {/* ← → Controls */}
                  <div className="flex justify-center items-center gap-8 mt-8">
                    <button
                      onClick={prev}
                      className="p-1 transition-transform hover:scale-125 active:scale-90 border-0 bg-transparent cursor-pointer flex items-center justify-center"
                      style={{ color: "#00A186", fontSize: "28px", fontWeight: "light", width: "40px", height: "40px" }}
                    >
                      ←
                    </button>
                    <button
                      onClick={next}
                      className="p-1 transition-transform hover:scale-125 active:scale-90 border-0 bg-transparent cursor-pointer flex items-center justify-center"
                      style={{ color: "#00A186", fontSize: "28px", fontWeight: "light", width: "40px", height: "40px" }}
                    >
                      →
                    </button>
                  </div>
                </div>
              </>
            );
          })()}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
