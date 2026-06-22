import React from "react";
import { Link } from "react-router-dom";

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-[#FAFAFA] relative overflow-hidden" id="why-us">
      <div className="container">
        <div className="row items-center gap-y-12">

          {/* LEFT: Elevated overlapping images */}
          <div className="col-lg-6 col-md-6 flex justify-center mb-12 md:mb-0">

            <div className="relative group cursor-pointer w-full max-w-[640px]" style={{ height: "560px" }}>


              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#00A186] rounded-full mix-blend-multiply filter blur-3xl opacity-10 transition-opacity duration-500 group-hover:opacity-20" />

              <div
                className="absolute left-0 top-0 rounded-[2rem] overflow-hidden shadow-lg transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl"
                style={{ width: "320px", height: "480px" }}
              >
                <img
                  src="https://i.ibb.co.com/SKVycfL/00-holding-chefs-table.webp"
                  alt="Kona Cafe ambiance"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Front image (right, overlapping) - Width 360px করা হয়েছে এবং একেবারে ডানে সরানো হয়েছে */}
              <div
                className="absolute right-0 bottom-0 rounded-[2rem] overflow-hidden shadow-xl border-[8px] border-[#FAFAFA] transition-transform duration-500 group-hover:translate-y-2 group-hover:shadow-2xl z-10"
                style={{ width: "360px", height: "480px" }}
              >
                <img
                  src="https://i.ibb.co.com/nq1CgR1W/restaurant-decoration.jpg"
                  alt="Fresh food preparation"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating badge */}
              <div
                className="absolute bottom-6 left-2 sm:left-8 bg-white/90 backdrop-blur-md rounded-2xl px-6 py-4 shadow-xl flex items-center gap-4 z-20 border border-white/50 transition-all duration-300 hover:scale-105"
                style={{ minWidth: "200px" }}
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00A186] to-[#00C9B7] flex items-center justify-center text-white font-bold text-xl shrink-0 shadow-md shadow-[#00A186]/30">
                  ✓
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-widest text-[#00A186] font-extrabold m-0 mb-0.5">Since 2019</p>
                  <p className="text-base font-bold text-gray-900 m-0">Award Winner</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Text + Interactive checklist */}
          <div className="col-lg-6 col-md-6 lg:pl-16">
            <div className="space-y-6">

              {/* Headers */}
              <div>
                <span className="font-playfair italic font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-[#00A186] to-[#00C9B7]">
                  The Kona Cafe Experience
                </span>

                <h2
                  className="font-playfair font-extrabold text-[#1a1a1a] leading-tight mt-2 mb-3"
                  style={{ fontSize: "clamp(32px, 4vw, 44px)" }}
                >
                  Why Choose Us?
                </h2>

                <p className="text-gray-500 font-light text-base leading-relaxed max-w-md">
                  Bringing authentic Hawaiian and Korean flavors to Dhaka with fresh, daily-prepared ingredients for a wholesome experience.
                </p>
              </div>

              {/* Checklist */}
              <div className="flex flex-col gap-4 pt-2">
                {[
                  {
                    title: "100% Fresh Ingredients",
                    desc: "Daily sourced produce from local farms ensuring nutrient-rich and flavorful bowls."
                  },
                  {
                    title: "Fast & Reliable Delivery",
                    desc: "Hot, fresh meals delivered in under 45 minutes for a perfect dining experience."
                  },
                  {
                    title: "Award-Winning Recipes",
                    desc: "Multi-award-winning signature dishes celebrated for their authentic Hawaiian taste."
                  },
                  {
                    title: "Healthy & Balanced Options",
                    desc: "High-protein, vegan, and gluten-free choices crafted by our in-house nutritionist."
                  }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 group p-2 -ml-2 rounded-xl transition-all duration-300 hover:bg-white hover:shadow-sm border border-transparent hover:border-gray-100 cursor-default">
                    {/* Checkmark */}
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110 shadow-sm shadow-[#FFA259]/20 group-hover:shadow-md group-hover:shadow-[#FFA259]/40"
                      style={{ backgroundColor: "#FFA259" }}
                    >
                      <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                        <path d="M1 5L4.5 8.5L11 1" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-800 text-base mb-1 transition-colors duration-300 group-hover:text-[#00A186]">
                        {item.title}
                      </h5>
                      <p className="text-sm text-gray-500 font-light leading-relaxed m-0 group-hover:text-gray-600">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="pt-4">
                <Link
                  to="/menu"
                  className="group inline-flex items-center justify-center rounded-full px-8 py-3.5 text-white font-bold transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: "linear-gradient(135deg, #00A186 0%, #00C9B7 100%)",
                    boxShadow: "0 10px 25px -5px rgba(0, 161, 134, 0.4)"
                  }}
                >
                  Explore Our Menu
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1.5">
                    →
                  </span>
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
