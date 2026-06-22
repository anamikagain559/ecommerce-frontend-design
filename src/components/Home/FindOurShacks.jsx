import React, { useState } from "react";
import { Link } from "react-router-dom";

const FindOurShacks = () => {
  const [activeShack, setActiveShack] = useState(0);

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

  return (
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
  );
};

export default FindOurShacks;
