import React from "react";
import { Link } from "react-router-dom";
import { products } from "../mockData";

const CategoryShowcase = () => {
  return (
    <>
      {/* 3. Cove REVIVES YOU (Floating Card layout with top/bottom margin) */}
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
                  Cove Revives You
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
                  src="https://i.ibb.co.com/1qssVVw/images-2.jpg"
                  alt="Cove Refreshing Boba & Smoothie Drinks"
                  className="img-fluid relative z-10 rounded-[32px] transition-all duration-700 group-hover:scale-105"
                  style={{ maxHeight: "420px", width: "360px", objectFit: "cover", filter: "drop-shadow(0 15px 30px rgba(0,0,0,0.08))" }}
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
            {products.filter(p => [64, 63, 61, 72].includes(p.id)).map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-[24px] overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-400 hover:-translate-y-1 group"
              >
                {/* Product Image */}
                <Link to={`/product/${product.id}`} className="block relative overflow-hidden" style={{ height: "200px" }}>
                  <img
                    src={`${product.photo}`}
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
    </>
  );
};

export default CategoryShowcase;
